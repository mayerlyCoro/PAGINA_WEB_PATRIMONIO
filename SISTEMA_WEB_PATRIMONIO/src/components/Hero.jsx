import React from "react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen text-white overflow-hidden flex flex-col justify-between pt-36 md:pt-48 pb-12 px-6 md:px-12 bg-zinc-950">
      
      {/* 1. FONDO HD APUNTANDO A /images/1.jpeg */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/1.jpeg" 
          alt="Dirección de Patrimonio Histórico de Potosí"
          className="w-full h-full object-cover opacity-80 filter brightness-105 contrast-110 scale-100 transition-all duration-700"
        />
        {/* Degradado oscuro para resaltar el texto 3D */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40"></div>
      </div>

      {/* 2. CINTA MARQUEE INSTITUCIONAL */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border-y border-amber-500/30 py-3 overflow-hidden w-full mb-6">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm md:text-base tracking-widest text-white uppercase font-light">
          <span>« Vale un Potosí » — Patrimonio Cultural de la Humanidad</span>
          <span className="text-amber-400">✦</span>
          <span>Dirección de Patrimonio Histórico</span>
          <span className="text-amber-400">✦</span>
          <span>Preservación del Legado Colonial y Arquitectónico</span>
          <span className="text-amber-400">✦</span>
          <span>« Vale un Potosí » — Patrimonio Cultural de la Humanidad</span>
          <span className="text-amber-400">✦</span>
          <span>Dirección de Patrimonio Histórico</span>
        </div>
      </div>

      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center my-auto flex flex-col items-center justify-center py-6">
        
        {/* Etiqueta Superior */}
        <span className="inline-block text-xs md:text-sm font-extrabold tracking-[0.3em] uppercase text-amber-400 bg-black/80 border border-amber-500/50 px-6 py-2.5 rounded-full mb-8 backdrop-blur-md shadow-xl">
          Portal Oficial de Difusión y Gestión
        </span>

        {/* TÍTULO PRINCIPAL CON FUENTE BEBAS NEUE Y ESTILO 3D/4D */}
        <h1 className="font-['Bebas_Neue'] uppercase leading-[0.85] mb-6">
          
          {/* PATRIMONIO: Blanco, ancho y con multicapa de sombras 3D */}
          <span 
            className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-[0.12em] text-white font-normal"
            style={{
              textShadow: `
                1px 1px 0px #000,
                3px 3px 0px rgba(0,0,0,0.8),
                5px 5px 10px rgba(0,0,0,0.9),
                0px 10px 20px rgba(0,0,0,0.95)
              `
            }}
          >
            PATRIMONIO
          </span>

          {/* HISTÓRICO: Degradado de 3 colores con sombras 4D */}
          <span 
            className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-500 to-amber-600 font-normal filter drop-shadow-[0_12px_15px_rgba(0,0,0,0.9)]"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)'
            }}
          >
            HISTÓRICO
          </span>
        </h1>
        
        {/* SUBTÍTULO INSTITUCIONAL MÁS GRANDE Y EN NEGRITA */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 tracking-wide font-bold max-w-4xl leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
           Preservando la historia, arquitectura y cultura de Potosí.
        </p>

      </div>

      <div className="mb-2"></div>
    </section>
  );
}