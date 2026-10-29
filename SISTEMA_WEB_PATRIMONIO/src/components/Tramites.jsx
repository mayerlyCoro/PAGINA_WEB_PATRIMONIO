
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import { tramites } from "../data/tramites";

// ============================================================
// CATEGORÍAS ORIGINALES
// ============================================================

const categorias = [
  "Todos",
  "Trámites administrativos",
  "Autorizaciones patrimoniales",
  "Inspecciones técnicas",
];

// ============================================================
// ICONOS DE LOS TRÁMITES
// ============================================================

function IconoTramite({ index }) {
  const iconos = [
    // PLANOS
    <>
      <path d="M7 3h9l5 5v13H7z" />
      <path d="M16 3v5h5M10 12h8M10 16h6" />
    </>,

    // FUSIÓN DE LOTES
    <>
      <rect x="3" y="5" width="8" height="14" rx="1" />
      <rect x="13" y="5" width="8" height="14" rx="1" />
      <path d="M11 12h2M6 9h2M16 9h2" />
    </>,

    // INSPECCIÓN
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2h6v2M8 11l2 2 5-5M8 17h8" />
    </>,

    // ANTEPROYECTOS
    <>
      <path d="M3 20h18M5 20V8l7-5 7 5v12" />
      <path d="M9 20v-8h6v8M8 9h8" />
    </>,

    // CONSTRUCCIÓN
    <>
      <rect x="4" y="7" width="16" height="14" rx="1" />
      <path d="M9 7V3h6v4M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
    </>,

    // DENUNCIAS E INSPECCIÓN
    <>
      <circle cx="10" cy="10" r="6" />
      <path d="m14.5 14.5 6 6M10 7v4M10 13h.01" />
    </>,

    // OBRAS MENORES
    <>
      <path d="m4 20 12-12M14 4l6 6M12 6l6 6M3 21l4-1-3-3z" />
    </>,

    // EMERGENCIAS
    <>
      <path d="M12 2 3 6v6c0 6 4 9 9 11 5-2 9-5 9-11V6z" />
      <path d="M12 7v7M12 17h.01" />
    </>,

    // LETREROS
    <>
      <path d="M5 4h14v9H5zM12 13v8M8 21h8" />
      <path d="M8 8h8M8 10h5" />
    </>,
  ];

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconos[index % iconos.length]}
    </svg>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Tramites() {
  const reducirMovimiento = useReducedMotion();

  const [categoriaActiva, setCategoriaActiva] =
    useState("Todos");

  // FILTRADO DE TRÁMITES

  const tramitesFiltrados =
    categoriaActiva === "Todos"
      ? tramites
      : tramites.filter(
          (tramite) =>
            tramite.categoria === categoriaActiva
        );

  return (
    <section
      id="tramites"
      className="w-full scroll-mt-20 bg-[#F7F4EF] text-[#24352F]"
      aria-labelledby="tramites-titulo"
    >
      {/* ======================================================
          1. ENCABEZADO FOTOGRÁFICO
          ====================================================== */}

      <div
        className="
          relative
          flex
          min-h-[480px]
          w-full
          items-center
          overflow-hidden
          bg-[#102C27]
          px-6
          py-20
          text-white
          sm:px-12
          lg:min-h-[560px]
          lg:px-24
        "
      >
        {/* IMAGEN DE FONDO */}

        
{/* IMAGEN DE FONDO DE TRÁMITES CON ZOOM CINEMATOGRÁFICO */}

<motion.img
  src="/images/Calle_de_Potosí.jpg"
  alt=""
  aria-hidden="true"
  className="absolute inset-0 h-full w-full object-cover object-center"
  initial={false}
  animate={
    reducirMovimiento
      ? { scale: 1 }
      : { scale: [1, 1.1, 1] }
  }
  transition={{
    duration: 22,
    ease: "easeInOut",
    repeat: Infinity,
  }}
/>


        {/* OSCURECIMIENTO VERDE INSTITUCIONAL */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#081D19]/95
            via-[#10362E]/80
            to-[#071C19]/60
          "
        />

        {/* RESPLANDOR SUTIL */}

        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        {/* CONTENIDO */}

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 40 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative z-10 mx-auto w-full max-w-[1300px]"
        >
          {/* IDENTIFICACIÓN */}

          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-amber-400" />

            <p
              className="
                text-xs
                font-extrabold
                uppercase
                tracking-[0.22em]
                text-amber-300
                sm:text-sm
              "
            >
              DIRECCIÓN DE PATRIMONIO HISTÓRICO
            </p>
          </div>

          {/* TÍTULO */}

          <h2
            id="tramites-titulo"
            className="
              font-['Bebas_Neue']
              text-[clamp(4rem,8vw,8rem)]
              uppercase
              leading-[0.9]
              tracking-[0.035em]
            "
          >
            <span className="block text-white">
              SERVICIOS Y TRÁMITES
            </span>

            <span
              className="
                mt-4
                block
                bg-gradient-to-r
                from-yellow-300
                via-amber-400
                to-orange-500
                bg-clip-text
                text-transparent
              "
            >
              PATRIMONIALES
            </span>
          </h2>

          {/* LÍNEA DECORATIVA */}

          <div className="my-8 h-[3px] w-24 bg-gradient-to-r from-orange-500 to-yellow-400" />

          {/* DESCRIPCIÓN */}

          <p
            className="
              max-w-2xl
              text-base
              font-medium
              leading-relaxed
              text-white/90
              sm:text-lg
              lg:text-xl
            "
          >
            Gestiones, autorizaciones e inspecciones
            relacionadas con la protección, conservación
            y preservación del patrimonio histórico
            de la Villa Imperial de Potosí.
          </p>
        </motion.div>
      </div>

      {/* ======================================================
          2. SECCIÓN DE SERVICIOS
          ====================================================== */}

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-24 pt-16 sm:px-8">
        {/* ENCABEZADO */}

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 text-center"
        >
          <p
            className="
              mb-3
              text-xs
              font-extrabold
              uppercase
              tracking-[0.24em]
              text-[#B94A14]
            "
          >
            ATENCIÓN Y SERVICIOS
          </p>

          <h3
            className="
              font-['Bebas_Neue']
              text-[clamp(2.8rem,5vw,5rem)]
              uppercase
              leading-none
              text-[#24352F]
            "
          >
            EXPLORA NUESTROS TRÁMITES
          </h3>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-gradient-to-r from-orange-600 to-amber-400" />
        </motion.div>

        {/* ==================================================
            3. FILTROS POR CATEGORÍA
            ================================================== */}

        <div
          className="
            mb-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
          aria-label="Filtrar trámites por categoría"
        >
          {categorias.map((categoria) => {
            const activa = categoriaActiva === categoria;

            return (
              <button
                key={categoria}
                type="button"
                aria-pressed={activa}
                onClick={() => setCategoriaActiva(categoria)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-wide
                  transition-all
                  duration-300
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-orange-600
                  ${
                    activa
                      ? "border-orange-600 bg-gradient-to-r from-orange-700 to-orange-500 text-white shadow-md"
                      : "border-[#BF693C] bg-white text-[#A94C16] hover:bg-orange-50"
                  }
                `}
              >
                {categoria}
              </button>
            );
          })}
        </div>

        {/* CONTADOR */}

        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-stone-600">
            {tramitesFiltrados.length}
            {" "}
            {tramitesFiltrados.length === 1
              ? "trámite disponible"
              : "trámites disponibles"}
          </span>

          <span className="hidden text-xs font-bold uppercase tracking-wider text-orange-700 sm:block">
            REQUISITOS Y PROCEDIMIENTOS
          </span>
        </div>

        {/* ==================================================
            4. TARJETAS COMPACTAS
            ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {tramitesFiltrados.map((tramite) => {
            // Mantener un icono distinto por trámite,
            // incluso al aplicar los filtros.
            const indiceOriginal = tramites.findIndex(
              (item) => item.id === tramite.id
            );

            return (
              <motion.article
                key={tramite.id}
                initial={
                  reducirMovimiento
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="
                  group
                  relative
                  flex
                  min-h-[265px]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E2D8CC]
                  bg-white
                  p-7
                  shadow-[0_6px_22px_rgba(40,30,20,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                  hover:shadow-[0_15px_35px_rgba(166,73,25,0.16)]
                  sm:p-8
                "
              >
                {/* BORDE SUPERIOR ANIMADO */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[3px]
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-red-600
                    via-orange-500
                    to-amber-400
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                {/* ICONO */}

                <div
                  className="
                    mb-5
                    flex
                    h-[70px]
                    w-[70px]
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#FFF0E4]
                    text-[#C64C1B]
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-orange-100
                  "
                >
                  <IconoTramite index={indiceOriginal} />
                </div>

                {/* TÍTULO ORIGINAL DEL TRÁMITE */}

                <h4
                  className="
                    mb-3
                    text-lg
                    font-extrabold
                    leading-snug
                    text-[#24352F]
                    lg:text-xl
                  "
                >
                  {tramite.titulo}
                </h4>

                {/* DESCRIPCIÓN ORIGINAL */}

                <p
                  className="
                    mb-6
                    flex-1
                    text-sm
                    leading-relaxed
                    text-stone-600
                  "
                >
                  {tramite.descripcion}
                </p>

                {/* ÚNICO ENLACE DE REDIRECCIÓN */}

                <div>
                  <Link
                    to={`/tramites/${tramite.id}`}
                    className="
                      inline-flex
                      min-h-11
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2
                      text-sm
                      font-extrabold
                      uppercase
                      tracking-wide
                      text-[#B54A18]
                      transition-all
                      duration-300
                      hover:bg-orange-50
                      hover:text-orange-700
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-orange-600
                    "
                  >
                    VER REQUISITOS

                    <span
                      aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* MENSAJE SI LA CATEGORÍA ESTÁ VACÍA */}

        {tramitesFiltrados.length === 0 && (
          <div className="rounded-xl border border-stone-200 bg-white px-6 py-12 text-center text-stone-600">
            No hay trámites registrados en esta categoría.
          </div>
        )}
      </div>
    </section>
  );
}
