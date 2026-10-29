
import React, { useEffect, useState } from "react";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

// ============================================================
// CONFIGURACIÓN DEL ZOOM CINEMATOGRÁFICO
// ============================================================

// 1.035 equivale a un acercamiento del 3.5 %.
// Es suficientemente suave para las fotografías antiguas.

const ZOOM_MINIMO = 0.965;
const ZOOM_MAXIMO = 1.035;
const DURACION_ZOOM = 18;

// ============================================================
// COLECCIONES DE MEMORIAL POTOSÍ
// ============================================================

const colecciones = [
  // ==========================================================
  // 1. POTOSÍ DE ANTAÑO — 18 FOTOGRAFÍAS
  // ==========================================================

  {
    id: "antano",
    nombre: "POTOSÍ DE ANTAÑO",
    subtitulo: "MEMORIA HISTÓRICA",
    descripcion:
      "Un recorrido fotográfico por la historia de la Villa Imperial.",

    portada: "/images/4_c.jpg",

    fotografias: [
      {
        src: "/images/1_c.jpg",
        titulo: "CERRO RICO DE POTOSÍ",
        descripcion:
          "Antigua vista de las laderas del Cerro Rico, donde se observan caminos e instalaciones vinculadas a la actividad minera.",
      },
      {
        src: "/images/2_c.jpg",
        titulo: "IGLESIA DE SAN BERNARDO",
        descripcion:
          "Imagen histórica de la Iglesia de San Bernardo, templo asociado a la historia religiosa y colonial de la Villa Imperial.",
      },
      {
        src: "/images/3_c.jpg",
        titulo: "PLAZA 10 DE NOVIEMBRE",
        descripcion:
          "Vista de la antigua Plaza de Armas de Potosí, con su quiosco central y las edificaciones de su entorno.",
      },
      {
        src: "/images/4_c.jpg",
        titulo: "POTOSÍ HACIA 1895",
        descripcion:
          "Vista panorámica de la ciudad con el Cerro Rico al fondo y la antigua Casa de Moneda en primer plano.",
      },
      {
        src: "/images/5_c.jpg",
        titulo: "ANTIGUA CALLE LANZA",
        descripcion:
          "Fotografía de la antigua calle del Duende, hoy calle Lanza, a principios del siglo XX.",
      },
      {
        src: "/images/6_c.jpg",
        titulo: "ARQUERÍA DEL ANTIGUO CABILDO",
        descripcion:
          "Imagen de los corredores con arcos del antiguo Cabildo de Potosí, aproximadamente en la década de 1940.",
      },
      {
        src: "/images/7_c.jpg",
        titulo: "CASA NACIONAL DE MONEDA",
        descripcion:
          "Vista histórica de la fachada de la Casa Nacional de Moneda, una de las construcciones emblemáticas de Potosí.",
      },
      {
        src: "/images/8_c.jpg",
        titulo: "ANTIGUO PUEBLO MINERO DE PORCO",
        descripcion:
          "Postal histórica de Porco, aproximadamente de 1907, con su plaza, viviendas tradicionales y torre de iglesia.",
      },
      {
        src: "/images/9_c.jpg",
        titulo: "ANTIGUO MERCADO LA RECOBA",
        descripcion:
          "Fotografía del antiguo mercado La Recoba, espacio comercial que formó parte de la vida cotidiana de Potosí.",
      },
      {
        src: "/images/10_c.jpg",
        titulo: "CERRO CHICO DE POTOSÍ",
        descripcion:
          "Vista histórica del Cerro Chico, con llamas en primer plano y la capilla del Sagrado Corazón de Jesús en su cima, aproximadamente en 1940.",
      },
      {
        src: "/images/11_c.jpg",
        titulo: "CATEDRAL DE POTOSÍ",
        descripcion:
          "Antigua fotografía de la Catedral de Potosí, ubicada frente a la Plaza 10 de Noviembre, aproximadamente entre 1920 y 1930.",
      },
      {
        src: "/images/12_c.png",
        titulo: "ANTIGUO CABILDO DE POTOSÍ",
        descripcion:
          "Vista de la Plaza 10 de Noviembre y las edificaciones del antiguo Cabildo, centro de la vida política y administrativa de la Villa Imperial.",
      },
      {
        src: "/images/13_c.jpg",
        titulo: "ANTIGUA CALLE SUCRE",
        descripcion:
          "Fotografía de la histórica calle Sucre, que durante el siglo XX se transformó en uno de los principales espacios de encuentro social de Potosí.",
      },
      {
        src: "/images/14_c.png",
        titulo: "PLAZA 6 DE AGOSTO",
        descripcion:
          "Vista de la Plaza 6 de Agosto en 1928, con su antiguo obelisco, arquerías de piedra y las torres de la Catedral de Potosí.",
      },
      {
        src: "/images/15_c.jpg",
        titulo: "ARCO DE COBIJA",
        descripcion:
          "Imagen histórica del Arco de Cobija, construido en el siglo XVIII como una de las entradas de la Villa Imperial, con el Cerro Rico al fondo.",
      },
      {
        src: "/images/16_c.jpg",
        titulo: "CELEBRACIÓN RELIGIOSA EN POTOSÍ",
        descripcion:
          "Fotografía de una celebración religiosa realizada en Potosí alrededor de 1910, con una multitud reunida junto a las antiguas arquerías de la plaza.",
      },
      {
        src: "/images/17_c.jpg",
        titulo: "TORRE DE LA COMPAÑÍA DE JESÚS",
        descripcion:
          "Vista histórica de la monumental torre de la Iglesia de la Compañía de Jesús, destacada por su arquitectura barroca y sus elaborados detalles en piedra.",
      },
      {
        src: "/images/18_c.jpg",
        titulo: "IGLESIA DE SAN JUAN DE DIOS",
        descripcion:
          "Antigua imagen de la Iglesia de San Juan de Dios, vinculada a la historia de la atención hospitalaria y religiosa de la Villa Imperial.",
      },
    ],
  },

  // ==========================================================
  // 2. PRAHP — FOTOGRAFÍAS PROVISIONALES
  // ==========================================================

  {
    id: "prahp",
    nombre: "PRAHP",
    subtitulo: "REHABILITACIÓN PATRIMONIAL",
    descripcion:
      "Un espacio para conocer el valor de la conservación patrimonial.",

    portada: "/images/potosi_patrimonio.jpeg",

    fotografias: [
      {
        src: "/images/potosi_patrimonio.jpeg",
        titulo: "CONSERVAR NUESTRA HISTORIA",
        descripcion:
          "La conservación protege los valores de nuestros espacios históricos.",
      },
      {
        src: "/images/1.jpeg",
        titulo: "PATRIMONIO ARQUITECTÓNICO",
        descripcion:
          "El legado arquitectónico de la Villa Imperial.",
      },
      {
        src: "/images/Gonzalo Viera Azpiroz - Potosí.jpeg",
        titulo: "NUESTRO LEGADO",
        descripcion:
          "Conocer nuestro patrimonio permite valorar su importancia.",
      },
    ],
  },

  // ==========================================================
  // 3. BALCONES COLONIALES — FOTOGRAFÍAS PROVISIONALES
  // ==========================================================

  {
    id: "balcones",
    nombre: "BALCONES COLONIALES",
    subtitulo: "ARQUITECTURA HISTÓRICA",
    descripcion:
      "Un recorrido por los detalles arquitectónicos de Potosí.",

    portada: "/images/Potosí.jpeg",

    fotografias: [
      {
        src: "/images/Potosí.jpeg",
        titulo: "ARQUITECTURA COLONIAL",
        descripcion:
          "Fachadas y elementos históricos de nuestra ciudad.",
      },
      {
        src: "/images/Calle_de_Potosí.jpg",
        titulo: "CALLES CON HISTORIA",
        descripcion:
          "La arquitectura forma parte de la memoria urbana.",
      },
      {
        src: "/images/descarga.jpeg",
        titulo: "DETALLES PATRIMONIALES",
        descripcion:
          "Los elementos arquitectónicos reflejan nuestro legado.",
      },
    ],
  },
];

