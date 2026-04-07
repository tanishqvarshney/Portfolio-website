import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio-website/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'three': path.resolve('./node_modules/three')
    }
  }
})
