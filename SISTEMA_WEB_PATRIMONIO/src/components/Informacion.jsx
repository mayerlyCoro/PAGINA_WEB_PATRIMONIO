import { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// IMÁGENES DEL CARRUSEL
// ============================================================

const diapositivas = [
  {
    id: 1,
    categoria: 'PATRIMONIO HISTÓRICO',
    titulo: 'La historia de Potosí',
    descripcion:
      'Un recorrido visual por la Villa Imperial y su paisaje histórico, donde la arquitectura y el desarrollo urbano forman parte de la memoria de la ciudad.',
    imagen: '/images/1.jpeg',
    alt: 'Vista panorámica de la ciudad histórica de Potosí',
  },

  {
    id: 2,
    categoria: 'ARQUITECTURA',
    titulo: 'Arquitectura patrimonial',
    descripcion:
      'Descubre la arquitectura histórica de Potosí mediante fotografías de edificios, fachadas y elementos del patrimonio construido.',
    imagen: '/images/normativa-122-bg.jpeg',
    alt: 'Edificio de arquitectura histórica de Potosí',
  },

  {
    id: 3,
    categoria: 'ESPACIOS HISTÓRICOS',
    titulo: 'Calles y fachadas',
    descripcion:
      'Una mirada a las calles y los espacios urbanos que forman parte del entorno histórico de Potosí.',
    imagen: '/images/normativa-055-bg.jpeg',
    alt: 'Calle y fachada del entorno histórico de Potosí',
  },
];


// ============================================================
// ICONO DE FLECHA
// ============================================================

function IconoFlecha({ direccion = 'derecha' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${
        direccion === 'izquierda' ? 'rotate-180' : ''
      }`}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}


// ============================================================
// ICONO PARA VOLVER AL INICIO
// ============================================================

function IconoInicio() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v12h14V9" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}


// ============================================================
// CARRUSEL DE DOS TARJETAS
// UNA PRINCIPAL Y UNA VISTA PREVIA A LA DERECHA
// ============================================================

function CarruselExpansible() {
  const [activo, setActivo] = useState(0);

  // FOTOGRAFÍA ANTERIOR

  const anterior = () => {
    setActivo((actual) =>
      actual === 0
        ? diapositivas.length - 1
        : actual - 1
    );
  };

  // FOTOGRAFÍA SIGUIENTE

  const siguiente = () => {
    setActivo((actual) =>
      actual === diapositivas.length - 1
        ? 0
        : actual + 1
    );
  };

  // SOLO MOSTRAMOS DOS TARJETAS:
  // 1. LA TARJETA PRINCIPAL.
  // 2. LA SIGUIENTE TARJETA A SU DERECHA.

  const tarjetasVisibles = [
    activo,
    (activo + 1) % diapositivas.length,
  ];

  return (
    <main
      className="fixed inset-0 z-[100] h-dvh w-screen overflow-hidden bg-[#111714] text-white"
      aria-label="Galería fotográfica del patrimonio de Potosí"
    >

      {/* ==================================================
          FONDO A PANTALLA COMPLETA
      ================================================== */}

      {diapositivas.map((item, indice) => (
        <img
          key={item.id}
          src={item.imagen}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            activo === indice
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        />
      ))}

      {/* OSCURECIMIENTO GENERAL */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/40"
      />

      {/* DEGRADADO LATERAL */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/30"
      />

      {/* DEGRADADO INFERIOR */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
      />


      {/* ==================================================
          BOTÓN PARA VOLVER AL INICIO
      ================================================== */}

      <Link
        to="/"
        aria-label="Volver al inicio"
        title="Volver al inicio"
        className="absolute left-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:left-7 sm:top-7 sm:h-14 sm:w-14"
      >
        <IconoInicio />
      </Link>


      {/* ==================================================
          CONTADOR DE FOTOGRAFÍAS
      ================================================== */}

      <div
        className="absolute right-4 top-5 z-30 rounded-full border border-white/35 bg-black/25 px-4 py-2 text-sm font-bold tracking-widest text-white backdrop-blur-md sm:right-8 sm:top-8"
        aria-live="polite"
        aria-atomic="true"
      >
        {String(activo + 1).padStart(2, '0')}

        <span className="mx-2 text-amber-400">
          /
        </span>

        {String(diapositivas.length).padStart(2, '0')}
      </div>


      {/* ==================================================
          CARRUSEL PRINCIPAL
          SE ELIMINA LA TARJETA DEL LADO IZQUIERDO.
      ================================================== */}

      <div className="absolute inset-0 flex flex-col gap-3 px-3 pb-24 pt-20 sm:px-6 sm:pb-24 sm:pt-24 md:flex-row md:gap-4 md:px-8 md:pb-24 md:pt-10 lg:px-12">

        {tarjetasVisibles.map((indice) => {
          const item = diapositivas[indice];

          const seleccionada = indice === activo;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivo(indice)}
              aria-pressed={seleccionada}
              aria-label={`Mostrar fotografía: ${item.titulo}`}
              className={`group relative isolate min-h-0 overflow-hidden rounded-xl border text-left transition-[flex,border-color,box-shadow] duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${
                seleccionada
                  ? 'border-amber-400 shadow-[0_15px_50px_rgba(0,0,0,0.3)]'
                  : 'border-white/35 hover:border-amber-300'
              }`}
              style={{
                flex: seleccionada
                  ? '5 1 0%'
                  : '1 1 0%',
              }}
            >

              {/* FOTOGRAFÍA DE LA TARJETA */}

              <img
                src={item.imagen}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ${
                  seleccionada
                    ? 'scale-100'
                    : 'scale-110 group-hover:scale-100'
                }`}
              />


              {/* OSCURECIMIENTO DE LA TARJETA */}

              <div
                aria-hidden="true"
                className={`absolute inset-0 -z-10 transition-colors duration-500 ${
                  seleccionada
                    ? 'bg-gradient-to-t from-black/90 via-black/15 to-black/10'
                    : 'bg-black/40 group-hover:bg-black/20'
                }`}
              />


              {/* CONTENIDO */}

              <div
                className={`relative flex h-full flex-col justify-between p-4 text-white sm:p-6 ${
                  seleccionada
                    ? 'md:p-7 lg:p-10'
                    : 'md:p-5'
                }`}
              >

                {/* NÚMERO */}

                <div className="flex items-start justify-between gap-3">

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-extrabold ${
                      seleccionada
                        ? 'border-amber-400 bg-amber-400 text-black'
                        : 'border-white/50 bg-black/30 text-white'
                    }`}
                  >
                    {String(item.id).padStart(2, '0')}
                  </span>

                  {seleccionada && (
                    <span className="rounded-full border border-white/35 bg-black/25 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-xs">
                      {item.categoria}
                    </span>
                  )}

                </div>


                {/* TÍTULO Y DESCRIPCIÓN */}

                <div
                  className={`mt-4 ${
                    seleccionada
                      ? 'max-w-3xl'
                      : 'md:[writing-mode:vertical-rl] md:rotate-180'
                  }`}
                >

                  {!seleccionada && (
                    <p className="hidden text-xs font-extrabold uppercase tracking-[0.12em] text-white md:block">
                      {item.categoria}
                    </p>
                  )}

                  <h1
                    className={`font-black uppercase leading-tight tracking-tight ${
                      seleccionada
                        ? 'text-2xl sm:text-4xl lg:text-5xl xl:text-6xl'
                        : 'text-lg sm:text-xl md:text-xl lg:text-2xl'
                    }`}
                  >
                    {item.titulo}
                  </h1>

                  {seleccionada && (
                    <>
                      <div
                        aria-hidden="true"
                        className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-300 to-orange-600 sm:w-20"
                      />

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
                        {item.descripcion}
                      </p>
                    </>
                  )}

                </div>


                {/* INDICADOR DE LA TARJETA ACTIVA */}

                {seleccionada && (
                  <div className="mt-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/75 sm:text-xs">

                    <span className="h-2 w-2 rounded-full bg-amber-400" />

                    {String(indice + 1).padStart(2, '0')}

                    <span className="h-px w-8 bg-white/40" />

                    {item.categoria}

                  </div>
                )}

              </div>

            </button>
          );
        })}

      </div>


      {/* ==================================================
          BOTONES DE NAVEGACIÓN
      ================================================== */}

      <div className="absolute bottom-5 right-4 z-30 flex items-center gap-3 sm:bottom-7 sm:right-8">

        <button
          type="button"
          onClick={anterior}
          aria-label="Mostrar fotografía anterior"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:h-14 sm:w-14"
        >
          <IconoFlecha direccion="izquierda" />
        </button>

        <button
          type="button"
          onClick={siguiente}
          aria-label="Mostrar fotografía siguiente"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400 bg-amber-400 text-black transition-all duration-300 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:h-14 sm:w-14"
        >
          <IconoFlecha />
        </button>

      </div>


      {/* ==================================================
          INDICADORES INFERIORES
      ================================================== */}

      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">

        {diapositivas.map((item, indice) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActivo(indice)}
            aria-label={`Ir a la fotografía ${indice + 1}`}
            aria-pressed={activo === indice}
            className={`h-2 rounded-full transition-all duration-300 ${
              activo === indice
                ? 'w-8 bg-amber-400'
                : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}

      </div>

    </main>
  );
}


// ============================================================
// PÁGINA DE INFORMACIÓN
// ============================================================

export default function Informacion() {
  return <CarruselExpansible />;
}