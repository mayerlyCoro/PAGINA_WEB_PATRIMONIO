import { useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';

// COMPONENTES PRINCIPALES

import Navbar from './components/Navbar';

import Hero from './components/Hero';

import PanelInstitucional from './components/PanelInstitucional';

import Normativas from './components/Normativas';

import Tramites from './components/Tramites';

import TramiteDetalle from './components/TramiteDetalle';

import Footer from './components/Footer';

import Informacion from './components/Informacion';


// ============================================================
// CONTROL DE VISIBILIDAD DEL PROTOTIPO DE PATRIMONIO
// ============================================================

// false: mantiene oculta la propuesta anterior.
// true: vuelve a mostrarla si decides recuperarla.

const MOSTRAR_PATRIMONIO = true;


// ============================================================
// TEMA DE MATERIAL UI
// ============================================================

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#a94c16',
    },
  },

  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',

    button: {
      fontWeight: 700,
    },
  },
});


// ============================================================
// CONTROL DEL DESPLAZAMIENTO
// ============================================================

function ControlDesplazamiento() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const elemento = hash
        ? document.getElementById(hash.slice(1))
        : null;

      if (elemento) {
        elemento.scrollIntoView({
          block: 'start',
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash, key]);

  return null;
}


// ============================================================
// PÁGINA PRINCIPAL
// ============================================================

function PaginaPrincipal() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white antialiased selection:bg-amber-500 selection:text-black">

      {/* NAVBAR PRINCIPAL */}

      <Navbar />


      {/* PANEL LATERAL INSTITUCIONAL */}

      <PanelInstitucional />


      {/* CONTENIDO PRINCIPAL */}

      <main>

        <Hero />


        {/* PROTOTIPO DE PATRIMONIO, OCULTO POR AHORA */}

        {MOSTRAR_PATRIMONIO && (
          <div>
            {/* La propuesta se conserva en Patrimonio.jsx. */}
          </div>
        )}


        <Normativas />

        <Tramites />

      </main>


      <Footer />

    </div>
  );
}


// ============================================================
// PÁGINA NO ENCONTRADA
// ============================================================

function PaginaNoEncontrada() {
  return (
    <main className="min-h-screen bg-stone-100 p-10 text-zinc-900">

      <h1 className="mb-6 text-3xl font-bold">
        Página no encontrada
      </h1>

      <Link
        to="/"
        className="text-orange-800 underline"
      >
        Volver al inicio
      </Link>

    </main>
  );
}


// ============================================================
// APLICACIÓN PRINCIPAL
// ============================================================

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>

        <ControlDesplazamiento />

        <Routes>

          {/* PÁGINA PRINCIPAL */}

          <Route
            path="/"
            element={<PaginaPrincipal />}
          />


          {/* NUEVA PÁGINA DE INFORMACIÓN */}

          <Route
            path="/informacion"
            element={<Informacion />}
          />


          {/* DETALLE DE TRÁMITES */}

          <Route
            path="/tramites/:tramiteId"
            element={<TramiteDetalle />}
          />


          {/* RUTAS DESCONOCIDAS */}

          <Route
            path="*"
            element={<PaginaNoEncontrada />}
          />

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  );
}