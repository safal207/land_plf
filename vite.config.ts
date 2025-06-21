import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Укажи имя репозитория после слэша
export default defineConfig({
  base: '/land_plf/',
  plugins: [react()],
})
