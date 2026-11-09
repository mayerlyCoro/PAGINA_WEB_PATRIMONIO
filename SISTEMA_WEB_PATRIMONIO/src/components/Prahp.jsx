
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
  CalendarDays,
  Camera,
  Eye,
  EyeOff,
  Landmark,
  MapPin,
} from "lucide-react";

// ============================================================
// PROYECTOS PRAHP
// ============================================================

const proyectos = [
  {
    id: "oficiales-reales",
    titulo: "Pabellón de los Oficiales Reales",
    subtitulo: "Rehabilitación arquitectónica",
    ubicacion: "Centro histórico de Potosí",
    periodo: "2000–2004",

    descripcion:
      "La intervención del Pabellón de los Oficiales Reales forma parte de las iniciativas de recuperación arquitectónica desarrolladas en el centro histórico de Potosí. El proceso comprendió trabajos de rehabilitación y recuperación de los espacios del inmueble, conservando su valor patrimonial.",

    imagenes: [
      {
        src: "/images/prahp/1_p.webp",
        etapa: "ANTES",
        titulo: "Antes de la rehabilitación",
        descripcion:
          "Vista exterior del inmueble y de su característico balcón de madera, antes de los trabajos de recuperación.",
      },
      {
        src: "/images/prahp/1-1_p.webp",
        etapa: "ANTES",
        titulo: "Estado anterior del inmueble",
        descripcion:
          "Otra perspectiva de la fachada histórica, que permite apreciar su apariencia antes de la intervención.",
      },
      {
        src: "/images/prahp/1-2_p.webp",
        etapa: "DURANTE",
        titulo: "Proceso de rehabilitación",
        descripcion:
          "Vista del inmueble durante los trabajos de rehabilitación de su estructura y cubierta.",
      },
      {
        src: "/images/prahp/1-3_p.webp",
        etapa: "DURANTE",
        titulo: "Trabajos en el patio interior",
        descripcion:
          "Proceso de recuperación de los espacios interiores, con trabajos visibles en las galerías y la cubierta.",
      },
      {
        src: "/images/prahp/1-4_p.webp",
        etapa: "DESPUÉS",
        titulo: "Fachada rehabilitada",
        descripcion:
          "Resultado de los trabajos de rehabilitación: la fachada recuperada y su integración con la calle histórica.",
      },
      {
        src: "/images/prahp/1-5_p.webp",
        etapa: "DESPUÉS",
        titulo: "Patio interior rehabilitado",
        descripcion:
          "Vista del patio recuperado, con galerías de madera, arquerías y cubierta de teja.",
      },
    ],
  },

  {
    id: "san-marcos",
    titulo: "Ingenio y Plaza de San Marcos",
    subtitulo: "Recuperación del patrimonio industrial",
    ubicacion: "Sector de San Marcos, Potosí",
    periodo: "1991–1997",

    descripcion:
      "La intervención en el Ingenio y la Plaza de San Marcos forma parte de las actuaciones documentadas de recuperación patrimonial en Potosí. Su importancia está relacionada con la preservación de espacios asociados a la actividad minera histórica.",

    imagenes: [
      {
        src: "/images/prahp/2_p.webp",
        etapa: "REGISTRO",
        titulo: "Ingenio y Plaza de San Marcos",
        descripcion:
          "Vista del conjunto patrimonial de San Marcos, con su arquitectura tradicional y el paisaje histórico de Potosí.",
      },
    ],
  },

  {
    id: "calle-sucre",
    titulo: "Renovación urbana de la calle Sucre",
    subtitulo: "Recuperación del espacio público",
    ubicacion: "Calle Sucre, Potosí",
    periodo: "Documentada en 2009",

    descripcion:
      "La renovación urbana de la calle Sucre fue destacada en la documentación de cooperación española como una intervención significativa de recuperación del centro histórico. El proyecto se relaciona con la preservación y mejora del espacio urbano patrimonial.",

    imagenes: [
      {
        src: "/images/prahp/3_p.webp",
        etapa: "REGISTRO",
        titulo: "Calle Sucre de Potosí",
        descripcion:
          "Vista de la calle Sucre, con su pavimento y las fachadas tradicionales del centro histórico de la Villa Imperial.",
      },
    ],
  },
];

// ============================================================
// ETAPAS DEL PABELLÓN
// ============================================================

const etapasPabellon = [
  {
    id: "ANTES",
    nombre: "Antes",
    indice: 0,
  },
  {
    id: "DURANTE",
    nombre: "Durante",
    indice: 2,
  },
  {
    id: "DESPUÉS",
    nombre: "Después",
    indice: 4,
  },
];

