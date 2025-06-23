// 📁 src/components/HeartControls.ts
// Компонент интерактивных сердечек с анимациями

import type { Position } from '../types';
import { DOMHelpers, AnimationUtils, MathHelpers, IDHelpers } from '../utils/helpers';
import { SELECTORS, ANIMATION_CONFIG } from '../utils/constants';

/**
 * Класс для управления интерактивными сердечками
 * Создает летающие сердечки при клике и анимации разбитого сердца
 */
export class HeartControls {
  private heartElement: HTMLElement | null = null;
  private brokenHeartElement: HTMLElement | null = null;
  private activeHearts: Set<string> = new Set();
  private isInitialized: boolean = false;

  constructor() {
    this.init();
  }

  /**
   * Инициализация компонента
   */
  private init(): void {
    console.log('💖 HeartControls: Initializing...');
    
    this.findElements();
    this.validateElements();
    this.setupAnimations();
    this.bindEvents();
    
    this.isInitialized = true;
    console.log('✅ HeartControls: Initialized successfully');
  }

  /**
   * Найти элементы сердечек в DOM
   */
  private findElements(): void {
    this.heartElement = DOMHelpers.getElement(SELECTORS.HEART_BEAT);
    this.brokenHeartElement = DOMHelpers.getElement(SELECTORS.HEART_BROKEN);
  }

  /**
   * Проверить что элементы найдены
   */
  private validateElements(): void {
    if (!this.heartElement) {
      console.warn('⚠️ HeartControls: Heart element not found');
    }
    if (!this.brokenHeartElement) {
      console.warn('⚠️ HeartControls: Broken heart element not found');
    }
  }

  /**
   * Настроить CSS анимации
   */
  private setupAnimations(): void {
    AnimationUtils.addFloatingAnimations();
  }

  /**
   * Привязать события к элементам
   */
  private bindEvents(): void {
    if (this.heartElement) {
      this.heartElement.addEventListener('click', (e) => this.handleHeartClick(e));
    }
    
    if (this.brokenHeartElement) {
      this.brokenHeartElement.addEventListener('click', (e) => this.handleBrokenHeartClick(e));
    }
  }

  /**
   * Обработать клик по сердечку
   */
  private handleHeartClick(event: Event): void {
    event.preventDefault();
    
    if (!this.heartElement) return;

    console.log('💓 HeartControls: Heart clicked!');
    
    // Анимация самого сердечка
    this.animateHeartBeat();
    
    // Создать летающие сердечки
    this.createFloatingHearts();
  }

  /**
   * Анимировать биение сердца
   */
  private animateHeartBeat(): void {
    if (!this.heartElement) return;

    // Сброс анимации
    this.heartElement.style.animation = 'none';
    
    // Запуск новой анимации через небольшую задержку
    setTimeout(() => {
      if (this.heartElement) {
        this.heartElement.style.animation = 'heartBeat 0.3s ease-in-out 3';
      }
    }, 10);
  }

