// 📁 src/components/ParticleSystem.ts
// Система анимированных частиц для фона

import type { Particle, Position } from '../types';
import { DOMHelpers, MathHelpers, IDHelpers } from '../utils/helpers';
import { COLORS, ANIMATION_CONFIG } from '../utils/constants';

/**
 * Класс для управления системой частиц
 * Создает и анимирует частицы в фоне
 */
export class ParticleSystem {
  private particles: Particle[] = [];
  private container: HTMLElement;
  private animationId: number = 0;
  private isRunning: boolean = false;
  private particleCount: number;
  private containerBounds: DOMRect | null = null;

  constructor(containerId: string, particleCount: number = ANIMATION_CONFIG.PARTICLE_COUNT) {
    this.particleCount = particleCount;
    this.container = this.findContainer(containerId);
    this.init();
  }

  /**
   * Найти контейнер для частиц
   */
  private findContainer(containerId: string): HTMLElement {
    const container = DOMHelpers.getElement(containerId);
    if (!container) {
      console.warn(`⚠️ ParticleSystem: Container '${containerId}' not found, using body`);
      return document.body;
    }
    return container;
  }

  /**
   * Инициализация системы частиц
   */
  private init(): void {
    console.log('✨ ParticleSystem: Initializing...');
    
    this.updateContainerBounds();
    this.createParticles();
    this.start();
    
    console.log(`✅ ParticleSystem: Created ${this.particles.length} particles`);
  }

  /**
   * Обновить границы контейнера
   */
  private updateContainerBounds(): void {
    this.containerBounds = this.container.getBoundingClientRect();
    console.log('Container bounds updated:', this.containerBounds); // Используем переменную
  }

  /**
   * Создать все частицы
   */
  private createParticles(): void {
    for (let i = 0; i < this.particleCount; i++) {
      const particle = this.generateParticle(i);
      this.particles.push(particle);
      this.createParticleElement(particle);
    }
  }

  /**
   * Сгенерировать данные для одной частицы
   */
  private generateParticle(index: number): Particle {
    const colors = [
      COLORS.primary + '40', // 40 - прозрачность в hex
      'rgba(124, 246, 227, 0.3)',
      'rgba(198, 255, 247, 0.2)'
    ];

    return {
      id: IDHelpers.generateId('particle'),
      x: MathHelpers.random(0, 100),
      y: MathHelpers.random(0, 100),
      size: MathHelpers.random(2, 6),
      opacity: MathHelpers.random(0.3, 0.7),
      velocity: {
        x: MathHelpers.random(-0.5, 0.5),
        y: MathHelpers.random(-0.5, 0.5)
      },
      color: colors[index % colors.length]
    };
  }

  /**
   * Создать DOM элемент для частицы
   */
  private createParticleElement(particle: Particle): void {
    const element = DOMHelpers.createElement('div', 'particle');
    element.id = particle.id;
    
    const animationDelay = MathHelpers.random(0, ANIMATION_CONFIG.PARTICLE_SPEED);
    const animationDuration = MathHelpers.random(4, 8);
    
    DOMHelpers.addStyles(element, {
      position: 'absolute',
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: particle.color,
      borderRadius: '50%',
      animation: `float ${animationDuration}s ease-in-out infinite`,
      animationDelay: `${animationDelay}s`,
      opacity: particle.opacity.toString(),
      pointerEvents: 'none'
    });
    
    this.container.appendChild(element);
  }

