import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port:80,
   
  },
  proxy: {
    '/api': {
      target: 'http://13.51.38.112',
      changeOrigin: true,
      secure: false,
    },
  },
});
