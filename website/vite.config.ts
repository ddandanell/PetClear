import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        // Split the rarely-changing framework into its own long-cached chunk,
        // shrinking the main app bundle and improving repeat-visit caching.
        manualChunks(id: string) {
          if (id.includes('/node_modules/react') || id.includes('/node_modules/scheduler')) {
            return 'react-vendor'
          }
          return undefined
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true
  }
})
