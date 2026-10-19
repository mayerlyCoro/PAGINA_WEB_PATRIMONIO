import React from 'react';

// ============================================================
// ICONOS DE CONTACTO
// ============================================================

function IconoUbicacion() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconoTelefono() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
    >
      <path d="M7 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-5-5l3-2-2-5Z" />
    </svg>
  );
}

function IconoCorreo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}


// ============================================================
// ICONOS DE REDES SOCIALES
// ============================================================

function IconoFacebook() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.02 4.388 11.02 10.125 11.927v-8.438H7.078v-3.489h3.047V9.412c0-3.027 1.792-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.97H15.83c-1.491 0-1.956.93-1.956 1.884v2.271h3.328l-.532 3.489h-2.796V24C19.612 23.093 24 18.093 24 12.073Z" />
    </svg>
  );
}

function IconoInstagram() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function IconoYouTube() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.51A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3 3 0 0 0 2.12-2.13C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}


// ============================================================
// TÍTULOS DE COLUMNA
// ============================================================

function TituloColumna({ children }) {
  return (
    <div className="mb-7">
      <h3 className="text-lg font-black uppercase tracking-[0.12em] text-[#20332e] sm:text-xl lg:text-2xl">
        {children}
      </h3>

      <div
        aria-hidden="true"
        className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#d85b24] to-[#ff9800]"
      />
    </div>
  );
}


// ============================================================
// BOTÓN DE RED SOCIAL
// ============================================================

function BotonSocial({ href, nombre, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={nombre}
      title={nombre}
      className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#e4ddd2] bg-white text-[#263b34] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e66b28] hover:bg-[#fff4e9] hover:text-[#b84a1c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 sm:h-16 sm:w-16"
    >
      {children}
    </a>
  );
}


