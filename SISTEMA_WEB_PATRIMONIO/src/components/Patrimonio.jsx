
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Landmark,
  ShieldCheck,
} from "lucide-react";

// ============================================================
// PATRIMONIO HISTÓRICO DE POTOSÍ
// ============================================================
// Cada componente dispone de:
//
// imagen:
//   Fotografía principal para tarjeta, portada e historia.
//
// imagenConservacion:
//   Segunda fotografía, exclusivamente para la sección
//   "Protección y conservación".
//
// Puedes cambiar los nombres sin modificar el diseño.
// ============================================================

const categorias = [
  {
    id: "minero",
    titulo: "Patrimonio Minero",

    imagen: "/images/minera.webp",
    imagenConservacion: "/images/minera1.webp",

    resumen:
      "El Cerro Rico es el símbolo histórico de la actividad minera que transformó a Potosí en uno de los centros económicos más influyentes de la época colonial.",

    historia:
      "La explotación de la plata del Cerro Rico marcó profundamente la historia de Potosí. A partir del siglo XVI, la actividad minera impulsó el crecimiento de la ciudad, la transformación de los sistemas productivos y la circulación internacional de metales preciosos. Este legado comprende tanto el paisaje del cerro como las huellas materiales de la minería histórica.",

    componentes: [
      "Cerro Rico de Potosí",
      "Antiguos socavones y labores mineras",
      "Paisaje cultural productivo",
      "Memoria histórica de la minería",
    ],

    conservacion:
      "La protección del Cerro Rico requiere atender los riesgos de inestabilidad y deterioro vinculados a la actividad minera, preservando sus atributos patrimoniales.",
  },

  {
    id: "medioambiental",
    titulo: "Patrimonio Medioambiental",

    imagen: "/images/medioambiental.webp",

    imagenConservacion: "/images/laguna.webp",

    resumen:
      "Las lagunas y el paisaje de la cordillera del Kari Kari forman parte de un sistema histórico de almacenamiento y conducción del agua.",

    historia:
      "La cordillera del Kari Kari conserva un conjunto de lagunas y obras hidráulicas relacionadas con el abastecimiento de agua y con el funcionamiento de los antiguos ingenios mineros. Durante la época colonial, estas infraestructuras permitieron aprovechar la energía del agua para diversas actividades productivas, convirtiéndose en una parte esencial del paisaje cultural de Potosí.",

    componentes: [
      "Cordillera del Kari Kari",
      "Lagunas históricas",
      "Canales y sistemas de conducción",
      "Paisaje natural y cultural",
    ],

    conservacion:
      "La conservación de este patrimonio comprende la protección del paisaje, el mantenimiento de las infraestructuras históricas y la prevención de riesgos que puedan afectar al sistema hidráulico.",
  },

  {
    id: "arqueologico",
    titulo: "Patrimonio Arqueológico Industrial",

    imagen: "/images/carcamo2.webp",

    // NUEVA SEGUNDA IMAGEN
    imagenConservacion: "/images/carcamo1.webp",

    resumen:
      "La Ribera de los Ingenios conserva vestigios del sistema industrial de procesamiento de minerales que caracterizó a Potosí.",

    historia:
      "Los antiguos ingenios formaron parte del complejo tecnológico empleado en el procesamiento de los minerales extraídos del Cerro Rico. Su funcionamiento estuvo relacionado con la infraestructura hidráulica proveniente del Kari Kari. Las estructuras, los restos constructivos y los espacios industriales permiten comprender las técnicas de producción desarrolladas durante el periodo colonial.",

    componentes: [
      "Ribera de los Ingenios",
      "Vestigios de ingenios históricos",
      "Infraestructura hidráulica industrial",
      "Sistemas de procesamiento de minerales",
    ],

    conservacion:
      "La conservación requiere identificar, documentar y proteger los vestigios industriales, evitando su deterioro y promoviendo su comprensión como parte de la historia tecnológica de Potosí.",
  },

  {
    id: "arquitectonico",
    titulo: "Patrimonio Arquitectónico",

    imagen: "/images/templo.webp",

    // NUEVA SEGUNDA IMAGEN
    imagenConservacion: "/images/templo1.webp",

    resumen:
      "Templos, casonas, portadas y balcones testimonian las transformaciones artísticas y arquitectónicas de la Villa Imperial.",

    historia:
      "El patrimonio arquitectónico de Potosí reúne edificaciones civiles y religiosas de diferentes momentos de su desarrollo. Sus fachadas, portadas, patios, balcones y elementos ornamentales expresan distintas técnicas constructivas e influencias artísticas. La arquitectura monumental y doméstica constituye uno de los atributos que sustentan el valor histórico de la ciudad.",

    componentes: [
      "Templos y conjuntos religiosos",
      "Casonas y viviendas históricas",
      "Portadas y balcones",
      "Arquitectura civil monumental",
    ],

    conservacion:
      "La preservación de estos inmuebles exige el mantenimiento de sus materiales, la protección de sus elementos originales y la intervención conforme a criterios técnicos patrimoniales.",
  },

  {
    id: "urbano",
    titulo: "Patrimonio Urbano",

    imagen: "/images/mitayo1.webp",

    // NUEVA SEGUNDA IMAGEN
    imagenConservacion: "/images/mitayo2.webp",

    resumen:
      "El trazado urbano, las plazas y los barrios históricos conservan la memoria social y territorial de la ciudad de Potosí.",

    historia:
      "El patrimonio urbano comprende la organización histórica de las calles, los barrios, los espacios públicos y las relaciones entre las edificaciones. Dentro de este conjunto destaca el Barrio de los Mitayos, caracterizado por un trazado irregular vinculado con la topografía, los asentamientos y la historia del trabajo minero. Su estudio permite comprender una dimensión social fundamental de la evolución de Potosí.",

    componentes: [
      "Centro Histórico de Potosí",
      "Barrio de los Mitayos",
      "Calles y plazas tradicionales",
      "Trazados y espacios urbanos históricos",
    ],

    conservacion:
      "La conservación urbana comprende la protección de la configuración histórica de los barrios, la calidad del paisaje urbano y la compatibilidad de las nuevas intervenciones con el entorno patrimonial.",
  },
];

