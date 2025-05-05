import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// Check if HTTPS is disabled via environment variable
const useHttps = process.env.DISABLE_HTTPS !== 'true';

export default defineConfig({
  plugins: [
    react(),
    // Only use mkcert when HTTPS is enabled
    useHttps ? mkcert() : null
  ].filter(Boolean),
  server: {
    port: 3000,
    allowedHosts: ["1d83d49991eb.ngrok.app"],
    https: useHttps, // Enable HTTPS conditionally
  },
  preview: {
    port: 3000
  },
  build: {
    outDir: 'dist',
  }
});