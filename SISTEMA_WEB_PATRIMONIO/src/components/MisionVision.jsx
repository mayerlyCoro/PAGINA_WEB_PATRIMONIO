import React, { useState, useEffect } from 'react';

const secciones = [
  {
    id: 'mision',
    titulo: 'Misión',
    resumen: 'Preservar, catalogar y restaurar el patrimonio histórico, arquitectónico y cultural de Potosí.',
    detalles: [
      'Preservación, catalogación y restauración del patrimonio histórico de la Villa Imperial.',
      'Supervisión y control técnico riguroso de intervenciones urbanas en el Centro Histórico.',
      'Protección activa e inventariado de inmuebles patrimoniales de primer y segundo orden.',
      'Promoción de la conservación preventiva en coordinación con los propietarios locales.'
    ]
  },
  {
    id: 'vision',
    titulo: 'Visión',
    resumen: 'Consolidar a Potosí como un referente internacional en gestión patrimonial y desarrollo urbano.',
    detalles: [
      'Posicionar a la Villa Imperial como referente mundial en gestión de patrimonio cultural.',
      'Armonizar la conservación colonial con el crecimiento urbano moderno y sostenible.',
      'Fomentar la apropiación social, el orgullo e identidad en la población potosina.',
      'Impulsar el turismo cultural responsable ligado a la protección del Centro Histórico.'
    ]
  },
  {
    id: 'acciones',
    titulo: 'Acciones',
    resumen: 'Inspecciones técnicas de campo, catalogación de inmuebles y proyectos de restauración.',
    detalles: [
      'Ejecución de inspecciones técnicas de campo periódicas en áreas de preservación.',
      'Desarrollo de proyectos integrales de restauración arquitectónica y paisajística.',
      'Campañas continuas de sensibilización y educación patrimonial en unidades educativas.',
      'Intervención rápida en inmuebles con riesgo de colapso o deterioro estructural.'
    ]
  },
  {
    id: 'politicas',
    titulo: 'Políticas',
    resumen: 'Cumplimiento de las Leyes Municipales de conservación y transparencia administrativa.',
    detalles: [
      'Garantizar el cumplimiento estricto de las Leyes Municipales de conservación patrimonial.',
      'Asegurar la máxima transparencia y celeridad en licencias y fichas de catalogación.',
      'Coordinación interinstitucional para frenar intervenciones clandestinas e ilegales.',
      'Fomento a la participación ciudadana activa en la defensa de nuestro patrimonio.'
    ]
  }
];

export default function MisionVision() {
  const [seccionSeleccionada, setSeccionSeleccionada] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);
  const [estaPausado, setEstaPausado] = useState(false);

  // Transición automática cada 4 segundos de derecha a izquierda
  useEffect(() => {
    if (estaPausado || seccionSeleccionada) return;

    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % secciones.length);
    }, 4000); // Cambia el tiempo aquí si deseas más o menos velocidad

    return () => clearInterval(intervalo);
  }, [estaPausado, seccionSeleccionada]);

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % secciones.length);
  };

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + secciones.length) % secciones.length);
  };

  return (
    <div className="w-full bg-zinc-950 text-white relative py-20 pb-32 overflow-hidden font-sans">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
        .font-varela {
          font-family: 'Varela Round', sans-serif;
        }
      `}</style>

      {/* FONDO DEGRADADO */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/30 to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-orange-600/5 to-transparent pointer-events-none" />

      {/* CABECERA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16 font-varela">
        <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-bold">
          Ejes Institucionales
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-white mt-2 tracking-wide">
          Nuestra Identidad y Gestión
        </h2>
        <div className="w-28 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* CONTENEDOR DEL CARRUSEL (SOLO 4 TARJETAS) */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-6 font-varela"
        onMouseEnter={() => setEstaPausado(true)}
        onMouseLeave={() => setEstaPausado(false)}
      >
        {/* BOTÓN ANTERIOR */}
        <button 
          onClick={anterior}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-zinc-900/80 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all shadow-lg"
          title="Anterior"
        >
          ❮
        </button>

        {/* BOTÓN SIGUIENTE */}
        <button 
          onClick={siguiente}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-zinc-900/80 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all shadow-lg"
          title="Siguiente"
        >
          ❯
        </button>

        {/* MÁSCARA DEL SLIDER */}
        <div className="overflow-hidden py-6 px-2">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-6"
            style={{ transform: `translateX(-${indiceActual * 100}%)` }}
          >
            {secciones.map((sec) => (
              <div
                key={sec.id}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div
                  onClick={() => setSeccionSeleccionada(sec)}
                  className="w-full max-w-md h-72 sm:h-80 bg-zinc-900/90 border-2 border-amber-500/40 hover:border-amber-400 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.25)] flex flex-col justify-between text-center items-center group"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <h3 className="text-3xl sm:text-5xl font-extrabold uppercase text-white group-hover:text-amber-400 transition-colors tracking-wide text-center">
                      {sec.titulo}
                    </h3>
                  </div>

                  <div className="w-full pt-4 border-t border-zinc-800/80 flex items-center justify-between text-sm sm:text-base font-bold text-amber-400 group-hover:text-amber-300">
                    <span>Ver sección completa</span>
                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDICADORES DE PUNTOS */}
        <div className="flex justify-center gap-3 mt-6">
          {secciones.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndiceActual(idx)}
              className={`h-3 rounded-full transition-all duration-500 ${
                indiceActual === idx 
                  ? 'w-10 bg-amber-400' 
                  : 'w-3 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* MODAL CON DETALLES Y LOGO */}
      {seccionSeleccionada && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto font-varela">
          
          <div className="bg-white text-zinc-900 max-w-6xl w-full rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-amber-200/60 relative overflow-hidden my-auto space-y-10">
            
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500"></div>

            <div className="flex justify-between items-center border-b border-zinc-100 pb-6">
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 block mb-1">
                  Dirección de Patrimonio Histórico
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wide text-zinc-900">
                  {seccionSeleccionada.titulo}
                </h1>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <img 
                  src="/images/images.png" 
                  alt="Logo Patrimonio" 
                  className="h-14 sm:h-20 w-auto object-contain drop-shadow-sm"
                />
                <button
                  onClick={() => setSeccionSeleccionada(null)}
                  className="w-12 h-12 rounded-2xl bg-zinc-100 hover:bg-orange-500 hover:text-white text-zinc-600 font-bold flex items-center justify-center text-2xl transition-all shadow-sm"
                  title="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border-l-8 border-orange-500 rounded-r-2xl shadow-sm text-center sm:text-left">
              <p className="text-xl sm:text-3xl font-extrabold text-zinc-800 italic leading-relaxed">
                "{seccionSeleccionada.resumen}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seccionSeleccionada.detalles.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-6 bg-gradient-to-br from-zinc-50 to-orange-50/30 border-l-4 border-amber-500 rounded-2xl flex items-start gap-5 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-zinc-800 text-base sm:text-xl font-bold leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <img 
                  src="/images/escudo.png" 
                  alt="Escudo de Potosí" 
                  className="h-20 w-auto object-contain drop-shadow-sm" 
                />
                <div className="text-sm sm:text-base font-extrabold text-zinc-700 uppercase tracking-wide leading-tight">
                  Gobierno Autónomo<br />Municipal de Potosí
                </div>
              </div>

              <button
                onClick={() => setSeccionSeleccionada(null)}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base uppercase tracking-widest transition-all transform hover:scale-105 shadow-md hover:shadow-orange-500/20"
              >
                Cerrar vista
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}