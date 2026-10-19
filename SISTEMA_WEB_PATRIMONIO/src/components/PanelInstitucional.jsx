import { useState } from 'react';

import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material';

import MisionVision from './MisionVision';

// ICONO DE LAS TRES LÍNEAS HORIZONTALES

function IconoMenu() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

// ICONO PARA CERRAR EL PANEL

function IconoCerrar() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

// COMPONENTE PRINCIPAL

export default function PanelInstitucional() {
  const [abierto, setAbierto] = useState(false);

  const cerrarPanel = () => {
    setAbierto(false);
  };

  return (
    <>
      {/* BOTÓN LATERAL INSTITUCIÓN */}

      <Button
        type="button"
        aria-label="Abrir información institucional"
        aria-haspopup="dialog"
        aria-expanded={abierto}
        onClick={() => setAbierto(true)}
        sx={{
          position: 'fixed',

          top: {
            xs: '160px',
            sm: '176px',
            md: '192px',
            xl: '208px',
          },

          right: 0,
          transform: 'none',
          zIndex: 1200,

          minWidth: 0,

          minHeight: {
            xs: 58,
            sm: 64,
          },

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,

          px: {
            xs: 1.8,
            sm: 2.2,
            md: 2.5,
          },

          py: 1.5,

          borderRadius: '14px 0 0 14px',

          border: '1px solid rgba(255, 206, 107, 0.8)',
          borderRight: 'none',

          background:
            'linear-gradient(145deg, #7d1e2b 0%, #a63629 65%, #ab5a15 100%)',

          color: '#ffffff',

          boxShadow:
            '-3px 5px 20px rgba(38, 12, 11, 0.3)',

          fontSize: {
            xs: '0.82rem',
            sm: '0.9rem',
            md: '0.98rem',
          },

          fontWeight: 900,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',

          transition:
            'background 200ms ease, box-shadow 200ms ease',

          '&:hover': {
            background:
              'linear-gradient(145deg, #681825 0%, #942d22 65%, #995010 100%)',
          },

          '&:focus-visible': {
            outline: '3px solid #f3bc4d',
            outlineOffset: '2px',
          },
        }}
      >
        <IconoMenu />

        <Box component="span">
          Institución
        </Box>
      </Button>

      {/* PANEL DESPLEGABLE */}

      <Drawer
        anchor="right"
        open={abierto}
        onClose={cerrarPanel}
        slotProps={{
          paper: {
            role: 'dialog',
            'aria-modal': true,
            'aria-labelledby': 'titulo-panel-institucional',

            sx: {
              // PANEL MÁS ANCHO

              width: {
                xs: '100%',
                sm: '96vw',
                md: 'min(1100px, 94vw)',
                xl: 'min(1250px, 88vw)',
              },

              maxWidth: '100vw',
              height: '100%',

              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',

              backgroundColor: '#f7f3ec',
            },
          },
        }}
      >
        {/* CABECERA DEL PANEL */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,

            flexShrink: 0,

            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            py: {
              xs: 2,
              sm: 2.3,
            },

            background:
              'linear-gradient(105deg, #681b29 0%, #8f2928 70%, #a94c16 100%)',

            color: '#ffffff',

            borderBottom: '4px solid #efa532',
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="p"
              sx={{
                fontSize: {
                  xs: '0.75rem',
                  sm: '0.82rem',
                  md: '0.9rem',
                },

                letterSpacing: '0.1em',
                fontWeight: 800,
                color: '#ffdc8e',
                lineHeight: 1.6,
              }}
            >
              DIRECCIÓN DE PATRIMONIO HISTÓRICO
            </Typography>

            <Typography
              component="h2"
              id="titulo-panel-institucional"
              sx={{
                mt: 0.4,

                fontSize: {
                  xs: '1.2rem',
                  sm: '1.5rem',
                  md: '1.8rem',
                },

                fontWeight: 900,
                lineHeight: 1.3,
                color: '#ffffff',
              }}
            >
              Identidad institucional
            </Typography>
          </Box>

          {/* BOTÓN CERRAR */}

          <IconButton
            type="button"
            aria-label="Cerrar información institucional"
            onClick={cerrarPanel}
            sx={{
              flexShrink: 0,

              width: 48,
              height: 48,

              color: '#ffffff',

              border: '1px solid rgba(255,255,255,0.45)',
              borderRadius: '12px',

              '&:hover': {
                backgroundColor:
                  'rgba(255,255,255,0.14)',
              },

              '&:focus-visible': {
                outline: '3px solid #f3bc4d',
                outlineOffset: '2px',
              },
            }}
          >
            <IconoCerrar />
          </IconButton>
        </Box>

        {/* CONTENIDO INSTITUCIONAL */}

        <Box
          role="region"
          aria-label="Misión, visión, acciones y políticas institucionales"
          sx={{
            flex: 1,
            minHeight: 0,

            overflowY: 'auto',
            overflowX: 'hidden',

            overscrollBehavior: 'contain',
          }}
        >
          <MisionVision />
        </Box>
      </Drawer>
    </>
  );
}