import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: 'dist-ssr',
    rollupOptions: {
      input: './src/entry-server.tsx',
      output: {
        format: 'es',
        entryFileNames: '[name].js',
      },
      external: ['react', 'react-dom', 'react-router-dom', 'react-router', 'react/jsx-runtime'],
    },
  },
});
