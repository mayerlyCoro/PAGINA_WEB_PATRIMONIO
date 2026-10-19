import { Link, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { tramites } from '../data/tramites';

// ======================================================
// ICONO DE FLECHA
// ======================================================

function IconoFlecha({ direccion = 'izquierda' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform:
          direccion === 'derecha' ? 'rotate(180deg)' : 'none',
      }}
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

// ======================================================
// BOTÓN PARA VOLVER A TRÁMITES
// ======================================================

function BotonVolver({ outlined = false }) {
  return (
    <Button
      component={Link}
      to="/#tramites"
      startIcon={<IconoFlecha />}
      variant={outlined ? 'outlined' : 'text'}
      sx={{
        minHeight: 46,
        px: 2,
        borderRadius: '10px',
        color: '#a94c16',
        borderColor: '#b96836',
        fontSize: '1rem',
        fontWeight: 800,
        textTransform: 'none',

        '&:hover': {
          bgcolor: '#f8eadf',
          borderColor: '#8d351d',
        },
      }}
    >
      Volver a trámites
    </Button>
  );
}

// ======================================================
// CABECERA INSTITUCIONAL
// ======================================================

function CabeceraInstitucional() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: '#ffffff',
        borderBottom: '1px solid #e5ddd1',
        boxShadow: '0 3px 15px rgba(40, 30, 20, 0.05)',

        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 5,
        },

        py: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1500,
          mx: 'auto',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          gap: {
            xs: 1.5,
            sm: 2.5,
            lg: 4,
          },
        }}
      >
        {/* LOGOTIPO DE PATRIMONIO HISTÓRICO */}

        <Box
          component={Link}
          to="/#inicio"
          aria-label="Volver al inicio de Patrimonio Histórico de Potosí"
          sx={{
            display: 'flex',
            alignItems: 'center',

            gap: {
              xs: 1,
              sm: 2,
            },

            minWidth: 0,
            flexShrink: 0,
            color: '#263b39',
            textDecoration: 'none',
          }}
        >
          <Box
            component="img"
            src="/images/images.png"
            alt="Logotipo de la Dirección de Patrimonio Histórico"
            sx={{
              height: {
                xs: 60,
                sm: 74,
                md: 86,
                lg: 96,
              },

              width: 'auto',

              maxWidth: {
                xs: 58,
                sm: 72,
                md: 82,
                lg: 92,
              },

              objectFit: 'contain',
              flexShrink: 0,
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: '0.86rem',
                  sm: '1.1rem',
                  md: '1.25rem',
                  lg: '1.35rem',
                },

                fontWeight: 900,
                lineHeight: 1.35,
                color: '#263b39',
              }}
            >
              Patrimonio Histórico
            </Typography>

            <Typography
              sx={{
                mt: 0.3,

                fontSize: {
                  xs: '0.82rem',
                  sm: '1rem',
                  md: '1.1rem',
                },

                fontWeight: 600,
                color: '#716b63',
              }}
            >
              Potosí
            </Typography>
          </Box>
        </Box>

        {/* IDENTIDAD DEL GOBIERNO MUNICIPAL */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',

            gap: {
              xs: 1,
              sm: 1.5,
              md: 2.5,
              lg: 3,
            },

            flexShrink: 0,
          }}
        >
          {/* ESCUDO MUNICIPAL */}

          <Box
            component="img"
            src="/images/escudo.png"
            alt="Escudo del Gobierno Autónomo Municipal de Potosí"
            sx={{
              height: {
                xs: 54,
                sm: 68,
                md: 82,
                lg: 92,
              },

              width: 'auto',

              maxWidth: {
                xs: 46,
                sm: 58,
                md: 68,
                lg: 78,
              },

              objectFit: 'contain',
              flexShrink: 0,
            }}
          />

          {/* DENOMINACIÓN MUNICIPAL */}

          <Box
            aria-label="Gobierno Autónomo Municipal de Potosí"
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },

              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  sm: '0.67rem',
                  md: '0.82rem',
                  lg: '0.95rem',
                },

                fontWeight: 700,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                color: '#245b61',
                lineHeight: 1.5,
              }}
            >
              GOBIERNO AUTÓNOMO
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  sm: '0.67rem',
                  md: '0.82rem',
                  lg: '0.95rem',
                },

                fontWeight: 700,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                color: '#245b61',
                lineHeight: 1.5,
              }}
            >
              MUNICIPAL DE
            </Typography>

            <Typography
              sx={{
                mt: 0.2,

                fontSize: {
                  sm: '1.5rem',
                  md: '1.9rem',
                  lg: '2.25rem',
                },

                fontWeight: 950,
                letterSpacing: '-0.055em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                color: '#ef4045',
              }}
            >
              POTOSÍ
            </Typography>
          </Box>

          {/* LOGOTIPO POTOSI.PNG */}

          <Box
            component="img"
            src="/images/potosi.png"
            alt="Logotipo del Gobierno Autónomo Municipal de Potosí, Sigamos Construyendo Juntos"
            sx={{
              height: {
                xs: 54,
                sm: 68,
                md: 82,
                lg: 92,
              },

              width: {
                xs: 94,
                sm: 120,
                md: 145,
                lg: 165,
              },

              objectFit: 'contain',
              objectPosition: 'center',
              flexShrink: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

// ======================================================
// AVISO SIMPLE DE INFORMACIÓN PENDIENTE
// ======================================================

function AvisoPendiente() {
  return (
    <Box
      role="note"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,

        px: {
          xs: 2,
          sm: 2.5,
        },

        py: {
          xs: 1.8,
          sm: 2,
        },

        mb: 4,

        bgcolor: '#fff5e5',
        border: '1px solid #ecd4a5',
        borderLeft: '5px solid #ba741e',
        borderRadius: '12px',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          flexShrink: 0,
          width: 9,
          height: 9,
          borderRadius: '50%',
          bgcolor: '#ba741e',
        }}
      />

      <Typography
        sx={{
          fontSize: {
            xs: '1rem',
            sm: '1.1rem',
          },

          fontWeight: 800,
          color: '#794414',
          lineHeight: 1.6,
        }}
      >
        Información pendiente (faltan fotografías)
      </Typography>
    </Box>
  );
}

