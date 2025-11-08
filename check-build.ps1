# =============================
# 🔍 Проверка статуса GitHub Pages
# =============================

Write-Host "🔍 Проверяем статус деплоя GitHub Pages..." -ForegroundColor Yellow

# === 1. Проверяем что файлы залиты ===
Write-Host "`n📁 Проверяем ветку gh-pages..."
git ls-remote --heads origin | Select-String "gh-pages"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Ветка gh-pages существует" -ForegroundColor Green
} else {
    Write-Host "❌ Ветка gh-pages не найдена" -ForegroundColor Red
}

# === 2. Показываем последний коммит ===
Write-Host "`n📝 Последний коммит в gh-pages:"
git log --oneline -1 gh-pages 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ Не удалось получить информацию о коммитах" -ForegroundColor Yellow
}

# === 3. Проверяем файлы в gh-pages ===
Write-Host "`n📋 Файлы в ветке gh-pages:"
git ls-tree gh-pages 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ Не удалось получить список файлов" -ForegroundColor Yellow
}

# === 4. Проверяем размер файлов ===
Write-Host "`n📊 Размеры файлов:"
git cat-file -s gh-pages:index.html 2>$null
if ($LASTEXITCODE -eq 0) {
    $indexSize = git cat-file -s gh-pages:index.html
    Write-Host "📄 index.html: $indexSize байт" -ForegroundColor Green
} else {
    Write-Host "❌ index.html не найден в gh-pages" -ForegroundColor Red
}

# === 5. Проверяем URL ===
Write-Host "`n🌐 Проверяем доступность сайта..."
$url = "https://safal207.github.io/land_plf"
Write-Host "🔗 URL: $url"

try {
    $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 10 -ErrorAction Stop
    Write-Host "✅ Сайт отвечает! Код: $($response.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "❌ Сайт недоступен: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "⏳ Это нормально - GitHub Pages может обновляться до 10 минут" -ForegroundColor Yellow
}

# === 6. Проверяем время последнего пуша ===
Write-Host "`n⏰ Время последнего деплоя:"
$lastCommitTime = git log -1 --format="%ci" gh-pages 2>$null
if ($lastCommitTime) {
    Write-Host "📅 $lastCommitTime"
    $commitDate = [DateTime]::Parse($lastCommitTime)
    $minutesAgo = [Math]::Round(((Get-Date) - $commitDate).TotalMinutes, 1)
    Write-Host "⏱️ $minutesAgo минут назад"
    
    if ($minutesAgo -lt 10) {
        Write-Host "⏳ Подожди еще немного - GitHub Pages обновляется" -ForegroundColor Yellow
    } else {
        Write-Host "⚠️ Прошло больше 10 минут - возможна проблема" -ForegroundColor Yellow
    }
}

# === 7. Рекомендации ===
Write-Host "`n💡 РЕКОМЕНДАЦИИ:" -ForegroundColor Cyan
Write-Host "1. Подожди 5-10 минут после деплоя"
Write-Host "2. Попробуй открыть в инкогнито/приватном режиме"
Write-Host "3. Очисти кеш браузера (Ctrl+F5)"
Write-Host "4. Проверь Settings > Pages на GitHub"

# === 8. Альтернативная проверка ===
Write-Host "`n🔧 ЕСЛИ ВСЕ ЕЩЕ НЕ РАБОТАЕТ:"
Write-Host "1. Проверь: https://github.com/safal207/land_plf/settings/pages"
Write-Host "2. Убедись что GitHub Actions не включены"
Write-Host "3. Попробуй переключить Source на GitHub Actions и обратно"

Write-Host "`n🎯 Прямая ссылка на настройки:"
Write-Host "https://github.com/safal207/land_plf/settings/pages" -ForegroundColor Cyan

# === 9. Открываем браузер ===
Write-Host "`n🌐 Открываем сайт в браузере..."
Start-Process $url

Write-Host "`n✅ Диагностика завершена" -ForegroundColor Green