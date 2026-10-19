import React from "react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-zinc-950 px-0 pb-10 pt-24 text-white sm:pt-28 md:pt-32 xl:pt-36 md:pb-12"
    >
      {/* 1. IMAGEN DE FONDO */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/1.jpeg"
          alt="Vista panorámica de la ciudad histórica de Potosí"
          className="h-full w-full scale-100 object-cover opacity-80 contrast-110 transition-transform duration-700"
        />

        {/* Oscurecimiento de la imagen */}

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40" />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2. FRANJA INSTITUCIONAL ANIMADA */}

     {/* 2. FRANJA INSTITUCIONAL ANIMADA */}

<div className="relative z-10 mb-4 w-full overflow-hidden border-y border-amber-500/40 bg-black/70 py-2 shadow-lg backdrop-blur-md sm:py-3 md:mb-5">

  <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap text-sm font-medium uppercase tracking-[0.10em] text-white sm:gap-8 sm:text-base sm:tracking-[0.12em] md:gap-10 md:text-lg">

    <span>
      « Vale un Potosí » — Patrimonio Cultural de la Humanidad
    </span>

    <span className="text-base text-amber-400 sm:text-xl">
      ✦
    </span>

    <span>
      Dirección de Patrimonio Histórico
    </span>

    <span className="text-base text-amber-400 sm:text-xl">
      ✦
    </span>

    <span>
      Preservación del Legado Colonial y Arquitectónico
    </span>

    <span className="text-base text-amber-400 sm:text-xl">
      ✦
    </span>

    <span>
      « Vale un Potosí » — Patrimonio Cultural de la Humanidad
    </span>

    <span className="text-base text-amber-400 sm:text-xl">
      ✦
    </span>

    <span>
      Dirección de Patrimonio Histórico
    </span>

    <span className="text-base text-amber-400 sm:text-xl">
      ✦
    </span>

    <span>
      Preservación del Legado Colonial y Arquitectónico
    </span>

  </div>

</div>

      {/* 3. CONTENIDO PRINCIPAL */}

      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[1800px] flex-col items-center justify-center px-4 py-8 text-center sm:px-8 md:px-12">

        {/* IDENTIFICACIÓN DEL PORTAL */}

        <span className="mb-7 inline-block rounded-full border border-amber-500/60 bg-black/80 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 shadow-xl backdrop-blur-md sm:mb-9 sm:px-7 sm:text-sm sm:tracking-[0.3em] md:mb-10 md:text-base">
          Portal Oficial de Difusión y Gestión
        </span>

        {/* TÍTULO PRINCIPAL */}

        <h1 className="mb-7 w-full font-['Bebas_Neue'] font-normal uppercase leading-[0.86] sm:mb-9 md:mb-10">

          {/* PATRIMONIO */}

          <span
            className="block text-[clamp(3.3rem,8.8vw,11rem)] tracking-[0.055em] text-white sm:tracking-[0.09em] lg:tracking-[0.12em]"
            style={{
              textShadow: `
                1px 1px 0px #000,
                3px 3px 0px rgba(0,0,0,0.8),
                5px 5px 10px rgba(0,0,0,0.9),
                0px 10px 20px rgba(0,0,0,0.95)
              `,
            }}
          >
            PATRIMONIO
          </span>

          {/* HISTÓRICO */}

          <span
            className="block text-[clamp(3.3rem,8.8vw,11rem)] tracking-[0.055em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-500 to-amber-600 drop-shadow-[0_12px_15px_rgba(0,0,0,0.9)] sm:tracking-[0.09em] lg:tracking-[0.12em]"
            style={{
              WebkitTextStroke:
                "1px rgba(255, 255, 255, 0.2)",
            }}
          >
            HISTÓRICO
          </span>

        </h1>

        {/* IDENTIFICACIÓN INSTITUCIONAL */}

        <p className="mx-auto max-w-6xl text-xl font-extrabold uppercase leading-relaxed tracking-wide text-gray-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] sm:text-2xl md:text-3xl lg:text-4xl">
          SECRETARÍA DE DESARROLLO TURÍSTICO, CULTURAL Y PATRIMONIAL
        </p>

      </div>

      {/* ESPACIO INFERIOR */}

      <div className="relative z-10 h-2" />

    </section>
  );
}