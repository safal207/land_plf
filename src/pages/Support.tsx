// src/pages/Support.tsx
import React, { useState } from 'react'

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', priority: 'medium', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Центр поддержки</h1>
        <p className="text-slate-400 text-lg">
          Мы здесь, чтобы помочь вам добиться успеха с платформой ИИ-инфраструктуры LIMINAL
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">📧 Связаться с нами</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      placeholder="ваш@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Тема *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    placeholder="Краткое описание вашей проблемы"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Приоритет
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="low">🟢 Низкий - Общий вопрос</option>
                    <option value="medium">🟡 Средний - Стандартная поддержка</option>
                    <option value="high">🟠 Высокий - Срочная проблема</option>
                    <option value="critical">🔴 Критический - Система не работает</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                    placeholder="Пожалуйста, опишите вашу проблему подробно..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Отправить сообщение
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-semibold text-green-400 mb-2">Сообщение отправлено!</h3>
                <p className="text-slate-300">
                  Мы получили ваше сообщение и ответим в течение 24 часов.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Support Options */}
        <div className="space-y-6">
          {/* Response Times */}
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">⏱️ Время ответа</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">🔴 Критический</span>
                <span className="text-red-400 font-medium">< 1 часа</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">🟠 Высокий</span>
                <span className="text-orange-400 font-medium">< 4 часов</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">🟡 Средний</span>
                <span className="text-yellow-400 font-medium">< 24 часов</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300">🟢 Низкий</span>
                <span className="text-green-400 font-medium">< 48 часов</span>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">📞 Другие способы связи</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">💬</div>
                <div>
                  <div className="text-slate-300 font-medium">Онлайн-чат</div>
                  <div className="text-slate-400 text-sm">Доступен 24/7 для срочных вопросов</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="text-slate-300 font-medium">Поддержка по email</div>
                  <div className="text-slate-400 text-sm">support@liminal.ai</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">🎮</div>
                <div>
                  <div className="text-slate-300 font-medium">Discord сообщество</div>
                  <div className="text-slate-400 text-sm">Присоединяйтесь к 2,847+ разработчикам</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-slate-300 font-medium">Экстренная линия</div>
                  <div className="text-slate-400 text-sm">+1 (555) LIMINAL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Base */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">📚 Ресурсы самопомощи</h3>
            <div className="space-y-3">
              <a href="/docs" className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-slate-300 font-medium">📖 Документация</div>
                <div className="text-slate-400 text-sm">Полные руководства и справочник API</div>
              </a>
              <a href="/tutorials" className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-slate-300 font-medium">🎯 Учебники</div>
                <div className="text-slate-400 text-sm">Пошаговые руководства по внедрению</div>
              </a>
              <a href="/faq" className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-slate-300 font-medium">❓ Часто задаваемые вопросы</div>
                <div className="text-slate-400 text-sm">Ответы на популярные вопросы</div>
              </a>
              <a href="/status" className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-slate-300 font-medium">🔍 Статус системы</div>
                <div className="text-slate-400 text-sm">Мониторинг сервисов в реальном времени</div>
              </a>
            </div>
          </div>

          {/* Support Stats */}
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">📊 Статистика поддержки</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">98.7%</div>
                <div className="text-slate-400 text-sm">Удовлетворенность клиентов</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">12 мин</div>
                <div className="text-slate-400 text-sm">Среднее время ответа</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-400">24/7</div>
                <div className="text-slate-400 text-sm">Круглосуточная поддержка</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">15k+</div>
                <div className="text-slate-400 text-sm">Решенных проблем</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">🚀 Нужна корпоративная поддержка?</h3>
        <p className="text-slate-300 mb-6">
          Получите выделенную поддержку, индивидуальные интеграции и приоритетную помощь с нашим корпоративным планом.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            Связаться с отделом продаж
          </button>
          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 py-3 px-8 rounded-lg font-medium transition-all duration-200">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  )
}