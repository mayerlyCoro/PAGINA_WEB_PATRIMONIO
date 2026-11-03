
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import BalconesColoniales from "./BalconesColoniales";

// ============================================================
// CONFIGURACIÓN DEL ZOOM CINEMATOGRÁFICO
// ============================================================

const ZOOM_MINIMO = 0.965;
const ZOOM_MAXIMO = 1.035;
const DURACION_ZOOM = 18;

// ============================================================
// EXTENSIONES DE LAS FOTOGRAFÍAS
// ============================================================

// Archivos PNG de Potosí de Antaño.
// Los demás utilizan extensión JPG.
//
// IMPORTANTE:
// - No existe 28_c
// - No existe 47_c
// Por eso ambos se omiten del carrusel.

const numerosPNG = new Set([
  2,4,6,11,12, 14,
  19, 20, 21, 26,
  29, 30, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43,
  44, 45, 46, 48, 49,
]);

function obtenerRutaAntano(numero) {
  const extension = numerosPNG.has(numero) ? "png" : "jpg";

  return `/images/${numero}_c.${extension}`;
}

// ============================================================
// FOTOGRAFÍAS DE POTOSÍ DE ANTAÑO
// ============================================================

const datosAntano = [
  {
    numero: 1,
    titulo: "CERRO RICO DE POTOSÍ",
    descripcion:
      "Antigua vista de las laderas del Cerro Rico, con caminos e instalaciones relacionadas con la actividad minera.",
  },
  {
    numero: 2,
    titulo: "IGLESIA DE SAN BERNARDO",
    descripcion:
      "Fotografía histórica del templo de San Bernardo, vinculado al patrimonio religioso y arquitectónico de Potosí.",
  },
  {
    numero: 3,
    titulo: "PLAZA 10 DE NOVIEMBRE",
    descripcion:
      "Vista de la antigua Plaza de Armas, con su quiosco central y las edificaciones históricas que la rodeaban.",
  },
  {
    numero: 4,
    titulo: "POTOSÍ HACIA 1895",
    descripcion:
      "Panorámica histórica de la Villa Imperial, con el Cerro Rico y la antigua Casa de Moneda.",
  },
  {
    numero: 5,
    titulo: "ANTIGUA CALLE LANZA",
    descripcion:
      "Imagen de la antigua calle del Duende, actualmente calle Lanza, a principios del siglo XX.",
  },
  {
    numero: 6,
    titulo: "ARQUERÍA DEL ANTIGUO CABILDO",
    descripcion:
      "Corredores con arcos del antiguo Cabildo de Potosí, fotografiados aproximadamente en la década de 1940.",
  },
  {
    numero: 7,
    titulo: "CASA NACIONAL DE MONEDA",
    descripcion:
      "Antigua vista exterior de uno de los edificios más representativos de la historia de Potosí.",
  },
  {
    numero: 8,
    titulo: "ANTIGUO PUEBLO MINERO DE PORCO",
    descripcion:
      "Postal histórica de Porco, aproximadamente de 1907, donde destacan su plaza y la torre de su iglesia.",
  },
  {
    numero: 9,
    titulo: "ANTIGUO MERCADO LA RECOBA",
    descripcion:
      "Vista del antiguo mercado La Recoba, escenario de las actividades comerciales de la Villa Imperial.",
  },
  {
    numero: 10,
    titulo: "CERRO CHICO DE POTOSÍ",
    descripcion:
      "Fotografía histórica del Cerro Chico, con llamas en primer plano y una capilla en la cima, aproximadamente en 1940.",
  },
  {
    numero: 11,
    titulo: "CATEDRAL DE POTOSÍ",
    descripcion:
      "Antigua fotografía de la Catedral de Potosí, ubicada frente a la Plaza 10 de Noviembre, aproximadamente entre 1920 y 1930.",
  },
  {
    numero: 12,
    titulo: "ANTIGUO CABILDO DE POTOSÍ",
    descripcion:
      "Vista histórica de la Plaza 10 de Noviembre y las construcciones vinculadas al antiguo Cabildo.",
  },
  {
    numero: 13,
    titulo: "ANTIGUA CALLE SUCRE",
    descripcion:
      "Escena urbana de la histórica calle Sucre, un importante espacio de encuentro en Potosí.",
  },
  {
    numero: 14,
    titulo: "PLAZA 6 DE AGOSTO",
    descripcion:
      "Fotografía de la plaza en 1928, con su antiguo obelisco, arquerías y las torres de la Catedral.",
  },
  {
    numero: 15,
    titulo: "ARCO DE COBIJA",
    descripcion:
      "Antigua vista del Arco de Cobija, una de las entradas históricas de Potosí, con el Cerro Rico al fondo, en 1936.",
  },
  {
    numero: 16,
    titulo: "CELEBRACIÓN RELIGIOSA EN POTOSÍ",
    descripcion:
      "Reunión de una multitud junto a las antiguas arquerías de una plaza de la ciudad, aproximadamente en 1910.",
  },
  {
    numero: 17,
    titulo: "TORRE DE LA COMPAÑÍA DE JESÚS",
    descripcion:
      "Imagen histórica de la torre de la Compañía de Jesús, destacada por su ornamentación en piedra, fotografiada hacia 1948.",
  },
  {
    numero: 18,
    titulo: "IGLESIA DE SAN JUAN DE DIOS",
    descripcion:
      "Antigua fotografía de un templo relacionado con la historia religiosa y hospitalaria de Potosí.",
  },
  {
    numero: 19,
    titulo: "LOS MITAYOS DE POTOSÍ",
    descripcion:
      "Retrato histórico de trabajadores indígenas, asociado a la memoria de la mita y de la actividad minera.",
  },
  {
    numero: 20,
    titulo: "PATIO DE LA CASA NACIONAL DE MONEDA",
    descripcion:
      "Vista del patio interior a principios del siglo XX, donde destacan el mascarón y la fuente central.",
  },
  {
    numero: 21,
    titulo: "DESFILE FRENTE A LA CATEDRAL",
    descripcion:
      "Escena de un desfile cívico frente a la Catedral de Potosí, con ciudadanos reunidos en la Plaza 10 de Noviembre hacia 1910.",
  },
  {
    numero: 22,
    titulo: "TEMPLO Y CONVENTO DE SAN FRANCISCO",
    descripcion:
      "Vista histórica del conjunto franciscano, donde destacan sus muros de piedra y su campanario.",
  },
  {
    numero: 23,
    titulo: "ANTIGUA PLAZA 6 DE AGOSTO",
    descripcion:
      "Vista de la plaza hacia 1870, con calles empedradas, balcones coloniales, arquerías de piedra y el Cerro Rico al fondo.",
  },
  {
    numero: 24,
    titulo: "ANTIGUO TEATRO MODESTO OMISTE",
    descripcion:
      "Fachada histórica del inmueble relacionado con el antiguo templo de Belén y el Teatro Modesto Omiste.",
  },
  {
    numero: 25,
    titulo: "CERRO RICO Y LA CIUDAD HISTÓRICA",
    descripcion:
      "Panorámica del Cerro Rico y de los tejados de Potosí, reflejo de su pasado minero y urbano.",
  },
  {
    numero: 26,
    titulo: "ANTIGUA PLAZA DEL REGOCIJO",
    descripcion:
      "Vista histórica de la actual Plaza 10 de Noviembre, rodeada de construcciones tradicionales, hacia 1918.",
  },
  {
    numero: 27,
    titulo: "ANTIGUA PLAZA 6 DE AGOSTO",
    descripcion:
      "Vista histórica de las arquerías de la plaza, con su columna monumental y las torres de la Catedral de Potosí al fondo.",
  },

  // 28_c NO EXISTE

  {
    numero: 29,
    titulo: "FRATERNIDAD DE DIABLOS EN SAN BENITO",
    descripcion:
      "Fotografía grupal de una fraternidad de diablos frente al templo de San Benito, aproximadamente en 1937.",
  },
  {
    numero: 30,
    titulo: "PLAZA 6 DE AGOSTO HACIA 1902",
    descripcion:
      "Antigua imagen de la plaza, donde se observan sus arquerías, columna central y jardines.",
  },
  {
    numero: 31,
    titulo: "TEJADOS DE LA CASA DE MONEDA",
    descripcion:
      "Vista histórica de las cubiertas y bóvedas de la Casa Nacional de Moneda, con el Cerro Rico al fondo.",
  },
  {
    numero: 32,
    titulo: "IGLESIA DE SAN BERNARDO",
    descripcion:
      "Imagen del templo de San Bernardo, aproximadamente hacia 1970, con su fachada y campanario.",
  },
  {
    numero: 33,
    titulo: "CALLE COBIJA DE POTOSÍ",
    descripcion:
      "Vista de la calle Cobija hacia 1952, con balcones tradicionales y edificaciones del centro histórico.",
  },
  {
    numero: 34,
    titulo: "GRAN CATEDRAL DE POTOSÍ",
    descripcion:
      "Fotografía de la Catedral de Potosí y su entorno urbano, en una vista histórica atribuida a 1876.",
  },
  {
    numero: 35,
    titulo: "PANORÁMICA DE POTOSÍ",
    descripcion:
      "Vista general de la Villa Imperial, con sus tejados, templos y el paisaje que rodea la ciudad.",
  },
  {
    numero: 36,
    titulo: "ANTIGUA CERVECERÍA POTOSINA",
    descripcion:
      "Imagen de las instalaciones de una cervecería potosina a principios del siglo XX, con el Cerro Rico al fondo.",
  },
  {
    numero: 37,
    titulo: "ESQUINA DE LAS CALLES LA PAZ Y PERIODISTA",
    descripcion:
      "Vista histórica de la esquina de las calles La Paz y Periodista, aproximadamente en 1950. Se observan viviendas tradicionales y la torre del templo de San Sebastián al fondo.",
  },
  {
    numero: 38,
    titulo: "EL FERROCARRIL DE POTOSÍ",
    descripcion:
      "Antigua fotografía de una locomotora a vapor atravesando un puente ferroviario metálico, acompañada de vagones y pasajeros. Testimonio del transporte ferroviario boliviano.",
  },
  {
    numero: 39,
    titulo: "ANTIGUA TERMINAL DE BUSES DE POTOSÍ",
    descripcion:
      "Vista de la antigua Terminal de Buses Interdepartamental de Potosí, atribuida a las décadas de 1960 y 1970. Se observan autobuses y vehículos de la época.",
  },
  {
    numero: 40,
    titulo: "ANTIGUO MERCADO LA RECOBA",
    descripcion:
      "Fotografía del antiguo Mercado Central de Potosí, conocido como La Recoba, atribuida a 1890. Se observan comerciantes, puestos de venta y galerías, con el Cerro Rico al fondo.",
  },
  {
    numero: 41,
    titulo: "ANTIGUO ARCO DE POTOSÍ",
    descripcion:
      "Fotografía histórica de un arco monumental de Potosí, aproximadamente en 1945, situado en el sector donde actualmente funciona COTAP. Al fondo se aprecia la Casa Nacional de Moneda.",
  },
  {
    numero: 42,
    titulo: "PARROQUIA DE SAN PEDRO DE POTOSÍ",
    descripcion:
      "Vista histórica del barrio de San Pedro en 1926, con viviendas tradicionales de adobe y tejados coloniales. Destaca el campanario de la antigua parroquia.",
  },
  {
    numero: 43,
    titulo: "POTOSÍ EN 1949",
    descripcion:
      "Fotografía de una calle de Potosí en 1949, año de la Guerra Civil Boliviana. Se observan automóviles, camiones antiguos, edificios coloniales y transeúntes.",
  },
  {
    numero: 44,
    titulo: "CALLE COBIJA DE POTOSÍ EN 1924",
    descripcion:
      "Fotografía histórica de una vía que actualmente se conoce como calle Cobija, en 1924. Se observan balcones de madera, viviendas tradicionales y un campanario al fondo.",
  },
  {
    numero: 45,
    titulo: "LOS NIÑOS AGUATEROS DE POTOSÍ",
    descripcion:
      "Fotografía de niños aguateros reunidos alrededor de una fuente pública de Potosí durante la década de 1920. Sus recipientes y el Cerro Rico al fondo retratan la vida cotidiana.",
  },
  {
    numero: 46,
    titulo: "MERCADO POPULAR DE PULACAYO",
    descripcion:
      "Fotografía del mercado popular de la Compañía Minera Huanchaca, en Pulacayo, en 1907. Comerciantes y compradores muestran la actividad de esta población minera.",
  },

  // 47_c NO EXISTE

  {
    numero: 48,
    titulo: "CASA NACIONAL DE MONEDA EN LOS AÑOS 50",
    descripcion:
      "Fotografía de la Casa Nacional de Moneda durante la década de 1950. Se observa su fachada colonial y la torre de la Compañía de Jesús al fondo, mientras comerciantes y transeúntes recorren sus alrededores.",
  },
  {
    numero: 49,
    titulo: "CORRIDAS DE TOROS EN LA ANTIGUA PLAZA",
    descripcion:
      "Escena histórica atribuida aproximadamente a 1870, que muestra una corrida de toros en el espacio donde hoy se encuentra la Plaza 10 de Noviembre. Se distinguen jinetes, espectadores y antiguas arquerías.",
  },
];

