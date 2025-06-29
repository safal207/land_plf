// src/components/Layout.tsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Документация', href: '/docs' },
    { name: 'Поддержка', href: '/support' },
    { name: 'Статус системы', href: '/status' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/50 border-b border-slate-700 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg"></div>
                <span className="text-xl font-bold text-white">LIMINAL</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-cyan-400 bg-slate-700/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800/50 border-t border-slate-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded"></div>
                <span className="text-lg font-semibold text-white">LIMINAL</span>
              </div>
              <p className="text-slate-400 text-sm">
                Платформа ИИ-инфраструктуры нового поколения
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/docs" className="hover:text-white transition-colors">Документация</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Поддержка</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors">Статус</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Условия использования</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Связь</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>support@liminal.ai</li>
                <li>+1 (555) LIMINAL</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 LIMINAL. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}