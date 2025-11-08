📚 LIMINAL Frontend Structure (EN)

📂 src/
Main source code directory:

App.tsx — main app router (React Router).

main.tsx — entry point, mounts React to the DOM.

pages/

Home.tsx — CTA landing page with email form and onboarding.

Dashboard.tsx — dashboard for analyzing moments and insights (in development).

PrivacyPolicy.tsx, TermsOfService.tsx, Documentation.tsx, Support.tsx, SystemStatus.tsx — info and support pages.

components/

Layout.tsx — common wrapper for all pages (header/footer).

MemoryTimeline.tsx — displays moment history.

InsightLog.tsx — displays insights.

memory/

moment.ts, transition.ts, memoryStore.ts — stores moments, transitions, and memory logic.

styles/

styles.css — global and custom styles.

⚙️ Key project files
vite.config.ts — Vite build config.

index.html — HTML template for React app.

package.json — npm scripts and dependencies.

tsconfig.json* — TypeScript configs.

deploy.ps1, fix-404.ps1, check-build.ps1, quick.ps1 — PowerShell scripts for deploy and diagnostics.

🚦 Routing (App.tsx)
/home → Home page (CTA).

/dashboard → Dashboard (analytics, growth).

/privacy, /terms, /docs, /support, /status → auxiliary pages.

🧠 Moments logic
In Home.tsx, when the form is submitted, a Moment object is created and saved via recordMoment(moment) to memory (memoryStore.ts).

Dashboard will visualize and analyze these moments for user growth.

🌟 Why this structure?
Flexibility — easy to add new pages or components.

Scalability — business logic (memory) is separated from UI.

Quick start — clear structure without complex dependencies.

---



📚 LIMINAL Frontend Structure
📂 src/
Главная директория исходного кода:

App.tsx — главный роутер приложения (React Router).

main.tsx — точка входа, монтирует React в DOM.

pages/

Home.tsx — CTA-лендинг с формой email и началом пути.

Dashboard.tsx — панель для анализа моментов и инсайтов (в разработке).

PrivacyPolicy.tsx, TermsOfService.tsx, Documentation.tsx, Support.tsx, SystemStatus.tsx — страницы информации и поддержки.

components/

Layout.tsx — общая обёртка для всех страниц (хедер/футер).

MemoryTimeline.tsx — вывод истории моментов.

InsightLog.tsx — вывод инсайтов.

memory/

moment.ts, transition.ts, memoryStore.ts — хранение моментов, переходов и логики живой памяти.

styles/

styles.css — глобальные и кастомные стили.

⚙️ Важные файлы проекта
vite.config.ts — настройки сборщика Vite.

index.html — шаблон HTML для React-приложения.

package.json — npm-скрипты и зависимости.

tsconfig.json* — конфигурации TypeScript.

deploy.ps1, fix-404.ps1, check-build.ps1, quick.ps1 — PowerShell-скрипты для деплоя и диагностики.

🚦 Роутинг (App.tsx)
/home → Home-страница (CTA).

/dashboard → Dashboard (аналитика, развитие).

/privacy, /terms, /docs, /support, /status → вспомогательные страницы.

🧠 Логика моментов
В Home.tsx при отправке формы создается объект типа Moment, записывается через recordMoment(moment) в память (memoryStore.ts).

В Dashboard планируется визуализация и аналитика этих моментов для развития пользователя.

🌟 Почему так?
Гибкость — легко добавлять новые страницы или компоненты.

Масштабируемость — отделена бизнес-логика (memory) от UI.

Быстрый старт — понятная структура без сложных зависимостей.

