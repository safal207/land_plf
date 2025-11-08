// src/pages/SystemStatus.tsx
import React from 'react'
import { useLanguage } from "../contexts/LanguageContext";

type ServiceStatus = "operational" | "degraded" | "maintenance" | "outage" | "unknown";
type StatusTranslationKey = `status_${ServiceStatus}`;

export default function SystemStatus() {
  const { lang } = useLanguage();

  const translations = {
    ru: {
      pageTitle: "Статус системы",
      pageSubtitle: "Мониторинг состояния всех сервисов LIMINAL в реальном времени",
      overallStatus: "Все системы работают",
      lastUpdate: "Последнее обновление: только что",
      overallUptime: "Общий аптайм",
      serviceNames: {
        api_gateway: 'API Gateway',
        ml_processing: 'ML Processing',
        data_storage: 'Data Storage',
        authentication: 'Authentication',
        monitoring: 'Monitoring',
        billing_system: 'Billing System',
      },
      uptime: "Аптайм",
      responseTime: "Время отклика",
      incidentsTitle: "Последние инциденты",
      maintenanceTitle: "Плановое обслуживание системы аутентификации",
      maintenanceStatus: "В процессе",
      maintenanceDesc: "Проводим плановое обновление системы аутентификации для улучшения безопасности и производительности.",
      maintenanceStarted: "Начато: 24 июня 2025, 14:00 UTC",
      maintenanceExpected: "Ожидаемое завершение: 24 июня 2025, 16:00 UTC",
      billingTitle: "Замедление работы системы биллинга",
      billingStatus: "Расследуется",
      billingDesc: "Мы наблюдаем повышенное время отклика в системе биллинга. Наша команда работает над устранением проблемы.",
      billingDetected: "Обнаружено: 24 июня 2025, 13:45 UTC",
      billingUpdated: "Последнее обновление: 24 июня 2025, 14:30 UTC",
      apiRestoredTitle: "Восстановлена работа API Gateway",
      apiRestoredStatus: "Решено",
      apiRestoredDesc: "Проблема с доступностью API Gateway была успешно устранена. Все сервисы работают в штатном режиме.",
      apiRestoredStarted: "Начато: 23 июня 2025, 09:15 UTC",
      apiRestoredResolved: "Решено: 23 июня 2025, 10:30 UTC",
      metricsTitle: "Метрики производительности",
      metric1: "API запросов/день",
      metric2: "Среднее время отклика",
      metric3: "Доступность за месяц",
      metric4: "Активных серверов",
      subscribeTitle: "📨 Подписаться на обновления",
      subscribeDesc: "Получайте уведомления об инцидентах и плановом обслуживании",
      subscribePlaceholder: "ваш@email.com",
      subscribeButton: "Подписаться",
      status_operational: "Работает",
      status_degraded: "Снижена производительность",
      status_maintenance: "Техническое обслуживание",
      status_outage: "Недоступен",
      status_unknown: "Неизвестно",
    },
    en: {
      pageTitle: "System Status",
      pageSubtitle: "Real-time monitoring of all LIMINAL services",
      overallStatus: "All systems operational",
      lastUpdate: "Last update: just now",
      overallUptime: "Overall uptime",
      serviceNames: {
        api_gateway: 'API Gateway',
        ml_processing: 'ML Processing',
        data_storage: 'Data Storage',
        authentication: 'Authentication',
        monitoring: 'Monitoring',
        billing_system: 'Billing System',
      },
      uptime: "Uptime",
      responseTime: "Response time",
      incidentsTitle: "Latest incidents",
      maintenanceTitle: "Scheduled maintenance of authentication system",
      maintenanceStatus: "In progress",
      maintenanceDesc: "We are performing scheduled updates to the authentication system to improve security and performance.",
      maintenanceStarted: "Started: June 24, 2025, 14:00 UTC",
      maintenanceExpected: "Expected end: June 24, 2025, 16:00 UTC",
      billingTitle: "Billing system slowdown",
      billingStatus: "Investigating",
      billingDesc: "We are observing increased response times in the billing system. Our team is working to resolve the issue.",
      billingDetected: "Detected: June 24, 2025, 13:45 UTC",
      billingUpdated: "Last update: June 24, 2025, 14:30 UTC",
      apiRestoredTitle: "API Gateway restored",
      apiRestoredStatus: "Resolved",
      apiRestoredDesc: "The issue with API Gateway availability has been successfully resolved. All services are operating normally.",
      apiRestoredStarted: "Started: June 23, 2025, 09:15 UTC",
      apiRestoredResolved: "Resolved: June 23, 2025, 10:30 UTC",
      metricsTitle: "Performance metrics",
      metric1: "API requests/day",
      metric2: "Average response time",
      metric3: "Monthly uptime",
      metric4: "Active servers",
      subscribeTitle: "📨 Subscribe to updates",
      subscribeDesc: "Get notifications about incidents and scheduled maintenance",
      subscribePlaceholder: "your@email.com",
      subscribeButton: "Subscribe",
      status_operational: "Operational",
      status_degraded: "Degraded performance",
      status_maintenance: "Maintenance",
      status_outage: "Outage",
      status_unknown: "Unknown",
    }
  };

  type Service = {
    key: keyof typeof translations['ru']['serviceNames'];
    status: ServiceStatus;
    uptime: string;
    responseTime: string;
  };

  const services: Service[] = [
    { key: 'api_gateway', status: 'operational', uptime: '99.99%', responseTime: '45ms' },
    { key: 'ml_processing', status: 'operational', uptime: '99.95%', responseTime: '120ms' },
    { key: 'data_storage', status: 'operational', uptime: '99.98%', responseTime: '15ms' },
    { key: 'authentication', status: 'maintenance', uptime: '99.90%', responseTime: '25ms' },
    { key: 'monitoring', status: 'operational', uptime: '99.97%', responseTime: '30ms' },
    { key: 'billing_system', status: 'degraded', uptime: '98.50%', responseTime: '200ms' },
  ];

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

  function getStatusText(lang: "ru" | "en", status: ServiceStatus) {
    const key: StatusTranslationKey = `status_${status}`;
    return translations[lang][key] || translations[lang].status_unknown;
  }

  function getOverallStatus(services: { status: ServiceStatus }[]): ServiceStatus {
    const statuses = new Set(services.map(s => s.status));
    if (statuses.has("outage")) return "outage";
    if (statuses.has("degraded")) return "degraded";
    if (statuses.has("maintenance")) return "maintenance";
    return "operational";
  }

  const overallStatus = getOverallStatus(services);

  return (
    <div className="container mx-auto px-2 sm:px-6 py-8 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-4">{translations[lang].pageTitle}</h1>
        <p className="text-slate-400 text-lg">
          {translations[lang].pageSubtitle}
        </p>
      </div>

      {/* Overall Status */}
      <div className={`mb-8 rounded-lg p-6 border ${getStatusColor(overallStatus)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{getStatusIcon(overallStatus)}</div>
            <div>
              <h2 className="text-2xl font-semibold">
                {getStatusText(lang, overallStatus)}
              </h2>
              <p className="text-slate-300">{translations[lang].lastUpdate}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">99.8%</div>
            <div className="text-green-300 text-sm">{translations[lang].overallUptime}</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.key} className="bg-slate-800/50 rounded-lg p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getStatusIcon(service.status)}</span>
                <h3 className="text-xl font-semibold text-white">
                  {translations[lang].serviceNames[service.key as keyof typeof translations['ru']['serviceNames']]}
                </h3>
              </div>
              <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(service.status)}`}>
                {getStatusText(lang, service.status as ServiceStatus)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-sm">{translations[lang].uptime}</div>
                <div className="text-white font-medium">{service.uptime}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-400 text-sm">{translations[lang].responseTime}</div>
                <div className="text-white font-medium">{service.responseTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Incidents */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">{translations[lang].incidentsTitle}</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">{getStatusIcon('maintenance')}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white break-words">{translations[lang].maintenanceTitle}</h3>
                  <span className="px-2 py-1 bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs rounded">{translations[lang].maintenanceStatus}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  {translations[lang].maintenanceDesc}
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>{translations[lang].maintenanceStarted}</span>
                  <span>{translations[lang].maintenanceExpected}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">{getStatusIcon('degraded')}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white break-words">{translations[lang].billingTitle}</h3>
                  <span className="px-2 py-1 bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 text-xs rounded">{translations[lang].billingStatus}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  {translations[lang].billingDesc}
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>{translations[lang].billingDetected}</span>
                  <span>{translations[lang].billingUpdated}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">{getStatusIcon('operational')}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-white break-words">{translations[lang].apiRestoredTitle}</h3>
                  <span className="px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 text-xs rounded">{translations[lang].apiRestoredStatus}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  {translations[lang].apiRestoredDesc}
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>{translations[lang].apiRestoredStarted}</span>
                  <span>{translations[lang].apiRestoredResolved}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-6">{translations[lang].metricsTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2.4M</div>
            <div className="text-slate-400">{translations[lang].metric1}</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">45ms</div>
            <div className="text-slate-400">{translations[lang].metric2}</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">99.8%</div>
            <div className="text-slate-400">{translations[lang].metric3}</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">156</div>
            <div className="text-slate-400">{translations[lang].metric4}</div>
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="mt-12 bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{translations[lang].subscribeTitle}</h3>
          <p className="text-slate-300 mb-6">
            {translations[lang].subscribeDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={translations[lang].subscribePlaceholder}
              className="flex-1 px-3 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 text-base"
            />
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white font-semibold rounded-lg px-4 py-3 transition-all duration-200">
              {translations[lang].subscribeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}