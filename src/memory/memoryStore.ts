import type { Moment } from './moment';
import type { Transition } from './transition';
import { generateInsight } from './insight';

/**
 * Хранилище моментов памяти пользователя
 */
export const memory: Moment[] = [];

/**
 * Хранилище переходов между моментами
 */
export const transitions: Transition[] = [];

/**
 * Записывает новый момент в память и создаёт переход, если есть предыдущий момент
 * @param moment - Момент для записи
 */
export function recordMoment(moment: Moment): void {
  if (memory.length > 0) {
    const last = memory[memory.length - 1];
    const transition: Transition = {
      from: last,
      to: moment,
      trigger: moment.context,
      insight: generateInsight({ from: last, to: moment, trigger: moment.context }),
    };
    transitions.push(transition);
    console.log('🔄 Transition записан:', transition);
  }

  memory.push(moment);
  console.log('🧠 Moment записан:', moment);
}
