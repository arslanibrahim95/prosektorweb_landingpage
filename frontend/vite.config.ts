import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 5173,
      host: '0.0.0.0',
      proxy: {
        '/api': 'http://localhost:3000'
      }
    },
    plugins: [react()],
    // 🛡️ Sentinel: Removed Vite 'define' block that exposed GEMINI_API_KEY to prevent leaking secrets into the client bundle
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
      cssMinify: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 600,
    },
  };
});
