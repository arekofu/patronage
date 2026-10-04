
import hero from "C:\Projects\patronage-site\src\app\components\hero.tsx";
import DailyLife from "C:\Projects\patronage-site\src\app\components\DailyLife.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <DailyLife />
      {/* ================= HEADER ================= */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* ЛОГОТИП */}
          <div>
            <div className="text-xl font-bold tracking-tight text-[#0b2a5b]">
              НАЗВАНИЕ
            </div>
            <div className="text-xs text-slate-500">
              Забота и поддержка
            </div>
          </div>

          {/* НАВИГАЦИЯ */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-slate-600 transition hover:text-blue-700"
            >
              О компании
            </a>

            <a
              href="#services"
              className="text-sm text-slate-600 transition hover:text-blue-700"
            >
              Услуги
            </a>

            <a
              href="#conditions"
              className="text-sm text-slate-600 transition hover:text-blue-700"
            >
              Условия
            </a>

            <a
              href="#contacts"
              className="text-sm text-slate-600 transition hover:text-blue-700"
            >
              Контакты
            </a>
          </nav>

          {/* КОНТАКТЫ */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="tel:+70000000000"
              className="text-sm font-medium text-slate-900"
            >
              +7 (000) 000-00-00
            </a>

            <button className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
              Получить консультацию
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">

        {/* Декоративное пятно */}
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

            {/* ИНФОРМАЦИОННАЯ КАРТОЧКА */}

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
      {/* ================= DAILY LIFE ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* Заголовок */}

    <div className="max-w-2xl">

      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
        Обычный день
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b2a5b] md:text-5xl">
        Здесь живут, а не просто получают уход
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Нам важно, чтобы каждый день состоял не только из необходимых
        процедур, но и из привычных вещей: общения, отдыха, прогулок,
        спокойного утра и ощущения домашнего пространства.
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

    {/* Сценарии дня */}

    <div className="mt-6 grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl bg-[#f5f9ff] p-7">

        <div className="text-sm font-semibold text-blue-700">
          Утро
        </div>

        <h3 className="mt-3 text-xl font-semibold text-[#0b2a5b]">
          Спокойное начало дня
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Завтрак, привычный распорядок и помощь в тех вещах,
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
          Общение, отдых, прогулки и другие занятия в зависимости
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

      {/* ================= TRUST ================= */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-6 md:grid-cols-3 md:divide-x md:divide-y-0">

          <div className="px-6 py-8 text-center md:text-left">
            <div className="text-3xl font-semibold text-blue-700">
              01
            </div>

            <h3 className="mt-3 font-semibold text-[#0b2a5b]">
              Люди
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Кто будет рядом с вашим близким каждый день.
            </p>
          </div>

          <div className="px-6 py-8 text-center md:text-left">
            <div className="text-3xl font-semibold text-blue-700">
              02
            </div>

            <h3 className="mt-3 font-semibold text-[#0b2a5b]">
              Условия
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Где живёт человек и как организован его быт.
            </p>
          </div>

          <div className="px-6 py-8 text-center md:text-left">
            <div className="text-3xl font-semibold text-blue-700">
              03
            </div>

            <h3 className="mt-3 font-semibold text-[#0b2a5b]">
              Открытость
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Вы понимаете, что происходит с вашим близким.
            </p>
          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Наши услуги
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b2a5b] md:text-5xl">
              Помощь, которую можно подобрать под ситуацию
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Подбираем формат ухода и поддержки в зависимости от состояния,
              образа жизни и потребностей человека.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {


title: "Постоянный уход",
                text: "Ежедневная помощь, наблюдение и поддержка.",
              },
              {
                title: "Временное размещение",
                text: "Решение на период восстановления или отсутствия родственников.",
              },
              {
                title: "Индивидуальная помощь",
                text: "Формат под конкретные потребности человека.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-semibold text-blue-700">
                  +
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0b2a5b]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>

                <a
                  href="#contacts"
                  className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Узнать подробнее →
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= HOW TO START ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-14 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Как начать
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
                Всё начинается с разговора
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Расскажите нам о ситуации вашего близкого. Мы зададим
                необходимые вопросы и поможем подобрать подходящий вариант.
              </p>

              <button className="mt-8 rounded-full bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
                Получить консультацию
              </button>

            </div>

            <div className="space-y-4">

              {[
                ["01", "Расскажите о ситуации", "Коротко обсудим состояние и потребности человека."],
                ["02", "Подберём вариант", "Объясним доступные форматы и условия."],
                ["03", "Ответим на вопросы", "Вы сможете спокойно принять решение."],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                    {number}
                  </div>

                  <div>

                    <h3 className="font-semibold text-[#0b2a5b]">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONDITIONS ================= */}

      <section id="conditions" className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Условия
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
              Важные вещи должны быть понятны


заранее
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Мы считаем важным заранее рассказывать о размещении,
              уходе, бытовых условиях и взаимодействии с родственниками.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Условия проживания",
              "Питание",
              "Ежедневный уход",
              "Взаимодействие с родственниками",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >

                <div className="text-2xl text-blue-700">+</div>

                <h3 className="mt-5 font-semibold text-[#0b2a5b]">
                  {item}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Здесь будет подробная информация.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= TEAM ================= */}

      <section id="about" className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div className="overflow-hidden rounded-[2rem] bg-slate-100">

              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 text-sm text-slate-500">
                Здесь будет фотография команды
              </div>

            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                О компании
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
                За заботой стоят конкретные люди
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Здесь мы расскажем о команде, опыте сотрудников,
                принципах работы и о том, почему нам можно доверить
                заботу о близком человеке.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Опытные сотрудники",
                  "Понятные правила работы",
                  "Индивидуальное отношение",
                ].map((item) => (

                  <div key={item} className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      ✓
                    </div>

                    <span className="text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SAFETY ================= */}

      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Безопасность
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
              Спокойствие родственников тоже важно
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              "Контроль состояния",
              "Организация ухода",
              "Связь с родственниками",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  ✓
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0b2a5b]">
                  {item}
                </h3>

                <p


className="mt-3 leading-7 text-slate-600">
                  Здесь будет конкретная информация о том,
                  как это организовано у вас.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= REVIEWS ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Отзывы
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
              Истории семей
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              "Здесь будет настоящий отзыв клиента.",
              "Здесь будет настоящий отзыв клиента.",
              "Здесь будет настоящий отзыв клиента.",
            ].map((text, index) => (

              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >

                <div className="text-2xl text-blue-700">
                  “
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {text}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5 text-sm font-medium text-[#0b2a5b]">
                  Имя клиента
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PRICING ================= */}

      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Стоимость
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
              Условия и стоимость
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Здесь будут реальные тарифы и подробное описание того,
              что входит в стоимость.
            </p>

          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-xl font-semibold text-[#0b2a5b]">
                  Индивидуальный расчёт
                </h3>

                <p className="mt-2 text-slate-500">
                  Стоимость зависит от выбранного формата и потребностей.
                </p>

              </div>

              <button className="rounded-full bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
                Узнать стоимость
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#0b2a5b] md:text-5xl">
              Частые вопросы
            </h2>

          </div>

          <div className="mt-12 space-y-4">

            {[
              "Как проходит первое обращение?",
              "Можно ли приехать и посмотреть условия?",
              "Как организовано питание?",
              "Как родственники получают информацию?",
              "Что входит в стоимость?",
            ].map((question) => (

              <div
                key={question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >

                <div className="flex items-center justify-between gap-5">


<span className="font-semibold text-[#0b2a5b]">

                  {question}
                  </span>

                  <span className="text-xl text-blue-700">
                    +
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2a5b] px-8 py-16 text-center text-white shadow-2xl shadow-blue-900/20 md:px-16">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Мы готовы поговорить
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Давайте обсудим ситуацию вашего близкого
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                Расскажите нам о ситуации — мы ответим на вопросы
                и объясним, какие варианты могут подойти.
              </p>

              <button className="mt-8 rounded-full bg-white px-7 py-4 font-semibold text-[#0b2a5b] transition hover:bg-blue-50">
                Получить консультацию
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer id="contacts" className="bg-[#06182f] text-white">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="grid gap-10 md:grid-cols-3">

            <div>

              <div className="text-xl font-bold">
                НАЗВАНИЕ
              </div>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                Забота и поддержка для пожилых людей
                и людей с ограниченной мобильностью.
              </p>

            </div>

            <div>

              <div className="font-semibold">
                Контакты
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <div>
                  +7 (000) 000-00-00
                </div>

                <div>
                  example@mail.ru
                </div>

              </div>

            </div>

            <div>

              <div className="font-semibold">
                Навигация
              </div>

              <div className="mt-4 space-y-2 text-sm">

                <a
                  href="#about"
                  className="block text-slate-400 transition hover:text-white"
                >
                  О компании
                </a>

                <a
                  href="#services"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Услуги
                </a>

                <a
                  href="#conditions"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Условия
                </a>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
            © 2026 НАЗВАНИЕ. Все права защищены.
          </div>

        </div>

      </footer>

    </main>

  );
}
    







