import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Prevent Vite from using eval() in production builds
    minify: 'terser',
    terserOptions: {
      compress: {
        // Disable eval
        evaluate: false
      }
    },
    rollupOptions: {
      output: {
        // Ensure no dynamic imports that might use eval
        manualChunks: undefined
      }
    }
  },
  preview: {
    host: '0.0.0.0', // Ensure preview server listens on all interfaces
    port: Number(process.env.PORT) || 5173, // Use PORT from env or default
    allowedHosts: [
      'pflegematch.lipahub.de', // Add your deployment host
    ],
  },
});
