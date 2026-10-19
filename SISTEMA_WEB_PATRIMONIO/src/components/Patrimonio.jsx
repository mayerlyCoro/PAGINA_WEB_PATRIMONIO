import { useEffect, useState } from 'react';

// ============================================================
// DATOS DEL CARRUSEL
// Utiliza las fotografías existentes en public/images.
// ============================================================

const diapositivas = [
  {
    numero: '01',
    etiqueta: 'VISTA GENERAL',
    titulo: 'Potosí, historia y patrimonio',
    descripcion:
      'Conoce el patrimonio histórico, arquitectónico y urbano de la Villa Imperial mediante fotografías y contenidos documentados.',

    imagen: '/images/1.jpeg',

    alt: 'Vista panorámica de la ciudad histórica de Potosí',
  },

  {
    numero: '02',
    etiqueta: 'ARQUITECTURA',
    titulo: 'Arquitectura que cuenta nuestra historia',
    descripcion:
      'Un espacio dedicado a presentar inmuebles históricos, características arquitectónicas y elementos constructivos documentados.',

    imagen: '/images/normativa-122-bg.jpeg',

    alt: 'Arquitectura histórica de Potosí',
  },

  {
    numero: '03',
    etiqueta: 'ESPACIOS HISTÓRICOS',
    titulo: 'Calles y espacios patrimoniales',
    descripcion:
      'Descubre las calles, fachadas y espacios urbanos de Potosí mediante fotografías y descripciones que permitan conocer su valor histórico.',

    imagen: '/images/normativa-055-bg.jpeg',

    alt: 'Acceso y arquitectura tradicional de Potosí',
  },
];


// ============================================================
// DATOS DE LAS CUATRO ÁREAS
// ============================================================

const areasPatrimoniales = [
  {
    id: 'turismo',
    numero: '01',
    titulo: 'Turismo',
    subtitulo: 'Recorridos patrimoniales',

    descripcion:
      'Información sobre lugares históricos, recorridos patrimoniales y referencias de interés para los visitantes.',

    imagen: '/images/1.jpeg',

    alt: 'Vista panorámica de Potosí',
  },

  {
    id: 'cultura',
    numero: '02',
    titulo: 'Cultura',
    subtitulo: 'Historia e identidad',

    descripcion:
      'Contenidos históricos y culturales relacionados con la identidad de Potosí y su patrimonio.',

    imagen: '/images/normativa-122-bg.jpeg',

    alt: 'Edificio histórico de Potosí',
  },

  {
    id: 'arquitectura',
    numero: '03',
    titulo: 'Arquitectura',
    subtitulo: 'Patrimonio construido',

    descripcion:
      'Fotografías y descripciones de inmuebles, fachadas y elementos arquitectónicos documentados.',

    imagen: '/images/normativa-055-bg.jpeg',

    alt: 'Detalle de arquitectura tradicional de Potosí',
  },

  {
    id: 'arqueologia',
    numero: '04',
    titulo: 'Arqueología',
    subtitulo: 'Conocimiento y protección',

    descripcion:
      'Un espacio para presentar información arqueológica documentada y autorizada por la institución.',

    imagen: '/images/1.jpeg',

    alt: 'Panorámica del entorno histórico de Potosí',
  },
];


// ============================================================
// CONTENIDO DE CADA ÁREA
// Estos textos son provisionales y deben validarse con
// la Dirección antes de publicar la página.
// ============================================================

