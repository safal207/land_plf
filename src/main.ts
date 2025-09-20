// 📁 src/main.ts
// LIMINAL application entry point

import './styles/styles.css';
import { LiminalApp } from './LiminalApp';
import { TimeHelpers } from './utils/helpers';

/**
 * Main application bootstrap function
 */
async function bootstrap(): Promise<void> {
  console.log('🚀 LIMINAL: Starting application...');
  const startTime = TimeHelpers.now();

  try {
    // Check for browser support
    checkBrowserSupport();
    
    // Log environment information
    logEnvironmentInfo();
    
    // Wait for the DOM to be ready
    await waitForDOM();
    
    // Initialize the application
    const app = new LiminalApp();
    
    // Calculate load time
    const loadTime = TimeHelpers.now() - startTime;
    console.log(`✨ LIMINAL: Application started successfully in ${loadTime}ms`);
    
    // Save a reference to the app for debugging
    (window as any).LiminalApp = app;
    
    // Show welcome message after a short delay
    setTimeout(() => {
      showWelcomeConsoleArt();
    }, 1000);
    
  } catch (error) {
    console.error('❌ LIMINAL: Failed to start application:', error);
    showFallbackInterface(error);
  }
}

/**
 * Check for browser support
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
  
  // Check for CSS Grid and Flexbox support
  if (!CSS.supports('display', 'grid') || !CSS.supports('display', 'flex')) {
    console.warn('⚠️ Limited CSS support detected');
  }
  
  console.log('✅ Browser support check passed');
}

/**
 * Log environment information
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
 * Wait for the DOM to be ready
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
 * Display welcome ASCII art in the console
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
 * Display fallback interface on error
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

  // Add hover effects for buttons
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
 * Critical error handling
 */
function setupGlobalErrorHandling(): void {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('🚨 Unhandled Promise Rejection:', event.reason);
    event.preventDefault();
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    console.error('🚨 Global Error:', event.error);
  });
}

/**
 * Set up production optimizations
 */
function setupProductionOptimizations(): void {
  // Disable logs in production
  if (import.meta.env.PROD) {
    const originalConsole = { ...console };
    console.log = () => {};
    console.info = () => {};
    console.warn = originalConsole.warn;
    console.error = originalConsole.error;
  }

  // Prefetch critical resources
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
 * Initialize analytics (if needed)
 */
function initAnalytics(): void {
  // Google Analytics, Mixpanel, etc. can be added here.
  console.log('📈 Analytics initialized');
}

// Set up global error handling
setupGlobalErrorHandling();

// Production optimizations
setupProductionOptimizations();

// Initialize analytics
initAnalytics();

// Start the application
bootstrap().catch(error => {
  console.error('💥 Fatal error during bootstrap:', error);
  showFallbackInterface(error);
});

// Export for debugging in dev mode
if (import.meta.env.DEV) {
  (window as any).bootstrap = bootstrap;
  (window as any).showWelcomeConsoleArt = showWelcomeConsoleArt;
}