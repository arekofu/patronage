export default function DailyLife() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Обычный день
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b2a5b] md:text-5xl">
            Здесь живут, а не просто получают уход
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Нам важно, чтобы каждый день состоял не только из необходимых
            процедур, но и из привычных вещей: общения, отдыха, спокойного
            утра и ощущения домашнего пространства.
          </p>
        </div>

        {/* Большая фотография */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl">
          <div className="flex aspect-[16/7] items-center justify-center bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-blue-700 shadow-lg">
                +
              </div>

              <span className="text-sm text-slate-500">
                Здесь будет фотография общей зоны
              </span>
            </div>
          </div>
        </div>

        {/* Три части дня */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-[#f5f9ff] p-7">
            <div className="text-sm font-semibold text-blue-700">
              Утро
            </div>

            <h3 className="mt-3 text-xl font-semibold text-[#0b2a5b]">
              Спокойное начало дня
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Привычный распорядок, завтрак и помощь в тех вещах,
              которые человеку сложно выполнять самостоятельно.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f5f9ff] p-7">
            <div className="text-sm font-semibold text-blue-700">
              Днём
            </div>

            <h3 className="mt-3 text-xl font-semibold text-[#0b2a5b]">
              Общение и занятия
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Общение, отдых и другие занятия в зависимости
              от возможностей и привычек человека.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f5f9ff] p-7">
            <div className="text-sm font-semibold text-blue-700">
              Вечером
            </div>

            <h3 className="mt-3 text-xl font-semibold text-[#0b2a5b]">
              Тишина и отдых
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Спокойная атмосфера, привычный ритм и возможность
              провести вечер без спешки.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
