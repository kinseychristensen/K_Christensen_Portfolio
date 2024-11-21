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
    outDir: 'dist', // make sure the build output is directed to the 'dist' folder
  },
  resolve: {
    // other resolve options if necessary
  }
})
