
import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";

import { planes } from "../data/planes";
import { IconoPlan } from "./PlanesProgramas";

// ============================================================
// DOCUMENTOS PDF DE CADA PLAN
// ============================================================
//
// Los PDF se encuentran en:
//
// public/pdf/
//
// En React + Vite las rutas públicas comienzan con /pdf/,
// no con /public/pdf/.
//
// disponible: true
//   Muestra los botones VER PDF y DESCARGAR.
//
// disponible: false
//   Muestra solamente el nombre y "En elaboración".
// ============================================================

const documentosPorTipo = {
  manejo: [
    {
      id: "plan-manejo",
      titulo: "Plan de Manejo de la Ciudad de Potosí",
      descripcion:
        "Documento de planificación y gestión orientado a la preservación del patrimonio histórico y urbano de la ciudad de Potosí.",
      archivo: "/pdf/plan_de_manejo.pdf",
      disponible: true,
    },
  ],

  rehabilitacion: [
    {
      id: "plan-rehabilitacion",
      titulo: "Plan de Rehabilitación de Áreas Históricas",
      descripcion:
        "Documento de planificación para la rehabilitación, recuperación y conservación de las áreas históricas y su arquitectura patrimonial.",
      archivo: "/pdf/img004.pdf",
      disponible: true,
    },
  ],

  contingencia: [
    // DOCUMENTO PRINCIPAL
    {
      id: "plan-contingencia",
      titulo: "Plan de Contingencia",
      descripcion:
        "Documento de planificación de medidas de prevención, respuesta y protección del patrimonio histórico de Potosí.",
      archivo: "/pdf/Plan_de_Contingencia.pdf",
      disponible: true,
    },

    // DOCUMENTO TODAVÍA EN ELABORACIÓN
    {
      id: "guia-tecnica",
      titulo: "Guía técnica",
      descripcion:
        "Documento complementario del Plan de Contingencia.",
      archivo: null,
      disponible: false,
    },

    // DOCUMENTO TODAVÍA EN ELABORACIÓN
    {
      id: "normativa-inspeccion",
      titulo: "Normativa para la inspección",
      descripcion:
        "Documento complementario del Plan de Contingencia.",
      archivo: null,
      disponible: false,
    },
  ],
};

// ============================================================
// IDENTIFICAR EL TIPO DE PLAN
// ============================================================