// ============================================================
// VISOR DE FOTOGRAFÍA
// ============================================================

function VisorFotografia({ fotografia, proyecto }) {
  const reducirMovimiento = useReducedMotion();

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [fotografia.src]);

  return (
    <div
      className="
        relative h-full w-full
        overflow-hidden
        bg-[#10221D]
      "
    >
      {!error ? (
        <motion.img
          key={fotografia.src}
          src={fotografia.src}
          alt={`${proyecto.titulo}: ${fotografia.titulo}`}
          draggable={false}
          onError={() => setError(true)}
          className="
            absolute inset-0
            h-full w-full
            object-contain
          "
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: reducirMovimiento
              ? 1
              : [1, 1.045, 1],
          }}
          transition={{
            opacity: {
              duration: 0.55,
            },
            scale: {
              duration: 19,
              repeat: reducirMovimiento ? 0 : Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ) : (
        <div
          className="
            absolute inset-0
            flex flex-col
            items-center justify-center
            px-8 text-center
          "
        >
          <Landmark
            size={65}
            strokeWidth={1}
            className="mb-6 text-[#D8B47A]"
          />

          <h3
            className="
              max-w-xl
              font-['Bebas_Neue']
              text-4xl uppercase
              tracking-wide text-white
              md:text-5xl
            "
          >
            {proyecto.titulo}
          </h3>

          <div className="my-6 h-1 w-20 bg-[#D8B47A]" />

          <div
            className="
              flex items-center gap-2
              text-sm text-white/65
            "
          >
            <Camera size={17} />
            Fotografía pendiente de incorporación
          </div>
        </div>
      )}

      {/* SOMBRA SUAVE PARA LEER LOS TEXTOS */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-t
          from-black/55
          via-transparent
          to-black/10
        "
      />
    </div>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Prahp() {
  const reducirMovimiento = useReducedMotion();

  const [indiceProyecto, setIndiceProyecto] = useState(0);

  const [indiceFoto, setIndiceFoto] = useState(0);

  const [mostrarInformacion, setMostrarInformacion] =
    useState(true);

  const proyecto = proyectos[indiceProyecto];

  const fotografia = proyecto.imagenes[indiceFoto];

  const esPabellon = proyecto.id === "oficiales-reales";

  const etapaActual = fotografia.etapa;

  // ==========================================================
  // CAMBIAR FOTOGRAFÍA
  // ==========================================================

  function cambiarFoto(direccion) {
    setIndiceFoto((anterior) => {
      const total = proyecto.imagenes.length;

      return (anterior + direccion + total) % total;
    });
  }

  // ==========================================================
  // CAMBIAR PROYECTO
  // ==========================================================

  function cambiarProyecto(direccion) {
    setIndiceProyecto((anterior) => {
      const total = proyectos.length;

      return (anterior + direccion + total) % total;
    });

    setIndiceFoto(0);

    setMostrarInformacion(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // ==========================================================
  // NAVEGACIÓN CON TECLADO
  // ==========================================================

  useEffect(() => {
    const manejarTeclado = (evento) => {
      const objetivo = evento.target;

      if (
        objetivo instanceof HTMLElement &&
        (
          objetivo.tagName === "INPUT" ||
          objetivo.tagName === "TEXTAREA" ||
          objetivo.isContentEditable
        )
      ) {
        return;
      }

      if (proyecto.imagenes.length <= 1) {
        return;
      }

      if (evento.key === "ArrowRight") {
        setIndiceFoto((anterior) => {
          return (
            anterior + 1
          ) % proyecto.imagenes.length;
        });
      }

      if (evento.key === "ArrowLeft") {
        setIndiceFoto((anterior) => {
          return (
            anterior - 1 + proyecto.imagenes.length
          ) % proyecto.imagenes.length;
        });
      }
    };

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [proyecto.imagenes.length]);

  return (
    <main
      className="
        min-h-[100svh]
        bg-[#0A1C16]
        text-white
      "
    >
      {/* ======================================================
          BARRA SUPERIOR
          SIN LÍNEAS DECORATIVAS
          ====================================================== */}

      <header className="bg-[#0D2019]">
        <div
          className="
            mx-auto flex max-w-[1800px]
            items-center justify-between
            gap-4
            px-5 py-5
            md:px-10
          "
        >
          <Link
            to="/informacion"
            className="
              inline-flex items-center
              gap-3 text-xs font-bold
              uppercase tracking-wider
              text-white/85
              transition
              hover:text-[#E5BB7F]
            "
          >
            <ArrowLeft size={18} />
            Volver a Memorial
          </Link>

          <span
            className="
              hidden text-xs font-bold
              uppercase tracking-[0.2em]
              text-[#E5BB7F]
              sm:block
            "
          >
            PRAHP · Potosí
          </span>
        </div>
      </header>

      {/* ======================================================
          CONTENIDO PRINCIPAL
          ====================================================== */}

      <section
        className="
          mx-auto max-w-[1800px]
          px-4 pb-10 pt-5
          md:px-8 md:pt-7
        "
      >
        <div
          className={`
            grid gap-5
            ${
              mostrarInformacion
                ? "lg:grid-cols-[minmax(280px,0.31fr)_minmax(0,0.69fr)]"
                : "grid-cols-1"
            }
          `}
        >
          {/* ==================================================
              PANEL DE INFORMACIÓN
              SIN BORDE EXTERIOR
              ================================================== */}

          <AnimatePresence>
            {mostrarInformacion && (
              <motion.aside
                key={proyecto.id}
                initial={
                  reducirMovimiento
                    ? false
                    : {
                        opacity: 0,
                        x: -20,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex flex-col
                  justify-between
                  rounded-xl
                  bg-[#123026]
                  p-6
                  md:p-8
                "
              >
                <div>
                  <p
                    className="
                      mb-4 text-[11px]
                      font-bold uppercase
                      tracking-[0.23em]
                      text-[#E5BB7F]
                    "
                  >
                    Intervención patrimonial
                  </p>

                  <h2
                    className="
                      font-['Bebas_Neue']
                      text-[clamp(2.5rem,3.8vw,4.4rem)]
                      uppercase leading-[0.98]
                      tracking-wide
                    "
                  >
                    {proyecto.titulo}
                  </h2>

                  <p
                    className="
                      mt-4
                      text-base font-semibold
                      text-[#E3B981]
                    "
                  >
                    {proyecto.subtitulo}
                  </p>

                  {/* SEPARADOR CORTO */}

                  <div
                    className="
                      my-7 h-1 w-14
                      rounded-full bg-[#D8B47A]
                    "
                  />

                  <div className="space-y-6">
                    {/* UBICACIÓN */}

                    <div>
                      <p
                        className="
                          mb-2 flex items-center
                          gap-2 text-xs
                          font-bold uppercase
                          tracking-wider
                          text-[#E5BB7F]
                        "
                      >
                        <MapPin size={16} />
                        Ubicación
                      </p>

                      <p
                        className="
                          text-sm leading-relaxed
                          text-white/85
                          md:text-base
                        "
                      >
                        {proyecto.ubicacion}
                      </p>
                    </div>

                    {/* PERIODO */}

                    <div>
                      <p
                        className="
                          mb-2 flex items-center
                          gap-2 text-xs
                          font-bold uppercase
                          tracking-wider
                          text-[#E5BB7F]
                        "
                      >
                        <CalendarDays size={16} />
                        Periodo
                      </p>

                      <p
                        className="
                          text-sm text-white/85
                          md:text-base
                        "
                      >
                        {proyecto.periodo}
                      </p>
                    </div>

                    {/* HISTORIA */}

                    <div>
                      <p
                        className="
                          mb-2
                          text-xs font-bold
                          uppercase tracking-wider
                          text-[#E5BB7F]
                        "
                      >
                        Historia de la intervención
                      </p>

                      <p
                        className="
                          text-sm leading-[1.85]
                          text-white/85
                          md:text-base
                        "
                      >
                        {proyecto.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* ==================================================
              FOTOGRAFÍA PRINCIPAL
              SIN BORDE EXTERIOR
              ================================================== */}

          <div
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-xl
              bg-[#10251D]
              md:min-h-[650px]
              lg:min-h-[720px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${proyecto.id}-${indiceFoto}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <VisorFotografia
                  fotografia={fotografia}
                  proyecto={proyecto}
                />
              </motion.div>
            </AnimatePresence>

            {/* ETAPA DE LA FOTOGRAFÍA */}

            <div
              className="
                absolute left-5 top-5
                rounded-full
                bg-[#10251D]/85
                px-5 py-2
                text-xs font-extrabold
                uppercase tracking-[0.18em]
                text-[#E5BB7F]
                backdrop-blur-md
              "
            >
              {etapaActual}
            </div>

            {/* FLECHAS DE LAS FOTOGRAFÍAS */}

            {proyecto.imagenes.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => cambiarFoto(-1)}
                  aria-label="Fotografía anterior"
                  className="
                    absolute left-4 top-1/2
                    flex h-12 w-12
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-black/55
                    backdrop-blur-sm
                    transition
                    hover:bg-[#B78349]
                  "
                >
                  <ArrowLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={() => cambiarFoto(1)}
                  aria-label="Fotografía siguiente"
                  className="
                    absolute right-4 top-1/2
                    flex h-12 w-12
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-black/55
                    backdrop-blur-sm
                    transition
                    hover:bg-[#B78349]
                  "
                >
                  <ArrowRight size={22} />
                </button>
              </>
            )}

            {/* INFORMACIÓN DE LA FOTOGRAFÍA */}

            <div
              className="
                pointer-events-none
                absolute bottom-0 left-0
                right-0
                bg-gradient-to-t
                from-black/90
                via-black/50
                to-transparent
                px-6 pb-6 pt-20
                md:px-9 md:pb-9
              "
            >
              <p
                className="
                  mb-2 text-[11px]
                  font-bold uppercase
                  tracking-[0.2em]
                  text-[#E5BB7F]
                "
              >
                Fotografía {indiceFoto + 1} de{" "}
                {proyecto.imagenes.length}
              </p>

              <h3
                className="
                  text-xl font-bold
                  text-white
                  md:text-2xl
                "
              >
                {fotografia.titulo}
              </h3>

              <p
                className="
                  mt-2 max-w-2xl
                  text-sm leading-relaxed
                  text-white/80
                "
              >
                {fotografia.descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            ETAPAS
            SIN RECUADRO NI LÍNEAS
            ================================================== */}

        {esPabellon && (
          <div
            className="
              mt-7 flex flex-wrap
              items-center justify-center
              gap-4
              py-3
            "
          >
            {etapasPabellon.map((etapa) => {
              const activo = etapaActual === etapa.id;

              return (
                <button
                  key={etapa.id}
                  type="button"
                  onClick={() =>
                    setIndiceFoto(etapa.indice)
                  }
                  className={`
                    rounded-full
                    px-8 py-3
                    text-xs font-bold
                    uppercase
                    tracking-[0.15em]
                    transition-all duration-300
                    ${
                      activo
                        ? "bg-[#E5BB7F] text-[#10251D] shadow-[0_5px_20px_rgba(229,187,127,0.16)]"
                        : "bg-white/5 text-[#E5BB7F] hover:bg-white/10"
                    }
                  `}
                >
                  {etapa.nombre}
                </button>
              );
            })}
          </div>
        )}

        {/* ==================================================
            NAVEGACIÓN INFERIOR
            SIN LÍNEA HORIZONTAL NI CONTENEDOR
            ================================================== */}

        <div
          className="
            mt-7 flex flex-wrap
            items-center justify-between
            gap-5 pb-5
          "
        >
          {/* MOSTRAR / OCULTAR INFORMACIÓN */}

          <button
            type="button"
            onClick={() =>
              setMostrarInformacion((actual) => !actual)
            }
            className="
              inline-flex items-center
              gap-2
              text-xs font-bold
              uppercase tracking-wide
              text-[#D8B47A]
              transition
              hover:text-white
            "
          >
            {mostrarInformacion ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}

            {mostrarInformacion
              ? "Ocultar información"
              : "Mostrar información"}
          </button>

          {/* CAMBIAR PROYECTO */}

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => cambiarProyecto(-1)}
              aria-label="Anterior proyecto"
              className="
                inline-flex items-center
                gap-2
                rounded-full
                bg-white/5
                px-5 py-3
                text-xs font-bold
                uppercase tracking-wide
                text-[#E5BB7F]
                transition-all duration-300
                hover:bg-[#E5BB7F]
                hover:text-[#10251D]
              "
            >
              <ArrowLeft size={17} />

              <span className="hidden sm:inline">
                Anterior proyecto
              </span>
            </button>

            <button
              type="button"
              onClick={() => cambiarProyecto(1)}
              aria-label="Siguiente proyecto"
              className="
                inline-flex items-center
                gap-2
                rounded-full
                bg-white/5
                px-5 py-3
                text-xs font-bold
                uppercase tracking-wide
                text-[#E5BB7F]
                transition-all duration-300
                hover:bg-[#E5BB7F]
                hover:text-[#10251D]
              "
            >
              <span className="hidden sm:inline">
                Siguiente proyecto
              </span>

              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
