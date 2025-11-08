// filepath: c:\Users\safal\OneDrive\Documente\GitHub\land_plf\vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
//
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Для GitHub Pages используем /land_plf/, для локальной разработки - /
  const base = env.VITE_BASE_URL || (mode === 'production' ? '/land_plf/' : '/')
  return {
    base,
    plugins: [react(), svgr()],
    server: {
      port: 5174,
      host: true,
      historyApiFallback: true
    }
  }
})