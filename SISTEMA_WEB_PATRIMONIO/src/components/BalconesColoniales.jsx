
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

// ============================================================
// MEMORIAL POTOSÍ — BALCONES COLONIALES
// ============================================================

const RUTA = "/images/balcones/";

const balcones = [
  // ==========================================================
  // 01 — BALCÓN DE LAS SERPIENTES
  // ==========================================================
  {
    id: 1,
    nombre: "BALCÓN DE LAS SERPIENTES",

    direccion:
      "Calle Nogales, entre las calles Padilla y Tarija, Potosí, Bolivia.",

    historia:
      "El Balcón de las Serpientes forma parte de una casona histórica del centro de Potosí. Se trata de un balcón cerrado de madera, reconocido por sus elementos ornamentales en forma de serpientes. Según una leyenda popular, una mujer solitaria habría ordenado su construcción con motivos relacionados con el pecado original. Con el tiempo, la vivienda quedó vinculada a diversos relatos misteriosos transmitidos por la tradición oral potosina.",

    nota:
      "Los relatos sobre la antigua propietaria pertenecen a la tradición oral y no constituyen hechos históricos comprobados.",

    imagenes: [
      { src: `${RUTA}1_b.png`, descripcion: "Fachada de la casona" },
      { src: `${RUTA}1-1_b.png`, descripcion: "Vista frontal del balcón" },
      { src: `${RUTA}1-2_b.png`, descripcion: "Detalles ornamentales" },
    ],
  },

  // ==========================================================
  // 02 — BALCÓN DEL AHORCADO
  // ==========================================================
  {
    id: 2,
    nombre: "BALCÓN DEL AHORCADO",

    direccion:
      "Esquina de las calles Bolívar y La Paz, Potosí, Bolivia.",

    historia:
      "El Balcón del Ahorcado es uno de los elementos arquitectónicos tradicionales más conocidos de Potosí. Destaca por su estructura esquinera de madera y su relación con antiguas narraciones de la Villa Imperial. La tradición popular lo vincula con episodios de enfrentamientos ocurridos durante la época colonial, especialmente con las historias de vicuñas y vascongados.",

    nota:
      "Las versiones sobre ajusticiamientos en este lugar forman parte de las tradiciones populares y requieren verificación documental.",

    imagenes: [
      { src: `${RUTA}2_b.png`, descripcion: "Vista de la esquina histórica" },
      { src: `${RUTA}2-1_b.png`, descripcion: "Fachada y balcón de madera" },
    ],
  },

  // ==========================================================
  // 03 — BALCÓN DE LAS SIRENAS
  // ==========================================================
  {
    id: 3,
    nombre: "BALCÓN DE LAS SIRENAS",

    direccion:
      "Calle Quijarro, entre Bolívar y Matos, Potosí, Bolivia.",

    historia:
      "Este conjunto arquitectónico es reconocido por los elementos ornamentales tallados en madera que sostienen la estructura del balcón. Sus figuras decorativas, tradicionalmente asociadas con sirenas y personajes de carácter fantástico, expresan la riqueza artística de la carpintería patrimonial potosina. La combinación de madera tallada y herrería constituye uno de sus rasgos más destacados.",

    imagenes: [
      { src: `${RUTA}3_b.png`, descripcion: "Vista general de la fachada" },
      { src: `${RUTA}3-1_b.png`, descripcion: "Detalle de madera tallada" },
      { src: `${RUTA}3-2_b.png`, descripcion: "Ornamentación inferior" },
      { src: `${RUTA}3-3_b.png`, descripcion: "Acercamiento ornamental" },
    ],
  },

  // ==========================================================
  // 04 — BALCÓN DE LOS OFICIALES REALES
  // ==========================================================
  {
    id: 4,
    nombre: "BALCÓN DE LOS OFICIALES REALES",

    direccion:
      "Calle Bolívar, entre Oruro y Camacho, Potosí, Bolivia.",

    historia:
      "El Balcón de los Oficiales Reales forma parte del patrimonio arquitectónico del centro histórico de Potosí. Su denominación recuerda a los funcionarios vinculados con la administración de la Villa Imperial durante el periodo colonial. Su arquitectura constituye un testimonio de la importancia histórica de las casonas y sus balcones en la configuración urbana potosina.",

    nota:
      "La historia particular de este inmueble y su identificación fotográfica están pendientes de cotejo con el inventario patrimonial.",

    imagenes: [
      { src: `${RUTA}4_b.png`, descripcion: "Vista principal" },
      { src: `${RUTA}4-1_b.png`, descripcion: "Vista complementaria" },
      { src: `${RUTA}4-2_b.png`, descripcion: "Detalle arquitectónico" },
    ],
  },

  // ==========================================================
  // 05 — BALCÓN DE LAS TRES PORTADAS
  // ==========================================================
  {
    id: 5,
    nombre: "BALCÓN DE LAS TRES PORTADAS",

    direccion:
      "Calle Bolívar, entre La Paz y Boulevard, Potosí, Bolivia.",

    historia:
      "La Casa de las Tres Portadas es un inmueble vinculado al patrimonio arquitectónico de la Villa Imperial. Su denominación hace referencia a los elementos de acceso y composición de su fachada. La riqueza ornamental de las portadas y los balcones tradicionales del entorno testimonian la importancia de la arquitectura doméstica histórica de Potosí.",

    nota:
      "La correspondencia entre el inmueble y las fotografías debe confirmarse con su ficha patrimonial.",

    imagenes: [
      { src: `${RUTA}5_b.png`, descripcion: "Vista principal de la casona" },
      { src: `${RUTA}5-1_b.png`, descripcion: "Vista complementaria" },
      { src: `${RUTA}5-2_b.png`, descripcion: "Detalles arquitectónicos" },
    ],
  },

  // ==========================================================
  // 06 — BALCÓN DE LA CASTELLANA
  // ==========================================================
  {
    id: 6,
    nombre: "BALCÓN DE LA CASTELLANA",

    direccion:
      "Boulevard, entre las calles Hoyos y Matos, Potosí, Bolivia.",

    historia:
      "El Balcón de la Castellana está asociado a las construcciones tradicionales del centro histórico de Potosí. Los balcones salientes permitían observar la actividad de la calle desde las plantas superiores y formaban parte de la expresión arquitectónica de las casonas. Su presencia recuerda las transformaciones urbanas de la Villa Imperial.",

    nota:
      "La historia particular del inmueble está pendiente de documentación.",

    imagenes: [
      { src: `${RUTA}6_b.png`, descripcion: "Vista del inmueble" },
    ],
  },

  // ==========================================================
  // 07 — CASA NACIONAL DE MONEDA
  // ==========================================================
  {
    id: 7,
    nombre: "BALCONES DE LA CASA NACIONAL DE MONEDA",

    direccion:
      "Calle Ayacucho, entre Quijarro y Bustillo, Potosí, Bolivia.",

    historia:
      "La Casa Nacional de Moneda es uno de los edificios monumentales más importantes de Potosí. Su arquitectura refleja la relevancia económica que tuvo la Villa Imperial durante la época colonial. Además de su portada monumental, posee diversos elementos característicos de la arquitectura histórica que forman parte de su valor patrimonial.",

    nota:
      "La identificación de los balcones específicos debe contrastarse con la documentación arquitectónica del monumento.",

    imagenes: [
      { src: `${RUTA}7_b.png`, descripcion: "Fachada histórica" },
      { src: `${RUTA}7-1_b.png`, descripcion: "Vista complementaria" },
    ],
  },

  // ==========================================================
  // 08 — BALCONES DEL TAMBO DE LA CRUZ
  // ==========================================================
  {
    id: 8,
    nombre: "BALCONES DEL TAMBO DE LA CRUZ",

    direccion:
      "Esquina de las calles Bustillo y Cobija, Potosí, Bolivia.",

    historia:
      "Los tambos fueron espacios vinculados al alojamiento, al comercio y a la circulación de mercancías en las ciudades históricas andinas. El conjunto conocido como Tambo de la Cruz forma parte de la memoria urbana de Potosí. Sus elementos constructivos y balcones tradicionales recuerdan la importancia de estas edificaciones en la vida cotidiana de la Villa Imperial.",

    nota:
      "La historia específica del inmueble está pendiente de verificación documental.",

    imagenes: [
      { src: `${RUTA}8_b.png`, descripcion: "Vista del conjunto arquitectónico" },
    ],
  },

  // ==========================================================
  // 09 — CASA DE LOS CONDES DE CARMA
  // ==========================================================
  {
    id: 9,
    nombre: "CASA DE LOS CONDES DE CARMA",

    direccion:
      "Calle Chuquisaca, entre Tarija y Lanza, Potosí, Bolivia.",

    historia:
      "La Casa de los Condes de Carma pertenece al conjunto de inmuebles históricos asociados a las antiguas residencias señoriales de la Villa Imperial. Su presencia en el centro histórico contribuye a conservar la memoria de la arquitectura doméstica colonial. Destacan sus elementos constructivos tradicionales y el tratamiento ornamental de su fachada.",

    nota:
      "La fotografía destaca principalmente la portada. La identificación y reseña histórica están pendientes de cotejo patrimonial.",

    imagenes: [
      { src: `${RUTA}9_b.png`, descripcion: "Fachada de la casona histórica" },
    ],
  },
];