  /**
   * Запустить анимацию частиц
   */
  private animate(): void {
    if (!this.isRunning) return;

    this.particles.forEach(particle => {
      this.updateParticlePosition(particle);
      this.handleBoundaryCollision(particle);
      this.updateParticleElement(particle);
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  /**
   * Обновить позицию частицы
   */
  private updateParticlePosition(particle: Particle): void {
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
  }

  /**
   * Обработать столкновение с границами
   */
  private handleBoundaryCollision(particle: Particle): void {
    // Отскок от левой и правой границ
    if (particle.x <= 0 || particle.x >= 100) {
      particle.velocity.x *= -1;
      particle.x = MathHelpers.clamp(particle.x, 0, 100);
    }
    
    // Отскок от верхней и нижней границ
    if (particle.y <= 0 || particle.y >= 100) {
      particle.velocity.y *= -1;
      particle.y = MathHelpers.clamp(particle.y, 0, 100);
    }
  }

  /**
   * Обновить DOM элемент частицы
   */
  private updateParticleElement(particle: Particle): void {
    const element = DOMHelpers.getElement(`#${particle.id}`);
    if (element) {
      DOMHelpers.addStyles(element, {
        left: `${particle.x}%`,
        top: `${particle.y}%`
      });
    }
  }

  /**
   * Запустить систему частиц
   */
  public start(): void {
    if (this.isRunning) {
      console.warn('⚠️ ParticleSystem: Already running');
      return;
    }

    console.log('▶️ ParticleSystem: Starting animation...');
    this.isRunning = true;
    this.animate();
  }

  /**
   * Остановить систему частиц
   */
  public stop(): void {
    if (!this.isRunning) {
      console.warn('⚠️ ParticleSystem: Not running');
      return;
    }

    console.log('⏹️ ParticleSystem: Stopping animation...');
    this.isRunning = false;
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = 0;
    }
  }

  /**
   * Добавить новую частицу
   */
  public addParticle(position?: Position): void {
    const particle = this.generateParticle(this.particles.length);
    
    if (position) {
      particle.x = (position.x / window.innerWidth) * 100;
      particle.y = (position.y / window.innerHeight) * 100;
    }
    
    this.particles.push(particle);
    this.createParticleElement(particle);
    
    console.log(`➕ ParticleSystem: Added particle at (${particle.x.toFixed(1)}, ${particle.y.toFixed(1)})`);
  }

  /**
   * Удалить частицу по ID
   */
  public removeParticle(particleId: string): void {
    const index = this.particles.findIndex(p => p.id === particleId);
    if (index === -1) return;

    const particle = this.particles[index];
    const element = DOMHelpers.getElement(`#${particle.id}`);
    
    if (element) {
      DOMHelpers.removeElement(element);
    }
    
    this.particles.splice(index, 1);
    console.log(`➖ ParticleSystem: Removed particle ${particleId}`);
  }

  /**
   * Изменить количество частиц
   */
  public setParticleCount(count: number): void {
    const currentCount = this.particles.length;
    
    if (count > currentCount) {
      // Добавить частицы
      for (let i = currentCount; i < count; i++) {
        this.addParticle();
      }
    } else if (count < currentCount) {
      // Удалить лишние частицы
      const toRemove = this.particles.slice(count);
      toRemove.forEach(particle => this.removeParticle(particle.id));
    }
    
    this.particleCount = count;
    console.log(`🔢 ParticleSystem: Particle count set to ${count}`);
  }

  /**
   * Изменить скорость частиц
   */
  public setVelocityMultiplier(multiplier: number): void {
    this.particles.forEach(particle => {
      particle.velocity.x *= multiplier;
      particle.velocity.y *= multiplier;
    });
    
    console.log(`⚡ ParticleSystem: Velocity multiplier set to ${multiplier}`);
  }

  /**
   * Получить статистику системы
   */
  public getStats(): {
    particleCount: number;
    isRunning: boolean;
    animationId: number;
    containerElement: string;
  } {
    return {
      particleCount: this.particles.length,
      isRunning: this.isRunning,
      animationId: this.animationId,
      containerElement: this.container.tagName.toLowerCase()
    };
  }

  /**
   * Получить частицу по ID
   */
  public getParticle(particleId: string): Particle | undefined {
    return this.particles.find(p => p.id === particleId);
  }

  /**
   * Получить все частицы
   */
  public getAllParticles(): Particle[] {
    return [...this.particles]; // Возвращаем копию
  }

  /**
   * Перезапустить систему с новыми параметрами
   */
  public restart(newParticleCount?: number): void {
    console.log('🔄 ParticleSystem: Restarting...');
    
    this.destroy();
    
    if (newParticleCount) {
      this.particleCount = newParticleCount;
    }
    
    this.particles = [];
    this.init();
  }

  /**
   * Очистка ресурсов
   */
  public destroy(): void {
    console.log('🗑️ ParticleSystem: Destroying...');
    
    this.stop();
    
    // Удалить все элементы частиц
    this.particles.forEach(particle => {
      const element = DOMHelpers.getElement(`#${particle.id}`);
      DOMHelpers.removeElement(element);
    });
    
    this.particles = [];
    this.containerBounds = null;
    
    console.log('✅ ParticleSystem: Destroyed successfully');
  }
}