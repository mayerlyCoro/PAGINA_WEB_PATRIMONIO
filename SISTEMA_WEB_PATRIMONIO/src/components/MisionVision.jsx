
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

// ============================================================
// INFORMACIÓN INSTITUCIONAL
// ============================================================
// Se conservan los textos existentes de Misión,
// Visión, Acciones y Políticas.
// ============================================================

const secciones = [
  {
    id: "mision",
    titulo: "Misión",
    resumen:
      "Preservar, catalogar y restaurar el patrimonio histórico, arquitectónico y cultural de Potosí.",
    detalles: [
      "Preservación, catalogación y restauración del patrimonio histórico de la Villa Imperial.",
      "Supervisión y control técnico riguroso de intervenciones urbanas en el Centro Histórico.",
      "Protección activa e inventariado de inmuebles patrimoniales de primer y segundo orden.",
      "Promoción de la conservación preventiva en coordinación con los propietarios locales.",
    ],
  },
  {
    id: "vision",
    titulo: "Visión",
    resumen:
      "Consolidar a Potosí como un referente internacional en gestión patrimonial y desarrollo urbano.",
    detalles: [
      "Posicionar a la Villa Imperial como referente mundial en gestión de patrimonio cultural.",
      "Armonizar la conservación colonial con el crecimiento urbano moderno y sostenible.",
      "Fomentar la apropiación social, el orgullo e identidad en la población potosina.",
      "Impulsar el turismo cultural responsable ligado a la protección del Centro Histórico.",
    ],
  },
  {
    id: "acciones",
    titulo: "Acciones",
    resumen:
      "Inspecciones técnicas de campo, catalogación de inmuebles y proyectos de restauración.",
    detalles: [
      "Ejecución de inspecciones técnicas de campo periódicas en áreas de preservación.",
      "Desarrollo de proyectos integrales de restauración arquitectónica y paisajística.",
      "Campañas continuas de sensibilización y educación patrimonial en unidades educativas.",
      "Intervención rápida en inmuebles con riesgo de colapso o deterioro estructural.",
    ],
  },
  {
    id: "politicas",
    titulo: "Políticas",
    resumen:
      "Cumplimiento de las Leyes Municipales de conservación y transparencia administrativa.",
    detalles: [
      "Garantizar el cumplimiento estricto de las Leyes Municipales de conservación patrimonial.",
      "Asegurar la máxima transparencia y celeridad en licencias y fichas de catalogación.",
      "Coordinación interinstitucional para frenar intervenciones clandestinas e ilegales.",
      "Fomento a la participación ciudadana activa en la defensa de nuestro patrimonio.",
    ],
  },
];

// ============================================================
// ICONOS INSTITUCIONALES
// ============================================================