// ============================================================
// ICONO DE FLECHA
// ============================================================

function Flecha({ izquierda = false }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={izquierda ? "rotate-180" : ""}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ============================================================
// PORTADA PRINCIPAL — MEMORIAL POTOSÍ
// ============================================================

function PortadaMemorial() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      className="
        relative isolate flex
        min-h-[100svh] w-full
        flex-col justify-center
        overflow-hidden bg-[#10241F]
        px-5 pb-20 pt-44
        text-white
        sm:px-10 lg:px-20
      "
    >
      {/* ======================================================
          FOTOGRAFÍA DE FONDO CON ZOOM
          ====================================================== */}

      <motion.img
        src="/images/Gonzalo Viera Azpiroz - Potosí.jpeg"
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          h-full w-full object-cover
        "
        initial={false}
        animate={
          reducirMovimiento
            ? { scale: 1 }
            : { scale: [1, 1.08, 1] }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CAPAS OSCURAS */}

      <div
        className="
          pointer-events-none absolute
          inset-0 -z-10
          bg-gradient-to-r
          from-black/85
          via-black/55
          to-black/25
        "
      />

      <div
        className="
          pointer-events-none absolute
          inset-0 -z-10
          bg-gradient-to-t
          from-black/90
          via-transparent
          to-black/30
        "
      />

      {/* CONTENIDO */}

      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 35 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reducirMovimiento ? 0 : 0.8,
          }}
        >
          <p
            className="
              mb-4 text-xs font-extrabold
              uppercase tracking-[0.23em]
              text-amber-300 sm:text-sm
            "
          >
            DIRECCIÓN DE PATRIMONIO HISTÓRICO
          </p>

          <h1
            className="
              font-['Bebas_Neue']
              text-[clamp(4rem,9vw,9rem)]
              uppercase leading-[0.9]
              tracking-wide
            "
          >
            MEMORIAL

            <span className="block text-amber-300">
              POTOSÍ
            </span>
          </h1>

          <div
            className="
              my-7 h-[3px] w-24
              bg-gradient-to-r
              from-orange-500 to-amber-400
            "
          />

          <p
            className="
              max-w-2xl text-base
              leading-relaxed
              text-white/90
              sm:text-lg
            "
          >
            Memorias de la Villa Imperial.
            Descubre nuestra historia,
            la rehabilitación del patrimonio
            y la riqueza arquitectónica de Potosí.
          </p>
        </motion.div>

        {/* ====================================================
            LAS TRES CATEGORÍAS
            ==================================================== */}

        <div
          className="
            mt-12 grid grid-cols-1
            gap-5 md:grid-cols-3
            lg:mt-16
          "
        >
          {colecciones.map((coleccion, index) => (
            <motion.div
              key={coleccion.id}
              initial={
                reducirMovimiento
                  ? false
                  : { opacity: 0, y: 35 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reducirMovimiento ? 0 : 0.6,
                delay: reducirMovimiento ? 0 : index * 0.12,
              }}
            >
              <Link
                to={`/informacion?galeria=${coleccion.id}`}
                className="
                  group relative flex
                  min-h-[240px]
                  overflow-hidden rounded-2xl
                  border border-white/30
                  bg-black/60 shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-amber-400
                "
              >
                {/* FOTOGRAFÍA */}

                <img
                  src={coleccion.portada}
                  alt=""
                  loading="lazy"
                  className="
                    absolute inset-0
                    h-full w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* OSCURECIMIENTO */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/95
                    via-black/40
                    to-black/10
                  "
                />

                {/* INFORMACIÓN */}

                <div
                  className="
                    relative z-10 flex
                    w-full flex-col
                    justify-end p-6
                  "
                >
                  <p
                    className="
                      mb-3 text-xs
                      font-bold uppercase
                      tracking-widest
                      text-amber-300
                    "
                  >
                    {coleccion.subtitulo}
                  </p>

                  <h2
                    className="
                      font-['Bebas_Neue']
                      text-[clamp(2rem,3vw,3.2rem)]
                      uppercase leading-none
                    "
                  >
                    {coleccion.nombre}
                  </h2>

                  <span
                    className="
                      mt-5 inline-flex
                      items-center gap-2
                      text-xs font-extrabold
                      uppercase tracking-wide
                    "
                  >
                    EXPLORAR GALERÍA

                    <Flecha />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// VISOR FOTOGRÁFICO A PANTALLA COMPLETA
// ============================================================

function GaleriaPantallaCompleta({ coleccion }) {
  const reducirMovimiento = useReducedMotion();

  const [indice, setIndice] = useState(0);
  const [mostrarTexto, setMostrarTexto] = useState(true);

  const fotografias = coleccion.fotografias;
  const foto = fotografias[indice];

  // ==========================================================
  // NAVEGACIÓN ENTRE FOTOGRAFÍAS
  // ==========================================================

  const siguiente = () => {
    setIndice((actual) =>
      (actual + 1) % fotografias.length
    );
  };

  const anterior = () => {
    setIndice((actual) =>
      (actual - 1 + fotografias.length) %
      fotografias.length
    );
  };

  // ==========================================================
  // NAVEGACIÓN CON FLECHAS DEL TECLADO
  // ==========================================================

  useEffect(() => {
    const controlarTeclas = (event) => {
      const elemento = event.target;

      if (
        elemento instanceof HTMLElement &&
        (
          elemento.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(
            elemento.tagName
          )
        )
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        setIndice((actual) =>
          (actual + 1) % fotografias.length
        );
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        setIndice((actual) =>
          (actual - 1 + fotografias.length) %
          fotografias.length
        );
      }
    };

    window.addEventListener(
      "keydown",
      controlarTeclas
    );

    return () => {
      window.removeEventListener(
        "keydown",
        controlarTeclas
      );
    };
  }, [fotografias.length]);

  // ==========================================================
  // IMPEDIR SCROLL MIENTRAS ESTÁ ABIERTA LA GALERÍA
  // ==========================================================

  useEffect(() => {
    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        overflowAnterior;
    };
  }, []);

  // ==========================================================
  // VISOR
  // ==========================================================

  return (
    <main
      aria-label={`Galería ${coleccion.nombre}`}
      className="
        fixed inset-0 z-[100]
        h-[100dvh] w-screen
        overflow-hidden bg-[#090909]
        text-white
      "
    >
      {/* ======================================================
          FONDO DESENFOCADO DE LA MISMA FOTOGRAFÍA
          ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={`fondo-${coleccion.id}-${indice}`}
            src={foto.src}
            alt=""
            aria-hidden="true"
            className="
              absolute inset-0
              h-full w-full
              scale-110
              object-cover
              blur-3xl
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reducirMovimiento ? 0 : 0.65,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ======================================================
          FOTOGRAFÍA PRINCIPAL CON ZOOM CINEMATOGRÁFICO
          ====================================================== */}

      <div
        className="
          absolute inset-0 z-[1]
          flex items-center
          justify-center
          overflow-hidden
          px-3 py-16
          sm:px-16 sm:py-8
          lg:px-24
        "
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={`${coleccion.id}-${indice}`}
            src={foto.src}
            alt={foto.titulo}
            draggable={false}
            className="
              absolute
              max-h-[calc(100dvh-100px)]
              max-w-[calc(100vw-24px)]
              object-contain
              select-none
              drop-shadow-[0_12px_35px_rgba(0,0,0,0.6)]
              sm:max-h-[calc(100dvh-60px)]
              sm:max-w-[calc(100vw-130px)]
              lg:max-w-[calc(100vw-190px)]
            "
            initial={
              reducirMovimiento
                ? false
                : {
                    opacity: 0,
                    scale: ZOOM_MINIMO,
                  }
            }
            animate={{
              opacity: 1,

              // ZOOM LENTO, CONTINUO Y REVERSIBLE

              scale: reducirMovimiento
                ? 1
                : [
                    ZOOM_MINIMO,
                    ZOOM_MAXIMO,
                    ZOOM_MINIMO,
                  ],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: reducirMovimiento ? 0 : 0.8,
                ease: "easeOut",
              },

              scale: {
                duration: DURACION_ZOOM,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          />
        </AnimatePresence>
      </div>

      {/* ======================================================
          SOMBRA SUPERIOR E INFERIOR
          ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          bg-gradient-to-t
          from-black/85
          via-transparent
          to-black/30
        "
      />

      {/* ======================================================
          BOTÓN VOLVER A MEMORIAL POTOSÍ
          ====================================================== */}

      <Link
        to="/informacion"
        className="
          absolute left-4 top-5 z-20
          inline-flex min-h-11
          items-center gap-2
          rounded-full border
          border-white/30
          bg-black/60
          px-5 py-3
          text-xs font-bold
          uppercase tracking-wide
          text-white backdrop-blur-md
          transition-colors
          hover:bg-black/85
          sm:left-10 sm:top-8
        "
      >
        ← VOLVER A MEMORIAL
      </Link>

      {/* ======================================================
          FLECHA IZQUIERDA
          ====================================================== */}

      <button
        type="button"
        aria-label="Fotografía anterior"
        onClick={anterior}
        className="
          absolute left-2 top-1/2 z-20
          flex h-11 w-11
          -translate-y-1/2
          items-center justify-center
          rounded-full border
          border-white/40
          bg-black/60
          text-white
          backdrop-blur-md
          transition-colors
          hover:bg-orange-600
          sm:left-6
          sm:h-14 sm:w-14
        "
      >
        <Flecha izquierda />
      </button>

      {/* ======================================================
          FLECHA DERECHA
          ====================================================== */}

      <button
        type="button"
        aria-label="Fotografía siguiente"
        onClick={siguiente}
        className="
          absolute right-2 top-1/2 z-20
          flex h-11 w-11
          -translate-y-1/2
          items-center justify-center
          rounded-full border
          border-white/40
          bg-black/60
          text-white
          backdrop-blur-md
          transition-colors
          hover:bg-orange-600
          sm:right-6
          sm:h-14 sm:w-14
        "
      >
        <Flecha />
      </button>

      {/* ======================================================
          INFORMACIÓN DE LA FOTOGRAFÍA
          ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute bottom-0
          left-0 right-0 z-10
          px-5 pb-6 pt-16
          sm:px-12 sm:pb-9
          lg:px-24
        "
      >
        <AnimatePresence mode="wait">
          {mostrarTexto && (
            <motion.div
              key={`${coleccion.id}-texto-${indice}`}
              initial={
                reducirMovimiento
                  ? false
                  : {
                      opacity: 0,
                      y: 15,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: reducirMovimiento ? 0 : 0.4,
              }}
              className="
                pointer-events-auto
                max-w-2xl
                rounded-xl
                bg-black/55
                p-4
                backdrop-blur-md
                sm:p-5
              "
            >
              {/* CATEGORÍA */}

              <p
                className="
                  mb-2
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-amber-300
                  sm:text-xs
                "
              >
                {coleccion.nombre}
              </p>

              {/* TÍTULO */}

              <h1
                className="
                  font-['Bebas_Neue']
                  text-[clamp(1.8rem,3.5vw,3.5rem)]
                  uppercase leading-none
                "
              >
                {foto.titulo}
              </h1>

              {/* DESCRIPCIÓN */}

              <p
                className="
                  mt-2 max-w-xl
                  text-xs leading-relaxed
                  text-white/90
                  sm:text-sm
                "
              >
                {foto.descripcion}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================================================
            CONTROLES INFERIORES
            ================================================== */}

        <div
          className="
            pointer-events-auto
            mt-4 flex
            items-center justify-between
            gap-4
          "
        >
          {/* MOSTRAR / OCULTAR INFORMACIÓN */}

          <button
            type="button"
            onClick={() =>
              setMostrarTexto((actual) => !actual)
            }
            className="
              rounded-full
              border border-white/30
              bg-black/60
              px-4 py-2
              text-xs font-semibold
              text-white
              backdrop-blur-md
              transition-colors
              hover:bg-black/85
            "
          >
            {mostrarTexto
              ? "OCULTAR INFORMACIÓN"
              : "MOSTRAR INFORMACIÓN"}
          </button>

          {/* CONTADOR */}

          <span
            className="
              rounded-full
              bg-black/60
              px-4 py-2
              text-xs font-semibold
              tracking-widest
              text-white
              backdrop-blur-md
            "
          >
            {indice + 1} / {fotografias.length}
          </span>
        </div>
      </div>
    </main>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Informacion() {
  const [parametros] = useSearchParams();

  const galeriaId = parametros.get("galeria");

  const coleccionActiva = colecciones.find(
    (coleccion) => coleccion.id === galeriaId
  );

  return coleccionActiva ? (
    <GaleriaPantallaCompleta
      key={coleccionActiva.id}
      coleccion={coleccionActiva}
    />
  ) : (
    <PortadaMemorial />
  );
}