  /**
   * Создать несколько летающих сердечек
   */
  private createFloatingHearts(): void {
    const heartCount = MathHelpers.randomInt(3, 7);
    
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        this.createSingleFloatingHeart();
      }, i * 100); // Задержка между сердечками
    }
  }

  /**
   * Создать одно летающее сердечко
   */
  private createSingleFloatingHeart(): void {
    if (!this.heartElement) return;

    const rect = DOMHelpers.getElementRect(this.heartElement);
    if (!rect) return;

    const heartId = IDHelpers.generateId('floating-heart');
    const randomOffset = MathHelpers.random(-30, 30);
    
    const startPosition: Position = {
      x: rect.left + randomOffset,
      y: rect.top
    };

    const heart = this.createFloatingHeartElement(heartId, startPosition);
    
    // Добавить в DOM
    document.body.appendChild(heart);
    this.activeHearts.add(heartId);
    
    // Удалить через время анимации
    setTimeout(() => {
      this.removeFloatingHeart(heartId);
    }, ANIMATION_CONFIG.HEART_ANIMATION_DURATION);
  }

  /**
   * Создать DOM элемент летающего сердечка
   */
  private createFloatingHeartElement(id: string, position: Position): HTMLElement {
    const heart = DOMHelpers.createElement('div', 'floating-heart', '❤️');
    heart.id = id;
    
    // Случайные параметры для разнообразия
    const size = MathHelpers.random(1.2, 2.0);
    const rotation = MathHelpers.random(-15, 15);
    const horizontalDrift = MathHelpers.random(-50, 50);
    
    DOMHelpers.addStyles(heart, {
      position: 'fixed',
      left: `${position.x}px`,
      top: `${position.y}px`,
      fontSize: `${size}rem`,
      color: '#ff59a5',
      pointerEvents: 'none',
      zIndex: '9999',
      transform: `rotate(${rotation}deg)`,
      animation: `floatUp 3s ease-out forwards, heartFloat 3s ease-in-out infinite`,
      filter: 'drop-shadow(0 0 10px rgba(255, 89, 165, 0.6))'
    });

    // Добавить горизонтальное движение
    heart.style.setProperty('--horizontal-drift', `${horizontalDrift}px`);
    
    return heart;
  }

  /**
   * Удалить летающее сердечко
   */
  private removeFloatingHeart(heartId: string): void {
    const heart = DOMHelpers.getElement(`#${heartId}`);
    if (heart) {
      DOMHelpers.removeElement(heart);
      this.activeHearts.delete(heartId);
    }
  }

  /**
   * Обработать клик по разбитому сердцу
   */
  private handleBrokenHeartClick(event: Event): void {
    event.preventDefault();
    
    if (!this.brokenHeartElement) return;

    console.log('💔 HeartControls: Broken heart clicked!');
    
    this.animateBrokenHeart();
    this.createBrokenHeartEffect();
  }

  /**
   * Анимировать разбитое сердце
   */
  private animateBrokenHeart(): void {
    if (!this.brokenHeartElement) return;

    AnimationUtils.shakeElement(this.brokenHeartElement, 500);
    
    // Временно изменить иконку
    const originalContent = this.brokenHeartElement.textContent;
    this.brokenHeartElement.textContent = '💔';
    
    setTimeout(() => {
      if (this.brokenHeartElement) {
        this.brokenHeartElement.textContent = originalContent;
      }
    }, 1000);
  }

  /**
   * Создать эффект разбитого сердца
   */
  private createBrokenHeartEffect(): void {
    if (!this.brokenHeartElement) return;

    const rect = DOMHelpers.getElementRect(this.brokenHeartElement);
    if (!rect) return;

    // Создать несколько осколков
    const fragments = ['💔', '🖤', '⚡', '💨'];
    
    fragments.forEach((fragment, index) => {
      setTimeout(() => {
        this.createBrokenFragment(fragment, rect, index);
      }, index * 200);
    });
  }

  /**
   * Создать осколок разбитого сердца
   */
  private createBrokenFragment(content: string, parentRect: DOMRect, index: number): void {
    const fragmentId = IDHelpers.generateId('broken-fragment');
    const fragment = DOMHelpers.createElement('div', 'broken-fragment', content);
    fragment.id = fragmentId;
    
    const angle = (index * 90) + MathHelpers.random(-30, 30); // Разлет в разные стороны
    const distance = MathHelpers.random(50, 100);
    const endX = parentRect.left + Math.cos(MathHelpers.toRadians(angle)) * distance;
    const endY = parentRect.top + Math.sin(MathHelpers.toRadians(angle)) * distance;
    
    DOMHelpers.addStyles(fragment, {
      position: 'fixed',
      left: `${parentRect.left}px`,
      top: `${parentRect.top}px`,
      fontSize: '1.5rem',
      pointerEvents: 'none',
      zIndex: '9999',
      transition: 'all 1s ease-out',
      opacity: '1'
    });
    
    document.body.appendChild(fragment);
    
    // Анимировать разлет
    setTimeout(() => {
      DOMHelpers.addStyles(fragment, {
        left: `${endX}px`,
        top: `${endY}px`,
        opacity: '0',
        transform: 'scale(0.5) rotate(180deg)'
      });
    }, 50);
    
    // Удалить через время анимации
    setTimeout(() => {
      DOMHelpers.removeElement(fragment);
    }, 1500);
  }

  /**
   * Создать сердечки в случайном месте экрана
   */
  public createHeartsAt(position: Position, count: number = 3): void {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const heartId = IDHelpers.generateId('custom-heart');
        const offsetPosition: Position = {
          x: position.x + MathHelpers.random(-20, 20),
          y: position.y + MathHelpers.random(-20, 20)
        };
        
        const heart = this.createFloatingHeartElement(heartId, offsetPosition);
        document.body.appendChild(heart);
        this.activeHearts.add(heartId);
        
        setTimeout(() => {
          this.removeFloatingHeart(heartId);
        }, ANIMATION_CONFIG.HEART_ANIMATION_DURATION);
      }, i * 150);
    }
  }

  /**
   * Запустить дождь из сердечек
   */
  public startHeartRain(duration: number = 5000): void {
    console.log('💖 HeartControls: Starting heart rain!');
    
    const interval = setInterval(() => {
      const position: Position = {
        x: MathHelpers.random(0, window.innerWidth),
        y: -50 // Начинать сверху экрана
      };
      
      this.createHeartsAt(position, 1);
    }, 300);
    
    setTimeout(() => {
      clearInterval(interval);
      console.log('💖 HeartControls: Heart rain stopped');
    }, duration);
  }

  /**
   * Получить статистику сердечек
   */
  public getStats(): {
    activeHeartsCount: number;
    isInitialized: boolean;
    elementsFound: number;
  } {
    const elementsFound = [this.heartElement, this.brokenHeartElement]
      .filter(el => el !== null).length;

    return {
      activeHeartsCount: this.activeHearts.size,
      isInitialized: this.isInitialized,
      elementsFound
    };
  }

  /**
   * Очистить все активные сердечки
   */
  public clearAllHearts(): void {
    console.log('🧹 HeartControls: Clearing all hearts...');
    
    this.activeHearts.forEach(heartId => {
      this.removeFloatingHeart(heartId);
    });
    
    this.activeHearts.clear();
  }

  /**
   * Очистка ресурсов
   */
  public destroy(): void {
    console.log('🗑️ HeartControls: Destroying...');
    
    this.clearAllHearts();
    
    // Удалить слушатели событий
    if (this.heartElement) {
      this.heartElement.removeEventListener('click', this.handleHeartClick);
    }
    
    if (this.brokenHeartElement) {
      this.brokenHeartElement.removeEventListener('click', this.handleBrokenHeartClick);
    }
    
    this.heartElement = null;
    this.brokenHeartElement = null;
    this.isInitialized = false;
    
    console.log('✅ HeartControls: Destroyed successfully');
  }
}