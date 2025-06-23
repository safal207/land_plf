// 📁 src/LiminalApp.ts
// Главный класс приложения LIMINAL с порталом в Noosphere

import { ParticleSystem } from './components/ParticleSystem';
import { QuantumClock } from './components/QuantumClock';
import { HeartControls } from './components/HeartControls';
import { EmailForm } from './components/EmailForm';
import { DOMHelpers, TimeHelpers } from './utils/helpers';
import { SELECTORS, ANIMATION_CONFIG, MATRIX_CHARS } from './utils/constants';

/**
 * Главный класс приложения LIMINAL
 * Управляет всеми компонентами и их взаимодействием
 */
export class LiminalApp {
  // Компоненты приложения
  private particleSystem: ParticleSystem | null = null;
  private quantumClock: QuantumClock | null = null;
  private heartControls: HeartControls | null = null;
  private emailForm: EmailForm | null = null;

  // Состояние приложения
  private isInitialized: boolean = false;
  private isRunning: boolean = false;
  private startTime: number = 0;

  // Дополнительные системы
  private matrixRainInterval: number = 0;
  private scrollObserver: IntersectionObserver | null = null;

  constructor() {
    this.init();
  }

  /**
   * Инициализация приложения
   */
  private async init(): Promise<void> {
    console.log('🚀 LiminalApp: Starting initialization...');
    this.startTime = TimeHelpers.now();
    
    try {
      await this.preInitChecks();
      await this.initializeComponents();
      await this.setupAdditionalFeatures();
      await this.bindGlobalEvents();
      
      this.isInitialized = true;
      this.isRunning = true;
      
      const initTime = TimeHelpers.now() - this.startTime;
      console.log(`✨ LiminalApp: Initialized successfully in ${initTime}ms`);
      
      this.logWelcomeMessage();
      
    } catch (error) {
      console.error('❌ LiminalApp: Initialization failed:', error);
      this.handleInitializationError(error);
    }
  }

  /**
   * Предварительные проверки перед инициализацией
   */
  private async preInitChecks(): Promise<void> {
    console.log('🔍 LiminalApp: Running pre-init checks...');
    
    // Проверить готовность DOM
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }
    
    // Проверить наличие основных контейнеров
    const requiredContainers = [
      SELECTORS.PARTICLES_CONTAINER,
      '.live-clock',
      '.heart-controls',
      SELECTORS.EMAIL_FORM
    ];
    
    const missingContainers = requiredContainers.filter(selector => 
      !DOMHelpers.elementExists(selector)
    );
    
    if (missingContainers.length > 0) {
      console.warn('⚠️ LiminalApp: Missing containers:', missingContainers);
    }
    