const contenidoAreas = {
  turismo: {
    titulo: 'Turismo patrimonial',

    introduccion:
      'Esta sección permitirá consultar lugares de interés histórico, recorridos documentados y referencias relacionadas con el patrimonio de Potosí.',

    apartados: [
      {
        titulo: 'Lugares de interés patrimonial',

        descripcion:
          'Fichas informativas con fotografías, nombres, descripciones y referencias históricas de los lugares seleccionados.',
      },

      {
        titulo: 'Recorridos patrimoniales',

        descripcion:
          'Circuitos documentados con información sobre los lugares que comprende cada recorrido, previa validación institucional.',
      },

      {
        titulo: 'Información para visitantes',

        descripcion:
          'Información práctica que la Dirección confirme y autorice para su publicación.',
      },
    ],

    nota:
      'La Guía de Arquitectura de Potosí, edición de 2004, puede utilizarse como fuente documental inicial. La vigencia de los recorridos debe comprobarse antes de presentarlos como actuales.',
  },

  cultura: {
    titulo: 'Historia e identidad cultural',

    introduccion:
      'Este apartado permitirá reunir contenidos relacionados con la historia urbana, el patrimonio y la identidad cultural de Potosí.',

    apartados: [
      {
        titulo: 'Historia de Potosí',

        descripcion:
          'Contenido histórico elaborado a partir de documentación verificable.',
      },

      {
        titulo: 'Identidad patrimonial',

        descripcion:
          'Información sobre el valor histórico de los espacios, edificios y elementos patrimoniales documentados.',
      },

      {
        titulo: 'Difusión cultural',

        descripcion:
          'Actividades, publicaciones y materiales institucionales que la Dirección facilite para su difusión.',
      },
    ],

    nota:
      'Los contenidos definitivos deberán ser revisados y aprobados por la institución.',
  },

  arquitectura: {
    titulo: 'Arquitectura histórica de Potosí',

    introduccion:
      'Esta sección estará dedicada a presentar las características arquitectónicas de los inmuebles históricos y otros elementos del patrimonio construido.',

    apartados: [
      {
        titulo: 'Inmuebles patrimoniales',

        descripcion:
          'Fichas con fotografías, denominación, ubicación y descripción histórica, de acuerdo con la información disponible y autorizada.',
      },

      {
        titulo: 'Elementos arquitectónicos',

        descripcion:
          'Fotografías y descripciones de fachadas, portadas, balcones, patios y otros elementos documentados.',
      },

      {
        titulo: 'Conservación del patrimonio',

        descripcion:
          'Información institucional relacionada con la conservación y protección de los inmuebles.',
      },

      {
        titulo: 'Información para propietarios',

        descripcion:
          'Accesos a los trámites y las normativas relacionados con las intervenciones arquitectónicas.',
      },
    ],

    nota:
      'La Guía de Arquitectura de Potosí constituye una posible fuente documental. Antes de publicar fotografías o reproducir su contenido, debemos comprobar las autorizaciones correspondientes.',
  },

  arqueologia: {
    titulo: 'Patrimonio arqueológico',

    introduccion:
      'Este apartado se preparará para presentar información documentada sobre el patrimonio arqueológico que la Dirección determine publicar.',

    apartados: [
      {
        titulo: 'Documentación arqueológica',

        descripcion:
          'Información histórica y técnica procedente de documentación proporcionada o validada por la institución.',
      },

      {
        titulo: 'Conservación y protección',

        descripcion:
          'Contenido institucional sobre las medidas de protección que correspondan y estén documentadas.',
      },

      {
        titulo: 'Material informativo',

        descripcion:
          'Fotografías y documentos cuya difusión haya sido autorizada.',
      },
    ],

    nota:
      'Se necesita documentación arqueológica específica antes de completar esta sección. No se incorporarán actuaciones ni datos que no estén respaldados por fuentes verificables.',
  },
};


// ============================================================
// ICONO DE FLECHA
// ============================================================

