
import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { planes } from "../data/planes";
import { IconoPlan } from "./PlanesProgramas";

// ============================================================
// COMPONENTE PRINCIPAL
// DETALLE INDIVIDUAL DE CADA PLAN
// ============================================================

export default function PlanDetalle() {
  const { planId } = useParams();

  const reducirMovimiento = useReducedMotion();

  // BUSCAR EL PLAN SELECCIONADO

  const plan = planes.find(
    (item) => item.id === planId
  );

  // ==========================================================
  // CUANDO EL PLAN NO EXISTE
  // ==========================================================

  if (!plan) {
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
          pt-24
          text-center
        "
      >
        <h1
          className="
            mb-4
            text-3xl
            font-bold
            text-[#20342E]
          "
        >
          Plan no encontrado
        </h1>

        <p className="mb-7 text-stone-600">
          El plan solicitado no está disponible.
        </p>

        {/* VOLVER A LA SECCIÓN DE PLANES */}

        <Link
          to="/#planes"
          className="
            rounded-lg
            bg-orange-600
            px-6
            py-3
            font-bold
            text-white
            transition-colors
            hover:bg-orange-700
          "
        >
          ← Volver a Planes
        </Link>
      </main>
    );
  }

  // ==========================================================
  // DETALLE DEL PLAN
  // ==========================================================

  return (
    <main
      className="
        min-h-screen
        bg-[#F7F4EF]
        text-[#20342E]
      "
    >
      {/* ======================================================
          1. PORTADA CON IMAGEN
          ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-[55svh]
          items-center
          overflow-hidden
          bg-zinc-950
          px-5
          pb-16
          pt-40
          text-white
          sm:px-10
          lg:px-24
        "
      >
        {/* IMAGEN DEL PLAN */}

        <img
          src={plan.imagen}
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
        />

        {/* OSCURECIMIENTO */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#081B17]/95
            via-[#081B17]/70
            to-black/30
          "
        />

        {/* CONTENIDO DE LA PORTADA */}

        <motion.div
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
            max-w-[1300px]
          "
        >
          {/* BOTÓN VOLVER A PLANES */}

          <Link
            to="/#planes"
            className="
              mb-9
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-amber-300
              transition-colors
              hover:text-white
            "
          >
            <span aria-hidden="true">←</span>
            VOLVER A PLANES
          </Link>

          {/* CATEGORÍA */}

          <p
            className="
              mb-4
              text-xs
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-amber-300
            "
          >
            {plan.categoria}
          </p>

          {/* TÍTULO */}

          <h1
            className="
              max-w-4xl
              font-['Bebas_Neue']
              text-[clamp(3.4rem,7vw,7rem)]
              uppercase
              leading-[0.95]
            "
          >
            {plan.titulo}
          </h1>

          {/* LÍNEA DORADA */}

          <div
            className="
              mt-6
              h-[2px]
              w-20
              bg-amber-400
            "
          />
        </motion.div>
      </section>

      {/* ======================================================
          2. INFORMACIÓN DEL PLAN
          ====================================================== */}

      <section
        className="
          mx-auto
          max-w-[1200px]
          px-5
          py-16
          sm:px-8
        "
      >
        {/* ENCABEZADO DE DOCUMENTACIÓN */}

        <div
          className="
            mb-14
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
          "
        >
          {/* ICONO DEL PLAN */}

          <div
            className="
              flex
              h-20
              w-20
              shrink-0
              items-center
              justify-center
              text-red-600
            "
          >
            <IconoPlan
              tipo={plan.icono}
              size={65}
            />
          </div>

          {/* DESCRIPCIÓN */}

          <div>
            <p
              className="
                mb-2
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-orange-700
              "
            >
              DIRECCIÓN DE PATRIMONIO HISTÓRICO
            </p>

            <h2
              className="
                mb-3
                text-2xl
                font-extrabold
                sm:text-3xl
              "
            >
              Documentación del plan
            </h2>

            <p
              className="
                max-w-3xl
                text-base
                leading-relaxed
                text-stone-600
              "
            >
              {plan.descripcion}
            </p>
          </div>
        </div>

        {/* ==================================================
            3. LISTADO DE DOCUMENTOS
            ================================================== */}

        <div className="grid gap-5">
          {plan.documentos.map((documento, index) => (
            <motion.article
              key={documento.nombre}
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
                delay: reducirMovimiento
                  ? 0
                  : index * 0.1,
              }}
              className="
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-[#E5DBD0]
                bg-white
                p-6
                shadow-sm
                sm:p-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* DATOS DEL DOCUMENTO */}

              <div className="flex items-start gap-4">
                {/* ICONO PDF */}

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
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8M8 17h8" />
                  </svg>
                </div>

                {/* INFORMACIÓN */}

                <div>
                  <h3
                    className="
                      mb-2
                      text-lg
                      font-extrabold
                      leading-snug
                      sm:text-xl
                    "
                  >
                    {documento.nombre}
                  </h3>

                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-relaxed
                      text-stone-600
                    "
                  >
                    {documento.descripcion}
                  </p>

                  {/* ESTADO DEL DOCUMENTO */}

                  <p
                    className={`
                      mt-3
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      ${
                        documento.disponible
                          ? "text-green-700"
                          : "text-stone-500"
                      }
                    `}
                  >
                    {documento.disponible
                      ? "Documento PDF disponible"
                      : "Documento pendiente de incorporación"}
                  </p>
                </div>
              </div>

              {/* ==================================================
                  4. BOTONES DE DOCUMENTOS
                  ================================================== */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  lg:shrink-0
                "
              >
                {documento.disponible ? (
                  <>
                    {/* VER EN LÍNEA */}

                    <a
                      href={documento.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-orange-600
                        px-6
                        py-3
                        text-sm
                        font-extrabold
                        uppercase
                        text-orange-700
                        transition-colors
                        hover:bg-orange-50
                      "
                    >
                      Ver en línea
                    </a>

                    {/* DESCARGAR PDF */}

                    <a
                      href={documento.archivo}
                      download
                      className="
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        rounded-lg
                        bg-gradient-to-r
                        from-orange-600
                        to-amber-500
                        px-6
                        py-3
                        text-sm
                        font-extrabold
                        uppercase
                        text-white
                        transition-opacity
                        hover:opacity-90
                      "
                    >
                      Descargar PDF
                    </a>
                  </>
                ) : (
                  <span
                    className="
                      inline-flex
                      min-h-12
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-stone-200
                      bg-stone-100
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-stone-500
                    "
                  >
                    Documentación próximamente
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* ==================================================
            5. BOTÓN INFERIOR DE REGRESO
            ================================================== */}

        <div className="mt-12 flex justify-center">
          <Link
            to="/#planes"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-orange-600
              bg-white
              px-7
              py-3
              text-sm
              font-extrabold
              uppercase
              tracking-wide
              text-orange-700
              transition-all
              hover:bg-orange-50
              hover:shadow-lg
            "
          >
            <span aria-hidden="true">←</span>
            VOLVER A PLANES
          </Link>
        </div>
      </section>
    </main>
  );
}
