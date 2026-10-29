
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { planes } from "../data/planes";

// ============================================================
// ICONOS ARQUITECTÓNICOS
// ============================================================

export function IconoPlan({ tipo, size = 55 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {tipo === "manejo" && (
        <>
          <path d="M7 27 32 7l25 20" />
          <path d="M13 27v27h38V27" />
          <path d="M20 54V32h24v22" />
          <path d="M32 32v22" />
          <path d="M23 40h18" />
          <path d="M23 47h18" />
        </>
      )}

      {tipo === "rehabilitacion" && (
        <>
          <path d="M6 27 32 7l26 20" />
          <path d="M13 27v28h38V27" />
          <path d="M20 55V37h10v18" />
          <path d="M37 36h8v10h-8z" />
          <path d="M11 55h42" />
          <path d="m33 18 6 6-7 7-6-6z" />
        </>
      )}

      {tipo === "contingencia" && (
        <>
          <path d="M7 27 32 7l25 20" />
          <path d="M13 27v28h38V27" />
          <path d="M32 25 45 30v10c0 8-6 13-13 16-7-3-13-8-13-16V30z" />
          <path d="m25 40 5 5 10-11" />
        </>
      )}
    </svg>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function PlanesProgramas() {
  const reducirMovimiento = useReducedMotion();

  return (
    <main
      id="planes-programas"
      className="min-h-screen bg-[#F7F4EF] text-[#20342E]"
    >
      {/* PORTADA INSTITUCIONAL */}

      <section className="relative flex min-h-[85svh] w-full items-center overflow-hidden bg-[#101F1C] px-6 pb-24 pt-40 text-white sm:px-12 lg:px-20 xl:px-28">
        <motion.img
          src="/images/potosi_patrimonio.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={
            reducirMovimiento
              ? { scale: 1 }
              : { scale: [1, 1.1, 1] }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2520]/95 via-[#0B2520]/75 to-[#0B2520]/45" />

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 40 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-[1400px]"
        >
          <p className="mb-6 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.25em] text-amber-300 sm:text-sm">
            <span className="h-[2px] w-12 bg-amber-400" />
            DIRECCIÓN DE PATRIMONIO HISTÓRICO
          </p>

          <h1 className="font-['Bebas_Neue'] text-[clamp(4.5rem,10vw,10rem)] uppercase leading-[0.86] tracking-[0.035em]">
            <span className="block text-white">
              PLANES
            </span>

           
          </h1>

          <div className="my-9 h-[3px] w-24 bg-gradient-to-r from-orange-500 to-amber-400" />

          <p className="max-w-2xl text-base font-semibold leading-relaxed text-zinc-100 sm:text-lg lg:text-xl">
            Instrumentos de planificación, protección y
            conservación del patrimonio histórico y
            arquitectónico de la Villa Imperial de Potosí.
          </p>
        </motion.div>
      </section>

      {/* PRESENTACIÓN */}

      <section className="px-5 pb-8 pt-16 text-center sm:px-8 lg:pt-20">
        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#B94A14]">
            PLANIFICACIÓN PATRIMONIAL
          </p>

          <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,6vw,6rem)] uppercase leading-none tracking-wide text-[#20342E]">
            PRESERVANDO NUESTRO LEGADO
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-20 bg-gradient-to-r from-orange-600 to-amber-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600">
            Conoce los instrumentos de planificación para
            proteger y conservar el patrimonio histórico
            de Potosí.
          </p>
        </motion.div>
      </section>

      {/* TRES TARJETAS */}

      <section
        aria-label="Planes patrimoniales disponibles"
        className="mx-auto max-w-[1400px] px-5 pb-24 pt-8 sm:px-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {planes.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={
                reducirMovimiento
                  ? false
                  : { opacity: 0, y: 45 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              className="group flex min-h-[310px] flex-col items-center rounded-xl border border-[#E6DDD4] bg-white px-7 pb-7 pt-10 text-center shadow-[0_8px_25px_rgba(40,30,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-[0_18px_38px_rgba(140,55,30,0.17)]"
            >
              {/* ICONO */}

              <div className="mb-6 flex h-24 w-24 items-center justify-center text-[#E52C36] transition-transform duration-300 group-hover:scale-105">
                <IconoPlan tipo={plan.icono} size={78} />
              </div>

              {/* CATEGORÍA */}

              <span className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#A94C16]">
                {plan.categoria}
              </span>

              {/* TÍTULO */}

              <h3 className="mb-4 text-xl font-extrabold leading-snug text-[#25352F] lg:text-2xl">
                {plan.titulo}
              </h3>

              {/* DESCRIPCIÓN */}

              <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600">
                {plan.descripcion}
              </p>

              {/* ÚNICO ELEMENTO QUE REDIRECCIONA */}

              <Link
                to={`/planes/${plan.id}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-[#B94A14] transition-all duration-300 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                EXPLORAR PLAN

                <span aria-hidden="true" className="text-xl">
                  →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
