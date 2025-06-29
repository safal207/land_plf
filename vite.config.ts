import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


export default defineConfig({
  base: '/land_plf/',
  plugins: [react(), svgr()],
  server: {
    port: 5174,
    host: true
  }
})
