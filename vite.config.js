import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Get the current directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Check if certificates exist
const certPath = path.join(__dirname, 'cert.crt');
const keyPath = path.join(__dirname, 'cert.key');
const certsExist = fs.existsSync(certPath) && fs.existsSync(keyPath);

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    cors: true,
    origin: 'https://618a916d489d.ngrok.app',
    proxy: {
      '/.websocket': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  },
  preview: {
    port: 3000
  },
  build: {
    outDir: 'dist',
  }
});