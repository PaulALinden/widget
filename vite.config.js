import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': {}  // ← Lägg till denna
  },
  build: {
    lib: {
      entry: './src/widget.jsx',
      name: 'OpticalWidget',
      fileName: 'optical-widget',
      
    },
    rollupOptions: {
      output: {
        assetFileNames: 'optical-widget.[ext]'
      }
    }
  },
  preview: {
    port: 8080
  }
});