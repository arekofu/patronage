export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">

      {/* Декоративный фон */}

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2">

        {/* ТЕКСТ */}

        <div>

          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Забота о близких
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#0b2a5b] md:text-6xl">
            Место, где о ваших близких заботятся каждый день
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Помогаем пожилым людям и людям с ограниченной мобильностью
            получать необходимый уход, внимание и комфорт в безопасных условиях.
          </p>

          {/* КНОПКИ */}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-full bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
              Получить консультацию
            </button>

            <a
              href="#services"
              className="rounded-full border border-blue-200 bg-white px-7 py-4 text-center font-semibold text-[#0b2a5b] transition hover:border-blue-300 hover:bg-blue-50"
            >
              Узнать больше
            </a>

          </div>

          {/* ПРЕИМУЩЕСТВА */}

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-600">

            <span className="flex items-center gap-2">
              <span className="text-blue-700">✓</span>
              Круглосуточный уход
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-700">✓</span>
              Опытные специалисты
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-700">✓</span>
              Индивидуальный подход
            </span>

          </div>

        </div>

        {/* ФОТО */}

        <div className="relative">

          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-200/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-200 shadow-2xl shadow-blue-900/10">

            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100">

              <div className="text-center">

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-blue-700 shadow-lg">
                  +
                </div>

                <span className="text-sm text-slate-500">
                  Здесь будет фотография
                </span>

              </div>

            </div>

          </div>

          {/* КАРТОЧКА */}

          <div className="absolute -bottom-7 -left-5 hidden w-64 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl md:block">

            <div className="text-sm font-semibold text-[#0b2a5b]">
              Забота начинается с доверия
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Здесь будет короткая информация о вашем подходе к работе.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
