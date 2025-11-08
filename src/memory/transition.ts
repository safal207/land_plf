import type { Moment } from './moment';

/**
 * Переход между двумя моментами памяти
 */
export interface Transition {
  /** Исходный момент */
  from: Moment;
  /** Целевой момент */
  to: Moment;
  /** Триггер перехода */
  trigger: string;
  /** Сгенерированный инсайт (опционально) */
  insight?: string;
}