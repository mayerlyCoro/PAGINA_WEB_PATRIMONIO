import React from 'react';

const normativasData = [
  {
    id: 'normativa-055',
    etiqueta: 'LEY MUNICIPAL N° 055',
    titulo:
      'REGLAMENTO GENERAL DE ÁREAS HISTÓRICAS Y CONSERVACIÓN PATRIMONIAL',
    descripcion:
      'Establece las directrices marco y normativas técnicas de regulación urbana para las intervenciones en edificaciones del Centro Histórico de Potosí, protegiendo su valor patrimonial y tipología arquitectónica.',
    puntos: [
      'Regulación de fachadas y elementos arquitectónicos coloniales.',
      'Procedimientos de autorización e inspección técnica de obras.',
      'Límites de preservación estricta y zonas de amortiguamiento.',
    ],
    pdfUrl: '/pdf/normativa-055.pdf',
    bgImage: '/images/normativa-055-bg.jpeg',
    posicionCard: 'justify-start',
  },
  {
    id: 'normativa-122',
    etiqueta: 'LEY MUNICIPAL N° 122',
    titulo: 'NORMATIVA DE PROTECCIÓN Y SALVAGUARDIA DEL PATRIMONIO',
    descripcion:
      'Regula las acciones de preservación, restauración y conservación de los monumentos históricos y espacios públicos de la ciudad.',
    puntos: [
      'Criterios técnicos para la restauración de inmuebles históricos.',
      'Sanciones e infracciones por modificaciones no autorizadas.',
      'Incentivos para la conservación de edificaciones patrimoniales.',
    ],
    pdfUrl: '/pdf/normativa-122.pdf',
    bgImage: '/images/normativa-122-bg.jpeg',
    posicionCard: 'justify-end',
  },
];

export default function Normativas() {
  return (
    <div
      id="normativas"
      className="w-full font-sans text-white bg-zinc-950 scroll-mt-24 md:scroll-mt-44"
    >
      {normativasData.map((item) => (
        <section
          key={item.id}
          id={item.id}
          aria-labelledby={`${item.id}-titulo`}
          className={`relative w-full min-h-screen py-16 px-6 md:px-35 bg-cover bg-center bg-no-repeat flex items-center ${item.posicionCard} border-b border-amber-500/30 scroll-mt-24 md:scroll-mt-44`}
          style={{
            backgroundImage: `url(${item.bgImage})`,
          }}
        >
          {/* Capa sobre la fotografía */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-zinc-950/30 to-transparent pointer-events-none" />

          {/* Tarjeta de normativa */}
          <div className="relative z-10 max-w-2xl w-full bg-zinc-900/85 border-2 border-amber-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-md">
              {item.etiqueta}
            </div>

            <h2
              id={`${item.id}-titulo`}
              className="text-2xl sm:text-4xl font-extrabold text-amber-400 tracking-wide uppercase leading-tight mb-4"
            >
              {item.titulo}
            </h2>

            <p className="text-base sm:text-xl text-zinc-100 leading-relaxed font-medium mb-6">
              {item.descripcion}
            </p>

            <div className="space-y-3 mb-8 border-t border-zinc-700/80 pt-5">
              {item.puntos.map((punto) => (
                <p
                  key={punto}
                  className="text-sm sm:text-lg text-zinc-200 font-semibold leading-snug"
                >
                  {punto}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Descargar el PDF */}
              <a
                href={item.pdfUrl}
                download={`${item.id}.pdf`}
                aria-label={`Descargar ${item.etiqueta} en PDF`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base uppercase tracking-wide rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Descargar ley (PDF)
              </a>

              {/* Abrir el mismo PDF en una nueva pestaña */}
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${item.etiqueta} en una nueva pestaña`}
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/50 text-amber-300 font-bold text-sm sm:text-base uppercase tracking-wide rounded-xl transition-all hover:scale-105 shadow-md"
              >
                Ver en línea
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}