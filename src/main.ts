// 📁 src/main.ts
// Точка входа LIMINAL приложения

import './styles/main.css';
import { LiminalApp } from './LiminalApp';
import { TimeHelpers } from './utils/helpers';

/**
 * Основная функция запуска приложения
 */
async function bootstrap(): Promise<void> {
  console.log('🚀 LIMINAL: Starting application...');
  const startTime = TimeHelpers.now();

  try {
    // Проверка поддержки браузера
    checkBrowserSupport();
    
    // Логирование информации о среде
    logEnvironmentInfo();
    
    // Ожидание готовности DOM
    await waitForDOM();
    
    // Инициализация приложения
    const app = new LiminalApp();
    
    // Расчет времени загрузки
    const loadTime = TimeHelpers.now() - startTime;
    console.log(`✨ LIMINAL: Application started successfully in ${loadTime}ms`);
    
    // Сохранить ссылку на приложение для отладки
    (window as any).LiminalApp = app;
    
    // Показать welcome сообщение через небольшую задержку
    setTimeout(() => {
      showWelcomeConsoleArt();
    }, 1000);
    
  } catch (error) {
    console.error('❌ LIMINAL: Failed to start application:', error);
    showFallbackInterface(error);
  }
}

/**
 * Проверить поддержку браузера
 */
function checkBrowserSupport(): void {
  const requiredFeatures = [
    'Promise',
    'fetch',
    'requestAnimationFrame',
    'IntersectionObserver',
    'CSS.supports'
  ];
  
  const unsupportedFeatures = requiredFeatures.filter(feature => {
    try {
      return eval(`typeof ${feature}`) === 'undefined';
    } catch {
      return true;
    }
  });
  
  if (unsupportedFeatures.length > 0) {
    throw new Error(`Browser missing required features: ${unsupportedFeatures.join(', ')}`);
  }
  
  // Проверить поддержку CSS Grid и Flexbox
  if (!CSS.supports('display', 'grid') || !CSS.supports('display', 'flex')) {
    console.warn('⚠️ Limited CSS support detected');
  }
  
  console.log('✅ Browser support check passed');
}

/**
 * Логирование информации о среде
 */
function logEnvironmentInfo(): void {
  const info = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    cookieEnabled: navigator.cookieEnabled,
    onlineStatus: navigator.onLine,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    screen: {
      width: screen.width,
      height: screen.height,
      colorDepth: screen.colorDepth
    },
    timestamp: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
  
  console.log('📊 Environment Info:', info);
}

/**
 * Ожидание готовности DOM
 */
function waitForDOM(): Promise<void> {
  return new Promise((resolve) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => resolve());
    } else {
      resolve();
    }
  });
}

/**
 * Показать welcome ASCII art в консоли
 */
function showWelcomeConsoleArt(): void {
  const art = `
%c
  ██╗     ██╗███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
  ██║     ██║████╗ ████║██║████╗  ██║██╔══██╗██║     
  ██║     ██║██╔████╔██║██║██╔██╗ ██║███████║██║     
  ██║     ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
  ███████╗██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
  ╚══════╝╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
                                                      
%c🚀 Welcome to LIMINAL - Next-Gen AI Infrastructure Platform 🚀

%c✨ Features Loaded:
  • Quantum-powered particle system
  • Real-time clock with milliseconds  
  • Interactive heart animations
  • Smart email validation
  • Matrix rain effects
  • Responsive scroll animations

%c🎮 Developer Commands:
  • window.LiminalApp.getAppStats() - Get app statistics
  • window.LiminalApp.restart() - Restart application
  • Ctrl + H - Trigger heart rain
  • Ctrl + P - Toggle particles

%c💖 Built with love and TypeScript 💖
  `;

  console.log(
    art,
    'color: #00ffee; font-weight: bold; text-shadow: 0 0 10px #00ffee;',
    'color: #ff59a5; font-size: 16px; font-weight: bold;',
    'color: #c6fff7; font-size: 14px;',
    'color: #7ef6e3; font-size: 12px; font-style: italic;',
    'color: #ff59a5; font-size: 14px; font-weight: bold;'
  );
}

