// src/pages/Documentation.tsx
import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from 'react-router-dom';

function CodeBlock({ code, language = 'bash', title }: { code: string, language?: string, title?: string }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {title && (
        <div className="text-xs text-slate-400 mb-2 px-1">{title}</div>
      )}
      <div className="relative bg-slate-900/80 rounded-lg p-4 sm:p-6 border border-slate-700/50 overflow-x-auto">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200 border border-slate-700/50 hover:border-cyan-500/50 opacity-0 group-hover:opacity-100"
          title="Copy code"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
        <pre className="text-sm sm:text-base">
          <code className={`text-green-400 font-mono ${language === 'json' ? 'text-cyan-300' : ''}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

function QuickStart() {
  const { lang } = useLanguage();
  
  const code = `# Install LIMINAL CLI
npm install -g @liminal/cli

# Authenticate
liminal auth login

# Deploy your model
liminal deploy ./my-model`;

  const translations = {
    ru: {
      title: "Быстрый старт",
      desc: "Запустите LIMINAL менее чем за 5 минут. Разверните свою первую модель ИИ с нашей квантово-оптимизированной инфраструктурой.",
      prerequisites: "Требования",
      features: "Ключевые возможности"
    },
    en: {
      title: "Quick Start",
      desc: "Get started with LIMINAL in under 5 minutes. Deploy your first AI model with our quantum-optimized infrastructure.",
      prerequisites: "Prerequisites",
      features: "Key Features"
    }
  };

  const t = translations[lang];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 rounded-xl p-6 sm:p-8 border border-cyan-500/30 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">{t.title}</h3>
        <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
          {t.desc}
        </p>
        <CodeBlock code={code} language="bash" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
          <h4 className="text-lg sm:text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
            <span>📋</span> {t.prerequisites}
          </h4>
          <ul className="text-slate-300 space-y-2.5 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Node.js 20+ or Python 3.10+</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>LIMINAL account (beta access)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Basic knowledge of AI/ML</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Command line familiarity</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
          <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <span>⚡</span> {t.features}
          </h4>
          <ul className="text-slate-300 space-y-2.5 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">⚡</span>
              <span>12-second deployments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">⚡</span>
              <span>99.99% uptime guarantee</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">⚡</span>
              <span>Auto-scaling infrastructure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">⚡</span>
              <span>Real-time monitoring</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const translations = {
    ru: {
      title: "Документация",
      subtitle: "Всё, что нужно для работы с платформой LIMINAL AI",
      navigation: "Навигация",
      gettingStarted: "🚀 Быстрый старт",
      apiReference: "📚 API",
      deployment: "⚡ Деплой",
      security: "🛡️ Безопасность",
      examples: "💡 Примеры",
      troubleshooting: "🔧 Решение проблем",
      searchPlaceholder: "Поиск в документации...",
      menuToggle: "Меню"
    },
    en: {
      title: "Documentation",
      subtitle: "Everything you need to build with LIMINAL's AI infrastructure platform",
      navigation: "Navigation",
      gettingStarted: "🚀 Getting Started",
      apiReference: "📚 API Reference",
      deployment: "⚡ Deployment",
      security: "🛡️ Security",
      examples: "💡 Examples",
      troubleshooting: "🔧 Troubleshooting",
      searchPlaceholder: "Search documentation...",
      menuToggle: "Menu"
    }
  };

  const t = translations[lang];

  const sections = [
    { id: 'getting-started', title: t.gettingStarted, icon: '🚀' },
    { id: 'api-reference', title: t.apiReference, icon: '📚' },
    { id: 'deployment', title: t.deployment, icon: '⚡' },
    { id: 'security', title: t.security, icon: '🛡️' },
    { id: 'examples', title: t.examples, icon: '💡' },
    { id: 'troubleshooting', title: t.troubleshooting, icon: '🔧' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-full bg-slate-800/80 border border-slate-700/50 rounded-lg p-4 mb-4 flex items-center justify-between text-white hover:bg-slate-700/80 transition-colors"
            >
              <span className="font-medium">{t.menuToggle}</span>
              <svg className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 lg:sticky lg:top-6 shadow-xl`}>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">{t.navigation}</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-cyan-600/30 to-purple-600/30 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 border border-transparent'
                    }`}
                  >
                    <span className="mr-2 text-base sm:text-lg">{section.icon}</span>
                    <span className="font-medium">{section.title.replace(/^[^\s]+\s/, '')}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8 sm:space-y-12">
              {/* Getting Started */}
              <div ref={(el) => sectionRefs.current['getting-started'] = el} id="getting-started" className="scroll-mt-24">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">🚀</span>
                    <span>{lang === 'ru' ? 'Быстрый старт' : 'Getting Started'}</span>
                  </h2>
                  <QuickStart />
                </div>
              </div>

              {/* API Reference */}
              <div ref={(el) => sectionRefs.current['api-reference'] = el} id="api-reference" className="scroll-mt-24">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">📚</span>
                    <span>{lang === 'ru' ? 'API Справочник' : 'API Reference'}</span>
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-cyan-500/20">
                      <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4">Authentication</h3>
                      <p className="text-slate-300 mb-4 text-sm sm:text-base">
                        {lang === 'ru' 
                          ? 'Все API запросы требуют аутентификации с использованием вашего API ключа.'
                          : 'All API requests require authentication using your API key.'}
                      </p>
                      <CodeBlock 
                        code={`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.liminal.ai/v1/models`}
                        language="bash"
                      />
                    </div>

                    <div className="grid gap-6 sm:gap-8">
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-pink-500/20">
                        <h4 className="text-lg sm:text-xl font-semibold text-pink-400 mb-3">Deploy Model</h4>
                        <p className="text-slate-300 text-sm mb-4">POST /v1/models/deploy</p>
                        <CodeBlock 
                          code={`{
  "name": "my-model",
  "framework": "pytorch",
  "version": "1.0.0",
  "config": {
    "instances": 2,
    "memory": "4GB"
  }
}`}
                          language="json"
                        />
                      </div>

                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-purple-500/20">
                        <h4 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3">Model Inference</h4>
                        <p className="text-slate-300 text-sm mb-4">POST /v1/models/{`{model_id}`}/predict</p>
                        <CodeBlock 
                          code={`{
  "inputs": [
    {"data": "base64_encoded_input"}
  ],
  "parameters": {
    "temperature": 0.7
  }
}`}
                          language="json"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deployment */}
              <div ref={(el) => sectionRefs.current['deployment'] = el} id="deployment" className="scroll-mt-24">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">⚡</span>
                    <span>{lang === 'ru' ? 'Руководство по деплою' : 'Deployment Guide'}</span>
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 sm:p-8 border border-purple-500/30 shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-3">Lightning Deploy</h3>
                      <p className="text-slate-300 text-sm sm:text-base">
                        {lang === 'ru'
                          ? 'Развертывайте модели ИИ за секунды с нашей квантово-оптимизированной инфраструктурой.'
                          : 'Deploy AI models in seconds with our quantum-optimized infrastructure.'}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                        <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                          <span>🐳</span> Docker Deployment
                        </h4>
                        <CodeBlock 
                          code={`# Build your model
