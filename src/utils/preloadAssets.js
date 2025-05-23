/**
 * Utility for preloading images and videos
 */

// Import the auto-generated asset list
import assetList from './assetList';

// Preload an image by creating a new Image object and setting its src
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(`Failed to load image: ${src}`);
    img.src = src;
  });
};

// Preload a GIF (same as image but tracked separately for logging)
const preloadGif = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(`Failed to load GIF: ${src}`);
    img.src = src;
  });
};

// Preload a video by creating a video element and loading its metadata
const preloadVideo = (src) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => resolve(src);
    video.onerror = () => reject(`Failed to load video: ${src}`);
    video.src = src;
  });
};

// Helper function to preload assets in batches to avoid overwhelming the browser
const preloadInBatches = async (assets, preloadFn, batchSize = 10, batchDelay = 100) => {
  const batches = [];
  for (let i = 0; i < assets.length; i += batchSize) {
    batches.push(assets.slice(i, i + batchSize));
  }
  
  let loadedCount = 0;
  const totalCount = assets.length;
  
  for (const batch of batches) {
    const promises = batch.map(src => preloadFn(src));
    const results = await Promise.allSettled(promises);
    
    // Count successful loads
    loadedCount += results.filter(r => r.status === 'fulfilled').length;
    
    // Small delay between batches to avoid overwhelming the browser
    if (batchDelay > 0 && batches.indexOf(batch) < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, batchDelay));
    }
  }
  
  return { loadedCount, totalCount };
};

// Preload iframe widgets by creating hidden iframes
const preloadWidget = (src) => {
  return new Promise((resolve, reject) => {
    try {
      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.style.opacity = '0.01';
      iframe.style.pointerEvents = 'none';
      iframe.style.zIndex = '-1';
      iframe.src = src;
      
      // Set up load handler
      iframe.onload = () => {
        // Remove the iframe after it loads to clean up
        setTimeout(() => {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 1000);
        resolve(src);
      };
      
      iframe.onerror = () => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
        reject(`Failed to load widget: ${src}`);
      };
      
      // Add to DOM temporarily
      document.body.appendChild(iframe);
    } catch (err) {
      reject(`Error preloading widget: ${err.message}`);
    }
  });
};

// Main function to preload all assets
const preloadAllAssets = async () => {
  console.log('Starting asset preloading...');
  
  try {
    // Preload images first (they're smaller and faster)
    console.log(`Preloading ${assetList.images.length} images...`);
    const imageResults = await preloadInBatches(assetList.images, preloadImage, 15);
    console.log(`Images preloaded: ${imageResults.loadedCount}/${imageResults.totalCount}`);
    
    // Then preload GIFs
    if (assetList.gifs && assetList.gifs.length > 0) {
      console.log(`Preloading ${assetList.gifs.length} GIFs...`);
      const gifResults = await preloadInBatches(assetList.gifs, preloadGif, 5);
      console.log(`GIFs preloaded: ${gifResults.loadedCount}/${gifResults.totalCount}`);
    }
    
    // Then preload videos (these are larger and take longer)
    console.log(`Preloading ${assetList.videos.length} videos...`);
    const videoResults = await preloadInBatches(assetList.videos, preloadVideo, 3, 300);
    console.log(`Videos preloaded: ${videoResults.loadedCount}/${videoResults.totalCount}`);
    
    // Preload widgets (Mixcloud and Spotify)
    console.log('Preloading widgets...');
    const widgetUrls = [
      'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FACYLstudio%2Fplaylists%2Facyl-radio%2F',
      'https://open.spotify.com/embed/album/5wHRZCFMhWTk399TLXkdBi?utm_source=generator'
    ];
    
    try {
      const widgetPromises = widgetUrls.map(url => preloadWidget(url));
      await Promise.allSettled(widgetPromises);
      console.log('Widgets preloaded successfully');
    } catch (err) {
      console.warn('Widget preloading had some failures:', err);
    }
    
    console.log('Asset preloading complete!');
    return true;
  } catch (error) {
    console.warn('Asset preloading had some failures:', error);
    return false;
  }
};

export { preloadAllAssets, preloadImage, preloadVideo, preloadGif, preloadInBatches };
