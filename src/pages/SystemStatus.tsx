// src/pages/SystemStatus.tsx
import React from 'react'

export default function SystemStatus() {
  const services = [
    { name: 'API Gateway', status: 'operational', uptime: '99.99%', responseTime: '45ms' },
    { name: 'ML Processing', status: 'operational', uptime: '99.95%', responseTime: '120ms' },
    { name: 'Data Storage', status: 'operational', uptime: '99.98%', responseTime: '15ms' },
    { name: 'Authentication', status: 'maintenance', uptime: '99.90%', responseTime: '25ms' },
    { name: 'Monitoring', status: 'operational', uptime: '99.97%', responseTime: '30ms' },
    { name: 'Billing System', status: 'degraded', uptime: '98.50%', responseTime: '200ms' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400 bg-green-900/20 border-green-500/30'
      case 'degraded': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30'
      case 'maintenance': return 'text-blue-400 bg-blue-900/20 border-blue-500/30'
      case 'outage': return 'text-red-400 bg-red-900/20 border-red-500/30'
      default: return 'text-slate-400 bg-slate-900/20 border-slate-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return '✅'
      case 'degraded': return '⚠️'
      case 'maintenance': return '🔧'
      case 'outage': return '❌'
      default: return '❓'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Работает'
      case 'degraded': return 'Снижена производительность'
      case 'maintenance': return 'Техническое обслуживание'
      case 'outage': return 'Недоступен'
      default: return 'Неизвестно'
    }
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Статус системы</h1>
        <p className="text-slate-400 text-lg">
          Мониторинг состояния всех сервисов LIMINAL в реальном времени
        </p>
      </div>

      {/* Overall Status */}
      <div className="mb-8 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">✅</div>
            <div>
              <h2 className="text-2xl font-semibold text-green-400">Все системы работают</h2>
              <p className="text-green-300">Последнее обновление: только что</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">99.8%</div>
            <div className="text-green-300 text-sm">Общий аптайм</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getStatusIcon(service.status)}</span>
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              </div>
              <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(service.status)}`}>
                {getStatusText(service.status)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-sm">Аптайм</div>
                <div className="text-white font-medium">{service.uptime}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-sm">Время отклика</div>
                <div className="text-white font-medium">{service.responseTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Incidents */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Последние инциденты</h2>
        
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🔧</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white">Плановое обслуживание системы аутентификации</h3>
                  <span className="px-2 py-1 bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs rounded">В процессе</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Проводим плановое обновление системы аутентификации для улучшения безопасности и производительности.
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>Начато: 24 июня 2025, 14:00 UTC</span>
                  <span>Ожидаемое завершение: 24 июня 2025, 16:00 UTC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">⚠️</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white">Замедление работы системы биллинга</h3>
                  <span className="px-2 py-1 bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 text-xs rounded">Расследуется</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Мы наблюдаем повышенное время отклика в системе биллинга. Наша команда работает над устранением проблемы.
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>Обнаружено: 24 июня 2025, 13:45 UTC</span>
                  <span>Последнее обновление: 24 июня 2025, 14:30 UTC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">✅</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white">Восстановлена работа API Gateway</h3>
                  <span className="px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 text-xs rounded">Решено</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Проблема с доступностью API Gateway была успешно устранена. Все сервисы работают в штатном режиме.
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>Начато: 23 июня 2025, 09:15 UTC</span>
                  <span>Решено: 23 июня 2025, 10:30 UTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Метрики производительности</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2.4M</div>
            <div className="text-slate-400">API запросов/день</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">45ms</div>
            <div className="text-slate-400">Среднее время отклика</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">99.8%</div>
            <div className="text-slate-400">Доступность за месяц</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">156</div>
            <div className="text-slate-400">Активных серверов</div>
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="mt-12 bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">📨 Подписаться на обновления</h3>
          <p className="text-slate-300 mb-6">
            Получайте уведомления об инцидентах и плановом обслуживании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="ваш@email.com"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}