// ======================================================
// LISTA DE REQUISITOS CON VIÑETAS NARANJAS
// ======================================================

function ListaRequisitos({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <Box
      component="ul"
      sx={{
        m: 0,

        pl: {
          xs: 2.7,
          sm: 3.2,
        },

        listStyleType: 'disc',

        '& li': {
          pl: {
            xs: 0.7,
            sm: 1,
          },

          mb: {
            xs: 2,
            sm: 2.5,
          },

          fontSize: {
            xs: '1rem',
            sm: '1.1rem',
            md: '1.17rem',
          },

          lineHeight: {
            xs: 1.8,
            sm: 1.9,
          },

          color: '#45443f',
          overflowWrap: 'anywhere',
        },

        '& li::marker': {
          color: '#c56832',
          fontSize: '1.1em',
        },

        '& li:last-child': {
          mb: 0,
        },
      }}
    >
      {items.map((item, index) => (
        <Box
          component="li"
          key={`${index}-${item}`}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}

// ======================================================
// TARJETA DE CADA APARTADO
// ======================================================

function BloqueRequisitos({ bloque, index }) {
  return (
    <Box
      component="section"
      aria-labelledby={`titulo-bloque-${index}`}
      sx={{
        position: 'relative',
        bgcolor: '#ffffff',

        border: '1px solid #e8dfd3',

        borderRadius: {
          xs: '14px',
          sm: '18px',
        },

        overflow: 'hidden',

        boxShadow:
          '0 5px 22px rgba(44, 35, 25, 0.045)',

        mb: 3,
      }}
    >
      {/* DETALLE SUPERIOR */}

      <Box
        aria-hidden="true"
        sx={{
          height: 4,
          width: '100%',

          background:
            'linear-gradient(90deg, #a94427 0%, #d98236 55%, #d6ac58 100%)',
        }}
      />

      <Box
        sx={{
          p: {
            xs: 2.5,
            sm: 3.5,
            md: 4.5,
          },
        }}
      >
        <Typography
          id={`titulo-bloque-${index}`}
          component="h2"
          sx={{
            mb: 3,

            fontSize: {
              xs: '1.3rem',
              sm: '1.55rem',
              md: '1.8rem',
            },

            fontWeight: 900,
            lineHeight: 1.35,
            color: '#293330',
            overflowWrap: 'anywhere',
          }}
        >
          {bloque.titulo}
        </Typography>

        {/* INTRODUCCIÓN */}

        {bloque.introduccion && (
          <Typography
            sx={{
              mb: 3,

              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.17rem',
              },

              lineHeight: 1.9,
              color: '#5b5952',
              whiteSpace: 'pre-line',
            }}
          >
            {bloque.introduccion}
          </Typography>
        )}

        {/* TEXTO INFORMATIVO */}

        {bloque.texto && (
          <Typography
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.17rem',
              },

              lineHeight: 1.9,
              color: '#45443f',
              whiteSpace: 'pre-line',
            }}
          >
            {bloque.texto}
          </Typography>
        )}

        {/* REQUISITOS CON VIÑETAS */}

        {bloque.items && (
          <ListaRequisitos items={bloque.items} />
        )}
      </Box>
    </Box>
  );
}

