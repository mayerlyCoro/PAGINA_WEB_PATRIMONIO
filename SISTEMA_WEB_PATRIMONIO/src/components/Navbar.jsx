
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ============================================================
// ENLACES DEL NAVBAR
// ============================================================

const enlaces = [
  { nombre: "INICIO", ruta: "/" },
  { nombre: "PATRIMONIO", ruta: "/#patrimonio" },
  { nombre: "NORMATIVA", ruta: "/#normativas" },
  { nombre: "TRÁMITES", ruta: "/#tramites" },
  { nombre: "PLANES", ruta: "/#planes" },
];

// ============================================================
// NAVBAR PRINCIPAL
// ============================================================

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef(null);

  const [reducido, setReducido] = useState(false);
  const [menuMovil, setMenuMovil] = useState(false);

  // ==========================================================
  // CONTROL DEL TAMAÑO DEL NAVBAR
  // ==========================================================

  useEffect(() => {
    const comprobarScroll = () => {
      setReducido(window.scrollY > 100);
    };

    comprobarScroll();

    window.addEventListener("scroll", comprobarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        comprobarScroll
      );
    };
  }, [location.pathname]);

  // ==========================================================
  // CERRAR MENÚ AL CAMBIAR DE RUTA
  // ==========================================================

  useEffect(() => {
    setMenuMovil(false);
  }, [location.pathname, location.hash]);

  // ==========================================================
  // CERRAR MENÚ AL HACER CLIC FUERA O PRESIONAR ESCAPE
  // ==========================================================

  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMenuMovil(false);
      }
    };

    const cerrarFuera = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuMovil(false);
      }
    };

    document.addEventListener(
      "keydown",
      cerrarConEscape
    );

    document.addEventListener(
      "pointerdown",
      cerrarFuera
    );

    return () => {
      document.removeEventListener(
        "keydown",
        cerrarConEscape
      );

      document.removeEventListener(
        "pointerdown",
        cerrarFuera
      );
    };
  }, []);

  // ==========================================================
  // NAVEGAR A SECCIONES
  // ==========================================================

  const navegarSeccion = (ruta) => {
    setMenuMovil(false);

    if (
      location.pathname === "/" &&
      ruta.startsWith("/#") &&
      location.hash === ruta.slice(1)
    ) {
      const id = ruta.split("#")[1];
      const elemento = document.getElementById(id);

      if (elemento) {
        const reducirMovimiento = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        elemento.scrollIntoView({
          block: "start",
          behavior: reducirMovimiento
            ? "instant"
            : "smooth",
        });
      }
    }
  };

  // ==========================================================
  // ESTILOS DE ENLACES
  // ==========================================================

  const enlace = `
    inline-flex items-center whitespace-nowrap
    border-b-2 border-transparent py-2
    text-[13px] font-extrabold uppercase
    tracking-[0.025em] transition-colors duration-300
    2xl:text-[15px]
    focus-visible:outline-2 focus-visible:outline-amber-400
    ${
      reducido
        ? "text-[#302C26] hover:border-orange-600 hover:text-orange-700"
        : "text-white hover:border-amber-400 hover:text-amber-300"
    }
  `;

  const enlaceMovil = `
    flex w-full items-center justify-between
    rounded-lg px-4 py-3
    text-sm font-bold uppercase tracking-wide
    ${
      reducido
        ? "text-[#302C26] hover:bg-orange-100"
        : "text-white hover:bg-white/10"
    }
  `;

  // ==========================================================
  // RENDERIZADO
  // ==========================================================

  return (
    <header
      ref={navRef}
      className={`
        fixed inset-x-0 top-0 z-50
        border-b transition-all duration-500
        ${
          reducido
            ? "border-[#D7C6AF]/50 bg-[#F0EADF]/75 shadow-lg backdrop-blur-xl"
            : "border-amber-500/25 bg-zinc-950/35 backdrop-blur-md"
        }
      `}
    >
      {/* ANIMACIONES DE LOGOS */}

      <style>{`
        @keyframes giroPatrimonio {
          0% {
            transform: rotateY(0deg);
          }

          65% {
            transform: rotateY(360deg);
          }

          100% {
            transform: rotateY(360deg);
          }
        }

        .logo-giro-patrimonio {
          animation: giroPatrimonio 5s ease-in-out infinite;
          transform-origin: center;
          backface-visibility: visible;
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-giro-patrimonio {
            animation: none;
          }
        }
      `}</style>

      {/* FRANJA SUPERIOR */}

      <div
        className={`
          w-full
          bg-gradient-to-r
          from-red-700 via-orange-500 to-amber-500
          ${reducido ? "h-[2px]" : "h-1"}
        `}
      />

      {/* ======================================================
          BARRA PRINCIPAL
          ====================================================== */}

      <nav
        aria-label="Navegación principal"
        className={`
          mx-auto flex w-full max-w-[1900px]
          items-center justify-between gap-3 px-3
          transition-all duration-500
          sm:px-5 xl:px-8
          ${
            reducido
              ? "h-16 md:h-[76px] xl:h-20"
              : "h-24 md:h-32 xl:h-36"
          }
        `}
      >
        {/* LOGO PRINCIPAL */}

        <Link
          to="/"
          onClick={() => setMenuMovil(false)}
          aria-label="Ir al inicio"
          className="shrink-0"
        >
          <img
            src="/images/images.png"
            alt="Dirección de Patrimonio Histórico"
            className={`
              w-auto object-contain
              transition-all duration-500
              ${
                reducido
                  ? "h-12 md:h-14 xl:h-16"
                  : "h-20 md:h-24 xl:h-28 2xl:h-32"
              }
            `}
          />
        </Link>

        {/* ==================================================
            ENLACES ESCRITORIO
            ================================================== */}

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-7">
          {enlaces.map((item) => (
            <Link
              key={item.nombre}
              to={item.ruta}
              onClick={() => navegarSeccion(item.ruta)}
              className={enlace}
            >
              {item.nombre}
            </Link>
          ))}

          {/* POTOSÍ DE ANTAÑO */}

          <Link
            to="/informacion"
            onClick={() => setMenuMovil(false)}
            className={`
              whitespace-nowrap rounded-full border
              px-4 py-2 text-xs font-extrabold
              uppercase tracking-wide
              transition-colors 2xl:text-sm
              ${
                reducido
                  ? "border-amber-600/60 bg-amber-100/80 text-amber-950 hover:bg-amber-200"
                  : "border-amber-400/60 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
              }
            `}
          >
            MEMORIAL POTOSÍ
          </Link>
        </div>

        {/* ==================================================
            LOGOS INSTITUCIONALES
            ================================================== */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* LOGO MUNICIPAL */}

          <img
            src="/images/potosi.png"
            alt="Gobierno Autónomo Municipal de Potosí"
            className={`
              logo-giro-patrimonio
              w-auto object-contain
              transition-[height] duration-500
              ${
                reducido
                  ? "h-10 sm:h-12 xl:h-16"
                  : "h-12 sm:h-16 md:h-20 xl:h-24 2xl:h-28"
              }
            `}
          />

          {/* DIVISIÓN */}

          <div
            className={`
              w-px shrink-0
              ${
                reducido
                  ? "h-9 bg-stone-500/60"
                  : "h-14 bg-white/60 xl:h-20"
              }
            `}
          />

          {/* ESCUDO MUNICIPAL */}

          <img
            src="/images/escudo.png"
            alt="Escudo municipal de Potosí"
            className={`
              logo-giro-patrimonio
              w-auto object-contain
              transition-[height] duration-500
              ${
                reducido
                  ? "h-10 sm:h-12 xl:h-16"
                  : "h-12 sm:h-16 md:h-20 xl:h-24 2xl:h-28"
              }
            `}
          />

          {/* BOTÓN MENÚ MÓVIL */}

          <button
            type="button"
            aria-label={
              menuMovil
                ? "Cerrar menú"
                : "Abrir menú"
            }
            aria-expanded={menuMovil}
            aria-controls="menu-movil"
            onClick={() => setMenuMovil(!menuMovil)}
            className={`
              rounded-lg p-2 xl:hidden
              ${
                reducido
                  ? "text-zinc-900"
                  : "text-white"
              }
            `}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
              aria-hidden="true"
            >
              {menuMovil ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ======================================================
          MENÚ MÓVIL
          ====================================================== */}

      {menuMovil && (
        <div
          id="menu-movil"
          className={`
            max-h-[75dvh] overflow-y-auto
            border-t border-amber-500/25
            px-4 py-4 shadow-xl
            backdrop-blur-xl xl:hidden
            ${
              reducido
                ? "bg-[#F0EADF]/95"
                : "bg-zinc-950/95"
            }
          `}
        >
          <div className="mx-auto max-w-2xl space-y-1">
            {enlaces.map((item) => (
              <Link
                key={item.nombre}
                to={item.ruta}
                onClick={() => navegarSeccion(item.ruta)}
                className={enlaceMovil}
              >
                {item.nombre}
              </Link>
            ))}

            <Link
              to="/informacion"
              onClick={() => setMenuMovil(false)}
              className={enlaceMovil}
            >
              POTOSÍ DE ANTAÑO
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
