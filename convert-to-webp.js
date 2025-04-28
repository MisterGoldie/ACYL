import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to search for PNG files
const rootDir = path.join(__dirname, 'public');

// Function to find all PNG files recursively
function findPngFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPngFiles(filePath, fileList);
    } else if (file.toLowerCase().endsWith('.png')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to convert PNG to WebP
async function convertToWebP(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  
  try {
    await sharp(pngPath)
      .webp({ quality: 80 }) // Adjust quality as needed (0-100)
      .toFile(webpPath);
    
    console.log(`✅ Converted: ${path.relative(rootDir, pngPath)} → ${path.relative(rootDir, webpPath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${path.relative(rootDir, pngPath)}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🔍 Searching for PNG files...');
  const pngFiles = findPngFiles(rootDir);
  
  console.log(`🖼️ Found ${pngFiles.length} PNG files to convert`);
  
  let successCount = 0;
  let errorCount = 0;
  
  // Process files in parallel with a concurrency limit
  const concurrencyLimit = 5; // Adjust based on your system
  
  for (let i = 0; i < pngFiles.length; i += concurrencyLimit) {
    const batch = pngFiles.slice(i, i + concurrencyLimit);
    const results = await Promise.all(batch.map(file => convertToWebP(file)));
    
    successCount += results.filter(Boolean).length;
    errorCount += results.filter(result => !result).length;
  }
  
  console.log('\n📊 Conversion Summary:');
  console.log(`✅ Successfully converted: ${successCount}`);
  console.log(`❌ Failed conversions: ${errorCount}`);
  console.log('🎉 Done!');
}

// Run the script
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
