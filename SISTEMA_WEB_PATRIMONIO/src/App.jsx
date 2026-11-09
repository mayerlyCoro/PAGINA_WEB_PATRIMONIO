import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

// ============================================================
// COMPONENTES PRINCIPALES
// ============================================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Patrimonio from "./components/Patrimonio";
import PanelInstitucional from "./components/PanelInstitucional";

import Normativas from "./components/Normativas";
import NormativaDetalle from "./components/NormativaDetalle";

import Tramites from "./components/Tramites";
import TramiteDetalle from "./components/TramiteDetalle";

import PlanesProgramas from "./components/PlanesProgramas";
import PlanDetalle from "./components/PlanDetalle";

import SloganPatrimonio from "./components/SloganPatrimonio";
import Informacion from "./components/Informacion";
import Footer from "./components/Footer";

// ============================================================
// TEMA MATERIAL UI
// ============================================================

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a94c16",
    },
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",

    button: {
      fontWeight: 700,
    },
  },
});

// ============================================================
// CONTROL DE DESPLAZAMIENTO
// ============================================================

function ControlDesplazamiento() {
  const { pathname, search, hash, key } =
    useLocation();

  useEffect(() => {
    let timeout;

    const frame = window.requestAnimationFrame(
      () => {
        if (!hash) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });

          return;
        }

        const desplazar = () => {
          const id = decodeURIComponent(
            hash.slice(1)
          );

          const elemento =
            document.getElementById(id);

          if (!elemento) return;

          const reducirMovimiento =
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;

          elemento.scrollIntoView({
            block: "start",
            behavior: reducirMovimiento
              ? "auto"
              : "smooth",
          });
        };

        desplazar();

        timeout = window.setTimeout(
          desplazar,
          150
        );
      }
    );

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname, search, hash, key]);

  return null;
}

// ============================================================
// LAYOUT PRINCIPAL
// ============================================================

function LayoutPrincipal() {
  const { pathname, search } = useLocation();
  const [heroVisible, setHeroVisible] = useState(false);

  const esMemorial =
    pathname === "/informacion";

  const parametros =
    new URLSearchParams(search);

  const galeria =
    parametros.get("galeria");

  const galeriasValidas = [
    "antano",
    "prahp",
    "balcones",
  ];

  const esGaleriaPantallaCompleta =
    esMemorial &&
    galeriasValidas.includes(galeria);

  // Panel INSTITUCIÓN solamente visible mientras
  // el Hero principal de Inicio está en pantalla.
  useEffect(() => {
    if (pathname !== "/") {
      setHeroVisible(false);
      return;
    }

    const elemento = document.getElementById(
      "inicio-hero-observador"
    );

    if (!elemento) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-90px 0px 0px 0px",
      }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, [pathname]);

  // ==========================================================
  // MEMORIAL A PANTALLA COMPLETA
  // ==========================================================

  if (esGaleriaPantallaCompleta) {
    return (
      <div className="min-h-[100svh] bg-black">
        <Outlet />
      </div>
    );
  }

  // ==========================================================
  // PÁGINAS NORMALES
  // ==========================================================

  return (
    <div
      className="
        min-h-screen
        bg-zinc-950
        font-sans
        antialiased
      "
    >
      {/* NAVBAR */}

      <Navbar />

      {/* PANEL INSTITUCIONAL SOLO EN EL HERO DE INICIO */}

      {pathname === "/" && heroVisible && (
        <PanelInstitucional />
      )}

      {/* CONTENIDO PRINCIPAL */}

      <Outlet />

      {/* FOOTER COMPACTO ORIGINAL */}

      <div className="footer-patrimonio-compacto">
        <Footer />
      </div>

      <style>
        {`
          .footer-patrimonio-compacto footer {
            font-size: 0.9rem;
          }

          .footer-patrimonio-compacto footer > div {
            padding-top: 1.5rem !important;
            padding-bottom: 1rem !important;
          }

          .footer-patrimonio-compacto footer img {
            max-height: 58px;
            width: auto;
            object-fit: contain;
          }

          .footer-patrimonio-compacto footer h2,
          .footer-patrimonio-compacto footer h3,
          .footer-patrimonio-compacto footer h4 {
            margin-bottom: 0.65rem !important;
          }

          .footer-patrimonio-compacto footer p {
            line-height: 1.55;
          }

          .footer-patrimonio-compacto footer ul {
            row-gap: 0.45rem;
          }

          @media (max-width: 768px) {
            .footer-patrimonio-compacto footer > div {
              padding-top: 1.25rem !important;
              padding-bottom: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

// ============================================================
// PÁGINA PRINCIPAL
// ============================================================

function PaginaPrincipal() {
  return (
    <main
      className="
        min-h-screen
        bg-zinc-950
        text-white
      "
    >
      {/* 1. HERO */}

      <div id="inicio-hero-observador">
        <Hero />
      </div>

      {/* 2. PATRIMONIO — PORTADA VERDE */}

      <Patrimonio vista="portada" />

      {/* 3. NORMATIVAS */}

      <Normativas />

      {/* 4. TRÁMITES */}

      <Tramites />

      {/* 5. PLANES Y PROGRAMAS */}

      <div
        id="planes"
        className="scroll-mt-20"
      >
        <PlanesProgramas />
      </div>

      {/* 6. ESLOGAN */}

      <SloganPatrimonio />
    </main>
  );
}

// ============================================================
// PÁGINA DE COMPONENTES PATRIMONIALES
// ============================================================

function PaginaComponentesPatrimoniales() {
  return (
    <Patrimonio vista="componentes" />
  );
}

// ============================================================
// PÁGINA NO ENCONTRADA
// ============================================================

function PaginaNoEncontrada() {
  return (
    <main
      className="
        flex min-h-screen
        flex-col
        items-center justify-center
        bg-[#F7F4EF]
        px-6 py-32
        text-center
        text-zinc-900
      "
    >
      <h1
        className="
          mb-5 text-3xl
          font-extrabold
        "
      >
        Página no encontrada
      </h1>

      <p
        className="
          mb-7
          text-stone-600
        "
      >
        La sección solicitada no está disponible.
      </p>

      <Link
        to="/"
        className="
          rounded-xl
          bg-orange-700
          px-6 py-3
          font-bold
          text-white
          transition
          hover:bg-orange-600
        "
      >
        VOLVER AL INICIO
      </Link>
    </main>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* DESPLAZAMIENTO */}

        <ControlDesplazamiento />

        {/* RUTAS */}

        <Routes>
          <Route
            element={<LayoutPrincipal />}
          >
            {/* INICIO */}

            <Route
              path="/"
              element={<PaginaPrincipal />}
            />

            {/* CINCO COMPONENTES */}

            <Route
              path="/patrimonio/componentes"
              element={
                <PaginaComponentesPatrimoniales />
              }
            />

            {/* NORMATIVAS */}

            <Route
              path="/normativas/:normativaId"
              element={<NormativaDetalle />}
            />

            {/* TRÁMITES */}

            <Route
              path="/tramites/:tramiteId"
              element={<TramiteDetalle />}
            />

            {/* PLANES */}

            <Route
              path="/planes/:planId"
              element={<PlanDetalle />}
            />

            {/* MEMORIAL POTOSÍ */}

            <Route
              path="/informacion"
              element={<Informacion />}
            />

            {/* PÁGINA NO ENCONTRADA */}

            <Route
              path="*"
              element={<PaginaNoEncontrada />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