docker build -t my-model .

# Push to LIMINAL registry
liminal push my-model:latest

# Deploy
liminal deploy my-model:latest`}
                          language="bash"
                        />
                      </div>

                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                        <h4 className="text-lg sm:text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                          <span>🐍</span> Python Deployment
                        </h4>
                        <CodeBlock 
                          code={`from liminal import deploy

result = deploy(
    model=my_model,
    name="my-model",
    config={"instances": 2}
)`}
                          language="python"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div ref={(el) => sectionRefs.current['security'] = el} id="security" className="scroll-mt-24">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">🛡️</span>
                    <span>{lang === 'ru' ? 'Безопасность' : 'Security'}</span>
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 sm:p-8 border border-green-500/30 shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3">Fortress Security</h3>
                      <p className="text-slate-300 text-sm sm:text-base">
                        {lang === 'ru'
                          ? 'Военная шифровка и обнаружение угроз на основе ИИ защищают ваши модели и данные.'
                          : 'Military-grade encryption and AI-powered threat detection keep your models and data secure.'}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-blue-500/20">
                        <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                          <span>🔒</span> Encryption
                        </h4>
                        <ul className="text-slate-300 space-y-2.5 text-sm sm:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>AES-256 encryption at rest</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>TLS 1.3 for data in transit</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>End-to-end encryption</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Hardware security modules</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-purple-500/20">
                        <h4 className="text-lg sm:text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                          <span>🔐</span> Access Control
                        </h4>
                        <ul className="text-slate-300 space-y-2.5 text-sm sm:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Multi-factor authentication</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Role-based permissions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>API key management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>Audit logging</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-green-500/20">
                      <h4 className="text-lg sm:text-xl font-semibold text-green-400 mb-4">🏆 Compliance</h4>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          { icon: '🏅', label: 'SOC 2 Type II' },
                          { icon: '🌍', label: 'ISO 27001' },
                          { icon: '🔒', label: 'GDPR Ready' }
                        ].map((item, idx) => (
                          <div key={idx} className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <div className="text-slate-300 font-medium text-sm sm:text-base">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div ref={(el) => sectionRefs.current['examples'] = el} id="examples" className="scroll-mt-24">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">💡</span>
                    <span>{lang === 'ru' ? 'Примеры' : 'Examples'}</span>
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-yellow-500/20">
                      <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                        <span>🤖</span> Chat Bot Deployment
                      </h3>
                      <CodeBlock 
                        code={`import liminal
