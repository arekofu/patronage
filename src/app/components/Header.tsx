export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div>
          <div className="text-xl font-bold tracking-tight text-[#0b2a5b]">
            НАЗВАНИЕ
          </div>

          <div className="text-xs text-slate-500">
            Забота и поддержка
          </div>
        </div>

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
  );
}