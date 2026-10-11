import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownNormativa, setDropdownNormativa] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGoToSection = (e, href) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setDropdownNormativa(false);

    const element = document.getElementById(href.replace('#', ''));

    if (element) {
      e.preventDefault();
      window.history.pushState(null, '', href);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const patrimonioSubsections = [
    { name: 'Turismo', href: '#turismo' },
    { name: 'Cultura', href: '#cultura' },
    { name: 'Arquitectura', href: '#arquitectura' },
    { name: 'Arqueología', href: '#arqueologia' },
  ];

  const normativasSubsections = [
    {
      name: 'Ley Municipal 055',
      href: '#normativa-055',
      desc: 'Reglamento de Áreas Históricas',
    },
    {
      name: 'Ley Municipal 122',
      href: '#normativa-122',
      desc: 'Conservación Patrimonial',
    },
  ];

  const linkClass = `text-lg xl:text-xl font-extrabold uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent whitespace-nowrap ${
    isScrolled
      ? 'text-zinc-900 hover:text-amber-600 hover:border-amber-600'
      : 'text-white hover:text-amber-300 hover:border-amber-300'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/[0.38] backdrop-blur-xl border-amber-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
          : 'bg-zinc-950/35 backdrop-blur-md border-amber-500/30'
      }`}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-red-700 via-orange-500 to-amber-500" />

      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-42 flex items-center justify-between relative">
        {/* Logo de Patrimonio Histórico */}
        <a
          href="#inicio"
          onClick={(e) => handleGoToSection(e, '#inicio')}
          className="flex items-center -ml-65 gap-3 md:gap-4 group z-30"
        >
          <img
            src="/images/images.png"
            alt="Logo Dirección de Patrimonio Histórico"
            className="h-10 sm:h-16 md:h-43 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Menú de escritorio */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 my-auto -ml-12 xl:-ml-20">
          {/* Inicio sin desplegable */}
          <a
            href="#inicio"
            onClick={(e) => handleGoToSection(e, '#inicio')}
            className={linkClass}
          >
            Inicio
          </a>

          {/* Patrimonio */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setDropdownNormativa(false);
              }}
              aria-expanded={dropdownOpen}
              aria-controls="submenu-patrimonio"
              className={linkClass}
            >
              Patrimonio
            </button>

            {dropdownOpen && (
              <div
                id="submenu-patrimonio"
                className="absolute top-full left-0 w-64 pt-3 z-50 animate-fadeIn"
              >
                <div className="bg-[#faf7f2] text-zinc-900 rounded-xl shadow-xl border border-stone-200 overflow-hidden">
                  <div className="px-5 py-3 border-b border-stone-200">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                      Áreas de Patrimonio
                    </span>
                  </div>

                  <div className="p-2">
                    {patrimonioSubsections.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => handleGoToSection(e, sub.href)}
                        className="block px-4 py-3 rounded-lg text-lg font-semibold text-zinc-800 transition-colors hover:bg-orange-100 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-orange-600"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Normativa */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setDropdownNormativa(true)}
            onMouseLeave={() => setDropdownNormativa(false)}
          >
            <a
              href="#normativas"
              onClick={(e) => handleGoToSection(e, '#normativas')}
              onFocus={() => setDropdownNormativa(true)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setDropdownNormativa(false);
                }

                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setDropdownNormativa(true);
                }
              }}
              aria-expanded={dropdownNormativa}
              aria-controls="submenu-normativa"
              className={linkClass}
            >
              Normativa
            </a>

            {dropdownNormativa && (
              <div
                id="submenu-normativa"
                className="absolute top-full left-0 w-80 pt-3 z-50 animate-fadeIn"
              >
                <div className="bg-[#faf7f2] text-zinc-900 rounded-xl shadow-xl border border-stone-200 overflow-hidden">
                  <div className="px-5 py-3 border-b border-stone-200">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                      Leyes Municipales
                    </span>
                  </div>

                  <div className="p-2">
                    {normativasSubsections.map((norma) => (
                      <a
                        key={norma.name}
                        href={norma.href}
                        onClick={(e) => handleGoToSection(e, norma.href)}
                        className="block px-4 py-3 rounded-lg transition-colors hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-orange-600 group"
                      >
                        <span className="block text-lg font-semibold text-zinc-800 group-hover:text-orange-800">
                          {norma.name}
                        </span>

                        <span className="block mt-1 text-sm leading-relaxed text-stone-600">
                          {norma.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Trámites */}
          <a
            href="#tramites"
            onClick={(e) => handleGoToSection(e, '#tramites')}
            className={linkClass}
          >
            Trámites
          </a>

          {/* Planes y Programas */}
          <a
            href="#planes"
            onClick={(e) => handleGoToSection(e, '#planes')}
            className={linkClass}
          >
            Planes y Programas
          </a>

          {/* Información */}
          <a
            href="#historia"
            onClick={(e) => handleGoToSection(e, '#historia')}
            className={`text-lg xl:text-xl font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all shadow-md whitespace-nowrap ${
              isScrolled
                ? 'text-amber-950 bg-amber-500/30 hover:bg-amber-500/40 border-amber-600/60'
                : 'text-amber-300 hover:text-white bg-amber-500/20 hover:bg-amber-500/30 border-amber-400/40'
            }`}
          >
            Información
          </a>
        </div>

        {/* Botón móvil y escudo a la derecha */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 ml-4">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 z-30 ${
              isScrolled ? 'text-zinc-900' : 'text-white'
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <img
            src="/images/escudo.png"
            alt="Escudo de Potosí"
            className="h-12 sm:h-16 md:h-24 w-auto object-contain"
          />
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div
          id="menu-movil"
          className={`lg:hidden border-b-2 border-amber-500/50 px-6 py-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto ${
            isScrolled
              ? 'bg-white/90 text-zinc-900'
              : 'bg-zinc-950 text-white'
          }`}
        >
          <a
            href="#inicio"
            onClick={(e) => handleGoToSection(e, '#inicio')}
            className="text-xl font-bold uppercase tracking-wider"
          >
            Inicio
          </a>

          <div className="rounded-xl bg-[#faf7f2] text-zinc-900 border border-stone-200 overflow-hidden">
            <div className="px-5 py-3 border-b border-stone-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Patrimonio
              </span>
            </div>

            <div className="p-2">
              {patrimonioSubsections.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.href}
                  onClick={(e) => handleGoToSection(e, sub.href)}
                  className="block px-4 py-3 rounded-lg text-lg font-semibold transition-colors hover:bg-orange-100 hover:text-orange-800"
                >
                  {sub.name}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#faf7f2] text-zinc-900 border border-stone-200 overflow-hidden">
            <a
              href="#normativas"
              onClick={(e) => handleGoToSection(e, '#normativas')}
              className="block px-5 py-3 border-b border-stone-200 text-xs font-semibold uppercase tracking-widest text-stone-500"
            >
              Normativa
            </a>

            <div className="p-2">
              {normativasSubsections.map((norma) => (
                <a
                  key={norma.name}
                  href={norma.href}
                  onClick={(e) => handleGoToSection(e, norma.href)}
                  className="block px-4 py-3 rounded-lg transition-colors hover:bg-orange-100 group"
                >
                  <span className="block text-lg font-semibold group-hover:text-orange-800">
                    {norma.name}
                  </span>

                  <span className="block mt-1 text-sm leading-relaxed text-stone-600">
                    {norma.desc}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="#tramites"
            onClick={(e) => handleGoToSection(e, '#tramites')}
            className="text-xl font-bold uppercase tracking-wider"
          >
            Trámites
          </a>

          <a
            href="#planes"
            onClick={(e) => handleGoToSection(e, '#planes')}
            className="text-xl font-bold uppercase tracking-wider"
          >
            Planes y Programas
          </a>

          <a
            href="#historia"
            onClick={(e) => handleGoToSection(e, '#historia')}
            className="text-xl font-bold uppercase tracking-wider text-amber-600"
          >
            Información
          </a>
        </div>
      )}
    </header>
  );
}