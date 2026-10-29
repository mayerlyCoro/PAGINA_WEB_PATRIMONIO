
import React, { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

// ============================================================
// CONFIGURACIÓN DE TIEMPOS
// ============================================================

// Primera escena: fotografía con zoom y eslogan
const DURACION_ESLOGAN = 7000;

// Segunda escena: fondo negro, logo y nombre institucional
const DURACION_CIERRE = 5000;

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function SloganPatrimonio() {
  const [escena, setEscena] = useState("eslogan");

  const [ciclo, setCiclo] = useState(0);

  const reducirMovimiento = useReducedMotion();

  // ==========================================================
  // CONTROL AUTOMÁTICO DE LAS ESCENAS
  // ==========================================================

  useEffect(() => {
    const cerrar = setTimeout(() => {
      setEscena("cierre");
    }, DURACION_ESLOGAN);

    const reiniciar = setTimeout(() => {
      setEscena("eslogan");
      setCiclo((anterior) => anterior + 1);
    }, DURACION_ESLOGAN + DURACION_CIERRE);

    return () => {
      clearTimeout(cerrar);
      clearTimeout(reiniciar);
    };
  }, [ciclo]);

  const esloganVisible = escena === "eslogan";

  // ==========================================================
  // ANIMACIONES DE ENTRADA Y SALIDA
  // ==========================================================

  const aparecer = (delay = 0, distancia = 35) => ({
    initial: reducirMovimiento
      ? false
      : {
          opacity: 0,
          y: distancia,
          filter: "blur(8px)",
        },

    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    exit: reducirMovimiento
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: -25,
          filter: "blur(8px)",
        },

    transition: {
      duration: reducirMovimiento ? 0.1 : 0.8,
      delay: reducirMovimiento ? 0 : delay,
      ease: "easeInOut",
    },
  });

  return (
    <section
      id="slogan-patrimonio"
      aria-label="Compromiso con nuestro patrimonio histórico"
      className="
        relative
        isolate
        min-h-screen
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* ======================================================
          1. FOTOGRAFÍA CON ZOOM CINEMATOGRÁFICO
          ====================================================== */}

      <AnimatePresence>
        {esloganVisible && (
          <motion.div
            key={`fondo-${ciclo}`}
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reducirMovimiento ? 0.1 : 1.3,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src="/images/Cerro_Hermoso.jpg"
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                will-change-transform
              "
              initial={{ scale: 1 }}
              animate={{
                scale: reducirMovimiento ? 1 : 1.2,
              }}
              transition={{
                duration: reducirMovimiento ? 0 : 7,
                ease: "linear",
              }}
            />

            {/* CAPAS DE OSCURECIMIENTO */}

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-black/55" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          2. FONDO NEGRO DE LA ESCENA FINAL
          ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#030404]
        "
        initial={false}
        animate={{
          opacity: esloganVisible ? 0 : 1,
        }}
        transition={{
          duration: reducirMovimiento ? 0.1 : 1.4,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================
          3. LOGOTIPO ANIMADO
          PERMANECE EN AMBAS ESCENAS
          ====================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          justify-center
        "
        initial={false}
        animate={{
          // CORRECCIÓN:
          // En el cierre desciende solamente hasta el 38%
          // para quedar por encima del centro.

          top: esloganVisible ? "17%" : "38%",

          scale: esloganVisible ? 1 : 1.35,
        }}
        transition={{
          duration: reducirMovimiento ? 0 : 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* RESPLANDOR DORADO */}

        <motion.div
          className="
            pointer-events-none
            absolute
            h-36
            w-36
            rounded-full
            bg-amber-400
            blur-[65px]
          "
          initial={false}
          animate={{
            opacity: esloganVisible ? 0.05 : 0.36,
            scale: esloganVisible ? 0.8 : 1.5,
          }}
          transition={{
            duration: 1.8,
          }}
        />

        {/* ANILLO DE LUZ DE LA ESCENA FINAL */}

        <AnimatePresence>
          {!esloganVisible && (
            <motion.div
              key="anillo-luminoso"
              className="
                pointer-events-none
                absolute
                h-40
                w-40
                rounded-full
                border
                border-amber-400/25
                sm:h-48
                sm:w-48
              "
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: [0, 0.8, 0.3],
                scale: [0.8, 1.35, 1.5],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reducirMovimiento ? 0.1 : 3,
                ease: "easeOut",
              }}
            />
          )}
        </AnimatePresence>

        {/* LOGO SIN FONDO BLANCO */}

        <motion.img
          src="/images/images.png"
          alt="Logo de la Dirección de Patrimonio Histórico"
          className="
            relative
            h-20
            w-auto
            object-contain
            sm:h-24
            md:h-28
          "
          animate={
            !esloganVisible && !reducirMovimiento
              ? {
                  filter: [
                    "drop-shadow(0 0 5px rgba(255,190,60,0.15))",
                    "drop-shadow(0 0 24px rgba(255,190,60,0.85))",
                    "drop-shadow(0 0 12px rgba(255,190,60,0.45))",
                  ],
                }
              : {
                  filter:
                    "drop-shadow(0 5px 15px rgba(0,0,0,0.5))",
                }
          }
          transition={{
            duration: 2.2,
            repeat:
              !esloganVisible && !reducirMovimiento
                ? Infinity
                : 0,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* ======================================================
          4. PRIMERA ESCENA: ESLOGAN INSTITUCIONAL
          ====================================================== */}

      <AnimatePresence>
        {esloganVisible && (
          <motion.div
            key={`texto-eslogan-${ciclo}`}
            className="
              absolute
              inset-x-0
              top-[35%]
              z-10
              mx-auto
              flex
              w-full
              max-w-[1500px]
              flex-col
              items-center
              px-4
              text-center
              sm:px-8
            "
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: reducirMovimiento ? 0.1 : 0.8,
            }}
          >
            {/* DIRECCIÓN DE PATRIMONIO HISTÓRICO */}

            <motion.p
              {...aparecer(0.15, 20)}
              className="
                mb-3
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-amber-300
                sm:text-sm
                sm:tracking-[0.3em]
              "
            >
              DIRECCIÓN DE PATRIMONIO HISTÓRICO
            </motion.p>

            {/* FRASE INTRODUCTORIA */}

            <motion.p
              {...aparecer(0.35, 20)}
              className="
                mb-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                sm:text-sm
              "
            >
              UN COMPROMISO CON NUESTRA HISTORIA
            </motion.p>

            {/* ESLOGAN PRINCIPAL */}

            <h2
              className="
                w-full
                font-['Bebas_Neue']
                font-normal
                uppercase
                leading-[0.95]
              "
            >
              {/* PRIMERA LÍNEA */}

              <motion.span
                {...aparecer(0.55, 55)}
                className="
                  block
                  text-[clamp(2.5rem,7vw,8.5rem)]
                  tracking-[0.025em]
                  text-white
                  drop-shadow-[0_8px_18px_rgba(0,0,0,0.9)]
                "
              >
                YO CUIDO MI PATRIMONIO
              </motion.span>

              {/* SEGUNDA LÍNEA */}

              <motion.span
                {...aparecer(0.85, 55)}
                className="
                  mt-3
                  block
                  bg-gradient-to-r
                  from-yellow-200
                  via-amber-400
                  to-orange-500
                  bg-clip-text
                  text-[clamp(2.5rem,7vw,8.5rem)]
                  tracking-[0.025em]
                  text-transparent
                "
              >
                PORQUE ES MI IDENTIDAD
              </motion.span>
            </h2>

            {/* LÍNEA DORADA DECORATIVA */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: reducirMovimiento ? 0 : 1,
                delay: reducirMovimiento ? 0 : 1.1,
              }}
              className="
                my-7
                h-[3px]
                w-28
                origin-center
                rounded-full
                bg-gradient-to-r
                from-orange-500
                via-amber-400
                to-yellow-300
              "
            />

            {/* FRASE INSTITUCIONAL INFERIOR */}

            <motion.div
              {...aparecer(1.3, 25)}
              className="
                flex
                max-w-full
                items-center
                justify-center
                gap-3
                sm:gap-5
              "
            >
              <span className="h-px w-6 shrink-0 bg-amber-400/80 sm:w-12" />

              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-amber-200
                  sm:text-xs
                  md:text-sm
                "
              >
                POTOSÍ · PATRIMONIO CULTURAL DE LA HUMANIDAD
              </span>

              <span className="h-px w-6 shrink-0 bg-amber-400/80 sm:w-12" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          5. SEGUNDA ESCENA: CIERRE INSTITUCIONAL CENTRADO
          ====================================================== */}

      <AnimatePresence>
        {!esloganVisible && (
          <motion.div
            key={`cierre-${ciclo}`}
            className="
              absolute
              inset-x-0
              top-[55%]
              z-20
              mx-auto
              flex
              flex-col
              items-center
              px-5
              text-center
            "
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: reducirMovimiento ? 0.1 : 1.3,
              delay: reducirMovimiento ? 0 : 1.1,
              ease: "easeOut",
            }}
          >
            {/* NOMBRE INSTITUCIONAL */}

            <h3
              className="
                font-['Bebas_Neue']
                text-[clamp(2rem,4.5vw,5rem)]
                uppercase
                leading-tight
                tracking-[0.09em]
                text-white
                drop-shadow-[0_0_20px_rgba(255,190,65,0.35)]
              "
            >
              DIRECCIÓN DE

              <span className="block text-amber-400">
                PATRIMONIO HISTÓRICO
              </span>
            </h3>

            {/* DESTELLO DORADO INFERIOR */}

            <motion.div
              className="
                mt-5
                h-[2px]
                w-32
                origin-center
                bg-gradient-to-r
                from-transparent
                via-amber-400
                to-transparent
              "
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: reducirMovimiento ? 0 : 1.2,
                delay: reducirMovimiento ? 0 : 1.4,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