// ======================================================
// COMPONENTE PRINCIPAL DE DETALLE DEL TRÁMITE
// ======================================================

export default function TramiteDetalle() {
  const { tramiteId } = useParams();

  const tramite = tramites.find(
    (item) => item.id === tramiteId
  );

  // TRÁMITE NO ENCONTRADO

  if (!tramite) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#f7f3ec',
        }}
      >
        <CabeceraInstitucional />

        <Box
          component="main"
          sx={{
            maxWidth: 1100,
            mx: 'auto',
            px: 3,
            py: 8,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '2.6rem',
              },

              fontWeight: 900,
              color: '#293330',
            }}
          >
            Trámite no encontrado
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: '1.1rem',
              color: '#615c55',
            }}
          >
            No se encontró la información solicitada.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <BotonVolver outlined />
          </Box>
        </Box>
      </Box>
    );
  }

  // PÁGINA DE DETALLE

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f7f4ee',
        color: '#272522',
      }}
    >
      {/* CABECERA INSTITUCIONAL */}

      <CabeceraInstitucional />

      {/* CONTENIDO PRINCIPAL */}

      <Box
        component="main"
        sx={{
          width: '100%',
          maxWidth: 1240,
          mx: 'auto',

          px: {
            xs: 2,
            sm: 4,
            lg: 5,
          },

          py: {
            xs: 3,
            sm: 5,
            md: 6,
          },
        }}
      >
        {/* VOLVER A TRÁMITES */}

        <Box sx={{ mb: 4 }}>
          <BotonVolver />
        </Box>

        {/* ENCABEZADO DEL TRÁMITE */}

        <Box
          component="header"
          sx={{
            mb: {
              xs: 4,
              md: 5,
            },

            maxWidth: 1150,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              mb: 2.5,
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: '#c56832',
              }}
            />

            <Typography
              sx={{
                color: '#a94c16',
                textTransform: 'uppercase',

                letterSpacing: {
                  xs: '0.12em',
                  sm: '0.18em',
                },

                fontSize: {
                  xs: '0.8rem',
                  sm: '0.95rem',
                },

                fontWeight: 900,
              }}
            >
              Trámites y requisitos
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '2.7rem',
                md: '3.2rem',
                lg: '3.6rem',
              },

              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.035em',
              color: '#252d2a',
              overflowWrap: 'anywhere',
              mb: 2.5,
            }}
          >
            {tramite.titulo}
          </Typography>

          <Typography
            sx={{
              maxWidth: 1050,

              fontSize: {
                xs: '1.05rem',
                sm: '1.2rem',
                md: '1.3rem',
              },

              lineHeight: 1.85,
              color: '#5c5a54',
            }}
          >
            {tramite.descripcion}
          </Typography>
        </Box>

        {/* AVISO BREVE SOLO EN LOS TRÁMITES QUE LO REQUIEREN */}

        {tramite.pendiente && <AvisoPendiente />}

        {/* BLOQUES DE REQUISITOS */}

        <Box>
          {tramite.bloques?.map((bloque, index) => (
            <BloqueRequisitos
              key={`${index}-${bloque.titulo}`}
              bloque={bloque}
              index={index}
            />
          ))}
        </Box>

        {/* BOTÓN FINAL */}

        <Box
          sx={{
            mt: 5,
            pt: 4,

            borderTop: '1px solid #e3d9cc',

            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: '1.1rem',
                  sm: '1.25rem',
                },

                fontWeight: 900,
                color: '#293330',
              }}
            >
              ¿Necesitas consultar otro trámite?
            </Typography>

            <Typography
              sx={{
                mt: 0.7,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#69645c',
              }}
            >
              Regresa al listado para consultar los demás
              procedimientos y sus requisitos.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/#tramites"
            variant="contained"
            endIcon={
              <IconoFlecha direccion="derecha" />
            }
            sx={{
              minHeight: 52,
              px: 3,
              borderRadius: '10px',
              bgcolor: '#a94c16',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'none',
              boxShadow: 'none',

              '&:hover': {
                bgcolor: '#87390f',

                boxShadow:
                  '0 5px 15px rgba(80, 34, 12, 0.15)',
              },
            }}
          >
            Ver todos los trámites
          </Button>
        </Box>
      </Box>
    </Box>
  );
}