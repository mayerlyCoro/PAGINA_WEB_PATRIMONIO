import { useState } from 'react';

const secciones = [
  {
    id: 'mision',
    titulo: 'Misión',
    resumen:
      'Preservar, catalogar y restaurar el patrimonio histórico, arquitectónico y cultural de Potosí.',
    detalles: [
      'Preservación, catalogación y restauración del patrimonio histórico de la Villa Imperial.',
      'Supervisión y control técnico riguroso de intervenciones urbanas en el Centro Histórico.',
      'Protección activa e inventariado de inmuebles patrimoniales de primer y segundo orden.',
      'Promoción de la conservación preventiva en coordinación con los propietarios locales.',
    ],
  },
  {
    id: 'vision',
    titulo: 'Visión',
    resumen:
      'Consolidar a Potosí como un referente internacional en gestión patrimonial y desarrollo urbano.',
    detalles: [
      'Posicionar a la Villa Imperial como referente mundial en gestión de patrimonio cultural.',
      'Armonizar la conservación colonial con el crecimiento urbano moderno y sostenible.',
      'Fomentar la apropiación social, el orgullo e identidad en la población potosina.',
      'Impulsar el turismo cultural responsable ligado a la protección del Centro Histórico.',
    ],
  },
  {
    id: 'acciones',
    titulo: 'Acciones',
    resumen:
      'Inspecciones técnicas de campo, catalogación de inmuebles y proyectos de restauración.',
    detalles: [
      'Ejecución de inspecciones técnicas de campo periódicas en áreas de preservación.',
      'Desarrollo de proyectos integrales de restauración arquitectónica y paisajística.',
      'Campañas continuas de sensibilización y educación patrimonial en unidades educativas.',
      'Intervención rápida en inmuebles con riesgo de colapso o deterioro estructural.',
    ],
  },
  {
    id: 'politicas',
    titulo: 'Políticas',
    resumen:
      'Cumplimiento de las Leyes Municipales de conservación y transparencia administrativa.',
    detalles: [
      'Garantizar el cumplimiento estricto de las Leyes Municipales de conservación patrimonial.',
      'Asegurar la máxima transparencia y celeridad en licencias y fichas de catalogación.',
      'Coordinación interinstitucional para frenar intervenciones clandestinas e ilegales.',
      'Fomento a la participación ciudadana activa en la defensa de nuestro patrimonio.',
    ],
  },
];

// ICONOS

