
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

// ============================================================
// ICONO DE FLECHA
// ============================================================

function Flecha({ abierta = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 transition-transform ${
        abierta ? 'rotate-180' : ''
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// ============================================================
// NAVBAR PRINCIPAL
// ============================================================

export default function Navbar() {
  const headerRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  // DETECTAR SI ESTAMOS EN INICIO

  const [isHome, setIsHome] = useState(
    window.location.hash === '' ||
      window.location.hash === '#inicio'
  );

  // DETECTAR DESPLAZAMIENTO

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    updateScroll();

    window.addEventListener('scroll', updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  // DETECTAR CAMBIOS DE HASH Y NAVEGACIÓN DEL NAVEGADOR

  useEffect(() => {
    const updateHome = () => {
      setIsHome(
        window.location.hash === '' ||
          window.location.hash === '#inicio'
      );
    };

    window.addEventListener('hashchange', updateHome);
    window.addEventListener('popstate', updateHome);

    return () => {
      window.removeEventListener('hashchange', updateHome);
      window.removeEventListener('popstate', updateHome);
    };
  }, []);

  // CERRAR MENÚS CON ESCAPE O AL HACER CLIC FUERA

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setOpenDropdown(null);
        setMobileExpanded(null);
      }
    };

    const handleOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener(
        'pointerdown',
        handleOutsideClick
      );
    };
  }, []);

  // CERRAR TODOS LOS MENÚS

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  };

  // NAVEGACIÓN ENTRE SECCIONES DE LA PÁGINA PRINCIPAL

  const handleNavigate = (event, href) => {
    closeMenus();

    const target = document.getElementById(href.slice(1));

    if (!target) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    if (window.location.hash !== href) {
      window.history.pushState(null, '', href);
    }

    // ACTUALIZAR ESTADO DE INICIO

    setIsHome(href === '#inicio');

    const headerHeight =
      headerRef.current?.offsetHeight ?? 100;

    const top =
      window.scrollY +
      target.getBoundingClientRect().top -
      headerHeight -
      12;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  // ==========================================================
  // ESTILOS ORIGINALES DE LOS ENLACES
  // ==========================================================

  const linkClass = `inline-flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent py-2 text-sm 2xl:text-base font-extrabold uppercase tracking-[0.06em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${
    isScrolled
      ? 'text-zinc-900 hover:border-amber-600 hover:text-amber-700'
      : 'text-white hover:border-amber-400 hover:text-amber-300'
  }`;

  const mobileLinkClass = `block w-full rounded-lg px-3 py-3 text-left text-base font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 ${
    isScrolled
      ? 'text-zinc-900 hover:bg-amber-100'
      : 'text-white hover:bg-white/10'
  }`;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? 'border-amber-500/40 bg-stone-50/95 shadow-lg backdrop-blur-xl'
          : 'border-amber-500/30 bg-zinc-950/30 backdrop-blur-md'
      }`}
    >
      {/* FRANJA SUPERIOR */}

      <div className="h-1 w-full bg-gradient-to-r from-red-700 via-orange-500 to-amber-500" />

      {/* NAVEGACIÓN PRINCIPAL */}

      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-24 w-full max-w-[1900px] items-center justify-between gap-1 px-2 sm:h-28 sm:gap-2 sm:px-4 md:h-32 md:px-6 xl:h-36 xl:gap-3 xl:px-8 2xl:px-10"
      >
        {/* LOGOTIPO DE PATRIMONIO HISTÓRICO */}

        <a
          href="#inicio"
          onClick={(event) =>
            handleNavigate(event, '#inicio')
          }
          aria-label="Ir al inicio"
          className="flex shrink-0 items-center focus-visible:rounded focus-visible:outline-2 focus-visible:outline-amber-400"
        >
          <img
            src="/images/images.png"
            alt="Dirección de Patrimonio Histórico"
            className="h-16 w-auto max-w-[70px] object-contain sm:h-20 sm:max-w-24 md:h-24 md:max-w-28 xl:h-28 xl:max-w-32 2xl:h-32 2xl:max-w-36"
          />
        </a>

        {/* MENÚ DE ESCRITORIO */}

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 2xl:flex 2xl:gap-4">

          {/* INICIO */}

          <a
            href="#inicio"
            onClick={(event) =>
              handleNavigate(event, '#inicio')
            }
            className={linkClass}
          >
            Inicio
          </a>

          {/* PATRIMONIO */}

          <div
            className="relative flex items-center"
            onMouseEnter={() =>
              setOpenDropdown('patrimonio')
            }
            onMouseLeave={() =>
              setOpenDropdown(null)
            }
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget
                )
              ) {
                setOpenDropdown(null);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={
                openDropdown === 'patrimonio'
              }
              aria-controls="submenu-patrimonio"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === 'patrimonio'
                    ? null
                    : 'patrimonio'
                )
              }
              className={linkClass}
            >
              Patrimonio

              <Flecha
                abierta={
                  openDropdown === 'patrimonio'
                }
              />
            </button>

            {openDropdown === 'patrimonio' && (
              <div
                id="submenu-patrimonio"
                className="absolute left-0 top-full z-50 w-64 pt-3"
              >
                <div className="overflow-hidden rounded-xl border border-stone-200 bg-[#faf7f2] text-zinc-900 shadow-xl">
                  <p className="border-b border-stone-200 px-5 py-3 text-xs font-bold uppercase tracking-wider text-stone-500">
                    Áreas de Patrimonio
                  </p>

                  <div className="p-2">
                    {patrimonioSubsections.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(event) =>
                          handleNavigate(event, item.href)
                        }
                        className="block rounded-lg px-4 py-3 font-semibold text-zinc-800 hover:bg-orange-100 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-orange-600"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* NORMATIVA */}

          <div
            className="relative flex items-center gap-1"
            onMouseEnter={() =>
              setOpenDropdown('normativa')
            }
            onMouseLeave={() =>
              setOpenDropdown(null)
            }
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget
                )
              ) {
                setOpenDropdown(null);
              }
            }}
          >
            <a
              href="#normativas"
              onClick={(event) =>
                handleNavigate(event, '#normativas')
              }
              onFocus={() =>
                setOpenDropdown('normativa')
              }
              className={linkClass}
            >
              Normativa
            </a>

            <button
              type="button"
              aria-label="Mostrar leyes municipales"
              aria-expanded={
                openDropdown === 'normativa'
              }
              aria-controls="submenu-normativa"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === 'normativa'
                    ? null
                    : 'normativa'
                )
              }
              className={`rounded p-1 focus-visible:outline-2 focus-visible:outline-amber-400 ${
                isScrolled
                  ? 'text-zinc-900'
                  : 'text-white'
              }`}
            >
              <Flecha
                abierta={
                  openDropdown === 'normativa'
                }
              />
            </button>

            {openDropdown === 'normativa' && (
              <div
                id="submenu-normativa"
                className="absolute left-0 top-full z-50 w-80 pt-3"
              >
                <div className="overflow-hidden rounded-xl border border-stone-200 bg-[#faf7f2] text-zinc-900 shadow-xl">
                  <p className="border-b border-stone-200 px-5 py-3 text-xs font-bold uppercase tracking-wider text-stone-500">
                    Leyes municipales
                  </p>

                  <div className="p-2">
                    {normativasSubsections.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(event) =>
                          handleNavigate(event, item.href)
                        }
                        className="group block rounded-lg px-4 py-3 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-orange-600"
                      >
                        <span className="block font-semibold text-zinc-800 group-hover:text-orange-800">
                          {item.name}
                        </span>

                        <span className="mt-1 block text-sm text-stone-600">
                          {item.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* TRÁMITES */}

          <a
            href="#tramites"
            onClick={(event) =>
              handleNavigate(event, '#tramites')
            }
            className={linkClass}
          >
            Trámites
          </a>

          {/* PLANES Y PROGRAMAS */}

          <a
            href="#planes"
            onClick={(event) =>
              handleNavigate(event, '#planes')
            }
            className={linkClass}
          >
            Planes y Programas
          </a>

          {/* INFORMACIÓN */}

          <Link
            to="/informacion"
            onClick={closeMenus}
            className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm font-extrabold uppercase tracking-[0.05em] transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 2xl:px-4 2xl:text-base ${
              isScrolled
                ? 'border-amber-600/60 bg-amber-100 text-amber-950 hover:bg-amber-200'
                : 'border-amber-400/50 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'
            }`}
          >
            Información
          </Link>

        </div>

        {/* LOGOTIPOS MUNICIPALES */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 2xl:gap-4">

          {/* LOGOTIPO DE POTOSÍ */}

          <img
            src="/images/potosi.png"
            alt="Logotipo de Potosí con el lema Sigamos Construyendo Juntos"
            className={`h-12 w-auto max-w-[72px] shrink-0 object-contain sm:h-16 sm:max-w-24 md:h-20 md:max-w-28 xl:h-24 xl:max-w-36 2xl:h-28 2xl:max-w-40 ${
              isHome ? 'logo-giro' : ''
            }`}
          />

          {/* LÍNEA SEPARADORA */}

          <div
            aria-hidden="true"
            className={`h-10 w-px shrink-0 sm:h-14 md:h-16 xl:h-20 2xl:h-24 ${
              isScrolled
                ? 'bg-stone-400'
                : 'bg-white/60'
            }`}
          />

          {/* ESCUDO MUNICIPAL */}

          <img
            src="/images/escudo.png"
            alt="Escudo del Gobierno Autónomo Municipal de Potosí"
            className={`h-12 w-auto shrink-0 object-contain sm:h-16 md:h-20 xl:h-24 2xl:h-28 ${
              isHome ? 'logo-giro' : ''
            }`}
          />

          {/* BOTÓN PARA MÓVILES Y TABLETAS */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? 'Cerrar menú'
                : 'Abrir menú'
            }
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setMobileExpanded(null);
              setOpenDropdown(null);
            }}
            className={`rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-amber-400 2xl:hidden ${
              isScrolled
                ? 'text-zinc-900'
                : 'text-white'
            }`}
          >
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* MENÚ MÓVIL */}

      {menuOpen && (
        <div
          id="menu-movil"
          className={`max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-amber-500/30 px-4 py-4 shadow-xl sm:max-h-[calc(100dvh-7rem)] md:max-h-[calc(100dvh-8rem)] xl:max-h-[calc(100dvh-9rem)] 2xl:hidden ${
            isScrolled
              ? 'bg-stone-50 text-zinc-900'
              : 'bg-zinc-950 text-white'
          }`}
        >
          <div className="mx-auto flex max-w-2xl flex-col gap-1">

            {/* INICIO */}

            <a
              href="#inicio"
              onClick={(event) =>
                handleNavigate(event, '#inicio')
              }
              className={mobileLinkClass}
            >
              Inicio
            </a>

            {/* PATRIMONIO */}

            <button
              type="button"
              aria-expanded={
                mobileExpanded === 'patrimonio'
              }
              aria-controls="patrimonio-movil"
              onClick={() =>
                setMobileExpanded(
                  mobileExpanded === 'patrimonio'
                    ? null
                    : 'patrimonio'
                )
              }
              className={`${mobileLinkClass} flex items-center justify-between`}
            >
              Patrimonio

              <Flecha
                abierta={
                  mobileExpanded === 'patrimonio'
                }
              />
            </button>

            {mobileExpanded === 'patrimonio' && (
              <div
                id="patrimonio-movil"
                className="ml-3 rounded-lg bg-[#faf7f2] p-2 text-zinc-900"
              >
                {patrimonioSubsections.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavigate(event, item.href)
                    }
                    className="block rounded-lg px-4 py-3 font-semibold hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-orange-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            {/* NORMATIVA */}

            <div className="flex items-center justify-between gap-2">
              <a
                href="#normativas"
                onClick={(event) =>
                  handleNavigate(event, '#normativas')
                }
                className={`${mobileLinkClass} flex-1`}
              >
                Normativa
              </a>

              <button
                type="button"
                aria-label="Mostrar leyes municipales"
                aria-expanded={
                  mobileExpanded === 'normativa'
                }
                aria-controls="normativa-movil"
                onClick={() =>
                  setMobileExpanded(
                    mobileExpanded === 'normativa'
                      ? null
                      : 'normativa'
                  )
                }
                className={`rounded-lg p-3 focus-visible:outline-2 focus-visible:outline-amber-400 ${
                  isScrolled
                    ? 'text-zinc-900'
                    : 'text-white'
                }`}
              >
                <Flecha
                  abierta={
                    mobileExpanded === 'normativa'
                  }
                />
              </button>
            </div>

            {mobileExpanded === 'normativa' && (
              <div
                id="normativa-movil"
                className="ml-3 rounded-lg bg-[#faf7f2] p-2 text-zinc-900"
              >
                {normativasSubsections.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavigate(event, item.href)
                    }
                    className="block rounded-lg px-4 py-3 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-orange-600"
                  >
                    <span className="block font-semibold">
                      {item.name}
                    </span>

                    <span className="block text-sm text-stone-600">
                      {item.desc}
                    </span>
                  </a>
                ))}
              </div>
            )}

            {/* TRÁMITES */}

            <a
              href="#tramites"
              onClick={(event) =>
                handleNavigate(event, '#tramites')
              }
              className={mobileLinkClass}
            >
              Trámites
            </a>

            {/* PLANES Y PROGRAMAS */}

            <a
              href="#planes"
              onClick={(event) =>
                handleNavigate(event, '#planes')
              }
              className={mobileLinkClass}
            >
              Planes y Programas
            </a>

            {/* INFORMACIÓN MÓVIL */}

            <Link
              to="/informacion"
              onClick={closeMenus}
              className={`${mobileLinkClass} text-amber-500`}
            >
              Información
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
