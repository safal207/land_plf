// 📁 src/components/PortalGate.ts
// Компонент портала для перехода в Noosphere City

import type { Position } from '../types';
import { DOMHelpers, AnimationUtils, MathHelpers, IDHelpers } from '../utils/helpers';
import { COLORS } from '../utils/constants';

/**
 * Класс для управления порталом в Noosphere City
 * Создает визуальный переход между мирами
 */
export class PortalGate {
  private portalButton: HTMLElement | null = null;
  private portalRing: HTMLElement | null = null;
  private portalParticles: HTMLElement[] = [];
  private isPortalActive: boolean = false;
  private animationId: number = 0;
  private portalContainer: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  /**
   * Инициализация портала
   */
  private init(): void {
    console.log('🌌 PortalGate: Initializing dimensional gateway...');
    
    this.createPortalUI();
    this.bindEvents();
    this.startAmbientAnimation();
    
    console.log('✅ PortalGate: Portal to Noosphere City ready');
  }

  /**
   * Создать UI портала
   */
  private createPortalUI(): void {
    // Создаем контейнер портала
    this.portalContainer = DOMHelpers.createElement('div', 'portal-container');
    
    DOMHelpers.addStyles(this.portalContainer, {
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
    this.portalButton = DOMHelpers.createElement('button', 'portal-button');
    this.portalButton.innerHTML = `
      <div class="portal-icon">🌆</div>
      <div class="portal-text">ENTER NOOSPHERE</div>
      <div class="portal-subtext">City of Future</div>
    `;

    DOMHelpers.addStyles(this.portalButton, {
      background: 'linear-gradient(135deg, rgba(0, 255, 238, 0.1), rgba(255, 89, 165, 0.1))',
      border: '2px solid rgba(0, 255, 238, 0.3)',
      borderRadius: '15px',
      padding: '20px',
      color: COLORS.primary,
      fontFamily: 'Orbitron, sans-serif',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      textAlign: 'center',
      minWidth: '180px',
      position: 'relative',
      overflow: 'hidden'
    });

    // Создаем кольцо портала
    this.portalRing = DOMHelpers.createElement('div', 'portal-ring');
    
    DOMHelpers.addStyles(this.portalRing, {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '3px solid rgba(0, 255, 238, 0.4)',
      position: 'relative',
      animation: 'portalSpin 8s linear infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle, rgba(0, 255, 238, 0.1), transparent)'
    });

    // Добавляем центральную точку
    const portalCore = DOMHelpers.createElement('div', 'portal-core');
    DOMHelpers.addStyles(portalCore, {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: COLORS.primary,
      boxShadow: `0 0 20px ${COLORS.primary}`,
      animation: 'portalPulse 2s ease-in-out infinite'
    });

    this.portalRing.appendChild(portalCore);
    this.portalContainer.appendChild(this.portalRing);
    this.portalContainer.appendChild(this.portalButton);
    
    document.body.appendChild(this.portalContainer);

    // Добавляем CSS анимации
    this.addPortalStyles();
  }

  /**
   * Добавить CSS стили для портала
   */
  private addPortalStyles(): void {
    const style = DOMHelpers.createElement('style');
    style.id = 'portal-styles';
    style.textContent = `
      @keyframes portalSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes portalPulse {
        0%, 100% { 
          transform: scale(1); 
          box-shadow: 0 0 20px ${COLORS.primary};
        }
        50% { 
          transform: scale(1.2); 
          box-shadow: 0 0 40px ${COLORS.primary}, 0 0 60px ${COLORS.secondary};
        }
      }
      
      @keyframes portalWarp {
        0% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
        50% { 
          transform: scale(1.5) rotate(180deg); 
          opacity: 0.8; 
        }
        100% { 
          transform: scale(20) rotate(360deg); 
          opacity: 0; 
        }
      }
      
      @keyframes dimensionShift {
        0% { 
          filter: hue-rotate(0deg) brightness(1); 
        }
        25% { 
          filter: hue-rotate(90deg) brightness(1.2); 
        }
        50% { 
          filter: hue-rotate(180deg) brightness(0.8); 
        }
        75% { 
          filter: hue-rotate(270deg) brightness(1.1); 
        }
        100% { 
          filter: hue-rotate(360deg) brightness(1); 
        }
      }
      
      .portal-button:hover {
        border-color: ${COLORS.primary};
        box-shadow: 0 0 30px rgba(0, 255, 238, 0.4);
        transform: translateY(-5px);
      }
      
      .portal-button:hover .portal-icon {
        animation: dimensionShift 1s ease-in-out infinite;
        transform: scale(1.2);
      }
      
      .portal-text {
        font-size: 0.9rem;
        font-weight: bold;
        margin: 5px 0;
        color: ${COLORS.primary};
      }
      
      .portal-subtext {
        font-size: 0.7rem;
        color: ${COLORS.accent};
        opacity: 0.8;
      }
      
      .portal-icon {
        font-size: 2rem;
        transition: all 0.3s ease;
      }
      
      .portal-active .portal-ring {
        animation: portalWarp 3s ease-in-out forwards;
      }
      
      .portal-transition-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent, ${COLORS.primary});
        z-index: 99999;
        opacity: 0;
        pointer-events: none;
        animation: warpOverlay 3s ease-in-out forwards;
      }
      
      @keyframes warpOverlay {
        0% { opacity: 0; }
        50% { opacity: 0.8; }
        100% { opacity: 1; }
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Привязать события
   */
  private bindEvents(): void {
    if (this.portalButton) {
      this.portalButton.addEventListener('click', () => this.activatePortal());
      this.portalButton.addEventListener('mouseenter', () => this.onPortalHover());
      this.portalButton.addEventListener('mouseleave', () => this.onPortalLeave());
    }

    if (this.portalRing) {
      this.portalRing.addEventListener('click', () => this.activatePortal());
    }
  }

  /**
   * Запустить фоновую анимацию
   */
  private startAmbientAnimation(): void {
    this.createAmbientParticles();
    this.animateAmbientParticles();
  }

  /**
   * Создать фоновые частицы вокруг портала
   */
  private createAmbientParticles(): void {
    if (!this.portalContainer) return;

    for (let i = 0; i < 8; i++) {
      const particle = DOMHelpers.createElement('div', 'portal-ambient-particle');
      
      DOMHelpers.addStyles(particle, {
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: i % 2 === 0 ? COLORS.primary : COLORS.secondary,
        opacity: '0.6',
        pointerEvents: 'none'
      });

      this.portalParticles.push(particle);
      this.portalContainer.appendChild(particle);
    }
  }

  /**
   * Анимировать фоновые частицы
   */
  private animateAmbientParticles(): void {
    const animate = () => {
      this.portalParticles.forEach((particle, index) => {
        const time = Date.now() * 0.001;
        const radius = 80 + Math.sin(time + index) * 20;
        const angle = (time + index * Math.PI / 4) % (Math.PI * 2);
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        DOMHelpers.addStyles(particle, {
          left: `${x + 90}px`,
          top: `${y + 90}px`,
          opacity: (0.4 + Math.sin(time * 2 + index) * 0.3).toString()
        });
      });

      this.animationId = requestAnimationFrame(animate);
    };

    animate();
  }

  /**
   * Обработать наведение на портал
   */
  private onPortalHover(): void {
    if (this.portalRing) {
      this.portalRing.style.borderColor = COLORS.primary;
      this.portalRing.style.boxShadow = `0 0 40px ${COLORS.primary}`;
    }

    // Увеличить активность частиц
    this.portalParticles.forEach(particle => {
      particle.style.opacity = '1';
    });
  }

  /**
   * Обработать уход курсора с портала
   */
  private onPortalLeave(): void {
    if (this.portalRing) {
      this.portalRing.style.borderColor = 'rgba(0, 255, 238, 0.4)';
      this.portalRing.style.boxShadow = 'none';
    }

    // Уменьшить активность частиц
    this.portalParticles.forEach(particle => {
      particle.style.opacity = '0.6';
    });
  }

  /**
   * Активировать портал и переход
   */
  private activatePortal(): void {
    if (this.isPortalActive) return;

    console.log('🌌 PortalGate: Activating dimensional transfer...');
    this.isPortalActive = true;

    // Запустить последовательность активации
    this.startPortalSequence();
  }

  /**
   * Запустить последовательность портала
   */
  private async startPortalSequence(): Promise<void> {
    // Фаза 1: Подготовка портала
    this.showPortalMessage('🌌 Opening dimensional gateway...');
    await this.chargePortal();

    // Фаза 2: Активация кольца
    this.showPortalMessage('⚡ Synchronizing with Noosphere...');
    await this.activateRing();

    // Фаза 3: Создание warp эффекта
    this.showPortalMessage('🚀 Initiating dimensional transfer...');
    await this.createWarpEffect();

    // Фаза 4: Переход
    this.executeTransition();
  }

  /**
   * Показать сообщение портала
   */
  private showPortalMessage(message: string): void {
    const messageEl = DOMHelpers.createElement('div', 'portal-message', message);
    
    DOMHelpers.addStyles(messageEl, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0, 0, 0, 0.8)',
      color: COLORS.primary,
      padding: '20px 40px',
      borderRadius: '10px',
      border: `1px solid ${COLORS.primary}`,
      fontFamily: 'Orbitron, sans-serif',
      fontSize: '1.2rem',
      zIndex: '99998',
      animation: 'fadeInUp 0.5s ease-out'
    });

    document.body.appendChild(messageEl);

    setTimeout(() => {
      DOMHelpers.removeElement(messageEl);
    }, 2000);
  }

  /**
   * Зарядить портал энергией
   */
  private chargePortal(): Promise<void> {
    return new Promise(resolve => {
      if (this.portalRing) {
        this.portalRing.style.animation = 'portalSpin 1s linear infinite, portalPulse 0.5s ease-in-out infinite';
        this.portalRing.style.borderWidth = '5px';
      }

      // Создать энергетические разряды
      this.createEnergyBolts();

      setTimeout(resolve, 2000);
    });
  }

  /**
   * Создать энергетические разряды
   */
  private createEnergyBolts(): void {
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        this.createSingleEnergyBolt();
      }, i * 150);
    }
  }

  /**
   * Создать один энергетический разряд
   */
  private createSingleEnergyBolt(): void {
    if (!this.portalContainer) return;

    const bolt = DOMHelpers.createElement('div', 'energy-bolt');
    
    const angle = Math.random() * Math.PI * 2;
    const distance = MathHelpers.random(60, 120);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    DOMHelpers.addStyles(bolt, {
      position: 'absolute',
      left: '90px',
      top: '90px',
      width: '2px',
      height: '20px',
      background: `linear-gradient(to bottom, ${COLORS.primary}, transparent)`,
      transform: `rotate(${angle}rad)`,
      animation: 'energyBolt 1s ease-out forwards'
    });

    // Добавить CSS для анимации разряда
    if (!document.getElementById('energy-bolt-style')) {
      const style = DOMHelpers.createElement('style');
      style.id = 'energy-bolt-style';
      style.textContent = `
        @keyframes energyBolt {
          0% { 
            opacity: 1; 
            transform: rotate(${angle}rad) translateY(0); 
          }
          100% { 
            opacity: 0; 
            transform: rotate(${angle}rad) translateY(-${distance}px); 
          }
        }
      `;
      document.head.appendChild(style);
    }

    this.portalContainer.appendChild(bolt);

    setTimeout(() => {
      DOMHelpers.removeElement(bolt);
    }, 1000);
  }

  /**
   * Активировать кольцо портала
   */
  private activateRing(): Promise<void> {
    return new Promise(resolve => {
      if (this.portalContainer) {
        this.portalContainer.classList.add('portal-active');
      }

      if (this.portalRing) {
        this.portalRing.style.borderColor = COLORS.secondary;
        this.portalRing.style.boxShadow = `0 0 60px ${COLORS.secondary}`;
      }

      setTimeout(resolve, 1500);
    });
  }

  /**
   * Создать warp эффект
   */
  private createWarpEffect(): Promise<void> {
    return new Promise(resolve => {
      const overlay = DOMHelpers.createElement('div', 'portal-transition-overlay');
      document.body.appendChild(overlay);

      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  /**
   * Выполнить переход в Noosphere City
   */
  private executeTransition(): void {
    console.log('🚀 PortalGate: Transferring to Noosphere City...');
    
    // Перенаправление на Noosphere City
    window.location.href = 'https://safal207.github.io/noosphere-city/';
  }

  /**
   * Получить статистику портала
   */
  public getPortalStats(): {
    isActive: boolean;
    particleCount: number;
    ready: boolean;
  } {
    return {
      isActive: this.isPortalActive,
      particleCount: this.portalParticles.length,
      ready: this.portalContainer !== null
    };
  }

  /**
   * Очистка ресурсов
   */
  public destroy(): void {
    console.log('🗑️ PortalGate: Closing dimensional gateway...');
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.portalContainer) {
      DOMHelpers.removeElement(this.portalContainer);
    }

    // Удалить стили
    const styles = document.getElementById('portal-styles');
    if (styles) {
      DOMHelpers.removeElement(styles);
    }

    this.portalButton = null;
    this.portalRing = null;
    this.portalParticles = [];
    this.portalContainer = null;
    this.isPortalActive = false;

    console.log('✅ PortalGate: Gateway closed successfully');
  }
}