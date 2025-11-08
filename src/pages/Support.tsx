// src/pages/Support.tsx
import React, { useState } from 'react';
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  ru: {
    supportCenter: "Центр поддержки",
    helpText: "Мы здесь, чтобы помочь вам добиться успеха с платформой ИИ-инфраструктуры LIMINAL",
    contactUs: "📧 Связаться с нами",
    name: "Имя *",
    email: "Email *",
    subject: "Тема *",
    priority: "Приоритет",
    message: "Сообщение *",
    send: "Отправить сообщение",
    sent: "Сообщение отправлено!",
    sentDesc: "Мы получили ваше сообщение и ответим в течение 24 часов.",
    responseTime: "⏱️ Время ответа",
    otherWays: "📞 Другие способы связи",
    knowledge: "📚 Ресурсы самопомощи",
    stats: "📊 Статистика поддержки",
    satisfaction: "Удовлетворенность клиентов",
    avgResponse: "Среднее время ответа",
    support247: "Круглосуточная поддержка",
    solved: "Решенных проблем",
    corpSupport: "🚀 Нужна корпоративная поддержка?",
    corpDesc: "Получите выделенную поддержку, индивидуальные интеграции и приоритетную помощь с нашим корпоративным планом.",
    contactSales: "Связаться с отделом продаж",
    learnMore: "Узнать больше",
    priorities: [
      { value: "low", label: "🟢 Низкий - Общий вопрос" },
      { value: "medium", label: "🟡 Средний - Стандартная поддержка" },
      { value: "high", label: "🟠 Высокий - Срочная проблема" },
      { value: "critical", label: "🔴 Критический - Система не работает" }
    ],
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "ваш@email.com",
    subjectPlaceholder: "Краткое описание вашей проблемы",
    messagePlaceholder: "Пожалуйста, опишите вашу проблему подробно...",
    chatTitle: "Онлайн-чат",
    chatDesc: "Доступен 24/7 для срочных вопросов",
    emailTitle: "Поддержка по email",
    emailDesc: "support@liminal.ai",
    discordTitle: "Discord сообщество",
    discordDesc: "Присоединяйтесь к 2,847+ разработчикам",
    hotlineTitle: "Экстренная линия",
    hotlineDesc: "+1 (555) LIMINAL",
    knowledgeLinks: [
      {
        href: "/docs",
        icon: "📖",
        title: "Документация",
        desc: "Полные руководства и справочник API"
      },
      {
        href: "/tutorials",
        icon: "🎯",
        title: "Учебники",
        desc: "Пошаговые руководства по внедрению"
      },
      {
        href: "/faq",
        icon: "❓",
        title: "Часто задаваемые вопросы",
        desc: "Ответы на популярные вопросы"
      },
      {
        href: "/status",
        icon: "🔍",
        title: "Статус системы",
        desc: "Мониторинг сервисов в реальном времени"
      }
    ],
    responseLevels: [
      { icon: "🔴", label: "Критический", time: "< 1 часа", color: "text-red-400" },
      { icon: "🟠", label: "Высокий", time: "< 4 часов", color: "text-orange-400" },
      { icon: "🟡", label: "Средний", time: "< 24 часов", color: "text-yellow-400" },
      { icon: "🟢", label: "Низкий", time: "< 48 часов", color: "text-green-400" },
    ],
  },
  en: {
    supportCenter: "Support Center",
    helpText: "We are here to help you succeed with the LIMINAL AI infrastructure platform",
    contactUs: "📧 Contact Us",
    name: "Name *",
    email: "Email *",
    subject: "Subject *",
    priority: "Priority",
    message: "Message *",
    send: "Send Message",
    sent: "Message Sent!",
    sentDesc: "We have received your message and will respond within 24 hours.",
    responseTime: "⏱️ Response Times",
    otherWays: "📞 Other Contact Methods",
    knowledge: "📚 Self-Help Resources",
    stats: "📊 Support Statistics",
    satisfaction: "Customer Satisfaction",
    avgResponse: "Average Response Time",
    support247: "24/7 Support",
    solved: "Issues Resolved",
    corpSupport: "🚀 Need Enterprise Support?",
    corpDesc: "Get dedicated support, custom integrations, and priority assistance with our enterprise plan.",
    contactSales: "Contact Sales",
    learnMore: "Learn More",
    priorities: [
      { value: "low", label: "🟢 Low - General question" },
      { value: "medium", label: "🟡 Medium - Standard support" },
      { value: "high", label: "🟠 High - Urgent issue" },
      { value: "critical", label: "🔴 Critical - System down" }
    ],
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Short description of your issue",
    messagePlaceholder: "Please describe your issue in detail...",
    chatTitle: "Online Chat",
    chatDesc: "Available 24/7 for urgent questions",
    emailTitle: "Email Support",
    emailDesc: "support@liminal.ai",
    discordTitle: "Discord Community",
    discordDesc: "Join 2,847+ developers",
    hotlineTitle: "Hotline",
    hotlineDesc: "+1 (555) LIMINAL",
    knowledgeLinks: [
      {
        href: "/docs",
        icon: "📖",
        title: "Documentation",
        desc: "Complete guides and API reference"
      },
      {
        href: "/tutorials",
        icon: "🎯",
        title: "Tutorials",
        desc: "Step-by-step implementation guides"
      },
      {
        href: "/faq",
        icon: "❓",
        title: "FAQ",
        desc: "Answers to popular questions"
      },
      {
        href: "/status",
        icon: "🔍",
        title: "System Status",
        desc: "Real-time service monitoring"
      }
    ],
    responseLevels: [
      { icon: "🔴", label: "Critical", time: "< 1 hour", color: "text-red-400" },
      { icon: "🟠", label: "High", time: "< 4 hours", color: "text-orange-400" },
      { icon: "🟡", label: "Medium", time: "< 24 hours", color: "text-yellow-400" },
      { icon: "🟢", label: "Low", time: "< 48 hours", color: "text-green-400" },
    ],
  }
};

