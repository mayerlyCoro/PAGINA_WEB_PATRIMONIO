
import React from "react";
import { Link, useLocation } from "react-router-dom";

// ============================================================
// CONFIGURACIÓN DE NAVEGACIÓN
// ============================================================

const navegacion = [
  {
    nombre: "Inicio",
    ruta: "/",
  },
  {
    nombre: "Patrimonio",
    ruta: "/#patrimonio",
  },
  {
    nombre: "Normativas y leyes",
    ruta: "/normativas",
  },
  {
    nombre: "Trámites",
    ruta: "/#tramites",
  },
  {
    nombre: "Planes",
    ruta: "/#planes",
  },
  {
    nombre: "Potosí de Antaño",
    ruta: "/informacion",
  },
];

// ============================================================
// REDES SOCIALES
// AGREGA AQUÍ LAS URL OFICIALES CUANDO LAS TENGAS
// ============================================================

const redes = [
  {
    nombre: "Facebook",
    url: "",
  },
  {
    nombre: "Instagram",
    url: "",
  },
  {
    nombre: "YouTube",
    url: "",
  },
];

// ============================================================
// ICONOS
// ============================================================

function IconoRed({ nombre }) {
  if (nombre === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  }

  if (nombre === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  );
}

function IconoContacto({ tipo }) {
  if (tipo === "ubicacion") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (tipo === "telefono") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.57 1.72L8.09 11a16 16 0 0 0 4.91 4.91l1.56-1.92a2 2 0 0 1 1.72-.57l3 .5A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

// ============================================================
// FOOTER PRINCIPAL
// ============================================================

export default function Footer() {
  const { pathname } = useLocation();

  // El degradado aparece únicamente en la portada.
  const esInicio = pathname === "/";

  const claseTexto = esInicio
    ? "text-white/90"
    : "text-stone-600";

  const claseTitulo = esInicio
    ? "text-white"
    : "text-[#24352F]";

  const claseEnlace = esInicio
    ? "text-white/90 hover:text-yellow-200"
    : "text-stone-700 hover:text-orange-700";

  const claseIcono = esInicio
    ? "text-yellow-200"
    : "text-orange-600";

  const claseLinea = esInicio
    ? "border-white/25"
    : "border-stone-200";

  return (
    <footer
      className={`
        relative
        w-full
        overflow-hidden
        border-t-[3px]
        border-amber-400
        font-sans
        transition-colors
        duration-500
        ${
          esInicio
            ? "bg-[linear-gradient(110deg,#8D1822_0%,#C8331D_32%,#EB681B_67%,#F4AD32_100%)] text-white"
            : "bg-[#F9F7F3] text-[#24352F]"
        }
      `}
    >
      {/* EFECTO SUAVE SOBRE EL DEGRADADO */}

      {esInicio && (
        <>
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-b
              from-black/10
              via-transparent
              to-black/15
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-40
              h-80
              w-80
              rounded-full
              bg-yellow-200/15
              blur-3xl
            "
          />
        </>
      )}

      {/* ======================================================
          CONTENEDOR PRINCIPAL
          ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1550px]
          px-5
          pb-5
          pt-9
          sm:px-8
          lg:px-12
        "
      >
        {/* ==================================================
            CUATRO COLUMNAS
            ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.8fr_1fr_0.8fr]
            lg:gap-10
          "
        >
          {/* ==================================================
              COLUMNA 1 - INSTITUCIÓN
              ================================================== */}

          <div>
            {/* LOGOTIPOS */}

            <div className="mb-4 flex flex-wrap items-center gap-4">
              <img
                src="/images/images.png"
                alt="Dirección de Patrimonio Histórico"
                className="
                  h-14
                  w-auto
                  object-contain
                "
              />

              <img
                src="/images/escudo.png"
                alt="Escudo municipal de Potosí"
                className="
                  h-12
                  w-auto
                  object-contain
                "
              />

              <img
                src="/images/potosi.png"
                alt="Gobierno Autónomo Municipal de Potosí"
                className="
                  h-12
                  w-auto
                  object-contain
                "
              />
            </div>

            {/* NOMBRE INSTITUCIONAL */}

            <h2
              className={`
                mb-1
                text-base
                font-extrabold
                uppercase
                leading-snug
                tracking-wide
                ${claseTitulo}
              `}
            >
              DIRECCIÓN DE PATRIMONIO HISTÓRICO
            </h2>

            <p
              className={`
                mb-3
                text-sm
                font-semibold
                ${claseTexto}
              `}
            >
              Potosí, Bolivia
            </p>

            {/* LÍNEA DECORATIVA */}

            <div
              className={`
                mb-3
                h-[2px]
                w-12
                rounded-full
                ${
                  esInicio
                    ? "bg-yellow-200"
                    : "bg-gradient-to-r from-orange-600 to-amber-400"
                }
              `}
            />

            <p
              className={`
                max-w-sm
                text-sm
                leading-relaxed
                ${claseTexto}
              `}
            >
              Preservando la historia, la arquitectura y el
              legado cultural de la Villa Imperial de Potosí.
            </p>
          </div>

          {/* ==================================================
              COLUMNA 2 - NAVEGACIÓN
              ================================================== */}

          <div>
            <h3
              className={`
                mb-3
                text-base
                font-extrabold
                uppercase
                tracking-[0.12em]
                ${claseTitulo}
              `}
            >
              NAVEGACIÓN
            </h3>

            <div
              className={`
                mb-4
                h-[2px]
                w-9
                ${
                  esInicio
                    ? "bg-yellow-200"
                    : "bg-orange-500"
                }
              `}
            />

            <nav aria-label="Navegación del pie de página">
              <ul className="space-y-2.5">
                {navegacion.map((item) => (
                  <li key={item.nombre}>
                    <Link
                      to={item.ruta}
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        transition-colors
                        duration-300
                        ${claseEnlace}
                      `}
                    >
                      <span
                        aria-hidden="true"
                        className={`
                          font-bold
                          ${claseIcono}
                        `}
                      >
                        ›
                      </span>

                      {item.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ==================================================
              COLUMNA 3 - CONTACTO
              ================================================== */}

          <div>
            <h3
              className={`
                mb-3
                text-base
                font-extrabold
                uppercase
                tracking-[0.12em]
                ${claseTitulo}
              `}
            >
              CONTACTO
            </h3>

            <div
              className={`
                mb-4
                h-[2px]
                w-9
                ${
                  esInicio
                    ? "bg-yellow-200"
                    : "bg-orange-500"
                }
              `}
            />

            <div
              className={`
                space-y-3
                text-sm
                leading-relaxed
                ${claseTexto}
              `}
            >
              {/* UBICACIÓN */}

              <div className="flex items-start gap-3">
                <span
                  className={`
                    mt-0.5
                    shrink-0
                    ${claseIcono}
                  `}
                >
                  <IconoContacto tipo="ubicacion" />
                </span>

                <span>
                  Centro Histórico, calle Quijarro N.º 123,
                  Potosí, Bolivia
                </span>
              </div>

              {/* TELÉFONO */}

              <div className="flex items-start gap-3">
                <span
                  className={`
                    mt-0.5
                    shrink-0
                    ${claseIcono}
                  `}
                >
                  <IconoContacto tipo="telefono" />
                </span>

                <span>
                  Teléfono institucional por confirmar
                </span>
              </div>

              {/* CORREO */}

              <div className="flex items-start gap-3">
                <span
                  className={`
                    mt-0.5
                    shrink-0
                    ${claseIcono}
                  `}
                >
                  <IconoContacto tipo="correo" />
                </span>

                <span className="break-all">
                  patrimonio@potosi.gob.bo
                </span>
              </div>
            </div>
          </div>

          {/* ==================================================
              COLUMNA 4 - REDES SOCIALES
              ================================================== */}

          <div>
            <h3
              className={`
                mb-3
                text-base
                font-extrabold
                uppercase
                tracking-[0.12em]
                ${claseTitulo}
              `}
            >
              SÍGUENOS
            </h3>

            <div
              className={`
                mb-4
                h-[2px]
                w-9
                ${
                  esInicio
                    ? "bg-yellow-200"
                    : "bg-orange-500"
                }
              `}
            />

            <p
              className={`
                mb-4
                text-sm
                leading-relaxed
                ${claseTexto}
              `}
            >
              Conoce las actividades de restauración
              y conservación patrimonial.
            </p>

            {/* ICONOS DE REDES */}

            <div className="flex flex-wrap gap-2">
              {redes.map((red) =>
                red.url ? (
                  <a
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.nombre}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/40
                      bg-white
                      text-[#A94C16]
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-amber-100
                    "
                  >
                    <IconoRed nombre={red.nombre} />
                  </a>
                ) : (
                  <span
                    key={red.nombre}
                    title={`${red.nombre}: enlace pendiente`}
                    aria-label={`${red.nombre}: enlace pendiente`}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/40
                      bg-white/90
                      text-stone-400
                      shadow-sm
                    "
                  >
                    <IconoRed nombre={red.nombre} />
                  </span>
                )
              )}
            </div>

            {/* MENSAJE INSTITUCIONAL */}

            <div
              className={`
                mt-5
                border-l-2
                pl-3
                ${
                  esInicio
                    ? "border-yellow-200/80"
                    : "border-orange-500"
                }
              `}
            >
              <p
                className={`
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  ${claseTitulo}
                `}
              >
                PATRIMONIO HISTÓRICO
              </p>

              <p
                className={`
                  mt-1
                  text-xs
                  leading-relaxed
                  ${claseTexto}
                `}
              >
                Historia, arquitectura y cultura de Potosí.
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            PIE INFERIOR
            ================================================== */}

        <div
          className={`
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-2
            border-t
            pt-4
            text-center
            sm:flex-row
            ${claseLinea}
          `}
        >
          <p
            className={`
              text-xs
              ${claseTexto}
            `}
          >
            © {new Date().getFullYear()} Dirección de
            Patrimonio Histórico.
          </p>

          <p
            className={`
              text-xs
              font-semibold
              uppercase
              tracking-wider
              ${
                esInicio
                  ? "text-yellow-100"
                  : "text-[#9C5D2A]"
              }
            `}
          >
            VILLA IMPERIAL DE POTOSÍ
          </p>
        </div>
      </div>
    </footer>
  );
}
