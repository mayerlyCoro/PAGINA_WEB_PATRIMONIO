import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tramites } from '../data/tramites';

export default function TramiteDetalle() {
  const { tramiteId } = useParams();
  const tramite = tramites.find((item) => item.id === tramiteId);

  if (!tramite) {
    return (
      <Box sx={{ p: 5, bgcolor: '#f5f2ec', minHeight: '100vh' }}>
        <Typography component="h1" variant="h4" sx={{ color: '#272522' }}>
          Trámite no encontrado
        </Typography>

        <Button component={Link} to="/#tramites" sx={{ mt: 3 }}>
          Volver a trámites
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f5f2ec', color: '#272522', minHeight: '100vh' }}>
      <Box
        component="header"
        sx={{
          bgcolor: '#fff',
          borderBottom: '1px solid #e5dfd5',
          px: 3,
          py: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: 1000,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box
            component={Link}
            to="/#inicio"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/images/images.png"
              alt="Dirección de Patrimonio Histórico"
              sx={{ height: 64, width: 'auto' }}
            />

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 14, sm: 17 },
              }}
            >
              Patrimonio Histórico
              <br />
              Potosí
            </Typography>
          </Box>

          <Box
            component="img"
            src="/images/escudo.png"
            alt="Escudo de Potosí"
            sx={{ height: 60, width: 'auto' }}
          />
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          px: { xs: 3, md: 4 },
          py: 5,
        }}
      >
        <Button
          component={Link}
          to="/#tramites"
          sx={{
            color: '#a94c16',
            fontWeight: 700,
            mb: 4,
          }}
        >
          Volver a trámites
        </Button>

        <Typography
          sx={{
            color: '#a94c16',
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontSize: 13,
            fontWeight: 700,
            mb: 2,
          }}
        >
          Requisitos del trámite
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 32, md: 46 },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          {tramite.titulo}
        </Typography>

        <Typography sx={{ color: '#615c55', fontSize: 18, mb: 2 }}>
          {tramite.descripcion}
        </Typography>

        <Typography sx={{ color: '#756e65', fontSize: 14, mb: 4 }}>
          {tramite.referencia}
        </Typography>

        {tramite.pendiente && (
          <Box
            sx={{
              p: 3,
              mb: 4,
              bgcolor: '#fff4df',
              borderLeft: '4px solid #b87818',
              borderRadius: 1,
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 1 }}>
              Transcripción pendiente de completar
            </Typography>

            <Typography sx={{ lineHeight: 1.7 }}>
              {tramite.pendiente}
            </Typography>
          </Box>
        )}

        {tramite.bloques.map((bloque, index) => (
          <Box
            component="section"
            key={bloque.titulo}
            aria-labelledby={`bloque-${index}`}
            sx={{
              bgcolor: '#fff',
              border: '1px solid #e5dfd5',
              borderRadius: 2,
              p: { xs: 3, md: 4 },
              mb: 3,
            }}
          >
            <Typography
              id={`bloque-${index}`}
              component="h2"
              sx={{
                fontSize: { xs: 23, md: 27 },
                fontWeight: 600,
                mb: 2,
              }}
            >
              {bloque.titulo}
            </Typography>

            {bloque.introduccion && (
              <Typography sx={{ color: '#615c55', lineHeight: 1.8, mb: 3 }}>
                {bloque.introduccion}
              </Typography>
            )}

            {bloque.texto && (
              <Typography sx={{ color: '#49443d', lineHeight: 1.8 }}>
                {bloque.texto}
              </Typography>
            )}

            {bloque.items && (
              <Box
                component="ol"
                sx={{
                  m: 0,
                  pl: 3,
                  '& li': {
                    pl: 1,
                    mb: 2,
                    lineHeight: 1.8,
                    color: '#49443d',
                  },
                  '& li:last-child': { mb: 0 },
                  '& li::marker': {
                    color: '#a94c16',
                    fontWeight: 700,
                  },
                }}
              >
                {bloque.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Box>
            )}
          </Box>
        ))}

        <Button
          component={Link}
          to="/#tramites"
          variant="outlined"
          sx={{
            mt: 2,
            color: '#a94c16',
            borderColor: '#a94c16',
          }}
        >
          Volver a todos los trámites
        </Button>
      </Box>
    </Box>
  );
}