import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/land_plf/',
  build: {
    rollupOptions: {
      input: './src/main.tsx'  // Явно указываем React версию как точку входа
    }
  },
  server: {
    port: 5174,
    host: true
  }
})