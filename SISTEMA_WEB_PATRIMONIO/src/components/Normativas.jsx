
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export const normativasData = [
  {
    id: "normativa-055",
    etiqueta: "LEY MUNICIPAL N.º 055",
    titulo: "LEY DE PRESERVACIÓN DE LAS ÁREAS HISTÓRICAS DE POTOSÍ",
    descripcion:
      "Protección y preservación de las áreas históricas de la Villa Imperial de Potosí.",
    imagen: "/images/normativa-055-bg.jpg",
    pdf: "/pdf/normativa-055.pdf",
  },
  {
    id: "normativa-122",
    etiqueta: "LEY MUNICIPAL N.º 122",
    titulo:
      "LEY MUNICIPAL DE PROCEDIMIENTOS ADMINISTRATIVOS EN EL ÁREA DE PATRIMONIO HISTÓRICO",
    descripcion:
      "Procedimientos administrativos relacionados con la gestión del patrimonio histórico de Potosí.",
    imagen: "/images/normativa-122-bg.jpeg",
    pdf: "/pdf/normativa-122.pdf",
  },
];

export default function Normativas() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      id="normativas"
      className="scroll-mt-20 bg-[#F6F2EB] px-5 py-20 text-[#24352F] sm:px-8"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* ENCABEZADO */}

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-[#B94A14]">
            DOCUMENTACIÓN MUNICIPAL
          </p>

          <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,6vw,5.5rem)] uppercase leading-none">
            NORMATIVAS PATRIMONIALES
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-gradient-to-r from-orange-600 to-amber-400" />
        </div>

        {/* TARJETAS */}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {normativasData.map((item, index) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={
                reducirMovimiento
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DDD4C8] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imagen}
                  alt={`Imagen representativa de ${item.etiqueta}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute bottom-5 left-5 rounded-full bg-black/75 px-4 py-2 text-xs font-extrabold uppercase text-amber-300">
                  {item.etiqueta}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-extrabold leading-tight sm:text-2xl">
                  {item.titulo}
                </h3>

                <p className="mb-7 flex-1 text-sm leading-relaxed text-stone-600 sm:text-base">
                  {item.descripcion}
                </p>

                <Link
                  to={`/normativas/${item.id}`}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:from-orange-700 hover:to-amber-600"
                >
                  CONSULTAR NORMATIVA
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
