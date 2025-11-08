/**
 * Типы эмоций для моментов памяти
 */
export type Emotion = 'calm' | 'chaos' | 'joy' | 'fear' | 'focus';

/**
 * Момент в памяти пользователя
 */
export interface Moment {
  /** Уникальный идентификатор момента */
  id: string;
  /** Временная метка в миллисекундах */
  timestamp: number;
  /** Эмоциональное состояние */
  emotion: Emotion;
  /** Контекст события */
  context: string;
  /** Опциональные теги для категоризации */
  tags?: string[];
}