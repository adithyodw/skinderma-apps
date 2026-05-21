import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2019',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('visuals.jsx')) return 'visuals';
          if (id.includes('/screens/')) return 'screens';
          if (id.includes('ios-frame')) return 'ios-frame';
        },
      },
    },
  },
});
