// 📁 src/types/index.ts
// Базовые типы для LIMINAL приложения

/**
 * Интерфейс для частицы в анимированном фоне
 */
export interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity: {
    x: number;
    y: number;
  };
  color: string;
}

/**
 * Интерфейс для символа Matrix дождя
 */
export interface MatrixChar {
  id: string;
  char: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

/**
 * Данные для отображения часов
 */
export interface ClockData {
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
  date: string;
}

/**
 * Данные формы email подписки
 */
export interface EmailFormData {
  email: string;
}

/**
 * Интерфейс для карточки функции
 */
export interface FeatureData {
  icon: string;
  title: string;
  description: string;
  benefit: string;
  iconClass: string;
}

/**
 * Интерфейс для истории успеха
 */
export interface StoryData {
  quote: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

/**
 * Интерфейс для статистики
 */
export interface StatData {
  number: string;
  label: string;
}

/**
 * Конфигурация анимаций
 */
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

/**
 * Позиция элемента на экране
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Размеры элемента
 */
export interface Size {
  width: number;
  height: number;
}

/**
 * Цветовая схема
 */
export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  background: string;
}

/**
 * Результат валидации формы
 */
export interface ValidationResult {
  isValid: boolean;
  message?: string;
}