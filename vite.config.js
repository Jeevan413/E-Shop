import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow external access
    port: 5173,       // Your server port
    strictPort: true, // Ensures the port doesn't change
    allowedHosts: ['.ngrok-free.app'], // Allow all Ngrok URLs
  }
})

