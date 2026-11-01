
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ============================================================
// CONFIGURACIÓN DE ESCENAS - ORDEN DEFINITIVO
// ============================================================

const slides = [
  // 1. PORTADA PRINCIPAL
  {
    id: 1,
    image: "/images/1.jpeg",
    alt: "Vista panorámica del centro histórico de Potosí",
    type: "principal",
    badge: "Portal Oficial de Difusión y Gestión",
    titleTop: "PATRIMONIO",
    titleBottom: "HISTÓRICO",
    subtitle:
      "SECRETARÍA DE DESARROLLO TURÍSTICO, CULTURAL Y PATRIMONIAL",
  },

  // 2. CERRO RICO
  {
    id: 2,
    image: "/images/cerro_hero.jpg",
    alt: "Cerro Rico de Potosí",
    type: "secondary",
    badge: "Símbolo de la Villa Imperial",
    titleTop: "CERRO",
    titleBottom: "RICO",
    subtitle:
      "SÍMBOLO DE LA HISTORIA MINERA DE POTOSÍ Y TESTIMONIO DE SU IMPORTANCIA EN LA HISTORIA MUNDIAL.",
  },

  // 3. LAGUNAS HISTÓRICAS
  {
    id: 3,
    image: "/images/laguna.jpg",
    alt: "Paisaje de laguna en Potosí",
    type: "secondary",
    badge: "Paisajes e Identidad de Potosí",
    titleTop: "LAGUNAS",
    titleBottom: "HISTÓRICAS",
    subtitle:
      "PAISAJES QUE RESGUARDAN PARTE DE LA HISTORIA Y LA IDENTIDAD DE POTOSÍ.",
  },

  // 4. CÁRCAMOS HISTÓRICOS
  {
    id: 4,
    image: "/images/carcamo.jpeg",
    alt: "Cárcamo histórico de Potosí",
    type: "secondary",
    badge: "Patrimonio Industrial e Histórico",
    titleTop: "CÁRCAMOS",
    titleBottom: "HISTÓRICOS",
    subtitle:
      "MEMORIA DE LA INGENIERÍA COLONIAL Y DEL LEGADO INDUSTRIAL QUE FORMA PARTE DE NUESTRA IDENTIDAD.",
  },

  // 5. CIUDAD PATRIMONIO
  {
    id: 5,
    image: "/images/potosi_patrimonio.jpeg",
    alt: "Arquitectura patrimonial de la ciudad de Potosí",
    type: "secondary",
    badge: "Patrimonio Cultural de la Humanidad",
    titleTop: "CIUDAD",
    titleBottom: "PATRIMONIO",
    subtitle:
      "POTOSÍ, UNA CIUDAD DONDE LA ARQUITECTURA, LA HISTORIA Y LA CULTURA MANTIENEN VIVO UN LEGADO UNIVERSAL.",
  },
];

// ============================================================
// CONFIGURACIÓN DE ANIMACIONES
// ============================================================

const DURACION_ESCENA = 7000;

