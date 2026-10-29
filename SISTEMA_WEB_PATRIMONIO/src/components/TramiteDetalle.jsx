
import React from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { tramites } from "../data/tramites";

// ============================================================
// IMÁGENES PARA LAS PORTADAS DE LOS NUEVE TRÁMITES
// ============================================================

// Las imágenes deben estar dentro de public/images.

const imagenesTramites = [
  "/images/Gonzalo Viera Azpiroz - Potosí.jpeg",
  "/images/Potosí.jpeg",
  "/images/descarga.jpeg",

  "/images/Potosí.jpeg",
  "/images/descarga.jpeg",
  "/images/Gonzalo Viera Azpiroz - Potosí.jpeg",

  "/images/descarga.jpeg",
  "/images/Gonzalo Viera Azpiroz - Potosí.jpeg",
  "/images/Potosí.jpeg",
];

// ============================================================
// ICONO DE REQUISITOS
// ============================================================

function IconoRequisitos() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="4" width="14" height="17" rx="2" />

      <path d="M9 4V2h6v2" />

      <path d="m8 11 2 2 5-5" />

      <path d="M8 17h8" />
    </svg>
  );
}

// ============================================================
// BOTÓN VOLVER A TRÁMITES
// ============================================================

function BotonVolver({ oscuro = false }) {
  return (
    <Link
      to="/#tramites"
      className={`
        inline-flex
        min-h-11
        items-center
        justify-center
        gap-3
        rounded-lg
        px-4
        py-2.5
        text-sm
        font-extrabold
        uppercase
        tracking-wide
        transition-all
        duration-300
        ${
          oscuro
            ? "text-amber-300 hover:bg-white/10 hover:text-white"
            : "text-orange-700 hover:bg-orange-50"
        }
      `}
    >
      <span aria-hidden="true" className="text-xl">
        ←
      </span>

      VOLVER A TRÁMITES
    </Link>
  );
}

// ============================================================
// LISTA DE REQUISITOS
// ============================================================

