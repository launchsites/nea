import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '08e6ff26-3d71-4a72-8a79-065419e5c7e9-00-m2unl0db5cgq.janeway.replit.dev'
    ],
  },
})