function identificarTipo(plan) {
  const texto = [
    plan?.id,
    plan?.icono,
    plan?.titulo,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (texto.includes("contingencia")) {
    return "contingencia";
  }

  if (texto.includes("rehabilitacion")) {
    return "rehabilitacion";
  }

  return "manejo";
}

// ============================================================
// TARJETA INDIVIDUAL DE DOCUMENTO
// ============================================================

function TarjetaDocumento({
  documento,
  index,
  reducirMovimiento,
}) {
  const estaDisponible =
    documento.disponible && Boolean(documento.archivo);

  return (
    <motion.article
      initial={
        reducirMovimiento
          ? false
          : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
      className="
        group flex flex-col gap-6
        rounded-2xl border border-[#E5D9CD]
        bg-white p-6
        shadow-[0_8px_28px_rgba(50,35,25,0.06)]
        transition-all duration-300
        hover:border-[#DAA16A]
        hover:shadow-[0_16px_40px_rgba(75,35,20,0.10)]
        md:flex-row md:items-center
        md:justify-between md:p-8
      "
    >
      {/* INFORMACIÓN DEL DOCUMENTO */}

      <div className="flex min-w-0 flex-1 items-start gap-5">
        <div
          className="
            flex h-16 w-16 shrink-0
            items-center justify-center
            rounded-xl bg-[#FFF3E8]
            text-[#B94A14]
          "
        >
          <FileText size={31} strokeWidth={1.7} />
        </div>

        <div className="min-w-0">
          <span
            className="
              mb-2 block text-[11px] font-extrabold
              uppercase tracking-[0.16em]
              text-[#B94A14]
            "
          >
            {estaDisponible
              ? "Documento PDF"
              : "Documento complementario"}
          </span>

          <h3
            className="
              text-xl font-extrabold
              leading-snug text-[#20342E]
              md:text-2xl
            "
          >
            {documento.titulo}
          </h3>

          {estaDisponible ? (
            <p
              className="
                mt-3 max-w-2xl text-sm
                leading-relaxed text-stone-600
                md:text-base
              "
            >
              {documento.descripcion}
            </p>
          ) : (
            <p
              className="
                mt-3 text-sm font-semibold
                text-[#A94C16]
                md:text-base
              "
            >
              En elaboración
            </p>
          )}
        </div>
      </div>

      {/* ACCIONES:
          SOLO PARA DOCUMENTOS DISPONIBLES */}

      {estaDisponible && (
        <div
          className="
            flex shrink-0 flex-wrap gap-3
            md:justify-end
          "
        >
          <a
            href={documento.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex min-h-12 items-center
              justify-center gap-2 rounded-xl
              bg-[#17372D] px-5 py-3
              text-xs font-extrabold
              uppercase tracking-wide
              text-white transition
              hover:bg-[#285845]
            "
          >
            <ExternalLink size={17} />
            Ver PDF
          </a>

          <a
            href={documento.archivo}
            download
            className="
              inline-flex min-h-12 items-center
              justify-center gap-2 rounded-xl
              border-2 border-[#B94A14]
              px-5 py-3
              text-xs font-extrabold
              uppercase tracking-wide
              text-[#B94A14]
              transition
              hover:bg-[#B94A14]
              hover:text-white
            "
          >
            <Download size={17} />
            Descargar
          </a>
        </div>
      )}
    </motion.article>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL: DETALLE DE PLAN
// ============================================================

export default function PlanDetalle() {
  const { planId } = useParams();
  const reducirMovimiento = useReducedMotion();

  // Buscar el plan seleccionado en los datos originales.

  const plan = planes.find(
    (item) => String(item.id) === String(planId)
  );

  // Si el ID no existe, mostrar un mensaje.

  if (!plan) {
    return (
      <main
        className="
          flex min-h-[80vh] flex-col
          items-center justify-center
          bg-[#F7F4EF] px-6 text-center
        "
      >
        <FileText
          size={50}
          className="mb-5 text-[#B94A14]"
        />

        <h1
          className="
            mb-4 text-3xl font-extrabold
            text-[#20342E]
          "
        >
          Plan no encontrado
        </h1>

        <p className="mb-7 text-stone-600">
          No encontramos el plan solicitado.
        </p>

        <Link
          to="/#planes"
          className="
            rounded-xl bg-[#17372D]
            px-6 py-3 font-bold text-white
          "
        >
          Volver a Planes
        </Link>
      </main>
    );
  }

  const tipo = identificarTipo(plan);

  const documentos =
    documentosPorTipo[tipo] || [];

  return (
    <main
      className="
        min-h-screen bg-[#F7F4EF]
        text-[#20342E]
      "
    >
      {/* ======================================================
          ENCABEZADO DEL PLAN
          ====================================================== */}

      <section
        className="
          bg-[#F7F4EF]
          px-6 pb-10 pt-36
          sm:px-10
          lg:px-20 lg:pt-44
        "
      >
        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 25 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="
            mx-auto flex max-w-[1400px]
            flex-col items-start gap-7
            md:flex-row md:items-center
          "
        >
          {/* ÍCONO DEL PLAN */}

          <div
            className="
              flex h-20 w-20 shrink-0
              items-center justify-center
              text-[#E52C36]
            "
          >
            <IconoPlan
              tipo={plan.icono}
              size={68}
            />
          </div>

          {/* TEXTO */}

          <div>
            <p
              className="
                mb-3 text-xs font-extrabold
                uppercase tracking-[0.16em]
                text-[#B94A14]
              "
            >
              Dirección de Patrimonio Histórico
            </p>

            <h1
              className="
                text-3xl font-extrabold
                leading-tight text-[#20342E]
                md:text-4xl
              "
            >
              Documentación del plan
            </h1>

            <p
              className="
                mt-4 max-w-4xl text-base
                leading-relaxed text-stone-600
                md:text-lg
              "
            >
              {plan.descripcion}
            </p>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          DOCUMENTACIÓN DISPONIBLE
          ====================================================== */}

      <section
        className="
          mx-auto max-w-[1400px]
          px-6 pb-16 pt-8
          sm:px-10 lg:px-20
        "
      >
        <div className="mb-8 flex items-center gap-3">
          <BookOpen
            size={23}
            className="text-[#B94A14]"
          />

          <h2
            className="
              text-lg font-extrabold
              uppercase tracking-wide
              text-[#20342E]
            "
          >
            Documentos del plan
          </h2>
        </div>

        <div className="space-y-5">
          {documentos.map((documento, index) => (
            <TarjetaDocumento
              key={documento.id}
              documento={documento}
              index={index}
              reducirMovimiento={
                reducirMovimiento
              }
            />
          ))}
        </div>
      </section>

      {/* ======================================================
          REGRESAR A PLANES
          ====================================================== */}

      <section
        className="
          flex justify-center
          px-6 pb-24
        "
      >
        <Link
          to="/#planes"
          className="
            inline-flex min-h-12
            items-center justify-center gap-3
            rounded-xl border-2
            border-[#B94A14]
            px-7 py-3
            text-sm font-extrabold uppercase
            tracking-wide text-[#B94A14]
            transition-all duration-300
            hover:bg-[#B94A14]
            hover:text-white
          "
        >
          <ArrowLeft size={18} />
          Volver a Planes

          <ArrowRight
            size={16}
            className="hidden"
          />
        </Link>
      </section>
    </main>
  );
}