    console.log('✅ LiminalApp: Pre-init checks completed');
  }

  /**
   * Инициализировать все компоненты
   */
  private async initializeComponents(): Promise<void> {
    console.log('⚙️ LiminalApp: Initializing components...');
    
    // Инициализация в определенном порядке для оптимальной производительности
    
    // 1. Фоновые эффекты (самые тяжелые)
    await this.initParticleSystem();
    await this.initMatrixRain();
    
    // 2. UI компоненты (средняя нагрузка)
    await this.initQuantumClock();
    await this.initEmailForm();
    
    // 3. Интерактивные элементы (легкие)
    await this.initHeartControls();
    await this.initScrollAnimations();
    
    // 4. НОВОЕ: Портал в Noosphere City 🌌
    await this.initPortalToNoosphere();
    
    console.log('✅ LiminalApp: All components initialized');
  }

  /**
   * Инициализировать систему частиц
   */
  private async initParticleSystem(): Promise<void> {
    try {
      this.particleSystem = new ParticleSystem(
        SELECTORS.PARTICLES_CONTAINER, 
        ANIMATION_CONFIG.PARTICLE_COUNT
      );
      console.log('✅ ParticleSystem initialized');
    } catch (error) {
      console.warn('⚠️ Failed to initialize ParticleSystem:', error);
    }
  }

  /**
   * Инициализировать Matrix дождь
   */
  private async initMatrixRain(): Promise<void> {
    try {
      const matrixContainer = DOMHelpers.getElement('#matrixRain');
      if (matrixContainer) {
        this.startMatrixRain();
        console.log('✅ Matrix rain initialized');
      }
    } catch (error) {
      console.warn('⚠️ Failed to initialize Matrix rain:', error);
    }
  }

  /**
   * Инициализировать квантовые часы
   */
  private async initQuantumClock(): Promise<void> {
    try {
      this.quantumClock = new QuantumClock();
      console.log('✅ QuantumClock initialized');
    } catch (error) {
      console.warn('⚠️ Failed to initialize QuantumClock:', error);
    }
  }

  /**
   * Инициализировать форму email
   */
  private async initEmailForm(): Promise<void> {
    try {
      this.emailForm = new EmailForm();
      console.log('✅ EmailForm initialized');
    } catch (error) {
      console.warn('⚠️ Failed to initialize EmailForm:', error);
    }
  }

  /**
   * Инициализировать управление сердечками
   */
  private async initHeartControls(): Promise<void> {
    try {
      this.heartControls = new HeartControls();
      console.log('✅ HeartControls initialized');
    } catch (error) {
      console.warn('⚠️ Failed to initialize HeartControls:', error);
    }
  }

  /**
   * НОВОЕ: Инициализировать портал в Noosphere City
   */
  private async initPortalToNoosphere(): Promise<void> {
    try {
      this.createPortalButton();
      console.log('✅ Portal to Noosphere City initialized');
    } catch (error) {
      console.warn('⚠️ Failed to initialize Portal:', error);
    }
  }

  /**
   * НОВОЕ: Создать кнопку портала
   */
  private createPortalButton(): void {
    // Создаем контейнер портала
    const portalContainer = DOMHelpers.createElement('div', 'portal-container');
    
    DOMHelpers.addStyles(portalContainer, {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    });

    // Создаем кнопку портала
    const portalButton = DOMHelpers.createElement('button', 'portal-button');
    portalButton.innerHTML = `
      <div style="font-size: 2rem; margin-bottom: 5px;">🌆</div>
      <div style="font-weight: bold; color: #00ffee;">ENTER NOOSPHERE</div>
      <div style="font-size: 0.8rem; color: #c6fff7;">City of Future</div>
    `;

    DOMHelpers.addStyles(portalButton, {
      background: 'linear-gradient(135deg, rgba(0, 255, 238, 0.1), rgba(255, 89, 165, 0.1))',
      border: '2px solid rgba(0, 255, 238, 0.3)',
      borderRadius: '15px',
      padding: '20px',
      color: '#00ffee',
      fontFamily: 'Orbitron, sans-serif',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      textAlign: 'center',
      minWidth: '180px'
    });

    // Добавить hover эффект
    portalButton.addEventListener('mouseenter', () => {
      portalButton.style.borderColor = '#00ffee';
      portalButton.style.boxShadow = '0 0 30px rgba(0, 255, 238, 0.4)';
      portalButton.style.transform = 'translateY(-5px)';
    });

    portalButton.addEventListener('mouseleave', () => {
      portalButton.style.borderColor = 'rgba(0, 255, 238, 0.3)';
      portalButton.style.boxShadow = 'none';
      portalButton.style.transform = 'translateY(0)';
    });

    // Добавить клик для перехода
    portalButton.addEventListener('click', () => {
      this.activatePortalTransition();
    });

    portalContainer.appendChild(portalButton);
    document.body.appendChild(portalContainer);
  }

  /**
   * НОВОЕ: Активировать переход через портал
   */
  private activatePortalTransition(): void {
    console.log('🌌 Activating portal to Noosphere City...');
    
    // Создать overlay эффект
    const overlay = DOMHelpers.createElement('div', 'portal-overlay');
    
    DOMHelpers.addStyles(overlay, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle, transparent, #00ffee)',
      zIndex: '99999',
      opacity: '0',
      transition: 'opacity 2s ease-in-out'
    });

    document.body.appendChild(overlay);

    // Показать сообщение
    const message = DOMHelpers.createElement('div', 'portal-message');
    message.textContent = '🌌 Opening dimensional gateway to Noosphere City...';
    
    DOMHelpers.addStyles(message, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0, 0, 0, 0.8)',
      color: '#00ffee',
      padding: '20px 40px',
      borderRadius: '10px',
      border: '1px solid #00ffee',
      fontFamily: 'Orbitron, sans-serif',
      fontSize: '1.2rem',
      zIndex: '99998',
      textAlign: 'center'
    });

    document.body.appendChild(message);

    // Запустить последовательность перехода
    setTimeout(() => {
      overlay.style.opacity = '0.8';
      message.textContent = '🚀 Initiating dimensional transfer...';
    }, 1000);

    setTimeout(() => {
      overlay.style.opacity = '1';
      message.textContent = '✨ Welcome to Noosphere City!';
    }, 2500);

    // Переход на сайт
    setTimeout(() => {
      window.location.href = 'https://safal207.github.io/noosphere-city/';
    }, 3500);
  }

  /**
   * Инициализировать анимации при прокрутке
   */
  private async initScrollAnimations(): Promise<void> {
    try {
      this.scrollObserver = new IntersectionObserver(
        (entries) => this.handleScrollIntersection(entries),
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Наблюдать за анимируемыми элементами
      const animatedElements = DOMHelpers.getAllElements('.feature-card, .story-card');
      animatedElements.forEach(element => {
        (element as HTMLElement).style.opacity = '0';
        this.scrollObserver?.observe(element);
      });

      console.log(`✅ Scroll animations initialized for ${animatedElements.length} elements`);
    } catch (error) {
      console.warn('⚠️ Failed to initialize scroll animations:', error);
    }
  }

  /**
   * Запустить Matrix дождь
   */
  private startMatrixRain(): void {
    const matrixContainer = DOMHelpers.getElement('#matrixRain');
    if (!matrixContainer) return;

    const createMatrixChar = () => {
      const char = DOMHelpers.createElement('div', 'matrix-char');
      char.textContent = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
      
      DOMHelpers.addStyles(char, {
        position: 'absolute',
        left: Math.random() * 100 + '%',
        color: '#00ffee',
        fontFamily: 'Courier New, monospace',
        fontSize: '14px',
        animation: `fall linear ${Math.random() * 3 + 2}s`,
        opacity: Math.random().toString()
      });
      
      matrixContainer.appendChild(char);
      
      // Удалить через время анимации
      setTimeout(() => {
        DOMHelpers.removeElement(char);
      }, 5000);
    };

    this.matrixRainInterval = window.setInterval(createMatrixChar, ANIMATION_CONFIG.MATRIX_INTERVAL);
  }

  /**
   * Настроить дополнительные функции
   */
  private async setupAdditionalFeatures(): Promise<void> {
    console.log('🔧 LiminalApp: Setting up additional features...');
    
    // Плавная прокрутка для навигации
    this.setupSmoothScroll();
    
    // Управление глазами (закрыть/открыть)
    this.setupEyesControls();
    
    // Глобальные горячие клавиши
    this.setupHotkeys();
    
    console.log('✅ Additional features configured');
  }

  /**
   * Настроить плавную прокрутку
   */
  private setupSmoothScroll(): void {
    const navLinks = DOMHelpers.getAllElements<HTMLAnchorElement>('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
          const target = DOMHelpers.getElement(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  /**
   * Настроить управление глазами
   */
  private setupEyesControls(): void {
    const closeEyesBtn = DOMHelpers.getElement('.close-eyes-btn');
    const openEyesBtn = DOMHelpers.getElement('.open-eyes-btn');
    const overlay = DOMHelpers.getElement('#eyesClosedOverlay');
    
    closeEyesBtn?.addEventListener('click', () => {
      overlay?.classList.add('active');
      closeEyesBtn.classList.add('eyes-closed');
      closeEyesBtn.textContent = 'Eyes Closed';
    });
    
    openEyesBtn?.addEventListener('click', () => {
      overlay?.classList.remove('active');
      closeEyesBtn?.classList.remove('eyes-closed');
      if (closeEyesBtn) closeEyesBtn.textContent = 'Close Eyes';
    });
  }

  /**
   * Настроить горячие клавиши
   */
  private setupHotkeys(): void {
    document.addEventListener('keydown', (e) => {
      // Ctrl + H = Heart rain
      if (e.ctrlKey && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        this.heartControls?.startHeartRain(3000);
        console.log('💖 Heart rain activated via hotkey');
      }
      
      // Ctrl + P = Toggle particles
      if (e.ctrlKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        this.toggleParticles();
        console.log('✨ Particles toggled via hotkey');
      }

      // НОВОЕ: Ctrl + N = Activate portal to Noosphere
      if (e.ctrlKey && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        this.activatePortalTransition();
        console.log('🌌 Portal to Noosphere activated via hotkey');
      }
      
      // Escape = Close eyes overlay
      if (e.key === 'Escape') {
        const overlay = DOMHelpers.getElement('#eyesClosedOverlay');
        if (overlay?.classList.contains('active')) {
          overlay.classList.remove('active');
        }
      }
    });
  }

  /**
   * Привязать глобальные события
   */
  private async bindGlobalEvents(): Promise<void> {
    console.log('🔗 LiminalApp: Binding global events...');
    
    // Обработка изменения размера окна
    window.addEventListener('resize', () => this.handleWindowResize());
    
    // Обработка видимости страницы
    document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
    
    // Обработка ошибок
    window.addEventListener('error', (e) => this.handleGlobalError(e));
    
    console.log('✅ Global events bound');
  }

  /**
   * Обработать пересечение элементов при прокрутке
   */
  private handleScrollIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    });
  }

  /**
   * Обработать изменение размера окна
   */
  private handleWindowResize(): void {
    // Уведомить компоненты об изменении размера
    this.particleSystem?.setParticleCount(
      window.innerWidth < 768 ? 25 : ANIMATION_CONFIG.PARTICLE_COUNT
    );
  }

  /**
   * Обработать изменение видимости страницы
   */
  private handleVisibilityChange(): void {
    if (document.hidden) {
      // Приостановить тяжелые анимации при скрытии страницы
      this.pauseHeavyAnimations();
    } else {
      // Возобновить анимации при возвращении
      this.resumeHeavyAnimations();
    }
  }

  /**
   * Обработать глобальные ошибки
   */
  private handleGlobalError(error: ErrorEvent): void {
    console.error('🚨 LiminalApp: Global error:', error.error);
    // Здесь можно добавить отправку ошибок в аналитику
  }

  /**
   * Обработать ошибку инициализации
   */
  private handleInitializationError(error: any): void {
    console.error('🚨 LiminalApp: Initialization failed:', error);
    
    // Показать пользователю fallback интерфейс
    const body = document.body;
    body.innerHTML = `
      <div style="
        display: flex; 
        align-items: center; 
        justify-content: center; 
        height: 100vh; 
        background: #0f0f0f; 
        color: #ff4444;
        font-family: 'Orbitron', sans-serif;
        text-align: center;
      ">
        <div>
          <h1>🚨 Initialization Error</h1>
          <p>Something went wrong while loading LIMINAL.</p>
          <p>Error: ${error.message || 'Unknown error'}</p>
          <button onclick="location.reload()" style="
            padding: 10px 20px; 
            background: #00ffee; 
            border: none; 
            border-radius: 5px; 
            color: #000; 
            font-weight: bold; 
            cursor: pointer; 
            margin-top: 20px;
          ">
            Reload Page
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Переключить частицы
   */
  private toggleParticles(): void {
    if (this.particleSystem) {
      const stats = this.particleSystem.getStats();
      if (stats.isRunning) {
        this.particleSystem.stop();
      } else {
        this.particleSystem.start();
      }
    }
  }

  /**
   * Приостановить тяжелые анимации
   */
  private pauseHeavyAnimations(): void {
    this.particleSystem?.stop();
    if (this.matrixRainInterval) {
      clearInterval(this.matrixRainInterval);
    }
  }

  /**
   * Возобновить тяжелые анимации
   */
  private resumeHeavyAnimations(): void {
    this.particleSystem?.start();
    this.startMatrixRain();
  }

  /**
   * Показать приветственное сообщение
   */
  private logWelcomeMessage(): void {
    console.log(`
    🌟 ====================================== 🌟
         WELCOME TO LIMINAL v1.1
    ✨ Next-Gen AI Infrastructure Platform ✨
    
    🎮 Hotkeys:
    • Ctrl + H: Heart rain
    • Ctrl + P: Toggle particles
    • Ctrl + N: Portal to Noosphere City 🌌
    • Escape: Close overlay
    
    🌌 NEW: Dimensional Portal Active!
    Connect to Noosphere City for full experience
    
    💖 Enjoy the journey through dimensions!
    🌟 ====================================== 🌟
    `);
  }

  /**
   * Получить статистику приложения
   */
  public getAppStats(): {
    isInitialized: boolean;
    isRunning: boolean;
    uptime: number;
    components: {
      particleSystem: any;
      quantumClock: any;
      heartControls: any;
      emailForm: any;
    };
  } {
    return {
      isInitialized: this.isInitialized,
      isRunning: this.isRunning,
      uptime: this.isInitialized ? TimeHelpers.now() - this.startTime : 0,
      components: {
        particleSystem: this.particleSystem?.getStats() || null,
        quantumClock: this.quantumClock?.getStats() || null,
        heartControls: this.heartControls?.getStats() || null,
        emailForm: this.emailForm?.getStats() || null
      }
    };
  }

  /**
   * Перезапустить приложение
   */
  public restart(): void {
    console.log('🔄 LiminalApp: Restarting...');
    this.destroy();
    setTimeout(() => {
      new LiminalApp();
    }, 100);
  }

  /**
   * Очистка ресурсов
   */
  public destroy(): void {
    console.log('🗑️ LiminalApp: Destroying...');
    
    // Остановить компоненты
    this.particleSystem?.destroy();
    this.quantumClock?.destroy();
    this.heartControls?.destroy();
    this.emailForm?.destroy();
    
    // Очистить интервалы
    if (this.matrixRainInterval) {
      clearInterval(this.matrixRainInterval);
    }
    
    // Отключить наблюдатель
    this.scrollObserver?.disconnect();
    
    // Сбросить состояние
    this.isInitialized = false;
    this.isRunning = false;
    
    console.log('✅ LiminalApp: Destroyed successfully');
  }
}