from transformers import AutoModel

# Load your model
model = AutoModel.from_pretrained("gpt-3.5-turbo")

# Deploy to LIMINAL
deployment = liminal.deploy(
    model=model,
    name="chatbot-v1",
    endpoint="/chat",
    scaling={"min": 1, "max": 10}
)

print(f"Deployed at: {deployment.url}")`}
                        language="python"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-cyan-500/20">
                      <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                        <span>🖼️</span> Image Classification
                      </h3>
                      <CodeBlock 
                        code={`import requests
import base64

# Prepare image
with open("image.jpg", "rb") as f:
    image_data = base64.b64encode(f.read())

# Make prediction
response = requests.post(
    "https://api.liminal.ai/v1/models/classifier/predict",
    headers={"Authorization": "Bearer YOUR_KEY"},
    json={"inputs": [{"data": image_data}]}
)

result = response.json()
print(f"Prediction: {result['predictions'][0]}")`}
                        language="python"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div ref={(el) => sectionRefs.current['troubleshooting'] = el} id="troubleshooting" className="scroll-mt-24">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">🔧</span>
                    <span>{lang === 'ru' ? 'Решение проблем' : 'Troubleshooting'}</span>
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-semibold text-red-400 mb-3">Common Issues</h3>
                      <p className="text-slate-300 text-sm sm:text-base">
                        {lang === 'ru'
                          ? 'Решения наиболее часто встречающихся проблем.'
                          : 'Solutions to the most frequently encountered problems.'}
                      </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      {[
                        {
                          title: '❌ Deployment Failed',
                          desc: lang === 'ru' 
                            ? 'Если ваш деплой не удался, проверьте следующее:'
                            : 'If your deployment fails, check the following:',
                          items: [
                            lang === 'ru' ? 'Проверьте, что ваш API ключ действителен' : 'Verify your API key is valid',
                            lang === 'ru' ? 'Проверьте лимиты размера модели (макс. 10GB)' : 'Check model size limits (max 10GB)',
                            lang === 'ru' ? 'Убедитесь, что Docker образ доступен' : 'Ensure Docker image is accessible',
                            `Review deployment logs: ${lang === 'ru' ? 'liminal logs deployment-id' : 'liminal logs deployment-id'}`
                          ]
                        },
                        {
                          title: '⏱️ Slow Response Times',
                          desc: lang === 'ru' ? 'Для улучшения производительности:' : 'To improve performance:',
                          items: [
                            lang === 'ru' ? 'Включите авто-масштабирование' : 'Enable auto-scaling',
                            lang === 'ru' ? 'Используйте пакетные предсказания' : 'Use batch predictions',
                            lang === 'ru' ? 'Оптимизируйте размер модели' : 'Optimize model size',
                            lang === 'ru' ? 'Проверьте сетевую задержку' : 'Check network latency'
                          ]
                        },
                        {
                          title: '🔑 Authentication Errors',
                          desc: lang === 'ru' 
                            ? 'Проблемы с аутентификацией можно решить:'
                            : 'Authentication issues can be resolved by:',
                          items: [
                            lang === 'ru' ? 'Регенерируя ваш API ключ' : 'Regenerating your API key',
                            lang === 'ru' ? 'Проверяя права доступа ключа' : 'Checking key permissions',
                            lang === 'ru' ? 'Проверяя заголовки запроса' : 'Verifying request headers',
                            lang === 'ru' ? 'Убедившись, что ключ не истек' : 'Ensuring key isn\'t expired'
                          ]
                        }
                      ].map((issue, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-5 sm:p-6 border border-orange-500/20">
                          <h4 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3">{issue.title}</h4>
                          <p className="text-slate-300 mb-3 text-sm sm:text-base">{issue.desc}</p>
                          <ul className="text-slate-300 space-y-2 text-sm sm:text-base">
                            {issue.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-orange-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 sm:p-8">
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
                        📞 {lang === 'ru' ? 'Нужна помощь?' : 'Need More Help?'}
                      </h3>
                      <p className="text-slate-300 mb-4 text-sm sm:text-base">
                        {lang === 'ru'
                          ? 'Не можете найти то, что ищете? Наша команда поддержки готова помочь 24/7.'
                          : 'Can\'t find what you\'re looking for? Our support team is here to help 24/7.'}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link
                          to="/support"
                          className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
                        >
                          {lang === 'ru' ? 'Связаться с поддержкой' : 'Contact Support'}
                        </Link>
                        <button
                          className="w-full sm:w-auto border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
                        >
                          {lang === 'ru' ? 'Присоединиться к Discord' : 'Join Discord'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
