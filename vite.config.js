import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/K_Christensen_Portfolio/', // keep this as is
  build: {
    outDir: 'dist', // output directory
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]', // Ensures proper asset naming
        chunkFileNames: 'assets/[name]-[hash].js', // Handles chunked JS files
        entryFileNames: 'assets/[name]-[hash].js', // Entry JS file naming
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Optional alias for cleaner imports
    },
  },
})
