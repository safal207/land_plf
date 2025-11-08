# =============================
# ⚡ Быстрый деплой LIMINAL (5 секунд)
# =============================

Write-Host "⚡ Быстрый деплой..." -ForegroundColor Cyan

# Сборка
npm run build

# Файлы
copy dist\index.html dist\404.html

# Git magic
cd dist
git init | Out-Null
git add . | Out-Null
git commit -m "Deploy $(Get-Date -Format 'HH:mm')" | Out-Null
git branch -M gh-pages | Out-Null
git remote add origin https://github.com/safal207/land_plf.git 2>$null
git push -f origin gh-pages | Out-Null
cd ..

Write-Host "✅ Готово! https://safal207.github.io/land_plf" -ForegroundColor Green
Start-Process "https://safal207.github.io/land_plf"