function Flecha({ direccion = 'derecha' }) {
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
// CARRUSEL PRINCIPAL
// ============================================================

function CarruselPatrimonial() {
  const [indiceActual, setIndiceActual] = useState(0);

  const diapositiva = diapositivas[indiceActual];

  const anterior = () => {
    setIndiceActual((actual) =>
      actual === 0
        ? diapositivas.length - 1
        : actual - 1
    );
  };

  const siguiente = () => {
    setIndiceActual((actual) =>
      actual === diapositivas.length - 1
        ? 0
        : actual + 1
    );
  };

  return (
    <section
      aria-label="Carrusel del patrimonio histórico de Potosí"
      className="relative"
    >
      <div className="relative isolate flex min-h-[580px] overflow-hidden bg-[#202a28] sm:min-h-[640px] lg:min-h-[710px]">

        {/* FOTOGRAFÍAS DE FONDO */}

        {diapositivas.map((item, indice) => (
          <img
            key={item.numero}
            src={item.imagen}
            alt={indice === indiceActual ? item.alt : ''}
            aria-hidden={indice !== indiceActual}
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-500 ${
              indice === indiceActual
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          />
        ))}

        {/* CAPAS DE OSCURECIMIENTO */}

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/10"
        />

        {/* DETALLE LATERAL */}

        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-300 via-orange-500 to-red-800"
        />

        <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">

          {/* ENCABEZADO DEL CARRUSEL */}

          <div className="flex items-start justify-between gap-4">

            <span className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-amber-400" />

              Patrimonio Histórico de Potosí
            </span>

            <div className="text-right text-white">

              <p className="text-2xl font-light tracking-widest sm:text-3xl">
                {diapositiva.numero}

                <span className="mx-2 text-amber-400">
                  /
                </span>

                <span className="text-white/55">
                  {String(diapositivas.length).padStart(2, '0')}
                </span>
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">
                Explorar patrimonio
              </p>

            </div>

          </div>


          {/* TÍTULO Y DESCRIPCIÓN */}

          <div
            key={diapositiva.numero}
            aria-live="polite"
            aria-atomic="true"
            className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          >

            <div className="max-w-3xl">

              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.25em] text-amber-400 sm:text-sm">
                {diapositiva.etiqueta}
              </p>

              <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                {diapositiva.titulo}
              </h2>

              <div
                aria-hidden="true"
                className="mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-amber-300 to-orange-600"
              />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg lg:text-xl">
                {diapositiva.descripcion}
              </p>

            </div>


            {/* RECUADRO DESCRIPTIVO */}

            <div className="w-full max-w-xl justify-self-end border border-white/20 bg-black/45 p-6 text-white shadow-xl backdrop-blur-md sm:p-8">

              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-amber-400 sm:text-xs">
                Guía de Arquitectura de Potosí
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Conoce nuestro patrimonio
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Una propuesta de presentación visual basada en
                el material documental disponible, pendiente
                de revisión y aprobación institucional.
              </p>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/20 pt-5">

                <span className="text-xs font-medium text-white/65">
                  Sección informativa
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Potosí
                </span>

              </div>

            </div>

          </div>


          {/* CONTROLES DEL CARRUSEL */}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-5">

            {/* BOTONES DE DIAPOSITIVAS */}

            <div className="flex flex-wrap items-center gap-2">

              {diapositivas.map((item, indice) => (
                <button
                  key={item.numero}
                  type="button"
                  onClick={() => setIndiceActual(indice)}
                  aria-label={`Mostrar diapositiva ${indice + 1}: ${item.etiqueta}`}
                  aria-pressed={indiceActual === indice}
                  className={`min-h-11 border px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:text-xs ${
                    indiceActual === indice
                      ? 'border-amber-400 bg-amber-400 text-[#27221b]'
                      : 'border-white/35 bg-black/20 text-white hover:border-amber-300 hover:text-amber-300'
                  }`}
                >
                  {item.etiqueta}
                </button>
              ))}

            </div>


            {/* FLECHAS DE NAVEGACIÓN */}

            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={anterior}
                aria-label="Mostrar imagen anterior"
                className="flex h-12 w-12 items-center justify-center border border-white/45 bg-black/20 text-white transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                <Flecha direccion="izquierda" />
              </button>

              <button
                type="button"
                onClick={siguiente}
                aria-label="Mostrar imagen siguiente"
                className="flex h-12 w-12 items-center justify-center border border-white/45 bg-black/20 text-white transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                <Flecha direccion="derecha" />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


// ============================================================
// TARJETA FUNCIONAL DE CADA ÁREA
// ============================================================

function TarjetaArea({
  area,
  seleccionada,
  onSeleccionar,
}) {
  return (
    <article
      id={area.id}
      className={`group scroll-mt-36 overflow-hidden border bg-white transition-all duration-300 ${
        seleccionada
          ? 'border-[#bd723b] shadow-xl'
          : 'border-[#e6ded2] hover:shadow-xl'
      }`}
    >

      {/* IMAGEN */}

      <div className="relative h-56 overflow-hidden bg-[#283632] sm:h-64">

        <img
          src={area.imagen}
          alt={area.alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-500 ${
            seleccionada
              ? 'scale-105'
              : 'group-hover:scale-105'
          }`}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
        />

        <span className="absolute bottom-4 left-5 text-sm font-bold tracking-[0.15em] text-amber-300">
          {area.numero}
        </span>

      </div>


      {/* INFORMACIÓN */}

      <div className="p-6 sm:p-7">

        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#b76431] sm:text-xs">
          {area.subtitulo}
        </p>

        <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#26322f] sm:text-3xl">
          {area.titulo}
        </h3>

        <p className="mt-4 text-base leading-7 text-[#666259]">
          {area.descripcion}
        </p>

        {/* BOTÓN FUNCIONAL */}

        <div className="mt-6 border-t border-[#eee6db] pt-5">

          <button
            type="button"
            onClick={() => onSeleccionar(area.id)}
            aria-expanded={seleccionada}
            aria-controls="detalle-area-seleccionada"
            className="inline-flex min-h-11 w-full items-center justify-between gap-3 text-left text-sm font-extrabold uppercase tracking-wider text-[#a94c16] transition-colors hover:text-[#792d17] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
          >
            <span>
              {seleccionada
                ? 'Sección seleccionada'
                : 'Explorar sección'}
            </span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-5 w-5 shrink-0 transition-transform ${
                seleccionada ? 'rotate-90' : ''
              }`}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>

          </button>

        </div>

      </div>

    </article>
  );
}


// ============================================================
// DETALLE FUNCIONAL DE LA SECCIÓN SELECCIONADA
// ============================================================

function DetalleArea({ areaId, onCerrar }) {
  const contenido = contenidoAreas[areaId];

  if (!contenido) {
    return null;
  }

  return (
    <section
      id="detalle-area-seleccionada"
      aria-labelledby="titulo-detalle-area"
      className="mt-12 scroll-mt-32 border border-[#e6ded2] bg-white"
    >

      {/* CABECERA */}

      <div className="border-b border-[#e6ded2] bg-[#f0e9de] px-6 py-7 sm:px-9 sm:py-9">

        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a94c16]">
          Área seleccionada
        </p>

        <h3
          id="titulo-detalle-area"
          className="mt-3 text-3xl font-black uppercase text-[#26322f] sm:text-4xl"
        >
          {contenido.titulo}
        </h3>

        <p className="mt-4 max-w-4xl text-base leading-8 text-[#625d55] sm:text-lg">
          {contenido.introduccion}
        </p>

      </div>


      {/* APARTADOS */}

      <div className="grid gap-0 md:grid-cols-2">

        {contenido.apartados.map((apartado, indice) => (
          <article
            key={apartado.titulo}
            className="border-b border-[#e6ded2] p-6 sm:p-8 md:even:border-l"
          >

            <div className="flex items-start gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f7e9dc] text-sm font-black text-[#a94c16]">
                {String(indice + 1).padStart(2, '0')}
              </span>

              <div>

                <h4 className="text-lg font-extrabold text-[#26322f] sm:text-xl">
                  {apartado.titulo}
                </h4>

                <p className="mt-3 text-base leading-7 text-[#666259]">
                  {apartado.descripcion}
                </p>

              </div>

            </div>

          </article>
        ))}

      </div>


      {/* NOTA */}

      <div className="mx-6 my-6 border-l-4 border-[#bd723b] bg-[#faf5ed] p-5 sm:mx-8 sm:my-8 sm:p-6">

        <p className="text-sm leading-7 text-[#625c53] sm:text-base">

          <strong className="font-extrabold text-[#343a35]">
            Nota:
          </strong>

          {' '}

          {contenido.nota}

        </p>

      </div>


      {/* CERRAR DETALLE */}

      <div className="flex justify-end border-t border-[#e6ded2] px-6 py-5 sm:px-8">

        <button
          type="button"
          onClick={onCerrar}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#a94c16] hover:text-[#792d17] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
        >
          Cerrar sección

          <span aria-hidden="true">×</span>

        </button>

      </div>

    </section>
  );
}


// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Patrimonio() {
  const [areaSeleccionada, setAreaSeleccionada] = useState(null);

  // SELECCIONAR O CERRAR ÁREA

  const seleccionarArea = (areaId) => {
    setAreaSeleccionada((actual) =>
      actual === areaId ? null : areaId
    );
  };

  // DESPLAZARSE AL DETALLE CUANDO SE SELECCIONA UNA TARJETA

  useEffect(() => {
    if (!areaSeleccionada) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById('detalle-area-seleccionada')
        ?.scrollIntoView({
          behavior: window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches
            ? 'auto'
            : 'smooth',

          block: 'start',
        });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [areaSeleccionada]);

  // CERRAR DETALLE

  const cerrarDetalle = () => {
    setAreaSeleccionada(null);
  };

  return (
    <section
      id="patrimonio"
      aria-labelledby="titulo-patrimonio"
      className="w-full bg-[#f7f4ee] text-[#26322f]"
    >

      {/* ========================================
          PRESENTACIÓN
      ======================================== */}

      <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12">

        <header className="max-w-4xl">

          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ac5b2e] sm:text-sm">
            Dirección de Patrimonio Histórico
          </p>

          <h2
            id="titulo-patrimonio"
            className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-[#252d2a] sm:text-5xl lg:text-6xl"
          >
            Descubre el patrimonio de{' '}

            <span className="text-[#b85b30]">
              Potosí
            </span>

          </h2>

          <div
            aria-hidden="true"
            className="mt-6 h-1.5 w-24 bg-gradient-to-r from-[#ae4628] to-[#e0ad4d]"
          />

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#666259] sm:text-lg lg:text-xl">
            Una propuesta para organizar y presentar información
            histórica, arquitectónica y patrimonial mediante
            fotografías, descripciones y contenidos documentados.
          </p>

        </header>

      </div>


      {/* ========================================
          CARRUSEL PANORÁMICO
      ======================================== */}

      <CarruselPatrimonial />


      {/* ========================================
          ÁREAS DE PATRIMONIO
      ======================================== */}

      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

        <header className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ad5b2d] sm:text-sm">
              Explorar por temática
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              Áreas de patrimonio
            </h2>

          </div>

          <p className="max-w-xl text-base leading-7 text-[#6b665e]">
            Selecciona un área para consultar los contenidos
            organizados para la Dirección.
          </p>

        </header>


        {/* CUATRO TARJETAS INTERACTIVAS */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {areasPatrimoniales.map((area) => (
            <TarjetaArea
              key={area.id}
              area={area}
              seleccionada={areaSeleccionada === area.id}
              onSeleccionar={seleccionarArea}
            />
          ))}

        </div>


        {/* CONTENIDO DE LA TARJETA SELECCIONADA */}

        {areaSeleccionada && (
          <DetalleArea
            areaId={areaSeleccionada}
            onCerrar={cerrarDetalle}
          />
        )}


        {/* REFERENCIA DOCUMENTAL */}

        <div className="mt-10 border-l-4 border-[#bd723b] bg-white px-5 py-5 sm:px-7">

          <p className="text-sm leading-7 text-[#625c53] sm:text-base">

            <strong className="font-extrabold text-[#343a35]">
              Base documental:
            </strong>

            {' '}

            Guía de Arquitectura de Potosí, edición de 2004.
            La selección definitiva de fotografías, los textos
            y los datos de cada sección deberán verificarse y
            contar con la autorización correspondiente antes
            de publicarse.

          </p>

        </div>

      </div>

    </section>
  );
}