// ============================================================
// CONSTRUIR GALERÍA DE POTOSÍ DE ANTAÑO
// ============================================================

const fotografiasAntano = datosAntano.map((foto) => ({
  numero: foto.numero,
  src: obtenerRutaAntano(foto.numero),
  titulo: foto.titulo,
  descripcion: foto.descripcion,
}));

// ============================================================
// COLECCIONES DE MEMORIAL POTOSÍ
// ============================================================

// NOTA:
// Balcones Coloniales conserva su tarjeta en la portada,
// pero su galería se encuentra en BalconesColoniales.jsx.

const colecciones = [
  {
    id: "antano",
    nombre: "POTOSÍ DE ANTAÑO",
    subtitulo: "MEMORIA HISTÓRICA",
    descripcion:
      "Un recorrido fotográfico por la historia de la Villa Imperial.",
    portada: obtenerRutaAntano(4),
    fotografias: fotografiasAntano,
  },
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
  {
    id: "balcones",
    nombre: "BALCONES COLONIALES",
    subtitulo: "ARQUITECTURA HISTÓRICA",
    descripcion:
      "Descubre los balcones históricos, sus ubicaciones y sus historias.",
    portada: "/images/balcones/1_b.png",

    // Los datos de esta galería están en
    // BalconesColoniales.jsx.
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
// PORTADA DE MEMORIAL POTOSÍ
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
      {/* FONDO CON ZOOM CINEMATOGRÁFICO */}

      <motion.img
        src="/images/Gonzalo Viera Azpiroz - Potosí.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        initial={false}
        animate={
          reducirMovimiento
            ? { scale: 1 }
            : { scale: [1, 1.08, 1] }
        }
        transition={{
          duration: 24,
          repeat: reducirMovimiento ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CAPAS OSCURAS */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

      {/* CONTENIDO PRINCIPAL */}

      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          initial={
            reducirMovimiento
              ? false
              : { opacity: 0, y: 35 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reducirMovimiento ? 0 : 0.8,
          }}
        >
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.23em] text-amber-300 sm:text-sm">
            DIRECCIÓN DE PATRIMONIO HISTÓRICO
          </p>

          <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide">
            MEMORIAL
            <span className="block text-amber-300">
              POTOSÍ
            </span>
          </h1>

          <div className="my-7 h-[3px] w-24 bg-gradient-to-r from-orange-500 to-amber-400" />

          <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Memorias de la Villa Imperial. Descubre nuestra
            historia, la rehabilitación del patrimonio y la
            riqueza arquitectónica de Potosí.
          </p>
        </motion.div>

        {/* TARJETAS DE LAS TRES COLECCIONES */}

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
          {colecciones.map((coleccion, index) => (
            <motion.div
              key={coleccion.id}
              initial={
                reducirMovimiento
                  ? false
                  : { opacity: 0, y: 35 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducirMovimiento ? 0 : 0.6,
                delay: reducirMovimiento ? 0 : index * 0.12,
              }}
            >
              <Link
                to={`/informacion?galeria=${coleccion.id}`}
                className="group relative flex min-h-[240px] overflow-hidden rounded-2xl border border-white/30 bg-black/60 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
              >
                <img
                  src={coleccion.portada}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

                <div className="relative z-10 flex w-full flex-col justify-end p-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-300">
                    {coleccion.subtitulo}
                  </p>

                  <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,3vw,3.2rem)] uppercase leading-none">
                    {coleccion.nombre}
                  </h2>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide">
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
// VISOR DE POTOSÍ DE ANTAÑO Y PRAHP
// ============================================================

// Balcones Coloniales NO utiliza este visor.
// Tiene su propio componente independiente.

function GaleriaPantallaCompleta({ coleccion }) {
  const reducirMovimiento = useReducedMotion();

  const [indice, setIndice] = useState(0);
  const [mostrarTexto, setMostrarTexto] = useState(true);

  const fotografias = coleccion.fotografias;
  const foto = fotografias[indice];

  // SIGUIENTE FOTOGRAFÍA

  const siguiente = () => {
    setIndice(
      (actual) => (actual + 1) % fotografias.length
    );
  };

  // FOTOGRAFÍA ANTERIOR

  const anterior = () => {
    setIndice(
      (actual) =>
        (actual - 1 + fotografias.length) %
        fotografias.length
    );
  };

  // NAVEGACIÓN CON TECLADO

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

        setIndice(
          (actual) => (actual + 1) % fotografias.length
        );
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        setIndice(
          (actual) =>
            (actual - 1 + fotografias.length) %
            fotografias.length
        );
      }
    };

    window.addEventListener("keydown", controlarTeclas);

    return () => {
      window.removeEventListener(
        "keydown",
        controlarTeclas
      );
    };
  }, [fotografias.length]);

  // BLOQUEAR SCROLL

  useEffect(() => {
    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, []);

  return (
    <main
      aria-label={`Galería ${coleccion.nombre}`}
      className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-hidden bg-[#090909] text-white"
    >
      {/* FONDO DESENFOCADO */}

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={`fondo-${coleccion.id}-${indice}`}
            src={foto.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl"
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

      {/* FOTOGRAFÍA CON ZOOM CINEMATOGRÁFICO */}

      <div className="absolute inset-0 z-[1] flex items-center justify-center overflow-hidden px-3 py-16 sm:px-16 sm:py-8 lg:px-24">
        <AnimatePresence mode="sync">
          <motion.img
            key={`${coleccion.id}-${indice}`}
            src={foto.src}
            alt={foto.titulo}
            draggable={false}
            className="absolute max-h-[calc(100dvh-100px)] max-w-[calc(100vw-24px)] select-none object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.6)] sm:max-h-[calc(100dvh-60px)] sm:max-w-[calc(100vw-130px)] lg:max-w-[calc(100vw-190px)]"
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
                duration: reducirMovimiento ? 0 : 0.8,
                ease: "easeOut",
              },
              scale: {
                duration: DURACION_ZOOM,
                ease: "easeInOut",
                repeat: reducirMovimiento ? 0 : Infinity,
              },
            }}
          />
        </AnimatePresence>
      </div>

      {/* DEGRADADO */}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/85 via-transparent to-black/30" />

      {/* VOLVER A MEMORIAL */}

      <Link
        to="/informacion"
        className="absolute left-4 top-5 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-black/60 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-black/85 sm:left-10 sm:top-8"
      >
        ← VOLVER A MEMORIAL
      </Link>

      {/* FLECHA IZQUIERDA */}

      <button
        type="button"
        aria-label="Fotografía anterior"
        onClick={anterior}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-orange-600 sm:left-6 sm:h-14 sm:w-14"
      >
        <Flecha izquierda />
      </button>

      {/* FLECHA DERECHA */}

      <button
        type="button"
        aria-label="Fotografía siguiente"
        onClick={siguiente}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-orange-600 sm:right-6 sm:h-14 sm:w-14"
      >
        <Flecha />
      </button>

      {/* INFORMACIÓN DE LA FOTOGRAFÍA */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 pt-16 sm:px-12 sm:pb-9 lg:px-24">
        <AnimatePresence mode="wait">
          {mostrarTexto && (
            <motion.div
              key={`${coleccion.id}-texto-${indice}`}
              initial={
                reducirMovimiento
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: reducirMovimiento ? 0 : 0.4,
              }}
              className="pointer-events-auto max-w-2xl rounded-xl bg-black/55 p-4 backdrop-blur-md sm:p-5"
            >
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-amber-300 sm:text-xs">
                {coleccion.nombre}
              </p>

              <h1 className="font-['Bebas_Neue'] text-[clamp(1.8rem,3.5vw,3.5rem)] uppercase leading-none">
                {foto.titulo}
              </h1>

              <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/90 sm:text-sm">
                {foto.descripcion}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONTROLES INFERIORES */}

        <div className="pointer-events-auto mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() =>
              setMostrarTexto((actual) => !actual)
            }
            className="rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/85"
          >
            {mostrarTexto
              ? "OCULTAR INFORMACIÓN"
              : "MOSTRAR INFORMACIÓN"}
          </button>

          <span className="rounded-full bg-black/60 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
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

  // ==========================================================
  // BALCONES COLONIALES
  // ABRE SU COMPONENTE INDEPENDIENTE
  // ==========================================================

  if (galeriaId === "balcones") {
    return <BalconesColoniales />;
  }

  // ==========================================================
  // POTOSÍ DE ANTAÑO Y PRAHP
  // ==========================================================

  const coleccionActiva = colecciones.find(
    (coleccion) => coleccion.id === galeriaId
  );

  return coleccionActiva &&
    coleccionActiva.fotografias ? (
    <GaleriaPantallaCompleta
      key={coleccionActiva.id}
      coleccion={coleccionActiva}
    />
  ) : (
    <PortadaMemorial />
  );
}
