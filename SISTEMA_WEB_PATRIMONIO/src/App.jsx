import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MisionVision from './components/MisionVision';
import Normativas from './components/Normativas';
import Footer from './components/Footer';
import Tramites from './components/Tramites';
import TramiteDetalle from './components/TramiteDetalle';

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

function ControlDesplazamiento() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const element = hash
        ? document.getElementById(hash.slice(1))
        : null;

      if (element) {
        element.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

function PaginaPrincipal() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <MisionVision />
        <Normativas />
        <Tramites />
      </main>

      <Footer />
    </div>
  );
}

function PaginaNoEncontrada() {
  return (
    <main className="min-h-screen bg-stone-100 text-zinc-900 p-10">
      <h1 className="text-3xl font-bold mb-6">
        Página no encontrada
      </h1>

      <Link to="/" className="text-orange-800 underline">
        Volver al inicio
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ControlDesplazamiento />

        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />

          <Route
            path="/tramites/:tramiteId"
            element={<TramiteDetalle />}
          />

          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}