
import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { normativasData } from "./Normativas";

export default function NormativaDetalle() {
  const { normativaId } = useParams();
  const reducirMovimiento = useReducedMotion();

  const normativa = normativasData.find(
    (item) => item.id === normativaId
  );

  if (!normativa) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#F6F2EB] px-6 text-center">
        <h1 className="text-3xl font-extrabold text-[#24352F]">
          Normativa no encontrada
        </h1>

        <Link
          to="/#normativas"
          className="rounded-lg bg-orange-600 px-6 py-3 font-bold text-white"
        >
          Volver a Normativas
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F6F2EB] text-[#24352F]">

      {/* PORTADA */}

      <section className="relative flex min-h-[60svh] items-center overflow-hidden bg-zinc-950 px-6 pb-20 pt-40 text-white lg:px-24">
        <img
          src={normativa.imagen}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 35 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto w-full max-w-[1250px]"
        >
          <Link
            to="/#normativas"
            className="mb-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-amber-300 hover:text-white"
          >
            ← VOLVER A NORMATIVAS
          </Link>

          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300">
            {normativa.etiqueta}
          </p>

          <h1 className="max-w-5xl font-['Bebas_Neue'] text-[clamp(3rem,6vw,6rem)] uppercase leading-none">
            {normativa.titulo}
          </h1>

          <div className="mt-7 h-[2px] w-24 bg-amber-400" />
        </motion.div>
      </section>

      {/* DOCUMENTACIÓN */}

      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8">
        <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-lg sm:p-10">

          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-orange-700">
            DOCUMENTACIÓN MUNICIPAL
          </p>

          <h2 className="mb-5 text-2xl font-extrabold sm:text-3xl">
            Consulta del documento
          </h2>

          <p className="mb-9 max-w-3xl text-base leading-relaxed text-stone-600">
            {normativa.descripcion}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href={normativa.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-600 px-7 py-3 text-sm font-extrabold uppercase text-orange-700 transition-colors hover:bg-orange-50"
            >
              VER EN LÍNEA
            </a>

            <a
              href={normativa.pdf}
              download={`${normativa.id}.pdf`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-7 py-3 text-sm font-extrabold uppercase text-white transition-opacity hover:opacity-90"
            >
              DESCARGAR PDF
            </a>

          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/#normativas"
            className="inline-flex items-center gap-2 font-bold text-orange-700 hover:underline"
          >
            ← VOLVER A NORMATIVAS
          </Link>
        </div>
      </section>
    </main>
  );
}
