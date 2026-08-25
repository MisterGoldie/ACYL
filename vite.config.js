import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    cors: true,
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