/**
 * Показать fallback интерфейс при ошибке
 */
function showFallbackInterface(error: any): void {
  document.body.innerHTML = `
    <div id="fallback-interface" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
      color: #fff;
      font-family: 'Orbitron', Arial, sans-serif;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    ">
      <div style="
        max-width: 600px;
        background: rgba(24, 24, 24, 0.8);
        border: 1px solid rgba(0, 255, 238, 0.3);
        border-radius: 12px;
        padding: 40px;
        backdrop-filter: blur(10px);
      ">
        <h1 style="
          color: #ff4444;
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(255, 68, 68, 0.5);
        ">
          🚨 System Error
        </h1>
        
        <p style="
          color: #c6fff7;
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
        ">
          LIMINAL encountered an unexpected error during initialization.
          <br>Don't worry, we can fix this!
        </p>
        
        <div style="
          background: rgba(255, 68, 68, 0.1);
          border: 1px solid rgba(255, 68, 68, 0.3);
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #ff8888;
          text-align: left;
          word-break: break-word;
        ">
          <strong>Error Details:</strong><br>
          ${error.message || 'Unknown error occurred'}
        </div>
        
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <button onclick="location.reload()" style="
            padding: 15px 30px;
            background: #00ffee;
            border: none;
            border-radius: 7px;
            color: #181818;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Orbitron', sans-serif;
          ">
            🔄 Reload Page
          </button>
          
          <button onclick="window.location.href = 'mailto:support@liminal.ai?subject=Error Report&body=Error: ${encodeURIComponent(error.message || 'Unknown error')}'" style="
            padding: 15px 30px;
            background: transparent;
            border: 2px solid #00ffee;
            border-radius: 7px;
            color: #00ffee;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Orbitron', sans-serif;
          ">
            📧 Report Issue
          </button>
        </div>
        
        <p style="
          color: #7ef6e3;
          font-size: 0.9rem;
          margin-top: 30px;
          opacity: 0.8;
        ">
          If the problem persists, please try:<br>
          • Clear browser cache and cookies<br>
          • Disable browser extensions<br>
          • Try a different browser<br>
          • Check your internet connection
        </p>
      </div>
    </div>
  `;

  // Добавить hover эффекты для кнопок
  const style = document.createElement('style');
  style.textContent = `
    #fallback-interface button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 255, 238, 0.3);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Обработка критических ошибок
 */
function setupGlobalErrorHandling(): void {
  // Обработка необработанных промисов
  window.addEventListener('unhandledrejection', (event) => {
    console.error('🚨 Unhandled Promise Rejection:', event.reason);
    event.preventDefault();
  });

  // Обработка глобальных ошибок
  window.addEventListener('error', (event) => {
    console.error('🚨 Global Error:', event.error);
  });
}

/**
 * Настройка production оптимизаций
 */
function setupProductionOptimizations(): void {
  // Отключить логи в production
  if (import.meta.env.PROD) {
    const originalConsole = { ...console };
    console.log = () => {};
    console.info = () => {};
    console.warn = originalConsole.warn;
    console.error = originalConsole.error;
  }

  // Prefetch критических ресурсов
  const criticalFonts = [
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap'
  ];

  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = font;
    document.head.appendChild(link);
  });
}

/**
 * Инициализация аналитики (если нужно)
 */
function initAnalytics(): void {
  // Здесь можно добавить Google Analytics, Mixpanel и т.д.
  console.log('📈 Analytics initialized');
}

// Настройка глобальной обработки ошибок
setupGlobalErrorHandling();

// Production оптимизации
setupProductionOptimizations();

// Инициализация аналитики
initAnalytics();

// Запуск приложения
bootstrap().catch(error => {
  console.error('💥 Fatal error during bootstrap:', error);
  showFallbackInterface(error);
});

// Экспорт для отладки в dev режиме
if (import.meta.env.DEV) {
  (window as any).bootstrap = bootstrap;
  (window as any).showWelcomeConsoleArt = showWelcomeConsoleArt;
}