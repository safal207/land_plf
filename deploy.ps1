# =============================
# 🚀 Ultimate DevOps Deploy Script (All-in-One)
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

Write-Host "📦 [1/5] Проверка статуса Git..."
git status

# === SAFE MODE DRY-RUN ===
$dryRun = Read-Host "⚠️ Dry-run? (y/n)"
if ($dryRun -eq "y") {
    Write-Host "🧪 Запуск в режиме dry-run завершён. Выход."
    Stop-Transcript
    exit
}

Write-Host "🧹 [2/5] Чистим старые билды..."
Remove-Item -Recurse -Force "$env:DEPLOY_DIR" -ErrorAction SilentlyContinue

Write-Host "🔨 [3/5] Сборка проекта..."
Invoke-Expression $env:BUILD_CMD

Write-Host "📄 Копируем index.html → 404.html..."
Copy-Item "$env:DEPLOY_DIR/index.html" "$env:DEPLOY_DIR/404.html" -Force

Write-Host "🌿 [4/5] Создаём ветку $env:GH_DEPLOY_BRANCH и коммитим..."
git checkout --orphan $env:GH_DEPLOY_BRANCH
git --work-tree $env:DEPLOY_DIR add --all
git --work-tree $env:DEPLOY_DIR commit -m "🚀 Deploy from all-in-one script"

Write-Host "☁️ [5/5] Пушим в GitHub Pages..."
git push origin HEAD:$env:GH_DEPLOY_BRANCH --force

Start-Sleep -Seconds 2
Start-Process $env:PREVIEW_URL
Write-Host "`n✅ Деплой завершён. Проверь: $env:PREVIEW_URL"
Write-Host "Перед великим умом я склоняю голову, перед великим сердцем — преклоняю колени. — В. Гюго"
Stop-Transcript
# === [5/5] Вход в Ноосферу ===
Write-Host ""
Write-Host "🌐 Открываем портал LIMINAL во внешнем мире..."
Start-Sleep -Milliseconds 700

$portalArt = @'
     ✧･ﾟ: *✧･ﾟ:*        *:･ﾟ✧*:･ﾟ✧
        🔮   Портал открыт в Ноосферу...
     ✧･ﾟ: *✧･ﾟ:*        *:･ﾟ✧*:･ﾟ✧
'@

Write-Host $portalArt -ForegroundColor Cyan

Start-Sleep -Seconds 1
Start-Process "https://safal207.github.io/land_plf/"
