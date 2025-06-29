// src/pages/TermsOfService.tsx
import React from 'react'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Условия использования</h1>
        <p className="text-slate-400 text-lg">
          Последнее обновление: 24 июня 2025 года
        </p>
      </div>

      <div className="space-y-8 text-slate-300">
        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Принятие условий</h2>
          <p className="mb-4">
            Используя платформу LIMINAL, вы соглашаетесь соблюдать данные условия использования. 
            Если вы не согласны с любой частью этих условий, вы не можете использовать наш сервис.
          </p>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">
              <strong className="text-cyan-400">Важно:</strong> Эти условия могут изменяться. 
              Мы уведомим вас о существенных изменениях заранее.
            </p>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Описание сервиса</h2>
          <p className="mb-4">
            LIMINAL предоставляет платформу ИИ-инфраструктуры, включающую:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>API для машинного обучения и обработки данных</li>
            <li>Облачные вычислительные ресурсы</li>
            <li>Инструменты разработки и развертывания моделей</li>
            <li>Мониторинг и аналитику производительности</li>
            <li>Техническую поддержку и документацию</li>
          </ul>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Регистрация аккаунта</h2>
          <div className="space-y-4">
            <p>Для использования наших сервисов вы должны:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-green-400 mb-2">✅ Требования</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Быть не младше 18 лет</li>
                  <li>• Предоставить точную информацию</li>
                  <li>• Поддерживать актуальность данных</li>
                  <li>• Защищать данные аккаунта</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-red-400 mb-2">❌ Запрещено</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Создавать поддельные аккаунты</li>
                  <li>• Передавать доступ третьим лицам</li>
                  <li>• Использовать автоматизацию</li>
                  <li>• Нарушать безопасность</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Допустимое использование</h2>
          <div className="space-y-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-medium text-green-400 mb-2">✅ Разрешенное использование</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Разработка и развертывание ИИ-приложений</li>
                <li>• Обработка данных для бизнес-целей</li>
                <li>• Исследования и образование</li>
                <li>• Создание инновационных решений</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <h4 className="font-medium text-red-400 mb-2">❌ Запрещенное использование</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Незаконная деятельность</li>
                <li>• Нарушение прав интеллектуальной собственности</li>
                <li>• Создание вредоносного контента</li>
                <li>• Попытки взлома или нарушения безопасности</li>
                <li>• Дискриминация или преследование</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Оплата и биллинг</h2>
          <div className="space-y-4">
            <p>Наши тарифные планы включают:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-green-400 mb-2">🆓 Бесплатный</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Ограниченные ресурсы</li>
                  <li>• Базовая поддержка</li>
                  <li>• Публичные модели</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-cyan-400 mb-2">💎 Профессиональный</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Расширенные ресурсы</li>
                  <li>• Приоритетная поддержка</li>
                  <li>• Частные модели</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-pink-400 mb-2">🏢 Корпоративный</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Неограниченные ресурсы</li>
                  <li>• Выделенная поддержка</li>
                  <li>• Кастомные решения</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-400 text-sm">
                <strong>Примечание:</strong> Оплата производится ежемесячно. 
                Неиспользованные ресурсы не переносятся на следующий период.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Интеллектуальная собственность</h2>
          <div className="space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium text-cyan-400 mb-2">Наши права</h4>
              <p className="text-sm text-slate-400">
                LIMINAL сохраняет все права на платформу, программное обеспечение, 
                торговые марки и другую интеллектуальную собственность.
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium text-green-400 mb-2">Ваши права</h4>
              <p className="text-sm text-slate-400">
                Вы сохраняете права на данные и модели, которые создаете на нашей платформе. 
                Мы не претендуем на права собственности на ваш контент.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Ограничение ответственности</h2>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-400 mb-2">
              LIMINAL предоставляет сервисы "как есть" без каких-либо гарантий. 
              Мы не несем ответственности за:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
              <li>Потерю данных или прибыли</li>
              <li>Прерывание работы сервиса</li>
              <li>Действия третьих лиц</li>
              <li>Косвенные или случайные убытки</li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Прекращение сервиса</h2>
          <p className="mb-4">
            Мы можем приостановить или прекратить ваш доступ к сервису в случае:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Нарушения данных условий использования</li>
            <li>Неуплаты за сервисы</li>
            <li>Подозрительной или мошеннической активности</li>
            <li>Прекращения работы сервиса</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Контактная информация</h2>
          <p className="mb-4">
            По вопросам, связанным с данными условиями, обращайтесь:
          </p>
          <div className="space-y-2 text-slate-300">
            <p><strong>Email:</strong> legal@liminal.ai</p>
            <p><strong>Адрес:</strong> LIMINAL Inc., 123 AI Street, Tech City, TC 12345</p>
            <p><strong>Телефон:</strong> +1 (555) LIMINAL</p>
          </div>
        </section>
      </div>
    </div>
  )
}