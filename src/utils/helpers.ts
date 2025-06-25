// 📁 src/utils/helpers.ts
// Утилиты и хелперы для LIMINAL приложения

import type { Position, ValidationResult } from '../types';
import { REGEX } from './constants';

/**
 * Утилиты для работы с DOM
 */
export class DOMHelpers {
  /**
   * Получить элемент по селектору с типизацией
   */
  static getElement<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector);
  }

  /**
   * Получить все элементы по селектору
   */
  static getAllElements<T extends HTMLElement>(selector: string): NodeListOf<T> {
    return document.querySelectorAll<T>(selector);
  }

  /**
   * Создать элемент с классом и контентом
   */
  static createElement<T extends HTMLElement>(
    tag: string,
    className?: string,
    content?: string
  ): T {
    const element = document.createElement(tag) as T;
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
  }

  /**
   * Безопасно удалить элемент из DOM
   */
  static removeElement(element: HTMLElement | null): void {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  /**
   * Проверить существует ли элемент
   */
  static elementExists(selector: string): boolean {
    return document.querySelector(selector) !== null;
  }

  /**
   * Получить размеры элемента
   */
  static getElementRect(element: HTMLElement): DOMRect | null {
    if (!element) return null;
    return element.getBoundingClientRect();
  }

  /**
   * Добавить CSS стили к элементу
   */
  static addStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void {
    Object.assign(element.style, styles);
  }
}

/**
 * Математические утилиты
 */
export class MathHelpers {
  /**
   * Случайное число в диапазоне
   */
  static random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  /**
   * Случайное целое число в диапазоне
   */
  static randomInt(min: number, max: number): number {
    return Math.floor(this.random(min, max));
  }

  /**
   * Ограничить число в диапазоне
   */
  static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Интерполяция между двумя значениями
   */
  static lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
  }

  /**
   * Расстояние между двумя точками
   */
  static distance(point1: Position, point2: Position): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Конвертировать градусы в радианы
   */
  static toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  /**
   * Конвертировать радианы в градусы
   */
  static toDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}

/**
 * Утилиты для работы со временем
 */
export class TimeHelpers {
  /**
   * Добавить ведущий ноль к числу (01, 02, ...)
   */
  static padZero(num: number): string {
    return String(num).padStart(2, '0');
  }

  /**
   * Добавить ведущие нули к числу (001, 002, ...)
   */
  static padZeroThree(num: number): string {
    return String(num).padStart(3, '0');
  }

  /**
   * Форматировать дату в читаемый вид
   */
  static formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Получить текущее время в миллисекундах
   */
  static now(): number {
    return Date.now();
  }

  /**
   * Создать задержку (Promise)
   */
  static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Форматировать время в HH:MM:SS
   */
  static formatTime(date: Date): string {
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }
}

/**
 * Утилиты для анимаций
 */
export class AnimationUtils {
  /**
   * Создать плавающий элемент (для сердечек и т.д.)
   */
  static createFloatingElement(
    content: string,
    startX: number,
    startY: number,
    className: string = 'floating-element'
  ): HTMLElement {
    const element = DOMHelpers.createElement('div', className, content);
    
    DOMHelpers.addStyles(element, {
      position: 'fixed',
      left: `${startX}px`,
      top: `${startY}px`,
      fontSize: '1.5rem',
      color: '#ff59a5',
      pointerEvents: 'none',
      zIndex: '9999',
      animation: 'floatUp 3s ease-out forwards'
    });
    
    return element;
  }

  /**
   * Добавить CSS анимации в документ (если еще нет)
   */
  static addFloatingAnimations(): void {
    if (!document.getElementById('floating-animations')) {
      const style = DOMHelpers.createElement('style');
      style.id = 'floating-animations';
      style.textContent = `
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Плавная прокрутка к элементу
   */
  static smoothScrollTo(element: Element): void {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  /**
   * Запустить анимацию тряски для элемента
   */
  static shakeElement(element: HTMLElement, duration: number = 500): void {
    element.style.animation = `shake ${duration}ms ease-in-out`;
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }
}

/**
 * Утилиты для валидации
 */
export class ValidationHelpers {
  /**
   * Валидация email адреса
   */
  static validateEmail(email: string): ValidationResult {
    if (!email.trim()) {
      return {
        isValid: false,
        message: 'Email is required'
      };
    }

    if (!REGEX.EMAIL.test(email)) {
      return {
        isValid: false,
        message: 'Please enter a valid email address'
      };
    }

    return { isValid: true };
  }

  /**
   * Проверка на пустую строку
   */
  static isEmpty(value: string): boolean {
    return !value || value.trim().length === 0;
  }

  /**
   * Проверка минимальной длины
   */
  static minLength(value: string, min: number): boolean {
    return value.trim().length >= min;
  }
}

/**
 * Утилиты для событий
 */
export class EventHelpers {
  /**
   * Добавить слушатель события с автоматическим удалением
   */
  static addTemporaryListener(
    element: HTMLElement,
    event: string,
    handler: EventListener,
    duration: number
  ): void {
    element.addEventListener(event, handler);
    
    setTimeout(() => {
      element.removeEventListener(event, handler);
    }, duration);
  }

  /**
   * Throttle функция (ограничение частоты вызовов)
   */
  static throttle<T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    
    return function(this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Debounce функция (задержка выполнения)
   */
  static debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number;
    
    return function(this: any, ...args: Parameters<T>) {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => func.apply(this, args), delay);
    };
  }
}

/**
 * Утилиты для генерации ID
 */
export class IDHelpers {
  /**
   * Генерировать уникальный ID
   */
  static generateId(prefix: string = 'id'): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Генерировать короткий ID
   */
  static generateShortId(): string {
    return Math.random().toString(36).substr(2, 6);
  }
}