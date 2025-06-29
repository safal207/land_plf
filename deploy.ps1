# =============================
# 🚀 Ultimate DevOps Deploy Script (All-in-One) - FIXED
# =============================

# === CONFIG: Мудрость шести мушкетёров ===
$voices = @{
  "Kelsey"  = "Убедись, что всё работает локально. CLI-first."
  "Gene"    = "Есть ли ценность для пользователя? Устраняет ли боль?"
  "Charity" = "Наблюдаешь ли ты, что происходит после деплоя?"
  "Brendan" = "Архитектура расширяемая? Или залипание?"
  "Snowden" = "Безопасность. Проверен ли .env, отключён ли debug?"
  "Assange" = "Честно ли это? Расскажет ли код правду?"
}

Write-Host "🧠 Запускаем предварительный чеклист по мнению шести мушкетёров..."
foreach ($key in $voices.Keys) {
  Write-Host "❓ $key спрашивает: $($voices[$key])"
}
Write-Host "✅ Если согласен — продолжаем."

# === ENV SETUP ===
$ErrorActionPreference = "Stop"
$env:GH_DEPLOY_BRANCH = "gh-pages"
$env:DEPLOY_DIR = "dist"
$env:BUILD_CMD = "npm run build"
$env:PREVIEW_URL = "https://safal207.github.io/land_plf"

# === LOGGING ===
Start-Transcript -Path "./deploy-log-$(Get-Date -Format 'yyyyMMdd-HHmmss').txt" -Append

Write-Host "📦 [1/6] Проверка статуса Git..."
git status

# === SAFE MODE DRY-RUN ===
$dryRun = Read-Host "⚠️ Dry-run? (y/n)"
if ($dryRun -eq "y") {
    Write-Host "🧪 Запуск в режиме dry-run завершён. Выход."
    Stop-Transcript
    exit
}

Write-Host "🧹 [2/6] Чистим старые билды..."
Remove-Item -Recurse -Force "$env:DEPLOY_DIR" -ErrorAction SilentlyContinue

Write-Host "🔨 [3/6] Сборка проекта..."
Invoke-Expression $env:BUILD_CMD

# Проверяем, создалась ли папка dist
if (-not (Test-Path $env:DEPLOY_DIR)) {
    Write-Error "❌ Папка $env:DEPLOY_DIR не была создана после сборки!"
    Stop-Transcript
    exit 1
}

Write-Host "📁 Содержимое папки $env:DEPLOY_DIR :"
Get-ChildItem $env:DEPLOY_DIR | Format-Table Name, Length

Write-Host "📄 [4/6] Копируем index.html → 404.html..."
if (Test-Path "$env:DEPLOY_DIR/index.html") {
    Copy-Item "$env:DEPLOY_DIR/index.html" "$env:DEPLOY_DIR/404.html" -Force
    Write-Host "✅ 404.html создан"
} else {
    Write-Warning "⚠️ index.html не найден в $env:DEPLOY_DIR"
}

Write-Host "💾 [5/6] Сохраняем текущую ветку и стэшим изменения..."
$currentBranch = git branch --show-current
git add .
git stash push -m "Pre-deploy stash"

Write-Host "🌿 [6/6] Создаём ветку $env:GH_DEPLOY_BRANCH и коммитим..."

# Удаляем старую ветку gh-pages если есть
git branch -D $env:GH_DEPLOY_BRANCH -ErrorAction SilentlyContinue
git push origin --delete $env:GH_DEPLOY_BRANCH -ErrorAction SilentlyContinue

# Создаём новую orphan ветку
git checkout --orphan $env:GH_DEPLOY_BRANCH

# Удаляем все файлы из индекса
git rm -rf . -ErrorAction SilentlyContinue

# Копируем файлы из dist в корень
Copy-Item "$env:DEPLOY_DIR/*" . -Recurse -Force

# Добавляем и коммитим
git add .
git commit -m "🚀 Deploy from all-in-one script $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

Write-Host "☁️ Пушим в GitHub Pages..."
git push origin $env:GH_DEPLOY_BRANCH --force

Write-Host "🔄 Возвращаемся на исходную ветку..."
git checkout $currentBranch
git stash pop -ErrorAction SilentlyContinue

# === [6/6] Вход в Ноосферу ===
Write-Host "🌐 Открываем портал LIMINAL во внешнем мире..."
Start-Sleep -Milliseconds 700

$portalArt = @'
     ✧･ﾟ: *✧･ﾟ:*        *:･ﾟ✧*:･ﾟ✧
        🔮   Портал открыт в Ноосферу...
     ✧･ﾟ: *✧･ﾟ:*        *:･ﾟ✧*:･ﾟ✧
'@

Write-Host $portalArt -ForegroundColor Cyan

Start-Sleep -Seconds 2
Start-Process $env:PREVIEW_URL
Write-Host "`n✅ Деплой завершён. Проверь: $env:PREVIEW_URL"
Write-Host "Перед великим умом я склоняю голову, перед великим сердцем — преклоняю колени. — В. Гюго"
Stop-Transcript