
import { useEffect } from "react";

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
// TEMA
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
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    let timeout;

    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });

        return;
      }

      const desplazar = () => {
        const id = decodeURIComponent(hash.slice(1));
        const elemento = document.getElementById(id);

        if (!elemento) return;

        const reducirMovimiento = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        elemento.scrollIntoView({
          block: "start",
          behavior: reducirMovimiento
            ? "instant"
            : "smooth",
        });
      };

      desplazar();
      timeout = window.setTimeout(desplazar, 150);
    });

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

  // Comprobar si estamos en Memorial Potosí.

  const esMemorial = pathname === "/informacion";

  // Identificar si estamos dentro de una galería válida.

  const parametros = new URLSearchParams(search);
  const galeria = parametros.get("galeria");

  const galeriasValidas = [
    "antano",
    "prahp",
    "balcones",
  ];

  const esGaleriaPantallaCompleta =
    esMemorial && galeriasValidas.includes(galeria);

  // ==========================================================
  // GALERÍAS A PANTALLA COMPLETA
  // ==========================================================

  if (esGaleriaPantallaCompleta) {
    return (
      <div className="min-h-[100svh] bg-black">
        {/* SIN NAVBAR */}
        {/* SIN PANEL INSTITUCIONAL */}
        {/* SIN FOOTER */}

        <Outlet />
      </div>
    );
  }

  // ==========================================================
  // TODAS LAS DEMÁS PÁGINAS
  // ==========================================================

  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased">

      {/* NAVBAR */}

      <Navbar />

      {/* PANEL INSTITUCIONAL:
          SE OCULTA EN LA PORTADA DE MEMORIAL */}

      {!esMemorial && <PanelInstitucional />}

      {/* CONTENIDO PRINCIPAL */}

      <Outlet />

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

// ============================================================
// PÁGINA PRINCIPAL
// ============================================================

function PaginaPrincipal() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* 1. HERO */}

      <Hero />

      {/* 2. PATRIMONIO */}

      <Patrimonio />

      {/* 3. NORMATIVAS */}

      <Normativas />

      {/* 4. TRÁMITES */}

      <Tramites />

      {/* 5. PLANES Y PROGRAMAS */}

      <div id="planes" className="scroll-mt-20">
        <PlanesProgramas />
      </div>

      {/* 6. ESLOGAN PATRIMONIAL */}

      <SloganPatrimonio />

    </main>
  );
}

// ============================================================
// PÁGINA NO ENCONTRADA
// ============================================================

function PaginaNoEncontrada() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F7F4EF] px-6 py-32 text-center text-zinc-900">

      <h1 className="mb-5 text-3xl font-extrabold">
        Página no encontrada
      </h1>

      <p className="mb-7 text-stone-600">
        La sección solicitada no está disponible.
      </p>

      <Link
        to="/"
        className="rounded-xl bg-orange-700 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
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

        <ControlDesplazamiento />

        <Routes>
          <Route element={<LayoutPrincipal />}>

            {/* INICIO */}

            <Route
              path="/"
              element={<PaginaPrincipal />}
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

            {/* MEMORIAL POTOSÍ Y GALERÍAS */}

            <Route
              path="/informacion"
              element={<Informacion />}
            />

            {/* NO ENCONTRADA */}

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
