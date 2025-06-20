
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-[#0A0A0F] to-[#1a1a2e] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          От тревоги к <span className="text-indigo-400">доверию</span>.  
          <br />
          От хаоса к <span className="text-pink-400">ясности</span>.
        </h1>
        <p className="text-lg opacity-80 max-w-xl">
          <span className="text-indigo-200">LIMINAL</span> — твой путь к <span className="italic">внутренней свободе</span>
        </p>
      </section>

      {/* What LIMINAL Gives */}
      <section className="bg-black/20 py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Что даст тебе LIMINAL?</h2>
        <ul className="space-y-4 text-lg max-w-md mx-auto text-left">
          <li className="flex items-center gap-3">
            ✅ <span>Понимание себя и своих эмоций</span>
          </li>
          <li className="flex items-center gap-3">
            ✅ <span>Уверенность и самостоятельность</span>
          </li>
          <li className="flex items-center gap-3">
            ✅ <span>Поддержку в моменте</span>
          </li>
        </ul>
      </section>

      {/* Transformation Path */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Путь трансформации</h2>
        <ol className="max-w-2xl mx-auto space-y-6 border-l border-indigo-500 pl-6 text-left">
          <li>
            <span className="font-bold text-indigo-300">1. Руководство:</span>{' '}
            LIMINAL помогает распознать паттерны и эмоции
          </li>
          <li>
            <span className="font-bold text-indigo-300">2. Со-навигация:</span>{' '}
            Ты начинаешь распознавать их сам
          </li>
          <li>
            <span className="font-bold text-indigo-300">3. Внутренний совет:</span>{' '}
            Эмоции становятся союзниками
          </li>
          <li>
            <span className="font-bold text-indigo-300">4. Суверенность:</span>{' '}
            Ты — свой лучший навигатор
          </li>
        </ol>
      </section>

      {/* Email CTA */}
      <section className="bg-indigo-950 py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Хочешь начать путь?</h2>
        <p className="mb-6">
          Оставь email и получи первый гайд: <br />
          <span className="italic text-indigo-200">"Как слушать свои внутренние голоса"</span>
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Твой email"
            className="flex-1 px-6 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-bold transition"
          >
            Хочу начать путь
          </button>
        </form>
      </section>
    </main>
  );
}
