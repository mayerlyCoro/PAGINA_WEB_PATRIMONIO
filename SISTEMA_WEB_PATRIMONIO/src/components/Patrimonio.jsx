
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

// ============================================================
// INFORMACIÓN DE LAS ÁREAS PATRIMONIALES
// ============================================================

const areasPatrimoniales = [
  {
    id: "historia-cultura",
    categoria: "MEMORIA DE LA VILLA IMPERIAL",
    titulo: "HISTORIA Y CULTURA",
    descripcion:
      "Descubre la historia de Potosí, sus tradiciones, sus espacios históricos y el legado cultural que forma parte de nuestra identidad.",
    imagen: "/images/1.jpeg",
  },
  {
    id: "arquitectura",
    categoria: "LEGADO ARQUITECTÓNICO",
    titulo: "ARQUITECTURA PATRIMONIAL",
    descripcion:
      "Conoce la riqueza arquitectónica de la ciudad, sus edificaciones coloniales, templos, balcones y espacios que conservan nuestra memoria.",
    imagen: "/images/potosi_patrimonio.jpeg",
  },
  {
    id: "patrimonio-industrial",
    categoria: "HISTORIA MINERA",
    titulo: "PATRIMONIO INDUSTRIAL",
    descripcion:
      "Explora la importancia histórica del Cerro Rico y los elementos del legado minero e industrial vinculados al desarrollo de la Villa Imperial.",
    imagen: "/images/cerro_hero.jpg",
  },
];

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function Patrimonio() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      id="patrimonio"
      aria-labelledby="patrimonio-titulo"
      className="
        relative
        w-full
        scroll-mt-20
        overflow-hidden
        bg-[#F6F2EB]
        px-5
        pb-24
        pt-20
        text-[#20352E]
        sm:px-8
        lg:pt-24
      "
    >
      {/* ======================================================
          DECORACIÓN SUAVE DEL FONDO
          ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-96
          w-96
          rounded-full
          bg-amber-200/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-96
          w-96
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ====================================================
            ENCABEZADO PRINCIPAL
            ==================================================== */}

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reducirMovimiento ? 0 : 0.75,
          }}
          className="mb-14 text-center"
        >
          {/* SUBTÍTULO */}

          <p
            className="
              mb-5
              text-xs
              font-extrabold
              uppercase
              tracking-[0.25em]
              text-[#B94A14]
              sm:text-sm
            "
          >
            DIRECCIÓN DE PATRIMONIO HISTÓRICO
          </p>

          {/* TÍTULO */}

          <h2
            id="patrimonio-titulo"
            className="
              font-['Bebas_Neue']
              text-[clamp(3rem,6vw,6.2rem)]
              uppercase
              leading-[0.95]
              tracking-wide
            "
          >
            NUESTRO PATRIMONIO,

            <span className="mt-2 block text-[#B65723]">
              NUESTRA IDENTIDAD
            </span>
          </h2>

          {/* LÍNEA DECORATIVA */}

          <div
            className="
              mx-auto
              my-7
              h-[3px]
              w-24
              rounded-full
              bg-gradient-to-r
              from-red-600
              via-orange-500
              to-amber-400
            "
          />

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              max-w-3xl
              text-base
              leading-relaxed
              text-stone-600
              sm:text-lg
            "
          >
            La historia, la cultura y la arquitectura de
            Potosí constituyen un legado que debemos
            conocer, valorar y preservar para las futuras
            generaciones.
          </p>
        </motion.div>

        {/* ====================================================
            TRES TARJETAS PATRIMONIALES
            ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {areasPatrimoniales.map((area, index) => (
            <motion.article
              key={area.id}
              initial={
                reducirMovimiento
                  ? false
                  : {
                      opacity: 0,
                      y: 45,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reducirMovimiento ? 0 : 0.65,
                delay: reducirMovimiento ? 0 : index * 0.12,
              }}
              className="
                group
                relative
                min-h-[440px]
                overflow-hidden
                rounded-2xl
                bg-[#11231E]
                text-white
                shadow-[0_12px_32px_rgba(35,29,20,0.15)]
                sm:min-h-[500px]
                lg:min-h-[540px]
              "
            >
              {/* ==================================================
                  FOTOGRAFÍA DE LA TARJETA
                  ================================================== */}

              <motion.img
                src={area.imagen}
                alt={area.titulo}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
                initial={false}
                whileHover={
                  reducirMovimiento
                    ? undefined
                    : { scale: 1.08 }
                }
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                }}
              />

              {/* ==================================================
                  SOMBRA SOBRE LA FOTOGRAFÍA
                  ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/95
                  via-black/40
                  to-black/10
                "
              />

              {/* ==================================================
                  CONTENIDO INFERIOR
                  ================================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  flex
                  flex-col
                  p-6
                  sm:p-7
                  lg:p-8
                "
              >
                {/* CATEGORÍA */}

                <p
                  className="
                    mb-3
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[0.16em]
                    text-amber-300
                  "
                >
                  {area.categoria}
                </p>

                {/* TÍTULO */}

                <h3
                  className="
                    mb-4
                    font-['Bebas_Neue']
                    text-[clamp(2.2rem,3vw,3.4rem)]
                    uppercase
                    leading-[0.95]
                    tracking-wide
                    text-white
                  "
                >
                  {area.titulo}
                </h3>

                {/* LÍNEA DECORATIVA */}

                <div
                  className="
                    mb-4
                    h-[2px]
                    w-14
                    bg-amber-400
                  "
                />

                {/* DESCRIPCIÓN */}

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-white/90
                    lg:text-[15px]
                  "
                >
                  {area.descripcion}
                </p>
              </div>

              {/* ==================================================
                  BORDE ANIMADO AL PASAR EL CURSOR
                  ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  border-2
                  border-amber-400/0
                  transition-colors
                  duration-500
                  group-hover:border-amber-400/80
                "
              />
            </motion.article>
          ))}
        </div>

        {/* ====================================================
            MEMORIA VISUAL DE POTOSÍ
            ==================================================== */}

        <motion.div
          initial={
            reducirMovimiento
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reducirMovimiento ? 0 : 0.75,
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-2xl
            px-6
            py-12
            text-white
            shadow-[0_16px_40px_rgba(134,55,17,0.18)]
            sm:px-10
            lg:px-14
          "
          style={{
            background:
              "linear-gradient(110deg, #8D1822 0%, #C8331D 32%, #EB681B 67%, #F4AD32 100%)",
          }}
        >
          {/* ==================================================
              EFECTOS DECORATIVOS DEL DEGRADADO
              ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-72
              w-72
              rounded-full
              bg-yellow-200/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              left-10
              h-52
              w-52
              rounded-full
              bg-red-950/20
              blur-3xl
            "
          />

          {/* SOMBRA LIGERA PARA EL CONTRASTE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-black/15
              via-transparent
              to-transparent
            "
          />

          {/* ==================================================
              CONTENIDO DEL RECUADRO
              ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-start
              justify-between
              gap-8
              lg:flex-row
              lg:items-center
            "
          >
            {/* TEXTOS */}

            <div className="max-w-3xl">

              {/* SUBTÍTULO */}

              <p
                className="
                  mb-4
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-amber-100
                "
              >
                MEMORIA HISTÓRICA DE POTOSÍ
              </p>

              {/* TÍTULO PRINCIPAL */}

              <h3
                className="
                  mb-5
                  font-['Bebas_Neue']
                  text-[clamp(2.8rem,5vw,5rem)]
                  uppercase
                  leading-[0.95]
                  tracking-wide
                  text-white
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]
                "
              >
                MEMORIA VISUAL

                <span className="mt-1 block text-[#FFE69A]">
                  DE POTOSÍ
                </span>
              </h3>

              {/* DESCRIPCIÓN */}

              <p
                className="
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-white
                  sm:text-lg
                "
              >
                Explora fotografías históricas, procesos
                de rehabilitación patrimonial y balcones
                coloniales que conservan la identidad de
                la Villa Imperial.
              </p>
            </div>

            {/* ==================================================
                BOTÓN EXPLORAR NUESTRA HISTORIA
                ================================================== */}

            <Link
              to="/informacion"
              className="
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-white/40
                bg-[#233A32]
                px-7
                py-4
                text-sm
                font-extrabold
                uppercase
                tracking-wide
                text-white
                shadow-[0_8px_20px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#152A23]
                hover:shadow-[0_12px_25px_rgba(0,0,0,0.25)]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-white
              "
            >
              EXPLORAR NUESTRA HISTORIA

              <span
                aria-hidden="true"
                className="text-xl"
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
