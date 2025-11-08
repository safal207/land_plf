// src/pages/TermsOfService.tsx
import React from 'react'
import { useLanguage } from "../contexts/LanguageContext";

type Section = {
  title: string;
  content: (string | string[])[];
};

type Translations = {
  [lang: string]: {
    title: string;
    lastUpdate: string;
    contactTitle: string;
    contactText: string;
    contactEmail: string;
    contactAddress: string;
    contactPhone: string;
    address: string;
    phone: string;
    sections: Section[];
  };
};

const translations: Translations = {
  ru: {
    title: "Условия использования",
    lastUpdate: "Последнее обновление: 24 июня 2025 года",
    contactTitle: "Контактная информация",
    contactText: "Если у вас есть вопросы или предложения по поводу настоящих Условий использования, пожалуйста, свяжитесь с нами:",
    contactEmail: "Email",
    contactAddress: "Адрес",
    contactPhone: "Телефон",
    address: "LIMINAL Inc., 123 AI Street, Tech City, TC 12345",
    phone: "+1 (555) LIMINAL",
    sections: [
      {
        title: "1. Общие положения",
        content: [
          "Данные Условия использования регулируют порядок доступа и использования вами нашего веб-сайта и услуг, предлагаемых компанией LIMINAL Inc.",
          "Используя наш сайт и услуги, вы соглашаетесь с данными Условиями использования. Если вы не согласны с условиями, пожалуйста, не используйте наш сайт и услуги."
        ]
      },
      {
        title: "2. Изменения в условиях",
        content: [
          "Мы оставляем за собой право в любое время вносить изменения в данные Условия использования.",
          "Все изменения вступают в силу немедленно после их публикации на нашем сайте с указанием даты последнего обновления."
        ]
      },
      {
        title: "3. Регистрация и учетная запись",
        content: [
          "Для доступа к некоторым разделам нашего сайта и услугам может потребоваться регистрация и создание учетной записи.",
          "Вы несете ответственность за сохранение конфиденциальности ваших учетных данных и ограничение доступа к вашему устройству."
        ]
      },
      {
        title: "4. Использование услуг",
        content: [
          "Наши услуги предназначены только для законных целей и в соответствии с действующим законодательством.",
          "Вы соглашаетесь не использовать наши услуги для размещения или передачи незаконного, вредоносного или иного неприемлемого контента."
        ]
      },
      {
        title: "5. Ограничение ответственности",
        content: [
          "Компания LIMINAL Inc. не несет ответственности за любой прямой, косвенный, случайный, особый или штрафной ущерб, возникающий в результате использования или невозможности использования нашего сайта или услуг.",
          "Мы не гарантируем, что наш сайт и услуги будут доступны без перерывов и ошибок."
        ]
      },
      {
        title: "6. Применимое право",
        content: [
          "Настоящие Условия использования регулируются и толкуются в соответствии с законодательством страны, в которой зарегистрирована компания LIMINAL Inc.",
          "Все споры, возникающие в связи с настоящими Условиями использования, подлежат разрешению в суде по месту нахождения компании LIMINAL Inc."
        ]
      },
      {
        title: "7. Контактная информация",
        content: [
          "Если у вас есть вопросы или предложения по поводу настоящих Условий использования, пожалуйста, свяжитесь с нами по следующему адресу:",
          "Email: legal@liminal.ai",
          "Адрес: LIMINAL Inc., 123 AI Street, Tech City, TC 12345",
          "Телефон: +1 (555) LIMINAL"
        ]
      }
    ]
  },
  en: {
    title: "Terms of Service",
    lastUpdate: "Last update: June 24, 2025",
    contactTitle: "Contact Information",
    contactText: "If you have any questions or suggestions regarding these Terms of Service, please contact us:",
    contactEmail: "Email",
    contactAddress: "Address",
    contactPhone: "Phone",
    address: "LIMINAL Inc., 123 AI Street, Tech City, TC 12345",
    phone: "+1 (555) LIMINAL",
    sections: [
      {
        title: "1. Introduction",
        content: [
          "These Terms of Service govern your access to and use of our website and services provided by LIMINAL Inc.",
          "By using our site and services, you agree to these Terms of Service. If you do not agree with the terms, please do not use our site and services."
        ]
      },
      {
        title: "2. Changes to Terms",
        content: [
          "We reserve the right to change these Terms of Service at any time.",
          "All changes are effective immediately when we post them on our site with the indication of the last updated date."
        ]
      },
      {
        title: "3. Registration and Account",
        content: [
          "To access certain parts of our site and services, you may need to register and create an account.",
          "You are responsible for maintaining the confidentiality of your account information and restricting access to your device."
        ]
      },
      {
        title: "4. Use of Services",
        content: [
          "Our services are intended for lawful purposes and in accordance with applicable law.",
          "You agree not to use our services to post or transmit any illegal, harmful, or otherwise unacceptable content."
        ]
      },
      {
        title: "5. Limitation of Liability",
        content: [
          "LIMINAL Inc. shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our site or services.",
          "We do not warrant that our site and services will be available without interruption and error."
        ]
      },
      {
        title: "6. Governing Law",
        content: [
          "These Terms of Service are governed by and construed in accordance with the laws of the country where LIMINAL Inc. is registered.",
          "Any disputes arising in connection with these Terms of Service shall be subject to the jurisdiction of the courts where LIMINAL Inc. is located."
        ]
      },
      {
        title: "7. Contact Information",
        content: [
          "If you have any questions or suggestions regarding these Terms of Service, please contact us at:",
          "Email: legal@liminal.ai",
          "Address: LIMINAL Inc., 123 AI Street, Tech City, TC 12345",
          "Phone: +1 (555) LIMINAL"
        ]
      }
    ]
  }
};

export default function TermsOfService() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">{t.title}</h1>
        <p className="text-slate-400 text-lg">
          {t.lastUpdate}
        </p>
      </div>

      <div className="space-y-8 text-slate-300">
        {t.sections.map((section, index) => (
          <section key={index} className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-cyan-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">{t.contactTitle}</h2>
          <p className="mb-4">
            {t.contactText}
          </p>
          <div className="space-y-2 text-slate-300">
            <p><strong>{t.contactEmail}:</strong> legal@liminal.ai</p>
            <p><strong>{t.contactAddress}:</strong> {t.address}</p>
            <p><strong>{t.contactPhone}:</strong> {t.phone}</p>
          </div>
        </section>
      </div>
    </div>
  )
}