const movimientoImagen = [
  // PORTADA
  {
    scale: [1.04, 1.2],
    x: ["0%", "-1.5%"],
    y: ["0%", "-1%"],
  },

  // CERRO RICO
  {
    scale: [1.05, 1.22],
    x: ["1%", "-1%"],
    y: ["0%", "1%"],
  },

  // LAGUNAS
  {
    scale: [1.03, 1.19],
    x: ["-1%", "1%"],
    y: ["1%", "-1%"],
  },

  // CÁRCAMOS
  {
    scale: [1.04, 1.18],
    x: ["-1%", "1%"],
    y: ["0%", "-1%"],
  },

  // CIUDAD PATRIMONIO
  {
    scale: [1.05, 1.21],
    x: ["1%", "-1%"],
    y: ["0%", "1%"],
  },
];

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, DURACION_ESCENA);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];
  const movimiento = movimientoImagen[currentSlide];

  const cambiarEscena = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="inicio"
      aria-label="Presentación del patrimonio histórico de Potosí"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-zinc-950 px-0 pb-10 pt-24 text-white sm:pt-28 md:pb-12 md:pt-32 xl:pt-36"
    >
      {/* ======================================================
          1. IMÁGENES CINEMATOGRÁFICAS
          ====================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={activeSlide.image}
              alt={activeSlide.alt}
              className="absolute inset-0 h-full w-full object-cover contrast-110"
              initial={{
                scale: movimiento.scale[0],
                x: movimiento.x[0],
                y: movimiento.y[0],
              }}
              animate={{
                scale: movimiento.scale[1],
                x: movimiento.x[1],
                y: movimiento.y[1],
              }}
              transition={{
                duration: 8,
                ease: "linear",
              }}
            />

            {/* OSCURECIMIENTO CINEMATOGRÁFICO */}

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ======================================================
          2. FRANJA INSTITUCIONAL ANIMADA
          ====================================================== */}

      <div className="relative z-10 mb-4 w-full overflow-hidden border-y border-amber-500/40 bg-black/70 py-2 shadow-lg backdrop-blur-md sm:py-3 md:mb-5">
        <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap text-sm font-medium uppercase tracking-[0.10em] text-white sm:gap-8 sm:text-base sm:tracking-[0.12em] md:gap-10 md:text-lg">
          <span>
            « Vale un Potosí » — Patrimonio Cultural de la Humanidad
          </span>

          <span className="text-base text-amber-400 sm:text-xl">
            ✦
          </span>

          <span>
            Dirección de Patrimonio Cultural 
          </span>

          <span className="text-base text-amber-400 sm:text-xl">
            ✦
          </span>

          <span>
            Preservación del Legado Colonial y Arquitectónico
          </span>

          <span className="text-base text-amber-400 sm:text-xl">
            ✦
          </span>

          <span>
            « Vale un Potosí » — Patrimonio Cultural de la Humanidad
          </span>

          <span className="text-base text-amber-400 sm:text-xl">
            ✦
          </span>

          <span>
            Dirección de Patrimonio Histórico
          </span>

          <span className="text-base text-amber-400 sm:text-xl">
            ✦
          </span>

          <span>
            Preservación del Legado Colonial y Arquitectónico
          </span>
        </div>
      </div>

      {/* ======================================================
          3. CONTENIDO PRINCIPAL ANIMADO
          ====================================================== */}

      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[1800px] flex-col items-center justify-center px-4 py-8 text-center sm:px-8 md:px-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.id}
            className="flex w-full flex-col items-center"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -25,
              scale: 1.02,
            }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
          >
            {/* IDENTIFICACIÓN SUPERIOR */}

            <motion.span
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mb-7 inline-block rounded-full border border-amber-500/60 bg-black/80 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 shadow-xl backdrop-blur-md sm:mb-9 sm:px-7 sm:text-sm sm:tracking-[0.3em] md:mb-10 md:text-base"
            >
              {activeSlide.badge}
            </motion.span>

            {/* ================================================
                ESCENA PRINCIPAL
                ================================================ */}

            {activeSlide.type === "principal" ? (
              <>
                <h1 className="mb-7 w-full font-['Bebas_Neue'] font-normal uppercase leading-[0.86] sm:mb-9 md:mb-10">

                  {/* PATRIMONIO */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 65,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.25,
                      ease: "easeOut",
                    }}
                    className="block text-[clamp(3.3rem,8.8vw,11rem)] tracking-[0.055em] text-white sm:tracking-[0.09em] lg:tracking-[0.12em]"
                    style={{
                      textShadow: `
                        1px 1px 0px #000,
                        3px 3px 0px rgba(0,0,0,0.8),
                        5px 5px 10px rgba(0,0,0,0.9),
                        0px 10px 20px rgba(0,0,0,0.95)
                      `,
                    }}
                  >
                    PATRIMONIO
                  </motion.span>

                  {/* HISTÓRICO */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 65,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.55,
                      ease: "easeOut",
                    }}
                    className="block bg-gradient-to-r from-yellow-200 via-orange-500 to-amber-600 bg-clip-text text-[clamp(3.3rem,8.8vw,11rem)] tracking-[0.055em] text-transparent drop-shadow-[0_12px_15px_rgba(0,0,0,0.9)] sm:tracking-[0.09em] lg:tracking-[0.12em]"
                    style={{
                      WebkitTextStroke:
                        "1px rgba(255,255,255,0.2)",
                    }}
                  >
                    HISTÓRICO
                  </motion.span>
                </h1>

                {/* TEXTO INSTITUCIONAL */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  className="mx-auto max-w-6xl text-xl font-extrabold uppercase leading-relaxed tracking-wide text-gray-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  {activeSlide.subtitle}
                </motion.p>
              </>
            ) : (
              <>
                {/* ============================================
                    ESCENAS SECUNDARIAS
                    ============================================ */}

                <h2 className="mb-7 w-full font-['Bebas_Neue'] font-normal uppercase leading-[0.88] sm:mb-9 md:mb-10">

                  {/* PRIMER TÍTULO */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -90,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.25,
                      ease: "easeOut",
                    }}
                    className="block text-[clamp(3rem,8vw,9rem)] tracking-[0.055em] text-white sm:tracking-[0.09em]"
                    style={{
                      textShadow:
                        "0 10px 25px rgba(0,0,0,0.9)",
                    }}
                  >
                    {activeSlide.titleTop}
                  </motion.span>

                  {/* SEGUNDO TÍTULO */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: 90,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.55,
                      ease: "easeOut",
                    }}
                    className="block bg-gradient-to-r from-yellow-200 via-orange-500 to-amber-600 bg-clip-text text-[clamp(3rem,8vw,9rem)] tracking-[0.055em] text-transparent sm:tracking-[0.09em]"
                    style={{
                      WebkitTextStroke:
                        "1px rgba(255,255,255,0.2)",
                    }}
                  >
                    {activeSlide.titleBottom}
                  </motion.span>
                </h2>

                {/* DESCRIPCIÓN SIN RECUADRO Y EN MAYÚSCULAS */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.9,
                  }}
                  className="mx-auto max-w-5xl px-4 text-center text-base font-extrabold uppercase leading-relaxed tracking-[0.08em] text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] sm:px-6 sm:text-lg md:text-xl lg:text-2xl"
                >
                  {activeSlide.subtitle}
                </motion.p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ======================================================
          4. INDICADORES DE NAVEGACIÓN
          ====================================================== */}

      <div className="relative z-10 mx-auto mb-2 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => cambiarEscena(index)}
            aria-label={`Mostrar escena ${index + 1}: ${slide.titleTop} ${slide.titleBottom}`}
            aria-current={
              currentSlide === index ? "true" : undefined
            }
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-amber-400"
                : "w-2.5 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ESPACIO INFERIOR */}

      <div className="relative z-10 h-2" />
    </section>
  );
}
