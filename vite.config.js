import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  server: { host: '0.0.0.0', port: 5173 },
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        about: resolve(rootDir, 'about.html'),
        products: resolve(rootDir, 'products.html'),
        productRange: resolve(rootDir, 'product-range.html'),
        calculator: resolve(rootDir, 'calculator.html'),
        contact: resolve(rootDir, 'contact.html')
      }
    }
  }
})