function IconoInstitucional({
  tipo,
  className = 'h-8 w-8',
}) {
  const atributos = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  if (tipo === 'mision') {
    return (
      <svg {...atributos}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5.5" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="m12 12 6-6" />
      </svg>
    );
  }

  if (tipo === 'vision') {
    return (
      <svg {...atributos}>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (tipo === 'acciones') {
    return (
      <svg {...atributos}>
        <path d="m4 12 5 5L20 6" />
        <path d="M12 2a10 10 0 1 0 10 10" />
      </svg>
    );
  }

  return (
    <svg {...atributos}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10.5v8M10 10.5v8M14 10.5v8M19 10.5v8" />
      <path d="M3 20h18M2 22h20" />
    </svg>
  );
}

// TARJETAS DE MISIÓN Y VISIÓN

function TarjetaIdentidad({ seccion, numero }) {
  const esMision = seccion.id === 'mision';

  return (
    <article
      id={seccion.id}
      aria-labelledby={`titulo-${seccion.id}`}
      className="group relative flex h-full scroll-mt-36 flex-col overflow-hidden rounded-[1.75rem] border border-[#e5dac9] bg-white p-6 shadow-[0_14px_48px_rgba(40,30,20,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_52px_rgba(40,30,20,0.12)] sm:p-9 lg:p-10"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1.5 ${
          esMision ? 'bg-[#c76635]' : 'bg-[#b48a3a]'
        }`}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl sm:h-[72px] sm:w-[72px] ${
            esMision
              ? 'bg-[#fff0e6] text-[#b65227]'
              : 'bg-[#f8efd8] text-[#926b24]'
          }`}
        >
          <IconoInstitucional
            tipo={seccion.id}
            className="h-9 w-9"
          />
        </div>

        <span className="text-base font-bold tracking-[0.2em] text-stone-400">
          {numero} / 02
        </span>
      </div>

      <h3
        id={`titulo-${seccion.id}`}
        className="mt-7 text-3xl font-extrabold uppercase tracking-tight text-[#242d2b] sm:text-4xl lg:text-[2.65rem]"
      >
        {seccion.titulo}
      </h3>

      <div
        aria-hidden="true"
        className={`mt-4 h-1.5 w-20 rounded-full ${
          esMision ? 'bg-[#c76635]' : 'bg-[#b48a3a]'
        }`}
      />

      <p className="mt-7 text-xl font-medium leading-relaxed text-[#444843] sm:text-[1.35rem] lg:text-2xl">
        {seccion.resumen}
      </p>

      <div className="mt-9 border-t border-[#ece6dc] pt-7">
        <p className="mb-6 text-sm font-extrabold uppercase tracking-[0.18em] text-[#986d37] sm:text-base">
          Aspectos principales
        </p>

        <ul className="space-y-5">
          {seccion.detalles.map((detalle) => (
            <li
              key={detalle}
              className="flex items-start gap-4 text-lg leading-[1.8] text-[#525550] sm:text-xl"
            >
              <span
                aria-hidden="true"
                className="mt-[0.7rem] h-2.5 w-2.5 shrink-0 rounded-full bg-[#c47b39]"
              />

              <span>{detalle}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// TARJETAS DE ACCIONES Y POLÍTICAS

function TarjetaGestion({ seccion }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <article
      id={seccion.id}
      aria-labelledby={`titulo-${seccion.id}`}
      className="scroll-mt-36 rounded-[1.5rem] border border-amber-100/30 bg-[#451820]/45 p-6 text-white shadow-lg transition-colors duration-300 hover:bg-[#451820]/60 sm:p-8 lg:p-9"
    >
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300 sm:h-16 sm:w-16">
          <IconoInstitucional
            tipo={seccion.id}
            className="h-8 w-8"
          />
        </div>

        <div className="min-w-0">
          <h4
            id={`titulo-${seccion.id}`}
            className="text-2xl font-extrabold uppercase tracking-wide sm:text-3xl lg:text-4xl"
          >
            {seccion.titulo}
          </h4>

          <p className="mt-4 text-lg leading-[1.8] text-stone-100 sm:text-xl">
            {seccion.resumen}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setAbierto((valor) => !valor)}
        aria-expanded={abierto}
        aria-controls={`detalle-${seccion.id}`}
        className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg border border-amber-400/60 px-5 py-3 text-base font-bold text-amber-300 transition-colors hover:bg-amber-400/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
      >
        {abierto ? 'Ocultar detalles' : 'Ver detalles'}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`h-5 w-5 transition-transform ${
            abierto ? 'rotate-180' : ''
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        id={`detalle-${seccion.id}`}
        hidden={!abierto}
        className="mt-7 border-t border-white/20 pt-7"
      >
        <ul className="space-y-5">
          {seccion.detalles.map((detalle) => (
            <li
              key={detalle}
              className="flex items-start gap-4 text-lg leading-[1.8] text-stone-100 sm:text-xl"
            >
              <span
                aria-hidden="true"
                className="mt-[0.8rem] h-2 w-2 shrink-0 rounded-full bg-amber-300"
              />

              <span>{detalle}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// COMPONENTE PRINCIPAL

export default function MisionVision() {
  const identidad = secciones.slice(0, 2);
  const gestion = secciones.slice(2);

  return (
    <section
      id="institucion"
      aria-labelledby="titulo-identidad"
      className="relative isolate w-full scroll-mt-28 overflow-hidden bg-[#f7f3ec] font-sans text-[#242d2b] md:scroll-mt-36 xl:scroll-mt-44"
    >
      {/* DETALLE SUPERIOR */}

      <div
        aria-hidden="true"
        className="h-1.5 w-full bg-gradient-to-r from-[#8b3b24] via-[#df8c37] to-[#d5b15c]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(ellipse_at_top_right,rgba(223,165,87,0.11),transparent_65%)]"
      />

      {/* MISIÓN Y VISIÓN */}

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
        <header className="max-w-5xl">
          <p className="inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.19em] text-[#a65b2a] sm:text-base">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-full bg-[#c86b35]"
            />

            Dirección de Patrimonio Histórico
          </p>

          <h2
            id="titulo-identidad"
            className="mt-5 break-words text-4xl font-black uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Nuestra identidad{' '}
            <span className="text-[#b75b2d]">
              institucional
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mt-7 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#c45c30] to-[#d6ad58]"
          />

          <p className="mt-8 max-w-4xl text-lg leading-[1.8] text-[#5f625c] sm:text-xl lg:text-2xl">
            Conoce los propósitos y las líneas de trabajo relacionadas
            con la preservación del patrimonio histórico,
            arquitectónico y cultural de Potosí.
          </p>
        </header>

        <div className="mt-12 grid items-stretch gap-7 lg:grid-cols-2 lg:gap-9">
          {identidad.map((seccion, indice) => (
            <TarjetaIdentidad
              key={seccion.id}
              seccion={seccion}
              numero={String(indice + 1).padStart(2, '0')}
            />
          ))}
        </div>
      </div>

      {/* EJES DE GESTIÓN */}

      <div className="relative bg-gradient-to-br from-[#761b29] via-[#ac3328] to-[#b45d13] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,196,79,0.24),transparent_60%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-[#f8c65b]/70"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300 sm:text-base">
              Ejes institucionales
            </p>

            <h3 className="mt-5 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Nuestros ejes de gestión
            </h3>

            <p className="mt-6 text-lg leading-[1.8] text-stone-100 sm:text-xl lg:text-2xl">
              Consulta las acciones y políticas que forman parte
              del trabajo de conservación y protección patrimonial.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-7 lg:grid-cols-2 lg:gap-9">
            {gestion.map((seccion) => (
              <TarjetaGestion
                key={seccion.id}
                seccion={seccion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}