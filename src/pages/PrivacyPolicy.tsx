// src/pages/PrivacyPolicy.tsx
import { useLanguage } from "../contexts/LanguageContext";
import React from 'react';

const translations = {
  ru: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 24 июня 2025 года",
    contactTitle: "7. Связь с нами",
    contactText: "Если у вас есть вопросы о данной политике конфиденциальности, свяжитесь с нами:",
    contactEmail: "Email",
    contactAddress: "Адрес",
    contactPhone: "Телефон",
    address: "LIMINAL Inc., 123 AI Street, Tech City, TC 12345",
    phone: "+1 (555) LIMINAL",
    sections: [
      {
        title: "1. Сбор информации",
        content: [
          "Мы собираем информацию, которую вы предоставляете нам напрямую, например, когда вы создаете аккаунт, используете наши сервисы или связываетесь с нами.",
          [
            "Личная информация (имя, email, номер телефона)",
            "Информация об использовании сервиса",
            "Техническая информация (IP-адрес, тип браузера)",
            "Файлы cookie и аналогичные технологии"
          ]
        ]
      },
      {
        title: "2. Использование информации",
        content: [
          "Мы используем собранную информацию для:",
          [
            "Предоставления и улучшения наших сервисов",
            "Обработки транзакций и отправки уведомлений",
            "Связи с вами по вопросам поддержки",
            "Анализа использования и оптимизации производительности",
            "Обеспечения безопасности и предотвращения мошенничества"
          ]
        ]
      },
      {
        title: "3. Раскрытие информации",
        content: [
          "Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам, за исключением случаев, описанных в данной политике.",
          {
            exceptions: [
              "Когда у нас есть ваше согласие",
              "Для соблюдения правовых требований",
              "Для защиты наших прав и безопасности",
              "При передаче бизнеса"
            ]
          }
        ]
      },
      {
        title: "4. Безопасность данных",
        content: [
          "Мы применяем соответствующие меры безопасности для защиты вашей личной информации:",
          {
            measures: [
              { text: "🔒 Шифрование", description: "Все данные шифруются при передаче и хранении" },
              { text: "🛡️ Контроль доступа", description: "Ограниченный доступ только для авторизованного персонала" },
              { text: "📊 Мониторинг", description: "Постоянный мониторинг безопасности систем" },
              { text: "🔄 Резервное копирование", description: "Регулярное резервное копирование данных" }
            ]
          }
        ]
      },
      {
        title: "5. Ваши права",
        content: [
          "У вас есть следующие права в отношении ваших персональных данных:",
          {
            rights: [
              { emoji: "👁️", title: "Право на доступ", description: "Получить копию ваших персональных данных" },
              { emoji: "✏️", title: "Право на исправление", description: "Исправить неточные или неполные данные" },
              { emoji: "🗑️", title: "Право на удаление", description: "Запросить удаление ваших данных" },
              { emoji: "📤", title: "Право на переносимость", description: "Получить данные в машиночитаемом формате" }
            ]
          }
        ]
      },
      {
        title: "6. Файлы cookie",
        content: [
          "Мы используем файлы cookie для улучшения вашего опыта использования сайта:",
          {
            types: [
              { name: "Необходимые", description: "Обеспечивают базовую функциональность" },
              { name: "Аналитические", description: "Помогают понять, как используется сайт" },
              { name: "Функциональные", description: "Запоминают ваши предпочтения" }
            ]
          }
        ]
      },
      {
        title: "7. Связь с нами",
        content: [
          "Если у вас есть вопросы о данной политике конфиденциальности, свяжитесь с нами:",
          {
            contact: [
              { type: "Email", value: "privacy@liminal.ai" },
              { type: "Адрес", value: "LIMINAL Inc., 123 AI Street, Tech City, TC 12345" },
              { type: "Телефон", value: "+1 (555) LIMINAL" }
            ]
          }
        ]
      }
    ]
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 24, 2025",
    contactTitle: "7. Contact Us",
    contactText: "If you have any questions about this privacy policy, contact us:",
    contactEmail: "Email",
    contactAddress: "Address",
    contactPhone: "Phone",
    address: "LIMINAL Inc., 123 AI Street, Tech City, TC 12345",
    phone: "+1 (555) LIMINAL",
    sections: [
      {
        title: "1. Information Collection",
        content: [
          "We collect information you provide directly, for example, when you create an account, use our services, or contact us.",
          [
            "Personal information (name, email, phone number)",
            "Service usage information",
            "Technical information (IP address, browser type)",
            "Cookies and similar technologies"
          ]
        ]
      },
      {
        title: "2. Using Information",
        content: [
          "We use the collected information for:",
          [
            "Providing and improving our services",
            "Processing transactions and sending notifications",
            "Communicating with you about support issues",
            "Analyzing usage and optimizing performance",
            "Ensuring security and preventing fraud"
          ]
        ]
      },
      {
        title: "3. Disclosure of Information",
        content: [
          "We do not sell, trade, or otherwise transfer your personal information to third parties, except as described in this policy.",
          {
            exceptions: [
              "When we have your consent",
              "To comply with legal requirements",
              "To protect our rights and safety",
              "In the event of a business transfer"
            ]
          }
        ]
      },
      {
        title: "4. Data Security",
        content: [
          "We implement appropriate security measures to protect your personal information:",
          {
            measures: [
              { text: "🔒 Encryption", description: "All data is encrypted in transit and at rest" },
              { text: "🛡️ Access Control", description: "Limited access only for authorized personnel" },
              { text: "📊 Monitoring", description: "Continuous monitoring of system security" },
              { text: "🔄 Backup", description: "Regular data backups" }
            ]
          }
        ]
      },
      {
        title: "5. Your Rights",
        content: [
          "You have the following rights regarding your personal data:",
          {
            rights: [
              { emoji: "👁️", title: "Right to Access", description: "Obtain a copy of your personal data" },
              { emoji: "✏️", title: "Right to Rectification", description: "Correct inaccurate or incomplete data" },
              { emoji: "🗑️", title: "Right to Erasure", description: "Request deletion of your data" },
              { emoji: "📤", title: "Right to Data Portability", description: "Receive data in a machine-readable format" }
            ]
          }
        ]
      },
      {
        title: "6. Cookies",
        content: [
          "We use cookies to enhance your website experience:",
          {
            types: [
              { name: "Necessary", description: "Enable basic functionality" },
              { name: "Analytics", description: "Help us understand how the site is used" },
              { name: "Functional", description: "Remember your preferences" }
            ]
          }
        ]
      },
      {
        title: "7. Contact Us",
        content: [
          "If you have any questions about this privacy policy, contact us:",
          {
            contact: [
              { type: "Email", value: "privacy@liminal.ai" },
              { type: "Address", value: "LIMINAL Inc., 123 AI Street, Tech City, TC 12345" },
              { type: "Phone", value: "+1 (555) LIMINAL" }
            ]
          }
        ]
      }
    ]
  }
};

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">{t.title}</h1>
        <p className="text-slate-400 text-lg">
          {t.updated}
        </p>
      </div>

      <div className="space-y-8 text-slate-300">
        {t.sections.map((section, idx) => (
          <section key={idx} className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
            {section.content.map((item, id) => (
              <div key={id} className="mb-4">
                {Array.isArray(item) ? (
                  <ul className="list-disc list-inside space-y-2 text-slate-400">
                    {item.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                  </ul>
                ) : typeof item === "object" ? (
                  // Здесь обработка вложенных объектов (например, measures, rights и т.д.)
                  // Можно добавить отдельный компонент для каждого типа вложенного объекта
                  <pre className="text-xs text-slate-500">{JSON.stringify(item, null, 2)}</pre>
                ) : (
                  <p>{item}</p>
                )}
              </div>
            ))}
          </section>
        ))}

        <section className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">{t.contactTitle}</h2>
          <p className="mb-4">{t.contactText}</p>
          <div className="space-y-2 text-slate-300">
            <p><strong>{t.contactEmail}:</strong> privacy@liminal.ai</p>
            <p><strong>{t.contactAddress}:</strong> {t.address}</p>
            <p><strong>{t.contactPhone}:</strong> {t.phone}</p>
          </div>
        </section>
      </div>
    </div>
  )
}