import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: '0.0.0.0', // Ensure preview server listens on all interfaces
    port: Number(process.env.PORT) || 5173, // Use PORT from env or default
    allowedHosts: [
      'pflegematch.lipahub.de', // Add your deployment host here
    ],
  },
});
