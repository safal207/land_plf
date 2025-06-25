// 📁 src/components/QuantumClock.ts
// Компонент живых часов с миллисекундами в киберпанк стиле

import type { ClockData } from '../types';
import { DOMHelpers, TimeHelpers } from '../utils/helpers';
import { SELECTORS, ANIMATION_CONFIG } from '../utils/constants';

/**
 * Класс для управления квантовыми часами
 * Показывает время, дату и миллисекунды в реальном времени
 */
export class QuantumClock {
  private timeElement: HTMLElement | null = null;
  private dateElement: HTMLElement | null = null;
  private msElement: HTMLElement | null = null;
  private intervalId: number = 0;
  private isRunning: boolean = false;

  constructor() {
    this.init();
  }

  /**
   * Инициализация компонента
   */
  private init(): void {
    this.findElements();
    this.validateElements();
    this.start();
  }

  /**
   * Найти элементы в DOM
   */
  private findElements(): void {
    this.timeElement = DOMHelpers.getElement(SELECTORS.CLOCK_TIME);
    this.dateElement = DOMHelpers.getElement(SELECTORS.CLOCK_DATE);
    this.msElement = DOMHelpers.getElement(SELECTORS.CLOCK_MS);
  }

  /**
   * Проверить что элементы найдены
   */
  private validateElements(): void {
    if (!this.timeElement) {
      console.warn('⚠️ QuantumClock: Time element not found');
    }
    if (!this.dateElement) {
      console.warn('⚠️ QuantumClock: Date element not found');
    }
    if (!this.msElement) {
      console.warn('⚠️ QuantumClock: Milliseconds element not found');
    }
  }

  /**
   * Обновить отображение часов
   */
  private updateClock(): void {
    const now = new Date();
    const clockData = this.generateClockData(now);
    this.renderClockData(clockData);
  }

  /**
   * Сгенерировать данные для часов
   */
  private generateClockData(date: Date): ClockData {
    return {
      hours: TimeHelpers.padZero(date.getHours()),
      minutes: TimeHelpers.padZero(date.getMinutes()),
      seconds: TimeHelpers.padZero(date.getSeconds()),
      milliseconds: TimeHelpers.padZeroThree(date.getMilliseconds()),
      date: TimeHelpers.formatDate(date)
    };
  }

  /**
   * Отобразить данные часов в DOM
   */
  private renderClockData(clockData: ClockData): void {
    if (this.timeElement) {
      this.timeElement.textContent = `${clockData.hours}:${clockData.minutes}:${clockData.seconds}`;
    }
    
    if (this.dateElement) {
      this.dateElement.textContent = clockData.date;
    }
    
    if (this.msElement) {
      this.msElement.textContent = `${clockData.milliseconds}ms`;
    }
  }

  /**
   * Запустить часы
   */
  public start(): void {
    if (this.isRunning) {
      console.warn('⚠️ QuantumClock: Already running');
      return;
    }

    console.log('⏰ QuantumClock: Starting...');
    
    // Первое обновление сразу
    this.updateClock();
    
    // Запустить интервал для обновления каждые 10ms
    this.intervalId = window.setInterval(() => {
      this.updateClock();
    }, ANIMATION_CONFIG.CLOCK_UPDATE_INTERVAL);
    
    this.isRunning = true;
    console.log('✅ QuantumClock: Started successfully');
  }

  /**
   * Остановить часы
   */
  public stop(): void {
    if (!this.isRunning) {
      console.warn('⚠️ QuantumClock: Not running');
      return;
    }

    console.log('⏹️ QuantumClock: Stopping...');
    
    clearInterval(this.intervalId);
    this.intervalId = 0;
    this.isRunning = false;
    
    console.log('✅ QuantumClock: Stopped successfully');
  }

  /**
   * Перезапустить часы
   */
  public restart(): void {
    this.stop();
    this.start();
  }

  /**
   * Проверить работают ли часы
   */
  public isActive(): boolean {
    return this.isRunning;
  }

  /**
   * Получить текущие данные часов
   */
  public getCurrentData(): ClockData {
    return this.generateClockData(new Date());
  }

  /**
   * Установить кастомный формат времени
   */
  public setCustomTimeFormat(formatter: (date: Date) => string): void {
    if (this.timeElement) {
      this.timeElement.textContent = formatter(new Date());
    }
  }

  /**
   * Добавить эффект мигания к миллисекундам
   */
  public addBlinkEffect(): void {
    if (!this.msElement) return;

    this.msElement.style.animation = 'pulse 0.5s ease-in-out infinite';
  }

  /**
   * Убрать эффект мигания
   */
  public removeBlinkEffect(): void {
    if (!this.msElement) return;

    this.msElement.style.animation = '';
  }

  /**
   * Получить статистику работы
   */
  public getStats(): { 
    isRunning: boolean; 
    intervalId: number; 
    elementsFound: number;
    uptime: string;
  } {
    const elementsFound = [this.timeElement, this.dateElement, this.msElement]
      .filter(el => el !== null).length;

    return {
      isRunning: this.isRunning,
      intervalId: this.intervalId,
      elementsFound,
      uptime: this.isRunning ? 'Active' : 'Stopped'
    };
  }

  /**
   * Очистка ресурсов при уничтожении
   */
  public destroy(): void {
    console.log('🗑️ QuantumClock: Destroying...');
    
    this.stop();
    this.timeElement = null;
    this.dateElement = null;
    this.msElement = null;
    
    console.log('✅ QuantumClock: Destroyed successfully');
  }
}