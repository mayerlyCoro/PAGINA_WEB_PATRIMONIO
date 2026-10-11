import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tramites } from '../data/tramites';

export default function Tramites() {
  return (
    <Box
      component="section"
      id="tramites"
      aria-labelledby="tramites-titulo"
      sx={{
        bgcolor: '#f5f2ec',
        color: '#272522',
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 6 },
        scrollMarginTop: { xs: '96px', md: '176px' },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          sx={{
            color: '#a94c16',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
        </Typography>

        <Typography
          id="tramites-titulo"
          component="h2"
          sx={{
            fontSize: { xs: 32, md: 44 },
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Trámites y requisitos
        </Typography>

        <Typography
          sx={{
            color: '#615c55',
            maxWidth: 680,
            fontSize: 17,
            lineHeight: 1.7,
            mb: 5,
          }}
        >
         
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(4, minmax(0, 1fr))',
              lg: 'repeat(6, minmax(0, 1fr))',
            },
            gap: 3,
          }}
        >
          {tramites.map((tramite, index) => (
            <Card
              key={tramite.id}
              component="article"
              sx={{
                gridColumn: {
                  xs: 'auto',
                  sm:
                    tramites.length === 5 && index === 4
                      ? '2 / span 2'
                      : 'span 2',
                  lg:
                    tramites.length === 5 && index === 3
                      ? '2 / span 2'
                      : tramites.length === 5 && index === 4
                        ? '4 / span 2'
                        : 'span 2',
                },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minWidth: 0,
                bgcolor: '#fff',
                color: '#272522',
                borderRadius: 2,

                // Borde oscuro visible
                border: '1.5px solid #55504a',
                boxShadow: '0 3px 12px rgba(45, 35, 20, 0.10)',

                transition:
                  'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease',

                // Elevación, contorno y sombra naranja
                '&:hover, &:focus-within': {
                  transform: 'translateY(-8px)',
                  borderColor: '#ff7900',
                  boxShadow:
                    '0 0 0 1px #ff7900, 0 14px 32px rgba(255, 121, 0, 0.40)',
                },

                '&:hover .tramite-titulo, &:focus-within .tramite-titulo': {
                  color: '#e85d00',
                },

                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                  '&:hover, &:focus-within': {
                    transform: 'none',
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={tramite.imagen}
                alt=""
                loading="lazy"
                sx={{
                  height: 180,
                  objectFit: 'cover',
                }}
              />

              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  className="tramite-titulo"
                  component="h3"
                  sx={{
                    fontSize: 23,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    mb: 2,
                    transition: 'color 250ms ease',
                  }}
                >
                  {tramite.titulo}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#666057',
                  }}
                >
                  {tramite.descripcion}
                </Typography>
              </CardContent>

              <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                <Button
                  component={Link}
                  to={`/tramites/${tramite.id}`}
                  aria-label={`Leer requisitos de ${tramite.titulo}`}
                  sx={{
                    color: '#a94c16',
                    fontWeight: 700,
                    fontSize: 14,
                    px: 2,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#ffe7d1',
                      color: '#a34300',
                    },
                  }}
                >
                  Leer más
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}