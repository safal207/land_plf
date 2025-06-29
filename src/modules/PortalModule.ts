// 📁 src/modules/PortalModule.ts
// Модуль портала в Noosphere City

export class PortalModule {
  private portalButton: HTMLElement | null = null;
  private isActive: boolean = false;
  private destinationUrl: string = 'https://safal207.github.io/noosphere-city/';

  constructor() {
    this.init();
  }

  /**
   * Инициализация портала
   */
  private init(): void {
    console.log('🌌 PortalModule: Initializing dimensional portal...');
    
    this.createPortalButton();
    this.setupHotkey();
    
    console.log('✅ PortalModule: Portal to Noosphere City ready');
  }

  /**
   * Создать кнопку портала
   */
  private createPortalButton(): void {
    // Создать контейнер
    const container = document.createElement('div');
    container.className = 'portal-container';
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    `;

    // Создать кнопку
    this.portalButton = document.createElement('button');
    this.portalButton.className = 'portal-button';
    this.portalButton.innerHTML = `
      <div style="font-size: 2rem; margin-bottom: 5px;">🌆</div>
      <div style="font-weight: bold; color: #00ffee;">ENTER NOOSPHERE</div>
      <div style="font-size: 0.8rem; color: #c6fff7;">City of Future</div>
    `;

    this.portalButton.style.cssText = `
      background: linear-gradient(135deg, rgba(0, 255, 238, 0.1), rgba(255, 89, 165, 0.1));
      border: 2px solid rgba(0, 255, 238, 0.3);
      border-radius: 15px;
      padding: 20px;
      color: #00ffee;
      font-family: 'Orbitron', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      text-align: center;
      min-width: 180px;
    `;

    // Добавить эффекты
    this.addPortalEffects();
    
    // Добавить обработчик клика
    this.portalButton.addEventListener('click', () => {
      this.activate();
    });

    container.appendChild(this.portalButton);
    document.body.appendChild(container);
  }

  /**
   * Добавить эффекты портала
   */
  private addPortalEffects(): void {
    if (!this.portalButton) return;

    // Hover эффекты
    this.portalButton.addEventListener('mouseenter', () => {
      if (this.portalButton) {
        this.portalButton.style.borderColor = '#00ffee';
        this.portalButton.style.boxShadow = '0 0 30px rgba(0, 255, 238, 0.4)';
        this.portalButton.style.transform = 'translateY(-5px)';
        
        // Пульсация
        this.startPulsing();
      }
    });

    this.portalButton.addEventListener('mouseleave', () => {
      if (this.portalButton) {
        this.portalButton.style.borderColor = 'rgba(0, 255, 238, 0.3)';
        this.portalButton.style.boxShadow = 'none';
        this.portalButton.style.transform = 'translateY(0)';
        
        // Остановить пульсацию
        this.stopPulsing();
      }
    });
  }

  /**
   * Запустить пульсацию портала
   */
  private startPulsing(): void {
    if (!this.portalButton) return;
    
    this.portalButton.style.animation = 'portalPulse 2s ease-in-out infinite';
    this.addPulseStyles();
  }

  /**
   * Остановить пульсацию
   */
  private stopPulsing(): void {
    if (!this.portalButton) return;
    this.portalButton.style.animation = '';
  }

  /**
   * Добавить стили пульсации
   */
  private addPulseStyles(): void {
    if (document.getElementById('portal-pulse-styles')) return;

    const style = document.createElement('style');
    style.id = 'portal-pulse-styles';
    style.textContent = `
      @keyframes portalPulse {
        0% { box-shadow: 0 0 30px rgba(0, 255, 238, 0.4); }
        50% { box-shadow: 0 0 50px rgba(0, 255, 238, 0.8); }
        100% { box-shadow: 0 0 30px rgba(0, 255, 238, 0.4); }
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Настроить горячую клавишу
   */
  private setupHotkey(): void {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        this.activate();
        console.log('🌌 Portal activated via hotkey Ctrl+N');
      }
    });
  }

  /**
   * Активировать портал
   */
  public activate(): void {
    if (this.isActive) {
      console.log('⚠️ Portal already active');
      return;
    }

    this.isActive = true;
    console.log('🌌 Activating dimensional portal...');

    // Создать последовательность перехода
    this.createTransitionSequence();
  }

  /**
   * Создать последовательность перехода
   */
  private createTransitionSequence(): void {
    // Шаг 1: Создать overlay
    const overlay = this.createOverlay();
    
    // Шаг 2: Создать сообщение
    const message = this.createMessage();
    
    // Шаг 3: Последовательность анимаций
    this.runTransitionSteps(overlay, message);
  }

  /**
   * Создать overlay эффект
   */
  private createOverlay(): HTMLElement {
    const overlay = document.createElement('div');
    overlay.className = 'portal-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, transparent, #00ffee);
      z-index: 99999;
      opacity: 0;
      transition: opacity 2s ease-in-out;
    `;

    document.body.appendChild(overlay);
    return overlay;
  }

  /**
   * Создать сообщение перехода
   */
  private createMessage(): HTMLElement {
    const message = document.createElement('div');
    message.className = 'portal-message';
    message.textContent = '🌌 Opening dimensional gateway to Noosphere City...';
    
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: #00ffee;
      padding: 20px 40px;
      border-radius: 10px;
      border: 1px solid #00ffee;
      font-family: 'Orbitron', sans-serif;
      font-size: 1.2rem;
      z-index: 99998;
      text-align: center;
      min-width: 300px;
    `;

    document.body.appendChild(message);
    return message;
  }

  /**
   * Запустить шаги перехода
   */
  private runTransitionSteps(overlay: HTMLElement, message: HTMLElement): void {
    // Шаг 1: Начальное сообщение (1 секунда)
    setTimeout(() => {
      overlay.style.opacity = '0.8';
      message.textContent = '🚀 Initiating dimensional transfer...';
    }, 1000);

    // Шаг 2: Усиление эффекта (2.5 секунды)
    setTimeout(() => {
      overlay.style.opacity = '1';
      message.textContent = '✨ Welcome to Noosphere City!';
      this.addWarpEffect();
    }, 2500);

    // Шаг 3: Переход (3.5 секунды)
    setTimeout(() => {
      window.location.href = this.destinationUrl;
    }, 3500);
  }

  /**
   * Добавить warp эффект
   */
  private addWarpEffect(): void {
    const warpContainer = document.createElement('div');
    warpContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 99997;
    `;

    // Создать звезды для warp эффекта
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        this.createWarpStar(warpContainer);
      }, i * 20);
    }

    document.body.appendChild(warpContainer);

    setTimeout(() => {
      if (warpContainer.parentNode) {
        document.body.removeChild(warpContainer);
      }
    }, 2000);
  }

  /**
   * Создать звезду для warp эффекта
   */
  private createWarpStar(container: HTMLElement): void {
    const star = document.createElement('div');
    star.textContent = '⭐';
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    star.style.cssText = `
      position: absolute;
      left: ${startX}px;
      top: ${startY}px;
      font-size: ${Math.random() * 20 + 10}px;
      animation: warpStar 1s linear forwards;
    `;

    // Добавить стили для warp анимации
    this.addWarpStyles();
    
    container.appendChild(star);

    // Анимация к центру и исчезновение
    setTimeout(() => {
      star.style.left = `${centerX}px`;
      star.style.top = `${centerY}px`;
      star.style.opacity = '0';
      star.style.transform = 'scale(0)';
    }, 50);

    setTimeout(() => {
      if (star.parentNode) {
        container.removeChild(star);
      }
    }, 1000);
  }

  /**
   * Добавить стили для warp анимации
   */
  private addWarpStyles(): void {
    if (document.getElementById('warp-styles')) return;

    const style = document.createElement('style');
    style.id = 'warp-styles';
    style.textContent = `
      @keyframes warpStar {
        0% { 
          opacity: 0; 
          transform: scale(0); 
        }
        50% { 
          opacity: 1; 
          transform: scale(1); 
        }
        100% { 
          opacity: 0; 
          transform: scale(0); 
        }
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Установить URL назначения
   */
  public setDestination(url: string): void {
    this.destinationUrl = url;
    console.log(`🌌 Portal destination set to: ${url}`);
  }

  /**
   * Получить статус портала
   */
  public getStatus(): {
    isActive: boolean;
    destination: string;
    buttonExists: boolean;
  } {
    return {
      isActive: this.isActive,
      destination: this.destinationUrl,
      buttonExists: !!this.portalButton
    };
  }

  /**
   * Скрыть портал
   */
  public hide(): void {
    const container = document.querySelector('.portal-container') as HTMLElement;
    if (container) {
      container.style.display = 'none';
    }
  }

  /**
   * Показать портал
   */
  public show(): void {
    const container = document.querySelector('.portal-container') as HTMLElement;
    if (container) {
      container.style.display = 'flex';
    }
  }

  /**
   * Уничтожить портал
   */
  public destroy(): void {
    console.log('🗑️ PortalModule: Destroying portal...');
    
    const container = document.querySelector('.portal-container');
    if (container) {
      document.body.removeChild(container);
    }
    
    // Удалить стили
    const styles = ['portal-pulse-styles', 'warp-styles'];
    styles.forEach(styleId => {
      const style = document.getElementById(styleId);
      if (style) {
        document.head.removeChild(style);
      }
    });
    
    this.portalButton = null;
    this.isActive = false;
  }

  /**
   * Перезагрузить портал
   */
  public reload(): void {
    console.log('🔄 PortalModule: Reloading...');
    this.destroy();
    this.init();
  }
}