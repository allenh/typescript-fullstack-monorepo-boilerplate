import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 8000,
  },
  plugins: [
    react(),
  ],
});
