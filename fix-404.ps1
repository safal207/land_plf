# =============================
# 🔧 Фикс 404 ошибки на GitHub Pages
# =============================

Write-Host "🔧 Исправляем 404 ошибку..." -ForegroundColor Yellow

# === 1. Проверяем текущий vite.config ===
Write-Host "`n📋 Текущий vite.config.ts:"
Get-Content "vite.config.ts"

# === 2. Создаем правильный vite.config ===
Write-Host "`n🔧 Создаем исправленный vite.config.ts..."

$newViteConfig = @'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: './', // Изменили с '/land_plf/' на './'
  plugins: [react(), svgr()],
  server: {
    port: 5174,
    host: true
  }
})
'@

$newViteConfig | Out-File "vite.config.ts" -Encoding UTF8
Write-Host "✅ vite.config.ts обновлен"

# === 3. Пересобираем ===
Write-Host "`n🔨 Пересобираем с новой конфигурацией..."
Remove-Item -Recurse -Force "dist" -ErrorAction SilentlyContinue
npm run build

if (-not (Test-Path "dist")) {
    Write-Error "❌ Сборка не удалась"
    exit 1
}

# === 4. Создаем .nojekyll файл ===
Write-Host "`n📝 Создаем .nojekyll файл..."
"" | Out-File "dist/.nojekyll" -Encoding UTF8

# === 5. Создаем 404.html ===
Copy-Item "dist/index.html" "dist/404.html" -Force
Write-Host "✅ 404.html создан"

# === 6. Показываем что получилось ===
Write-Host "`n📁 Содержимое dist:"
Get-ChildItem dist | Format-Table Name, Length

# === 7. Деплоим ===
Write-Host "`n🚀 Деплоим исправленную версию..."
Set-Location dist

git init
git add .
git commit -m "Fix 404 - relative paths $(Get-Date -Format 'dd.MM.yyyy HH:mm')"
git branch -M gh-pages
git remote add origin https://github.com/safal207/land_plf.git
git push -f origin gh-pages

Set-Location ..

Write-Host "`n✅ ДЕПЛОЙ ЗАВЕРШЕН!" -ForegroundColor Green
Write-Host "🌐 Проверь через 2-3 минуты: https://safal207.github.io/land_plf" -ForegroundColor Cyan
Write-Host "🔧 Исправление: изменили base на './' для относительных путей" -ForegroundColor Yellow

# === Альтернативный способ проверки ===
Write-Host "`n🧪 АЛЬТЕРНАТИВА: Если все еще 404, попробуй:"
Write-Host "1. Иди в Settings > Pages на GitHub"
Write-Host "2. Измени Source на 'GitHub Actions'"
Write-Host "3. Или убедись что Branch = gh-pages и folder = / (root)"