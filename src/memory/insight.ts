import type { Transition } from './transition';

/**
 * Генерирует текстовый инсайт на основе перехода между моментами
 * @param transition - Переход между двумя моментами памяти
 * @returns Текстовое описание инсайта
 */
export function generateInsight(transition: Transition): string {
  const { from, to, trigger } = transition;
  
  // Простая генерация инсайта (в будущем будет заменено на AI-подсказку)
  return `Переход от ${from.emotion} к ${to.emotion} через "${trigger}"`;
}