// ============================================================
// FOOTER PRINCIPAL
// ============================================================

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t-4 border-[#ed762b] bg-white font-sans text-[#30352f]">

      {/* ==================================================
          DETALLE DECORATIVO SUPERIOR
      ================================================== */}

      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-[#b93c20] via-[#f27a20] to-[#f5bd42]"
      />


      {/* ==================================================
          CONTENIDO PRINCIPAL
      ================================================== */}

      <div className="relative mx-auto w-full max-w-[1900px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 2xl:px-16">

        <div className="grid grid-cols-1 gap-12 border-b border-[#e8dfd4] pb-12 sm:gap-14 md:grid-cols-12 md:gap-7 lg:gap-10 xl:gap-14">


          {/* ==================================================
              COLUMNA 1: IDENTIDAD INSTITUCIONAL
          ================================================== */}

          <div className="min-w-0 md:col-span-4">

            {/* LOGOTIPOS SIN TARJETAS NI FONDOS AÑADIDOS */}

            <div className="flex flex-wrap items-center justify-start gap-x-5 gap-y-5 xl:gap-x-6">

              {/* PATRIMONIO HISTÓRICO */}

              <img
                src="/images/images.png"
                alt="Logotipo de la Dirección de Patrimonio Histórico"
                className="h-20 w-auto max-w-[90px] object-contain sm:h-24 sm:max-w-[100px] lg:h-28 lg:max-w-[115px] xl:h-32 xl:max-w-[125px]"
              />


              {/* ESCUDO MUNICIPAL Y DENOMINACIÓN OFICIAL */}

              <div className="flex items-center gap-2">

                <img
                  src="/images/escudo.png"
                  alt="Escudo del Gobierno Autónomo Municipal de Potosí"
                  className="h-20 w-auto max-w-[75px] shrink-0 object-contain sm:h-24 sm:max-w-[85px] lg:h-28 lg:max-w-[100px] xl:h-32 xl:max-w-[110px]"
                />

                <div className="leading-tight">

                  <p className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.01em] text-[#245b61] sm:text-[9px] lg:text-[10px] xl:text-[11px]">
                    Gobierno Autónomo
                  </p>

                  <p className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.01em] text-[#245b61] sm:text-[9px] lg:text-[10px] xl:text-[11px]">
                    Municipal de
                  </p>

                  <p className="mt-1 whitespace-nowrap text-lg font-black leading-none tracking-tight text-[#ef4045] sm:text-xl lg:text-2xl xl:text-3xl">
                    POTOSÍ
                  </p>

                </div>

              </div>


              {/* LOGOTIPO POTOSI.PNG */}

              <img
                src="/images/potosi.png"
                alt="Logotipo del Gobierno Autónomo Municipal de Potosí, Sigamos Construyendo Juntos"
                className="h-20 w-auto max-w-[145px] object-contain sm:h-24 sm:max-w-[165px] lg:h-28 lg:max-w-[185px] xl:h-32 xl:max-w-[205px]"
              />

            </div>


            {/* DESCRIPCIÓN INSTITUCIONAL */}

            <div className="mt-8 max-w-xl">

              <p className="text-xl font-black uppercase leading-snug text-[#20332e] sm:text-2xl">
                Dirección de Patrimonio Histórico
              </p>

              <p className="mt-2 text-lg font-bold text-[#70685e] sm:text-xl">
                Potosí, Bolivia
              </p>

              <div
                aria-hidden="true"
                className="my-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#d85b24] to-[#f5b83b]"
              />

              <p className="max-w-lg text-base leading-7 text-[#53564f] sm:text-lg sm:leading-8">
                Preservando la historia, la arquitectura y el legado
                cultural de la Villa Imperial de Potosí.
              </p>

              <div className="mt-6 inline-flex items-center gap-3">

                <span
                  aria-hidden="true"
                  className="h-1.5 w-9 rounded-full bg-[#e8752a]"
                />

                <span className="text-xs font-black uppercase tracking-[0.15em] text-[#485249] sm:text-sm">
                  Villa Imperial de Potosí
                </span>

              </div>

            </div>

          </div>


          {/* ==================================================
              COLUMNA 2: NAVEGACIÓN
          ================================================== */}

          <div className="min-w-0 md:col-span-2">

            <TituloColumna>
              Navegación
            </TituloColumna>

            <nav aria-label="Enlaces del pie de página">

              <ul className="space-y-5 text-base font-semibold sm:text-lg">

                <li>
                  <a
                    href="/#inicio"
                    className="inline-flex items-center gap-3 transition-colors hover:text-[#c94e1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                  >
                    <span className="text-xl font-black text-[#e8752a]">
                      ›
                    </span>
                    Inicio
                  </a>
                </li>

                <li>
                  <a
                    href="/#patrimonio"
                    className="inline-flex items-center gap-3 transition-colors hover:text-[#c94e1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                  >
                    <span className="text-xl font-black text-[#e8752a]">
                      ›
                    </span>
                    Patrimonio
                  </a>
                </li>

                <li>
                  <a
                    href="/#normativas"
                    className="inline-flex items-center gap-3 transition-colors hover:text-[#c94e1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                  >
                    <span className="text-xl font-black text-[#e8752a]">
                      ›
                    </span>
                    Normativas y leyes
                  </a>
                </li>

                <li>
                  <a
                    href="/#tramites"
                    className="inline-flex items-center gap-3 transition-colors hover:text-[#c94e1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                  >
                    <span className="text-xl font-black text-[#e8752a]">
                      ›
                    </span>
                    Trámites
                  </a>
                </li>

                <li>
                  <a
                    href="/informacion"
                    className="inline-flex items-center gap-3 transition-colors hover:text-[#c94e1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                  >
                    <span className="text-xl font-black text-[#e8752a]">
                      ›
                    </span>
                    Información
                  </a>
                </li>

              </ul>

            </nav>

          </div>


          {/* ==================================================
              COLUMNA 3: CONTACTO
          ================================================== */}

          <div className="min-w-0 md:col-span-3">

            <TituloColumna>
              Contacto
            </TituloColumna>

            <ul className="space-y-6 text-base leading-7 text-[#53564f] sm:text-lg sm:leading-8">

              <li className="flex items-start gap-4">

                <span className="mt-1 text-[#d96526]">
                  <IconoUbicacion />
                </span>

                <span>
                  Centro Histórico, calle Quijarro N.º 123,
                  Potosí, Bolivia
                </span>

              </li>

              <li className="flex items-start gap-4">

                <span className="mt-1 text-[#d96526]">
                  <IconoTelefono />
                </span>

                <span>
                  +591 (2) 62-2XXXX
                </span>

              </li>

              <li className="flex items-start gap-4">

                <span className="mt-1 text-[#d96526]">
                  <IconoCorreo />
                </span>

                <span className="break-all">
                  patrimonio@potosi.gob.bo
                </span>

              </li>

            </ul>

          </div>


          {/* ==================================================
              COLUMNA 4: REDES SOCIALES
          ================================================== */}

          <div className="min-w-0 md:col-span-3">

            <TituloColumna>
              Síguenos
            </TituloColumna>

            <p className="max-w-md text-base leading-7 text-[#53564f] sm:text-lg sm:leading-8">
              Mantente al tanto de las actividades de restauración
              y de las iniciativas de conservación patrimonial.
            </p>


            {/* BOTONES DE REDES SOCIALES */}

            <div className="mt-7 flex flex-wrap gap-3">

              <BotonSocial
                href="https://facebook.com"
                nombre="Facebook"
              >
                <IconoFacebook />
              </BotonSocial>

              <BotonSocial
                href="https://instagram.com"
                nombre="Instagram"
              >
                <IconoInstagram />
              </BotonSocial>

              <BotonSocial
                href="https://youtube.com"
                nombre="YouTube"
              >
                <IconoYouTube />
              </BotonSocial>

            </div>


            {/* IDENTIDAD COMPLEMENTARIA */}

            <div className="mt-8 border-l-[3px] border-[#ed762b] pl-4">

              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#20332e] sm:text-base">
                Patrimonio Histórico
              </p>

              <p className="mt-2 text-base leading-7 text-[#70685e]">
                Historia, arquitectura y cultura de Potosí.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ==================================================
          FRANJA INFERIOR NARANJA
      ================================================== */}

      <div className="border-t border-[#dd6825] bg-gradient-to-r from-[#f28a27] via-[#ff9b34] to-[#f28a27]">

        <div className="mx-auto flex w-full max-w-[1900px] flex-col items-start justify-between gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center lg:px-12 2xl:px-16">

          <p className="text-sm font-semibold leading-7 text-[#39230d] sm:text-base">
            © {new Date().getFullYear()} Dirección de Patrimonio Histórico.
            Gobierno Autónomo Municipal de Potosí.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#8c481c]/35 bg-white/30 px-5 py-3">

            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[#a94c16]"
            />

            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#39230d] sm:text-sm">
              Villa Imperial de Potosí · Bolivia
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}