export default function Support() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container mx-auto px-1 sm:px-2 md:px-6 py-8 max-w-6xl">
      {/* Language Switcher */}
      <div className="flex justify-end mb-4">
        <button
          className={`px-3 py-1 rounded-l-lg ${lang === 'ru' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-cyan-400'}`}
          onClick={() => setLang('ru')}
        >
          RU
        </button>
        <button
          className={`px-3 py-1 rounded-r-lg ${lang === 'en' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-cyan-400'}`}
          onClick={() => setLang('en')}
        >
          EN
        </button>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">{t.supportCenter}</h1>
        <p className="text-slate-400 text-lg">{t.helpText}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">{t.contactUs}</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block w-28 text-slate-300 text-sm font-medium mb-2">{t.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="box-border w-full px-2 py-2 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block w-28 text-slate-300 text-sm font-medium mb-2">{t.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="box-border w-full px-2 py-2 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label className="w-28 block text-slate-300 text-sm font-medium mb-2">
                    {t.subject}
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="box-border w-full px-2 py-2 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    placeholder={t.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    {t.priority}
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="box-border w-full px-2 py-2 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    {t.priorities.map(opt => (
  <option key={opt.value} value={opt.value}>{opt.label}</option>
))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="box-border w-full px-2 py-2 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  {t.send}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-semibold text-green-400 mb-2">{t.sent}</h3>
                <p className="text-slate-300">
                  {t.sentDesc}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Support Options */}
        <div className="space-y-6">
          {/* Response Times */}
          <div className="bg-slate-800/50 rounded-lg p-6">
  <h3 className="text-xl font-semibold text-white mb-4">{t.responseTime}</h3>
  <div className="space-y-3">
    {t.responseLevels.map(level => (
      <div key={level.label} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
        <span className="text-slate-300">{level.icon} {level.label}</span>
        <span className={`${level.color} font-medium`}>{level.time}</span>
      </div>
    ))}
  </div>
</div>

          {/* Contact Methods */}
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">{t.otherWays}</h3>
            <div className="space-y-4 w-full">
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">💬</div>
                <div>
                  <div className="text-slate-300 font-medium">{t.chatTitle}</div>
                  <div className="text-slate-400 text-sm">{t.chatDesc}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="text-slate-300 font-medium">{t.emailTitle}</div>
                  <div className="text-slate-400 text-sm">{t.emailDesc}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">🎮</div>
                <div>
                  <div className="text-slate-300 font-medium">{t.discordTitle}</div>
                  <div className="text-slate-400 text-sm">{t.discordDesc}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-slate-300 font-medium">{t.hotlineTitle}</div>
                  <div className="text-slate-400 text-sm">{t.hotlineDesc}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Base */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{t.knowledge}</h3>
            <div className="space-y-3">
              {t.knowledgeLinks.map(link => (
                <a key={link.href} href={link.href} className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
      <div className="text-slate-300 font-medium">{link.icon} {link.title}</div>
      <div className="text-slate-400 text-sm">{link.desc}</div>
    </a>
              ))}
            </div>
          </div>

          {/* Support Stats */}
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">{t.stats}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">98.7%</div>
                <div className="text-slate-400 text-sm">{t.satisfaction}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">12 мин</div>
                <div className="text-slate-400 text-sm">{t.avgResponse}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-400">24/7</div>
                <div className="text-slate-400 text-sm">{t.support247}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">15k+</div>
                <div className="text-slate-400 text-sm">{t.solved}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">{t.corpSupport}</h3>
        <p className="text-slate-300 mb-6">
          {t.corpDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white py-3 px-8 text-xs sm:text-base rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            {t.contactSales}
          </button>
          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 py-3 px-8 text-xs sm:text-base rounded-lg font-medium transition-all duration-200">
            {t.learnMore}
          </button>
        </div>
      </div>
    </div>
  )
}