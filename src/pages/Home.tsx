import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          От тревоги к <span className="indigo-text">доверию</span>.
          <br />
          От хаоса к <span className="pink-text">ясности</span>.
        </h1>
        <p className="hero-subtitle">
          <span className="indigo-text">LIMINAL</span> — твой путь к <span className="pink-text">внутренней свободе</span>
        </p>
      </section>

      {/* Benefits Section */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Что даст тебе LIMINAL?</h2>
          <div className="grid">
            <div className="card">
              <div className="card-icon">🧠</div>
              <h3 className="card-title">Понимание себя</h3>
              <p className="card-desc">Разберись в своих эмоциях и паттернах поведения</p>
            </div>
            <div className="card">
              <div className="card-icon">💪</div>
              <h3 className="card-title">Уверенность</h3>
              <p className="card-desc">Стань самостоятельным и принимай решения с уверенностью</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Поддержка</h3>
              <p className="card-desc">Получай помощь именно тогда, когда она нужна</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Путь трансформации</h2>
          <div className="steps">
            <div className="step step-1">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>🧠 Руководство</h3>
                <p>LIMINAL помогает распознать паттерны и эмоции</p>
              </div>
            </div>
            <div className="step step-2">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>🔍 Со-навигация</h3>
                <p>Ты начинаешь распознавать их сам</p>
              </div>
            </div>
            <div className="step step-3">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>💡 Внутренний совет</h3>
                <p>Эмоции становятся союзниками</p>
              </div>
            </div>
            <div className="step step-4">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>👑 Суверенность</h3>
                <p>Ты — свой лучший навигатор</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">Хочешь начать путь?</h2>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', color: '#cbd5e1'}}>
            Оставь email и получи первый гайд: <br />
            <span style={{fontStyle: 'italic', color: '#a5b4fc'}}>
              "Как слушать свои внутренние голоса"
            </span>
          </p>
          
          {!isSubmitted ? (
            <div className="cta-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Твой email"
                className="cta-input"
              />
              <button onClick={handleSubmit} className="cta-button">
                Начать путь
              </button>
            </div>
          ) : (
            <div style={{
              background: 'rgba(16, 185, 129, 0.3)',
              border: '1px solid #10b981',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              maxWidth: '28rem',
              margin: '0 auto'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>✨</div>
              <h3 style={{color: '#6ee7b7', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem'}}>
                Добро пожаловать в LIMINAL!
              </h3>
              <p style={{color: '#a7f3d0'}}>Гайд уже летит к тебе на почту</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}