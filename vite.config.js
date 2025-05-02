import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: ["1d83d49991eb.ngrok.app"],
    // Configure server to handle SPA routing
    historyApiFallback: true,
  },
  build: {
    // Generate a _redirects file for Netlify or similar hosting
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});