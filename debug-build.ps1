# =============================
# 🚀 Working Deploy Script
# =============================

$ErrorActionPreference = "Stop"

Write-Host "🚀 Запускаем деплой LIMINAL..." -ForegroundColor Cyan

# === Сохраняем текущую ветку ===
$currentBranch = git branch --show-current
Write-Host "📍 Текущая ветка: $currentBranch"

# === Сборка ===
Write-Host "🔨 Собираем проект..."
npm run build

# Проверяем что dist создался
if (-not (Test-Path "dist")) {
    Write-Error "❌ Папка dist не создана!"
    exit 1
}

Write-Host "✅ Сборка успешна. Файлы в dist:"
Get-ChildItem dist

# === Создаем 404.html ===
Copy-Item "dist/index.html" "dist/404.html" -Force
Write-Host "✅ 404.html создан"

# === Переходим в папку dist ===
Set-Location dist

# === Инициализируем git в dist ===
git init
git add .
git commit -m "🚀 Deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# === Пушим в gh-pages ===
git branch -M gh-pages
git remote add origin https://github.com/safal207/land_plf.git
git push -f origin gh-pages

# === Возвращаемся назад ===
Set-Location ..
Write-Host "🔄 Вернулись в корень проекта"

# === Открываем сайт ===
$url = "https://safal207.github.io/land_plf"
Start-Process $url

Write-Host "✅ Деплой завершен!" -ForegroundColor Green
Write-Host "🌐 Сайт: $url" -ForegroundColor Yellow
Write-Host "⏱️ Подожди 1-2 минуты для обновления GitHub Pages"

# === Портал в Ноосферу ===
$portalArt = @'
     ✧･ﾟ: *✧･ﾟ:*        *:･ﾟ✧*:･ﾟ✧
        🔮   Портал LIMINAL открыт...
     ✧･ﾟ: *✧･ﾟ:*        *:･ﾟ✧*:･ﾟ✧
'@

Write-Host $portalArt -ForegroundColor Magenta