// ============================================================
// CONFIGURACIÓN DE ANIMACIÓN
// ============================================================

const DURACION_ZOOM = 20;
const ZOOM_MINIMO = 0.985;
const ZOOM_MAXIMO = 1.025;

// ============================================================
// ICONO DE FLECHA
// ============================================================

function Flecha({ izquierda = false }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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
// COMPONENTE PRINCIPAL
// ============================================================

export default function BalconesColoniales() {
  const reducirMovimiento = useReducedMotion();

  const [indiceBalcon, setIndiceBalcon] = useState(0);
  const [indiceFoto, setIndiceFoto] = useState(0);
  const [mostrarInformacion, setMostrarInformacion] =
    useState(true);

  const balcon = balcones[indiceBalcon];
  const foto = balcon.imagenes[indiceFoto];

  const totalBalcones = balcones.length;
  const totalFotos = balcon.imagenes.length;

  // ==========================================================
  // NAVEGACIÓN ENTRE FOTOGRAFÍAS
  // ==========================================================

  const cambiarFoto = (direccion) => {
    setIndiceFoto((actual) =>
      (actual + direccion + totalFotos) % totalFotos
    );
  };

  // ==========================================================
  // NAVEGACIÓN ENTRE BALCONES
  // ==========================================================

  const cambiarBalcon = (direccion) => {
    setIndiceBalcon((actual) =>
      (actual + direccion + totalBalcones) % totalBalcones
    );

    // Cada inmueble comienza por su primera fotografía
    setIndiceFoto(0);
  };

  // ==========================================================
  // NAVEGACIÓN CON TECLADO
  // ==========================================================

  useEffect(() => {
    const manejarTeclado = (evento) => {
      const elemento = evento.target;

      if (
        elemento instanceof HTMLElement &&
        (
          elemento.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(
            elemento.tagName
          ))
      ) {
        return;
      }

      if (evento.key === "ArrowRight") {
        evento.preventDefault();

        setIndiceFoto((actual) =>
          (actual + 1) % totalFotos
        );
      }

      if (evento.key === "ArrowLeft") {
        evento.preventDefault();

        setIndiceFoto((actual) =>
          (actual - 1 + totalFotos) % totalFotos
        );
      }

      if (evento.key === "ArrowDown") {
        evento.preventDefault();

        setIndiceBalcon((actual) =>
          (actual + 1) % totalBalcones
        );

        setIndiceFoto(0);
      }

      if (evento.key === "ArrowUp") {
        evento.preventDefault();

        setIndiceBalcon((actual) =>
          (actual - 1 + totalBalcones) % totalBalcones
        );

        setIndiceFoto(0);
      }
    };

    window.addEventListener("keydown", manejarTeclado);

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [totalFotos, totalBalcones]);

  // ==========================================================
  // BLOQUEAR SCROLL GENERAL
  // ==========================================================

  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, []);

  // ==========================================================
  // INTERFAZ
  // ==========================================================

  return (
    <main
      aria-label="Balcones Coloniales de Potosí"
      className="
        fixed inset-0 z-[100]
        h-[100dvh] w-screen
        overflow-hidden
        bg-[#101918]
        text-[#F5F0E7]
      "
    >
      {/* ======================================================
          VOLVER A MEMORIAL
          ====================================================== */}

      <Link
        to="/informacion"
        className="
          absolute left-5 top-4 z-30
          inline-flex items-center gap-2
          text-xs font-semibold
          uppercase tracking-[0.12em]
          text-[#DCCBAE]
          transition-colors
          hover:text-white
          lg:left-8 lg:top-6
        "
      >
        <span className="text-lg">←</span>
        VOLVER A MEMORIAL
      </Link>

      {/* ======================================================
          COMPOSICIÓN PRINCIPAL
          ====================================================== */}
      {/*
        34% INFORMACIÓN
        66% FOTOGRAFÍA

        Si se oculta la información:
        la fotografía ocupa todo el ancho.
      */}

      <div
        className={`
          grid h-full w-full
          grid-cols-1
          overflow-y-auto
          pt-14
          lg:overflow-hidden
          lg:pt-0
          ${
            mostrarInformacion
              ? "lg:grid-cols-[34%_minmax(0,1fr)]"
              : "lg:grid-cols-1"
          }
        `}
      >
        {/* ====================================================
            PANEL INFORMATIVO
            ==================================================== */}

        {mostrarInformacion && (
          <aside
            className="
              relative z-10 order-2
              flex min-h-0 flex-col
              overflow-hidden
              bg-[#111E1A]
              lg:order-1
              lg:h-full
              lg:border-r
              lg:border-[#C9AA72]/15
              lg:pt-20
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`informacion-${balcon.id}`}
                initial={
                  reducirMovimiento
                    ? false
                    : { opacity: 0, y: 14 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: reducirMovimiento ? 0 : 0.4,
                }}
                className="
                  min-h-0 flex-1
                  overflow-y-auto
                  px-6 py-7
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                  sm:px-8
                  lg:px-9 lg:py-5
                  xl:px-12
                "
              >
                {/* IDENTIFICACIÓN DISCRETA */}

                <p
                  className="
                    mb-5
                    text-[11px] font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#C9AA72]
                  "
                >
                  BALCONES COLONIALES
                </p>

                {/* NOMBRE DEL INMUEBLE */}

                <h1
                  className="
                    font-['Bebas_Neue']
                    text-[clamp(2.7rem,3.5vw,5rem)]
                    uppercase
                    leading-[0.98]
                    tracking-wide
                    text-[#F8F2E7]
                  "
                >
                  {balcon.nombre}
                </h1>

                {/* SEPARADOR */}

                <div className="my-8 h-[2px] w-16 bg-[#C9AA72]" />

                {/* UBICACIÓN */}

                <div className="mb-8">
                  <h2
                    className="
                      mb-3 text-[11px]
                      font-bold uppercase
                      tracking-[0.16em]
                      text-[#C9AA72]
                    "
                  >
                    Ubicación
                  </h2>

                  <p
                    className="
                      max-w-xl
                      text-sm leading-[1.85]
                      text-[#E3DED4]
                      xl:text-[15px]
                    "
                  >
                    {balcon.direccion}
                  </p>
                </div>

                {/* HISTORIA */}

                <div>
                  <h2
                    className="
                      mb-3 text-[11px]
                      font-bold uppercase
                      tracking-[0.16em]
                      text-[#C9AA72]
                    "
                  >
                    Historia y tradición
                  </h2>

                  <p
                    className="
                      max-w-xl
                      text-sm leading-[1.95]
                      text-[#E3DED4]
                      xl:text-[15px]
                    "
                  >
                    {balcon.historia}
                  </p>

                  {balcon.nota && (
                    <p
                      className="
                        mt-6 max-w-xl
                        text-xs italic
                        leading-[1.75]
                        text-[#BCB4A5]
                      "
                    >
                      {balcon.nota}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ==================================================
                NAVEGACIÓN ENTRE INMUEBLES
                SIN CONTADOR
                ================================================== */}

            <div
              className="
                shrink-0
                border-t border-[#C9AA72]/15
                px-6 py-5
                sm:px-8
                lg:px-9
                xl:px-12
              "
            >
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => cambiarBalcon(-1)}
                  aria-label="Balcón anterior"
                  className="
                    inline-flex items-center gap-2
                    text-xs font-semibold
                    uppercase tracking-[0.08em]
                    text-[#DCCBAE]
                    transition-colors
                    hover:text-white
                  "
                >
                  <Flecha izquierda />
                  ANTERIOR
                </button>

                <button
                  type="button"
                  onClick={() => cambiarBalcon(1)}
                  aria-label="Siguiente balcón"
                  className="
                    inline-flex items-center gap-2
                    text-xs font-semibold
                    uppercase tracking-[0.08em]
                    text-[#DCCBAE]
                    transition-colors
                    hover:text-white
                  "
                >
                  SIGUIENTE
                  <Flecha />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMostrarInformacion(false)}
                className="
                  mt-6 text-[11px]
                  font-medium uppercase
                  tracking-[0.08em]
                  text-[#C9AA72]/75
                  transition-colors
                  hover:text-white
                "
              >
                Ocultar información
              </button>
            </div>
          </aside>
        )}

        {/* ====================================================
            FOTOGRAFÍA PRINCIPAL
            ==================================================== */}

        <section
          className={`
            group relative order-1
            min-h-0 overflow-hidden
            bg-[#090E0C]
            lg:order-2
            ${
              mostrarInformacion
                ? "h-[64svh] lg:h-full"
                : "h-[100dvh]"
            }
          `}
          aria-label={`Fotografías de ${balcon.nombre}`}
        >
          {/* FONDO DESENFOCADO */}

          <AnimatePresence mode="sync">
            <motion.img
              key={`fondo-${balcon.id}-${indiceFoto}`}
              src={foto.src}
              alt=""
              aria-hidden="true"
              className="
                absolute inset-0
                h-full w-full
                scale-110 object-cover
                blur-[48px]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.33 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reducirMovimiento ? 0 : 0.7,
              }}
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          {/* IMAGEN PRINCIPAL SIN RECORTES */}

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              overflow-hidden
            "
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={`foto-${balcon.id}-${indiceFoto}`}
                src={foto.src}
                alt={`${balcon.nombre}: ${foto.descripcion}`}
                draggable={false}
                className="
                  block h-full w-full
                  select-none object-contain
                  drop-shadow-[0_15px_40px_rgba(0,0,0,0.4)]
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
                  scale: reducirMovimiento
                    ? 1
                    : [
                        ZOOM_MINIMO,
                        ZOOM_MAXIMO,
                        ZOOM_MINIMO,
                      ],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: {
                    duration: reducirMovimiento ? 0 : 0.65,
                  },
                  scale: {
                    duration: DURACION_ZOOM,
                    repeat: reducirMovimiento ? 0 : Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </AnimatePresence>
          </div>

          {/* FLECHAS DISCRETAS ENTRE FOTOGRAFÍAS */}

          {totalFotos > 1 && (
            <>
              <button
                type="button"
                onClick={() => cambiarFoto(-1)}
                aria-label="Fotografía anterior del mismo balcón"
                className="
                  absolute left-4 top-1/2 z-20
                  flex h-11 w-11
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  bg-black/40 text-white
                  opacity-75 backdrop-blur-md
                  transition-all
                  hover:bg-black/70
                  hover:opacity-100
                  lg:opacity-0
                  lg:group-hover:opacity-100
                  lg:focus-visible:opacity-100
                "
              >
                <Flecha izquierda />
              </button>

              <button
                type="button"
                onClick={() => cambiarFoto(1)}
                aria-label="Siguiente fotografía del mismo balcón"
                className="
                  absolute right-4 top-1/2 z-20
                  flex h-11 w-11
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  bg-black/40 text-white
                  opacity-75 backdrop-blur-md
                  transition-all
                  hover:bg-black/70
                  hover:opacity-100
                  lg:opacity-0
                  lg:group-hover:opacity-100
                  lg:focus-visible:opacity-100
                "
              >
                <Flecha />
              </button>
            </>
          )}

          {/* DEGRADADO INFERIOR SUAVE */}

          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-24
              bg-gradient-to-t
              from-black/55
              to-transparent
            "
          />

          {/* ==================================================
              MODO FOTOGRAFÍA COMPLETA
              ================================================== */}

          {!mostrarInformacion && (
            <div className="absolute left-5 top-16 z-20 lg:left-8 lg:top-20">
              <button
                type="button"
                onClick={() => setMostrarInformacion(true)}
                className="
                  rounded-full bg-black/45
                  px-4 py-2.5
                  text-[11px] font-semibold
                  uppercase tracking-[0.08em]
                  text-white backdrop-blur-md
                  transition-colors
                  hover:bg-black/70
                "
              >
                Mostrar información
              </button>

              <div className="mt-4 flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => cambiarBalcon(-1)}
                  aria-label="Balcón anterior"
                  className="text-white hover:text-[#E0C494]"
                >
                  <Flecha izquierda />
                </button>

                <span className="text-[11px] uppercase tracking-widest text-[#E0C494]">
                  Cambiar balcón
                </span>

                <button
                  type="button"
                  onClick={() => cambiarBalcon(1)}
                  aria-label="Siguiente balcón"
                  className="text-white hover:text-[#E0C494]"
                >
                  <Flecha />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================
              PUNTOS DE NAVEGACIÓN ENTRE FOTOGRAFÍAS
              SIN CONTADOR NI DESCRIPCIÓN
              ================================================== */}

          {totalFotos > 1 && (
            <div
              className="
                absolute bottom-6
                left-1/2 z-20
                flex -translate-x-1/2
                items-center gap-1
                rounded-full
                bg-black/40
                px-3 py-1
                backdrop-blur-md
              "
              aria-label="Seleccionar fotografía del mismo balcón"
            >
              {balcon.imagenes.map((imagen, index) => (
                <button
                  key={`${balcon.id}-${index}`}
                  type="button"
                  onClick={() => setIndiceFoto(index)}
                  aria-label={`Ver ${imagen.descripcion}`}
                  aria-pressed={index === indiceFoto}
                  title={imagen.descripcion}
                  className="
                    flex h-8 w-8
                    items-center justify-center
                  "
                >
                  <span
                    className={`
                      block h-1.5 rounded-full
                      transition-all duration-300
                      ${
                        index === indiceFoto
                          ? "w-6 bg-[#E0C494]"
                          : "w-1.5 bg-white/55 hover:bg-white"
                      }
                    `}
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
