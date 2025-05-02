import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react(),
    mkcert() // Enables HTTPS with a valid certificate
  ],
  server: {
    port: 3000,
    allowedHosts: ["1d83d49991eb.ngrok.app"],
    https: true, // Enable HTTPS
  },
  preview: {
    port: 3000
  },
  build: {
    outDir: 'dist',
  }
});