function ListaRequisitos({ items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="
            flex
            items-start
            gap-4
            text-sm
            leading-relaxed
            text-stone-700
            sm:text-base
          "
        >
          {/* ICONO DE VERIFICACIÓN */}

          <span
            aria-hidden="true"
            className="
              mt-[5px]
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-orange-100
              text-orange-700
            "
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </span>

          <span className="whitespace-pre-line">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ============================================================
// TARJETAS DE REQUISITOS
// ============================================================

function BloqueRequisitos({ bloque, index }) {
  const reducirMovimiento = useReducedMotion();

  return (
    <motion.article
      initial={
        reducirMovimiento
          ? false
          : { opacity: 0, y: 30 }
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
        duration: reducirMovimiento ? 0 : 0.6,
        delay: reducirMovimiento ? 0 : index * 0.08,
      }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#E5DBD0]
        bg-white
        shadow-[0_6px_24px_rgba(40,30,20,0.05)]
        transition-all
        duration-300
        hover:border-orange-300
        hover:shadow-[0_12px_30px_rgba(150,65,20,0.10)]
      "
    >
      {/* FRANJA SUPERIOR */}

      <div
        className="
          h-[3px]
          w-full
          bg-gradient-to-r
          from-red-600
          via-orange-500
          to-amber-400
        "
      />

      <div className="p-6 sm:p-8 lg:p-10">

        {/* ENCABEZADO */}

        <div className="mb-6 flex items-start gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-orange-50
              text-orange-700
            "
          >
            <IconoRequisitos />
          </div>

          <div>
            <p
              className="
                mb-2
                text-xs
                font-extrabold
                uppercase
                tracking-[0.15em]
                text-orange-700
              "
            >
              APARTADO {String(index + 1).padStart(2, "0")}
            </p>

            <h2
              className="
                text-xl
                font-extrabold
                leading-snug
                text-[#24352F]
                sm:text-2xl
              "
            >
              {bloque.titulo}
            </h2>
          </div>
        </div>

        {/* INTRODUCCIÓN */}

        {bloque.introduccion && (
          <p
            className="
              mb-5
              whitespace-pre-line
              text-sm
              leading-relaxed
              text-stone-600
              sm:text-base
            "
          >
            {bloque.introduccion}
          </p>
        )}

        {/* TEXTO COMPLEMENTARIO */}

        {bloque.texto && (
          <p
            className="
              mb-5
              whitespace-pre-line
              text-sm
              leading-relaxed
              text-stone-700
              sm:text-base
            "
          >
            {bloque.texto}
          </p>
        )}

        {/* LISTA DE REQUISITOS */}

        {Array.isArray(bloque.items) &&
          bloque.items.length > 0 && (
            <ListaRequisitos items={bloque.items} />
          )}
      </div>
    </motion.article>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function TramiteDetalle() {
  const { tramiteId } = useParams();

  const reducirMovimiento = useReducedMotion();

  // ==========================================================
  // BUSCAR TRÁMITE Y SU POSICIÓN ORIGINAL
  // ==========================================================

  const indiceTramite = tramites.findIndex(
    (item) => item.id === tramiteId
  );

  const tramite =
    indiceTramite !== -1
      ? tramites[indiceTramite]
      : null;

  // ==========================================================
  // SELECCIONAR IMAGEN PARA CADA TRÁMITE
  // ==========================================================

  const imagenFondo =
    indiceTramite >= 0
      ? imagenesTramites[
          indiceTramite % imagenesTramites.length
        ]
      : "/images/Potosí.jpeg";

  // ==========================================================
  // TRÁMITE NO ENCONTRADO
  // ==========================================================

  if (!tramite) {
    return (
      <main
        className="
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          bg-[#F7F4EF]
          px-6
          pt-32
          text-center
        "
      >
        <h1 className="mb-4 text-3xl font-extrabold text-[#24352F]">
          Trámite no encontrado
        </h1>

        <p className="mb-7 text-stone-600">
          No se encontró la información solicitada.
        </p>

        <BotonVolver />
      </main>
    );
  }

  // ==========================================================
  // PÁGINA INDIVIDUAL DEL TRÁMITE
  // ==========================================================

  return (
    <main
      className="
        min-h-screen
        bg-[#F7F4EF]
        text-[#24352F]
      "
    >
      {/* ======================================================
          1. PORTADA CON IMAGEN PERSONALIZADA
          ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-[55svh]
          items-center
          overflow-hidden
          bg-[#102C27]
          px-6
          pb-20
          pt-40
          text-white
          sm:px-12
          lg:px-24
        "
      >
        {/* ==================================================
            FOTOGRAFÍA CON ZOOM CINEMATOGRÁFICO
            ================================================== */}

        <motion.img
          key={imagenFondo}
          src={imagenFondo}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
          initial={
            reducirMovimiento
              ? false
              : { scale: 1.03, opacity: 0 }
          }
          animate={
            reducirMovimiento
              ? { scale: 1, opacity: 1 }
              : {
                  scale: [1.03, 1.13, 1.03],
                  opacity: 1,
                }
          }
          transition={{
            scale: {
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
            },
            opacity: {
              duration: 0.8,
            },
          }}
        />

        {/* ==================================================
            FILTRO OSCURO PARA RESALTAR LOS TEXTOS
            ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071D18]/90
            via-[#11362D]/65
            to-black/30
          "
        />

        {/* SOMBRA INFERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-black/50
            to-transparent
          "
        />

        {/* ==================================================
            CONTENIDO DE LA PORTADA
            ================================================== */}

        <motion.div
          key={tramite.id}
          initial={
            reducirMovimiento
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reducirMovimiento ? 0 : 0.8,
          }}
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1250px]
          "
        >
          {/* VOLVER A TRÁMITES */}

          <div className="mb-8">
            <BotonVolver oscuro />
          </div>

          {/* CATEGORÍA */}

          <p
            className="
              mb-5
              text-xs
              font-extrabold
              uppercase
              tracking-[0.22em]
              text-amber-300
              sm:text-sm
            "
          >
            {tramite.categoria || "TRÁMITE PATRIMONIAL"}
          </p>

          {/* TÍTULO DEL TRÁMITE */}

          <h1
            className="
              max-w-5xl
              font-['Bebas_Neue']
              text-[clamp(3.3rem,6.5vw,7rem)]
              uppercase
              leading-[0.98]
              tracking-wide
              text-white
              drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]
            "
          >
            {tramite.titulo}
          </h1>

          {/* LÍNEA DECORATIVA */}

          <div
            className="
              my-7
              h-[3px]
              w-24
              bg-gradient-to-r
              from-orange-500
              to-amber-400
            "
          />

          {/* DESCRIPCIÓN */}

          <p
            className="
              max-w-3xl
              text-base
              font-medium
              leading-relaxed
              text-white/95
              sm:text-lg
              drop-shadow-[0_3px_7px_rgba(0,0,0,0.7)]
            "
          >
            {tramite.descripcion}
          </p>
        </motion.div>
      </section>

      {/* ======================================================
          2. REQUISITOS DEL TRÁMITE
          ====================================================== */}

      <section
        className="
          mx-auto
          max-w-[1150px]
          px-5
          py-16
          sm:px-8
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reducirMovimiento ? 0 : 0.6,
          }}
          className="mb-10"
        >
          <p
            className="
              mb-3
              text-xs
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-orange-700
            "
          >
            INFORMACIÓN DEL PROCEDIMIENTO
          </p>

          <h2
            className="
              font-['Bebas_Neue']
              text-[clamp(2.6rem,5vw,4.5rem)]
              uppercase
              leading-none
              text-[#24352F]
            "
          >
            REQUISITOS DEL TRÁMITE
          </h2>

          <div
            className="
              mt-5
              h-[2px]
              w-20
              bg-gradient-to-r
              from-orange-600
              to-amber-400
            "
          />
        </motion.div>

        {/* AVISO DE INFORMACIÓN PENDIENTE */}

        {tramite.pendiente && (
          <div
            role="note"
            className="
              mb-8
              rounded-xl
              border
              border-amber-200
              bg-amber-50
              px-5
              py-4
              text-sm
              font-semibold
              text-amber-900
            "
          >
            Información complementaria pendiente.
          </div>
        )}

        {/* ==================================================
            REQUISITOS ORIGINALES
            ================================================== */}

        <div className="grid gap-6">
          {Array.isArray(tramite.bloques) &&
          tramite.bloques.length > 0 ? (
            tramite.bloques.map((bloque, index) => (
              <BloqueRequisitos
                key={`${index}-${bloque.titulo}`}
                bloque={bloque}
                index={index}
              />
            ))
          ) : (
            <div
              className="
                rounded-xl
                border
                border-stone-200
                bg-white
                p-7
                text-stone-600
              "
            >
              Los requisitos detallados de este trámite
              todavía no están registrados.
            </div>
          )}
        </div>

        {/* ==================================================
            3. REGRESAR A TODOS LOS TRÁMITES
            ================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-[#E5DBD0]
            pt-8
            sm:flex-row
          "
        >
          <div>
            <h3
              className="
                mb-2
                text-lg
                font-extrabold
                text-[#24352F]
              "
            >
              ¿Necesitas consultar otro trámite?
            </h3>

            <p
              className="
                text-sm
                leading-relaxed
                text-stone-600
              "
            >
              Explora los demás procedimientos y
              requisitos patrimoniales.
            </p>
          </div>

          <Link
            to="/#tramites"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-orange-600
              to-amber-500
              px-7
              py-3
              text-sm
              font-extrabold
              uppercase
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            VER TODOS LOS TRÁMITES

            <span aria-hidden="true" className="text-xl">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
