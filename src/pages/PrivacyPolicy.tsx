// src/pages/PrivacyPolicy.tsx
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Политика конфиденциальности</h1>
        <p className="text-slate-400 text-lg">
          Последнее обновление: 24 июня 2025 года
        </p>
      </div>

      <div className="space-y-8 text-slate-300">
        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Сбор информации</h2>
          <p className="mb-4">
            Мы собираем информацию, которую вы предоставляете нам напрямую, например, когда вы создаете аккаунт, 
            используете наши сервисы или связываетесь с нами.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Личная информация (имя, email, номер телефона)</li>
            <li>Информация об использовании сервиса</li>
            <li>Техническая информация (IP-адрес, тип браузера)</li>
            <li>Файлы cookie и аналогичные технологии</li>
          </ul>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Использование информации</h2>
          <p className="mb-4">
            Мы используем собранную информацию для:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Предоставления и улучшения наших сервисов</li>
            <li>Обработки транзакций и отправки уведомлений</li>
            <li>Связи с вами по вопросам поддержки</li>
            <li>Анализа использования и оптимизации производительности</li>
            <li>Обеспечения безопасности и предотвращения мошенничества</li>
          </ul>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Раскрытие информации</h2>
          <p className="mb-4">
            Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам, 
            за исключением случаев, описанных в данной политике.
          </p>
          <div className="bg-slate-700/50 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-medium text-cyan-400 mb-2">Исключения:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Когда у нас есть ваше согласие</li>
              <li>Для соблюдения правовых требований</li>
              <li>Для защиты наших прав и безопасности</li>
              <li>При передаче бизнеса</li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Безопасность данных</h2>
          <p className="mb-4">
            Мы применяем соответствующие меры безопасности для защиты вашей личной информации:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium text-green-400 mb-2">🔒 Шифрование</h4>
              <p className="text-sm text-slate-400">Все данные шифруются при передаче и хранении</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium text-blue-400 mb-2">🛡️ Контроль доступа</h4>
              <p className="text-sm text-slate-400">Ограниченный доступ только для авторизованного персонала</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium text-purple-400 mb-2">📊 Мониторинг</h4>
              <p className="text-sm text-slate-400">Постоянный мониторинг безопасности систем</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium text-orange-400 mb-2">🔄 Резервное копирование</h4>
              <p className="text-sm text-slate-400">Регулярное резервное копирование данных</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Ваши права</h2>
          <p className="mb-4">
            У вас есть следующие права в отношении ваших персональных данных:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="text-cyan-400 mt-1">👁️</div>
              <div>
                <h4 className="font-medium text-white">Право на доступ</h4>
                <p className="text-sm text-slate-400">Получить копию ваших персональных данных</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-green-400 mt-1">✏️</div>
              <div>
                <h4 className="font-medium text-white">Право на исправление</h4>
                <p className="text-sm text-slate-400">Исправить неточные или неполные данные</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-red-400 mt-1">🗑️</div>
              <div>
                <h4 className="font-medium text-white">Право на удаление</h4>
                <p className="text-sm text-slate-400">Запросить удаление ваших данных</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-yellow-400 mt-1">📤</div>
              <div>
                <h4 className="font-medium text-white">Право на переносимость</h4>
                <p className="text-sm text-slate-400">Получить данные в машиночитаемом формате</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Файлы cookie</h2>
          <p className="mb-4">
            Мы используем файлы cookie для улучшения вашего опыта использования сайта:
          </p>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <ul className="space-y-2 text-slate-400">
              <li><strong className="text-white">Необходимые:</strong> Обеспечивают базовую функциональность</li>
              <li><strong className="text-white">Аналитические:</strong> Помогают понять, как используется сайт</li>
              <li><strong className="text-white">Функциональные:</strong> Запоминают ваши предпочтения</li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Связь с нами</h2>
          <p className="mb-4">
            Если у вас есть вопросы о данной политике конфиденциальности, свяжитесь с нами:
          </p>
          <div className="space-y-2 text-slate-300">
            <p><strong>Email:</strong> privacy@liminal.ai</p>
            <p><strong>Адрес:</strong> LIMINAL Inc., 123 AI Street, Tech City, TC 12345</p>
            <p><strong>Телефон:</strong> +1 (555) LIMINAL</p>
          </div>
        </section>
      </div>
    </div>
  )
}