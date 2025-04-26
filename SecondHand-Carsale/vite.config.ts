import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // <-- this allows connections from anywhere (0.0.0.0)
    port: 5173,
    strictPort: true,
    allowedHosts: true
  }
})