function IconoInstitucional({
  tipo,
  className = "h-8 w-8",
}) {
  const atributos = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  if (tipo === "mision") {
    return (
      <svg {...atributos}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5.5" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="m12 12 6-6" />
      </svg>
    );
  }

  if (tipo === "vision") {
    return (
      <svg {...atributos}>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (tipo === "acciones") {
    return (
      <svg {...atributos}>
        <path d="m4 12 5 5L20 6" />
        <path d="M12 2a10 10 0 1 0 10 10" />
      </svg>
    );
  }

  return (
    <svg {...atributos}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10.5v8M10 10.5v8M14 10.5v8M19 10.5v8" />
      <path d="M3 20h18M2 22h20" />
    </svg>
  );
}

// ============================================================
// ICONO DE FLECHA
// ============================================================

function IconoFlecha({ abierto }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`
        h-5 w-5 transition-transform duration-300
        ${abierto ? "rotate-180" : ""}
      `}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// ============================================================
// LISTA DE ASPECTOS INSTITUCIONALES
// ============================================================

function ListaAspectos({
  detalles,
  oscuro = false,
}) {
  return (
    <ul className="space-y-4">
      {detalles.map((detalle, index) => (
        <li
          key={`${index}-${detalle}`}
          className="flex items-start gap-3"
        >
          <span
            aria-hidden="true"
            className={`
              mt-[0.55rem] h-2 w-2 shrink-0
              rounded-full
              ${
                oscuro
                  ? "bg-[#E6BD79]"
                  : "bg-[#B77536]"
              }
            `}
          />

          <span
            className={`
              text-[0.91rem] leading-[1.8]
              sm:text-[0.98rem]
              ${
                oscuro
                  ? "text-[#F0EDE5]/90"
                  : "text-[#5A5B53]"
              }
            `}
          >
            {detalle}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ============================================================
// TARJETAS PRINCIPALES: MISIÓN Y VISIÓN
// ============================================================

function TarjetaIdentidad({ seccion, numero }) {
  const esMision = seccion.id === "mision";
  const reducirMovimiento = useReducedMotion();

  return (
    <motion.article
      id={seccion.id}
      aria-labelledby={`titulo-${seccion.id}`}
      initial={
        reducirMovimiento
          ? false
          : { opacity: 0, y: 25 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: reducirMovimiento ? 0 : 0.6,
        ease: "easeOut",
      }}
      className={`
        group relative flex h-full
        flex-col overflow-hidden
        rounded-[1.6rem]
        p-6 sm:p-8 lg:p-9
        ${
          esMision
            ? `
              bg-[#1D3B31]
              text-white
              shadow-[0_16px_42px_rgba(18,47,37,0.14)]
            `
            : `
              border border-[#E3D5C2]
              bg-[#FFFCF7]
              text-[#253D32]
              shadow-[0_12px_38px_rgba(60,44,24,0.05)]
            `
        }
      `}
    >
      {/* DECORACIÓN SUPERIOR */}

      <div
        aria-hidden="true"
        className={`
          absolute inset-x-0 top-0 h-1
          ${
            esMision
              ? "bg-gradient-to-r from-[#D2A258] to-[#F2D394]"
              : "bg-gradient-to-r from-[#A94C16] to-[#DEAC60]"
          }
        `}
      />

      {/* CÍRCULO DECORATIVO */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute
          -right-20 -top-20 h-56 w-56
          rounded-full
          ${
            esMision
              ? "bg-[#E8BF7A]/[0.07]"
              : "bg-[#E8C79A]/20"
          }
        `}
      />

      {/* ICONO Y NÚMERO */}

      <div className="relative flex items-center justify-between gap-4">
        <div
          className={`
            flex h-[66px] w-[66px]
            items-center justify-center
            rounded-2xl
            ${
              esMision
                ? "bg-[#E2BC78]/15 text-[#F0C786]"
                : "bg-[#F4E8D8] text-[#A94C16]"
            }
          `}
        >
          <IconoInstitucional
            tipo={seccion.id}
            className="h-9 w-9"
          />
        </div>

        <span
          className={`
            text-xs font-bold
            tracking-[0.19em]
            ${
              esMision
                ? "text-[#E4BF83]/70"
                : "text-[#A68968]/80"
            }
          `}
        >
          {numero} / 02
        </span>
      </div>

      {/* TÍTULO */}

      <div className="relative mt-7">
        <p
          className={`
            mb-2 text-[0.67rem] font-extrabold
            uppercase tracking-[0.2em]
            ${
              esMision
                ? "text-[#E5BE7D]"
                : "text-[#A94C16]"
            }
          `}
        >
          {esMision
            ? "NUESTRO PROPÓSITO"
            : "HACIA EL FUTURO"}
        </p>

        <h3
          id={`titulo-${seccion.id}`}
          className="
            text-4xl font-black
            uppercase leading-none
            tracking-tight
            sm:text-[2.8rem]
          "
        >
          {seccion.titulo}
        </h3>

        <div
          aria-hidden="true"
          className={`
            mt-5 h-[3px] w-16 rounded-full
            ${
              esMision
                ? "bg-[#E5BD7B]"
                : "bg-[#AC5B29]"
            }
          `}
        />
      </div>

      {/* RESUMEN */}

      <p
        className={`
          relative mt-7
          text-[1.13rem] font-medium
          leading-[1.7]
          sm:text-[1.25rem]
          ${
            esMision
              ? "text-[#F3EFE7]"
              : "text-[#34483C]"
          }
        `}
      >
        {seccion.resumen}
      </p>

      {/* ASPECTOS PRINCIPALES */}

      <div
        className={`
          relative mt-8 border-t pt-7
          ${
            esMision
              ? "border-white/15"
              : "border-[#E8DFD3]"
          }
        `}
      >
        <h4
          className={`
            mb-5 text-xs font-black
            uppercase tracking-[0.17em]
            ${
              esMision
                ? "text-[#E7C58C]"
                : "text-[#A65F2D]"
            }
          `}
        >
          ASPECTOS PRINCIPALES
        </h4>

        <ListaAspectos
          detalles={seccion.detalles}
          oscuro={esMision}
        />
      </div>
    </motion.article>
  );
}

// ============================================================
// TARJETAS INTERACTIVAS: ACCIONES Y POLÍTICAS
// ============================================================

function TarjetaGestion({ seccion }) {
  const [abierto, setAbierto] = useState(false);
  const reducirMovimiento = useReducedMotion();

  return (
    <motion.article
      id={seccion.id}
      aria-labelledby={`titulo-${seccion.id}`}
      initial={
        reducirMovimiento
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: reducirMovimiento ? 0 : 0.55,
      }}
      className="
        overflow-hidden
        rounded-[1.4rem]
        border border-white/20
        bg-white/[0.09]
        backdrop-blur-sm
        transition-colors duration-300
        hover:bg-white/[0.13]
      "
    >
      <div className="p-6 sm:p-8">
        {/* ICONO */}

        <div
          className="
            flex h-14 w-14
            items-center justify-center
            rounded-2xl
            bg-[#F0C784]/15
            text-[#F3D090]
          "
        >
          <IconoInstitucional
            tipo={seccion.id}
            className="h-8 w-8"
          />
        </div>

        {/* TÍTULO */}

        <h4
          id={`titulo-${seccion.id}`}
          className="
            mt-6 text-3xl
            font-black uppercase
            tracking-tight text-white
            sm:text-[2.1rem]
          "
        >
          {seccion.titulo}
        </h4>

        <div
          aria-hidden="true"
          className="
            mt-4 h-[3px] w-14
            rounded-full bg-[#E6B978]
          "
        />

        {/* RESUMEN */}

        <p
          className="
            mt-5 text-[0.98rem]
            leading-[1.8]
            text-white/85
            sm:text-[1.06rem]
          "
        >
          {seccion.resumen}
        </p>

        {/* BOTÓN */}

        <button
          type="button"
          onClick={() =>
            setAbierto((valor) => !valor)
          }
          aria-expanded={abierto}
          aria-controls={`detalle-${seccion.id}`}
          className="
            mt-7 inline-flex min-h-11
            items-center gap-3
            rounded-full
            border border-[#E9C187]/50
            bg-[#E9C187]/10
            px-5 py-2.5
            text-xs font-extrabold
            uppercase tracking-wide
            text-[#F4D69E]
            transition-all duration-300
            hover:border-[#F4D69E]
            hover:bg-[#E9C187]/20
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#F4D69E]
          "
        >
          {abierto
            ? "OCULTAR DETALLES"
            : "VER DETALLES"}

          <IconoFlecha abierto={abierto} />
        </button>

        {/* CONTENIDO DESPLEGABLE */}

        <AnimatePresence initial={false}>
          {abierto && (
            <motion.div
              id={`detalle-${seccion.id}`}
              key="detalles"
              initial={
                reducirMovimiento
                  ? false
                  : {
                      height: 0,
                      opacity: 0,
                    }
              }
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: reducirMovimiento
                  ? 0
                  : 0.3,
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  mt-7 border-t
                  border-white/15 pt-6
                "
              >
                <ListaAspectos
                  detalles={seccion.detalles}
                  oscuro
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function MisionVision() {
  const identidad = secciones.slice(0, 2);
  const gestion = secciones.slice(2);
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      id="institucion"
      aria-labelledby="titulo-identidad"
      className="
        relative isolate w-full
        overflow-hidden
        bg-[#F7F3EC]
        font-sans text-[#242D2B]
      "
    >
      {/* ======================================================
          FRANJA INSTITUCIONAL SUPERIOR
          ====================================================== */}

      <div
        aria-hidden="true"
        className="
          h-1 w-full
          bg-gradient-to-r
          from-[#83252C]
          via-[#C27635]
          to-[#E3B564]
        "
      />

      {/* ======================================================
          NUESTRA IDENTIDAD
          ====================================================== */}

      <div
        className="
          relative mx-auto
          max-w-7xl
          px-5 pb-16 pt-12
          sm:px-8 sm:py-16
          lg:px-12 lg:py-20
        "
      >
        {/* DECORACIÓN DE FONDO */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-28 top-0
            h-80 w-80 rounded-full
            bg-[#E3BD88]/10 blur-3xl
          "
        />

        {/* CABECERA */}

        <motion.header
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: reducirMovimiento
              ? 0
              : 0.5,
          }}
          className="
            relative mx-auto
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-[0.7rem]
              font-black uppercase
              tracking-[0.2em]
              text-[#A65B2A]
              sm:text-xs
            "
          >
            DIRECCIÓN DE PATRIMONIO HISTÓRICO
          </p>

          <h2
            id="titulo-identidad"
            className="
              mt-4 text-[2.1rem]
              font-black uppercase
              leading-[1.13]
              tracking-tight
              text-[#1F3E32]
              sm:text-4xl
              lg:text-5xl
            "
          >
            NUESTRA IDENTIDAD
            <span className="block text-[#A94C16]">
              INSTITUCIONAL
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="
              mx-auto mt-6
              h-[3px] w-20
              rounded-full
              bg-gradient-to-r
              from-[#9F4B2D]
              to-[#DCAC5B]
            "
          />

          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-[0.98rem]
              leading-[1.85]
              text-[#666258]
              sm:text-[1.08rem]
            "
          >
            Conoce los propósitos y las líneas de
            trabajo relacionadas con la preservación
            del patrimonio histórico, arquitectónico
            y cultural de Potosí.
          </p>
        </motion.header>

        {/* ==================================================
            MISIÓN Y VISIÓN
            ================================================== */}

        <div
          className="
            relative mt-10
            grid grid-cols-1
            items-stretch gap-5
            lg:grid-cols-2
            lg:gap-6
          "
        >
          {identidad.map((seccion, indice) => (
            <TarjetaIdentidad
              key={seccion.id}
              seccion={seccion}
              numero={String(indice + 1).padStart(
                2,
                "0"
              )}
            />
          ))}
        </div>

        {/* MENSAJE INSTITUCIONAL */}

        <div
          className="
            mx-auto mt-10
            flex max-w-3xl
            items-center justify-center
            gap-3 text-center
          "
        >
          <span
            aria-hidden="true"
            className="
              hidden h-px flex-1
              bg-[#D9C9B4]
              sm:block
            "
          />

          <p
            className="
              text-xs font-bold
              uppercase
              tracking-[0.13em]
              text-[#936C43]
            "
          >
            COMPROMETIDOS CON EL PATRIMONIO DE POTOSÍ
          </p>

          <span
            aria-hidden="true"
            className="
              hidden h-px flex-1
              bg-[#D9C9B4]
              sm:block
            "
          />
        </div>
      </div>

      {/* ======================================================
          EJES DE GESTIÓN
          ====================================================== */}

      <div
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-[#641E2B]
          via-[#842B2B]
          to-[#A24B25]
          text-white
        "
      >
        {/* LUZ DECORATIVA */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-32 -top-32
            h-96 w-96 rounded-full
            bg-[#F2C477]/10 blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -bottom-44 -left-24
            h-96 w-96 rounded-full
            bg-black/10 blur-3xl
          "
        />

        {/* CONTENIDO */}

        <div
          className="
            relative mx-auto
            max-w-7xl
            px-5 py-14
            sm:px-8 sm:py-16
            lg:px-12 lg:py-20
          "
        >
          <motion.header
            initial={
              reducirMovimiento
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: reducirMovimiento
                ? 0
                : 0.5,
            }}
            className="
              mx-auto max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-[0.7rem]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#F0C789]
                sm:text-xs
              "
            >
              COMPROMISO INSTITUCIONAL
            </p>

            <h3
              className="
                mt-4 text-3xl
                font-black uppercase
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-[2.7rem]
              "
            >
              NUESTROS EJES DE GESTIÓN
            </h3>

            <div
              aria-hidden="true"
              className="
                mx-auto mt-5
                h-[3px] w-20
                rounded-full
                bg-[#E8BC78]
              "
            />

            <p
              className="
                mx-auto mt-6
                max-w-2xl
                text-[0.98rem]
                leading-[1.85]
                text-white/85
                sm:text-[1.06rem]
              "
            >
              Consulta las acciones y políticas
              que forman parte del trabajo de
              conservación y protección patrimonial.
            </p>
          </motion.header>

          {/* TARJETAS ACCIONES Y POLÍTICAS */}

          <div
            className="
              mt-10 grid
              grid-cols-1
              items-start gap-5
              lg:grid-cols-2
              lg:gap-6
            "
          >
            {gestion.map((seccion) => (
              <TarjetaGestion
                key={seccion.id}
                seccion={seccion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