// ============================================================
// CONFIGURACIÓN DE ANIMACIONES
// ============================================================

const DURACION_ZOOM = 24;

const entrada = {
  oculto: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

// ============================================================
// IMAGEN CON ZOOM CINEMATOGRÁFICO
// ============================================================

function ImagenPatrimonial({
  src,
  alt,
  zoom = true,
}) {
  const reducirMovimiento = useReducedMotion();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const animarZoom = zoom && !reducirMovimiento;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#17372D]">
      {!error ? (
        <motion.img
          key={src}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          draggable={false}
          onError={() => setError(true)}
          className="absolute inset-0 h-full w-full select-none object-cover"
          initial={{ scale: 1.01 }}
          animate={{
            scale: animarZoom
              ? [1.01, 1.09, 1.01]
              : 1,
          }}
          transition={{
            scale: {
              duration: DURACION_ZOOM,
              repeat: animarZoom ? Infinity : 0,
              ease: "easeInOut",
            },
          }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#E5C99A]">
          <Landmark size={38} strokeWidth={1} />

          <span className="text-xs uppercase tracking-widest">
            Fotografía patrimonial
          </span>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ORNAMENTO COLONIAL
// ============================================================

function OrnamentoColonial({
  lado = "izquierda",
}) {
  return (
    <svg
      viewBox="0 0 130 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute top-1/2
        hidden h-[230px] w-[105px]
        -translate-y-1/2
        opacity-75 lg:block
        ${
          lado === "izquierda"
            ? "left-5 xl:left-8"
            : "right-5 scale-x-[-1] xl:right-8"
        }
      `}
    >
      <g
        stroke="#D9AC6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="
            M112 267
            C65 256 27 227 21 182
            C13 144 38 115 51 88
            C68 54 56 24 34 20
            C18 17 9 32 17 46
            C23 56 39 53 39 43
            C39 36 31 34 28 40
          "
        />

        <path
          d="
            M72 221
            C39 214 30 187 37 170
            C42 156 59 154 66 164
            C76 177 64 190 53 185
            C47 182 47 176 52 173
          "
        />

        <path
          d="
            M49 114
            C22 105 15 88 22 74
            C29 60 48 64 51 76
            C54 86 43 93 36 87
          "
        />

        <path
          d="
            M27 195
            C8 176 4 155 13 141
            C22 126 39 135 35 146
          "
        />

        <path
          d="
            M60 95
            C79 82 89 61 83 46
            C78 34 64 37 62 47
          "
        />
      </g>
    </svg>
  );
}

// ============================================================
// SELLO DECORATIVO
// ============================================================

function SelloDecorativo() {
  return (
    <div
      aria-hidden="true"
      className="mt-5 flex items-center justify-center gap-4"
    >
      <span className="h-[2px] w-12 bg-[#D9AC6A] sm:w-24" />

      <svg
        width="46"
        height="20"
        viewBox="0 0 46 20"
        fill="none"
      >
        <path
          d="M11 10L18 3L25 10L18 17L11 10Z"
          stroke="#D9AC6A"
          strokeWidth="1.5"
        />

        <path
          d="M21 10L28 3L35 10L28 17L21 10Z"
          stroke="#D9AC6A"
          strokeWidth="1.5"
        />

        <path
          d="M3 10H10M36 10H43"
          stroke="#D9AC6A"
          strokeWidth="1.5"
        />
      </svg>

      <span className="h-[2px] w-12 bg-[#D9AC6A] sm:w-24" />
    </div>
  );
}

// ============================================================
// PORTADA PATRIMONIO - PÁGINA PRINCIPAL
// ============================================================

function PortadaPatrimonio() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      id="patrimonio"
className="relative isolate scroll-mt-20 overflow-hidden bg-[#650611] text-white"    >
      {/* FOTOGRAFÍA DE FONDO */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[54%]">
          <motion.img
            src="/images/cerro_hero.webp"
            alt="Cerro Rico y arquitectura histórica de Potosí"
            loading="lazy"
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1.02 }}
            animate={{
              scale: reducirMovimiento
                ? 1
                : [1.02, 1.1, 1.02],
            }}
            transition={{
              scale: {
                duration: 24,
                repeat: reducirMovimiento ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* CAPA OSCURA PARA LEGIBILIDAD */}
<div className="absolute inset-0 bg-[#650611]/40 md:bg-transparent" />

{/* DEGRADADO ROJO → NARANJA → TRANSPARENTE */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, #650611 0%, #8F130A 23%, #BB4208 43%, rgba(191,76,8,0.85) 51%, rgba(172,68,13,0.45) 65%, transparent 83%)",
  }}
/>

{/* SOMBRA SUAVE EN LA PARTE INFERIOR */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(0deg, rgba(91,11,8,0.55) 0%, transparent 45%)",
  }}
/>
      </div>

      {/* CONTENIDO */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="relative z-10 mx-auto flex min-h-[690px] max-w-7xl items-center px-6 py-24 md:min-h-[760px] md:px-12 md:py-28"
      >
        <div className="max-w-[700px]">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#E3B576]">
            Dirección de Patrimonio Histórico
          </p>

          <h2 className="font-['Bebas_Neue'] text-[clamp(4rem,7.5vw,7.5rem)] uppercase leading-[0.91] tracking-wide">
            Patrimonio

            <span className="block text-[#FFC83D]">
  de Potosí
</span>
          </h2>

          <div className="mb-7 mt-9 h-[6px] w-24 rounded-full bg-[#E5AB69]" />

          <p className="max-w-[610px] text-base leading-[1.9] text-[#F2F0E9] drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)] md:text-lg">
            La historia, la tecnología, el paisaje y la
            arquitectura de la Villa Imperial conforman
            un legado de valor excepcional que merece
            ser conocido, protegido y transmitido.
          </p>

          <Link
            to="/patrimonio/componentes"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#E5AB69]/70 bg-[#17372D]/55 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#F2D2A5] backdrop-blur-sm transition-all duration-300 hover:bg-[#E5AB69] hover:text-[#17372D]"
          >
            Descubrir los cinco componentes
            <ChevronDown size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================
// TARJETAS PATRIMONIALES
// ============================================================

function TarjetaPatrimonio({
  categoria,
  onAbrir,
}) {
  return (
    <motion.button
      type="button"
      variants={entrada}
      onClick={() => onAbrir(categoria.id)}
      aria-label={`Explorar ${categoria.titulo}`}
      className="group relative isolate h-[390px] w-full overflow-hidden rounded-[20px] bg-[#17372D] text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-[440px]"
    >
      {/* IMAGEN PRINCIPAL */}

      <div className="absolute inset-0">
        <ImagenPatrimonial
          src={categoria.imagen}
          alt={categoria.titulo}
        />
      </div>

      {/* DEGRADADO */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

      {/* INFORMACIÓN */}

      <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
        <h3 className="max-w-[380px] font-['Bebas_Neue'] text-[clamp(2rem,3vw,3rem)] uppercase leading-none tracking-wide">
          {categoria.titulo}
        </h3>

        <p className="mt-4 max-w-[350px] text-sm leading-relaxed text-white/85">
          {categoria.subtitulo}
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EBC797]">
          Conocer más
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.button>
  );
}

// ============================================================
// GALERÍA DE LOS CINCO COMPONENTES
// ============================================================

function GaleriaComponentes({
  onAbrir,
}) {
  return (
    <motion.main
      key="galeria"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-[#F6F1E9]"
    >
      {/* ENCABEZADO */}

      <section className="relative px-5 pb-8 pt-36 sm:px-8 md:px-12 md:pb-10 md:pt-44">
        <div className="mx-auto max-w-[1500px]">

          <Link
            to="/#patrimonio"
            className="mb-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#17372D] transition-colors hover:text-[#AE602A]"
          >
            <ArrowLeft size={18} />
            Volver a Patrimonio
          </Link>

          {/* RECUADRO INSTITUCIONAL */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative isolate overflow-hidden rounded-[22px] border-[3px] border-[#D9AC6A] bg-[#10392C] px-5 py-14 text-center shadow-[0_20px_55px_rgba(18,48,35,0.15)] sm:px-10 sm:py-16 lg:px-28 lg:py-20"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#194C38] via-[#10392C] to-[#08291F]" />

            {/* MARCO INTERNO */}

            <div className="pointer-events-none absolute inset-[8px] rounded-[14px] border border-[#D9AC6A]/55" />

            {/* ESQUINAS */}

            <div className="pointer-events-none absolute left-[7px] top-[7px] h-7 w-7 rounded-tl-[12px] border-l-[3px] border-t-[3px] border-[#F0C789]" />

            <div className="pointer-events-none absolute right-[7px] top-[7px] h-7 w-7 rounded-tr-[12px] border-r-[3px] border-t-[3px] border-[#F0C789]" />

            <div className="pointer-events-none absolute bottom-[7px] left-[7px] h-7 w-7 rounded-bl-[12px] border-b-[3px] border-l-[3px] border-[#F0C789]" />

            <div className="pointer-events-none absolute bottom-[7px] right-[7px] h-7 w-7 rounded-br-[12px] border-b-[3px] border-r-[3px] border-[#F0C789]" />

            {/* ORNAMENTOS */}

            <OrnamentoColonial lado="izquierda" />
            <OrnamentoColonial lado="derecha" />

            {/* TEXTO SUPERIOR */}

            <div className="relative z-10 mb-7 flex items-center justify-center gap-3">
              <span className="hidden h-[2px] w-12 bg-[#D9AC6A]/80 lg:block" />

              <p className="max-w-[900px] text-[10px] font-bold uppercase leading-relaxed tracking-[0.2em] text-[#E8BB7E] sm:text-xs lg:text-sm lg:tracking-[0.25em]">
                Una ciudad, cinco expresiones de su historia
              </p>

              <span className="hidden h-[2px] w-12 bg-[#D9AC6A]/80 lg:block" />
            </div>

            {/* TÍTULO PRINCIPAL */}

            <h1 className="relative z-10 mx-auto max-w-[1300px] font-['Bebas_Neue'] text-[clamp(2.8rem,6.6vw,7rem)] uppercase leading-[0.98] tracking-[0.018em] text-white">
              <span className="block">
                Nuestro patrimonio
              </span>

              <span className="mt-2 block text-[#E5AB69]">
                Una historia compartida
              </span>
            </h1>

            <SelloDecorativo />

          </motion.div>
        </div>
      </section>

      {/* TARJETAS */}

      <section className="mx-auto max-w-[1500px] px-5 pb-24 pt-5 sm:px-8 md:px-12 md:pt-8">
        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-6"
        >
          {categorias.map((categoria, index) => (
            <div
              key={categoria.id}
              className={
                index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }
            >
              <TarjetaPatrimonio
                categoria={categoria}
                onAbrir={onAbrir}
              />
            </div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}

// ============================================================
// DETALLE DE CADA COMPONENTE
// ============================================================

function DetallePatrimonio({
  categoria,
  onVolver,
}) {
  const reducirMovimiento = useReducedMotion();

  const irAHistoria = () => {
    document
      .getElementById("historia-patrimonial")
      ?.scrollIntoView({
        behavior: reducirMovimiento
          ? "auto"
          : "smooth",
        block: "start",
      });
  };

  return (
    <motion.main
      key={categoria.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-[#F6F1E9]"
    >

      {/* ======================================================
          1. PORTADA CINEMATOGRÁFICA
          ====================================================== */}

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#12271F] text-white">

        {/* PRIMERA IMAGEN */}

        <div className="absolute inset-0">
          <ImagenPatrimonial
            src={categoria.imagen}
            alt={categoria.titulo}
          />
        </div>

        {/* DEGRADADOS */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#061610]/70 via-[#061610]/20 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061610]/85 via-transparent to-black/10" />

        {/* CONTENIDO */}

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-44">

          <button
            type="button"
            onClick={onVolver}
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/50 bg-black/25 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#17372D]"
          >
            <ArrowLeft size={17} />
            Volver a los cinco componentes
          </button>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
            }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#F0CB94]">
              Patrimonio histórico de Potosí
            </p>

            <h1 className="max-w-4xl font-['Bebas_Neue'] text-[clamp(3.3rem,6vw,6.8rem)] uppercase leading-[0.95] tracking-wide text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.45)]">
              {categoria.titulo}
            </h1>

            <p className="mt-5 text-[clamp(1.1rem,2vw,1.45rem)] font-medium text-[#F0CB94]">
              {categoria.subtitulo}
            </p>

            <div className="mt-7 h-[6px] w-20 rounded-full bg-[#E5AB69]" />

            <p className="mt-6 max-w-2xl text-base leading-[1.85] text-white/95 drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] md:text-lg">
              {categoria.resumen}
            </p>

            <button
              type="button"
              onClick={irAHistoria}
              aria-label="Explorar la historia"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#E9C593] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#F0CB94] transition-colors hover:text-white"
            >
              <ChevronDown size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          2. HISTORIA Y VALOR PATRIMONIAL
          ====================================================== */}

      <section
        id="historia-patrimonial"
        className="scroll-mt-20 overflow-hidden bg-[#F6F1E9] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* INFORMACIÓN */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.23em] text-[#AD5A2D]">
              Memoria e identidad
            </p>

            <h2 className="max-w-3xl font-['Bebas_Neue'] text-[clamp(3rem,4.5vw,5rem)] uppercase leading-[0.95] tracking-wide text-[#18372C]">
              Un legado que

              <span className="block text-[#AD5A2D]">
                trasciende el tiempo
              </span>
            </h2>

            <div className="my-8 h-[6px] w-20 rounded-full bg-[#C39458]" />

            <p className="max-w-xl text-base leading-[2] text-[#47554D] md:text-[17px]">
              {categoria.historia}
            </p>

            {/* ELEMENTOS PATRIMONIALES */}

            <div className="mt-12">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#17372D]">
                Elementos que conforman este patrimonio
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {categoria.componentes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/65 px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    <div className="mb-3 h-2 w-10 rounded-full bg-[#C39458]" />

                    <span className="text-sm leading-relaxed text-[#46534C]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FOTOGRAFÍA DE HISTORIA */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[18px] border-4 border-[#C39458]/65" />

            <div className="relative h-[420px] overflow-hidden rounded-[18px] bg-[#17372D] shadow-[0_25px_60px_rgba(0,0,0,0.16)] sm:h-[560px] lg:h-[660px]">

              <ImagenPatrimonial
                src={categoria.imagen}
                alt={categoria.titulo}
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-7 pb-7 pt-24">
                <p className="text-lg font-medium leading-relaxed text-white">
                  {categoria.frase}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          3. PROTECCIÓN Y CONSERVACIÓN
          ====================================================== */}

      <section className="bg-[#17372D] text-white">
        <div className="grid min-h-[470px] lg:grid-cols-[0.9fr_1.1fr]">

          {/* SEGUNDA IMAGEN INDEPENDIENTE */}

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[470px]">
            <ImagenPatrimonial
              src={
                categoria.imagenConservacion ||
                categoria.imagen
              }
              alt={`Conservación del ${categoria.titulo}`}
            />

            <div className="absolute inset-0 bg-[#10251D]/25" />
          </div>

          {/* TEXTO DE CONSERVACIÓN */}

          <div className="flex flex-col justify-center px-8 py-14 sm:px-14 lg:px-20">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E5AB69]/70 text-[#E5AB69]">
              <ShieldCheck
                size={26}
                strokeWidth={1.5}
              />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#E5AB69]">
              Protección y conservación
            </p>

            <h2 className="max-w-xl font-['Bebas_Neue'] text-[clamp(3rem,4.3vw,5rem)] uppercase leading-[0.95] tracking-wide">
              Preservar el pasado,

              <span className="block text-[#E5AB69]">
                cuidar el futuro
              </span>
            </h2>

            <div className="mt-7 h-[6px] w-20 rounded-full bg-[#E5AB69]" />

            <p className="mt-7 max-w-xl text-base leading-[1.95] text-[#E0E9E2]">
              {categoria.conservacion}
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. VOLVER A LOS CINCO COMPONENTES
          ====================================================== */}

      <section className="bg-[#F6F1E9] px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AD5A2D]">
              Continúa explorando
            </p>

            <h3 className="mt-2 font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-[#17372D]">
              Descubre el patrimonio de Potosí
            </h3>
          </div>

          <button
            type="button"
            onClick={onVolver}
            className="inline-flex items-center gap-3 rounded-full bg-[#17372D] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#A9572B]"
          >
            Ver los cinco componentes
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </motion.main>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Patrimonio({
  vista = "portada",
}) {
  const [categoriaActiva, setCategoriaActiva] =
    useState(null);

  const seleccionada = categorias.find(
    (categoria) =>
      categoria.id === categoriaActiva
  );

  // REINICIAR DESPLAZAMIENTO

  useEffect(() => {
    if (vista !== "componentes") return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [categoriaActiva, vista]);

  // PORTADA PRINCIPAL

  if (vista === "portada") {
    return <PortadaPatrimonio />;
  }

  // GALERÍA Y DETALLES

  return (
    <div className="min-h-screen bg-[#F6F1E9]">
      <AnimatePresence mode="wait">
        {seleccionada ? (
          <DetallePatrimonio
            key={seleccionada.id}
            categoria={seleccionada}
            onVolver={() =>
              setCategoriaActiva(null)
            }
          />
        ) : (
          <GaleriaComponentes
            key="galeria"
            onAbrir={setCategoriaActiva}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
