export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl">
          От тревоги к <span className="text-indigo-400">доверию</span>.  
          <br />
          От хаоса к <span className="text-pink-400">ясности</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
          <span className="text-indigo-300 font-semibold">LIMINAL</span> — твой путь к <span className="italic text-pink-300">внутренней свободе</span>
        </p>
      </section>

      {/* What LIMINAL Gives */}
      <section className="bg-slate-800/50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Что даст тебе LIMINAL?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 hover:border-indigo-400 transition-colors">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-semibold mb-2 text-lg">Понимание себя</h3>
              <p className="text-slate-300">Разберись в своих эмоциях и паттернах поведения</p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 hover:border-pink-400 transition-colors">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold mb-2 text-lg">Уверенность</h3>
              <p className="text-slate-300">Стань самостоятельным и принимай решения с уверенностью</p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600 hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2 text-lg">Поддержка</h3>
              <p className="text-slate-300">Получай помощь именно тогда, когда она нужна</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Path */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Путь трансформации</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400 hover:bg-indigo-900/30 transition-colors">
              <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
              <div>
                <h3 className="font-bold text-indigo-300 mb-2 text-lg">Руководство</h3>
                <p className="text-slate-300">LIMINAL помогает распознать паттерны и эмоции</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-purple-900/20 rounded-lg border-l-4 border-purple-400 hover:bg-purple-900/30 transition-colors">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">2</div>
              <div>
                <h3 className="font-bold text-purple-300 mb-2 text-lg">Со-навигация</h3>
                <p className="text-slate-300">Ты начинаешь распознавать их сам</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-pink-900/20 rounded-lg border-l-4 border-pink-400 hover:bg-pink-900/30 transition-colors">
              <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">3</div>
              <div>
                <h3 className="font-bold text-pink-300 mb-2 text-lg">Внутренний совет</h3>
                <p className="text-slate-300">Эмоции становятся союзниками</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-emerald-900/20 rounded-lg border-l-4 border-emerald-400 hover:bg-emerald-900/30 transition-colors">
              <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">4</div>
              <div>
                <h3 className="font-bold text-emerald-300 mb-2 text-lg">Суверенность</h3>
                <p className="text-slate-300">Ты — свой лучший навигатор</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="bg-gradient-to-r from-indigo-900/50 to-pink-900/50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Хочешь начать путь?</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-300">
            Оставь email и получи первый гайд: <br />
            <span className="italic text-indigo-300 font-medium">"Как слушать свои внутренние голоса"</span>
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Твой email"
              className="flex-1 px-6 py-4 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg shadow-lg placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Начать путь
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}