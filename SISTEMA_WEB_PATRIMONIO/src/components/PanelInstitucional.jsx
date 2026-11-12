
import { useState } from "react";

import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Collapse,
  Divider,
  Chip,
} from "@mui/material";

import MisionVision from "./MisionVision";

// ============================================================
// ICONOS
// ============================================================

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

function IconoEdificio() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21v-5h6v5" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2" />
    </svg>
  );
}

function IconoProcesos() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V2.5h6v2" />
      <path d="m8 11 1.5 1.5L12 10" />
      <path d="M14 11h2M8 17h8" />
    </svg>
  );
}

function IconoProyectos() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-7h6v7" />
      <path d="M9 10h.01M15 10h.01" />
    </svg>
  );
}

function IconoUsuario() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.5 3-7 8-7s8 2.5 8 7" />
    </svg>
  );
}

function IconoFlecha({ abierto = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transform: abierto
          ? "rotate(180deg)"
          : "rotate(0deg)",
        transition: "transform 300ms ease",
      }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// ============================================================
// INFORMACIÓN DE LAS ÁREAS DE TRABAJO
// ============================================================

// Los responsables de Control Urbano y Procesos
// ya cuentan con nombres proporcionados por la Dirección.
//
// El responsable de Proyectos continúa por confirmar.
//
// Para añadir fotografías posteriormente, utilizar:
// public/images/areas/

const areasInstitucionales = [
  {
    id: "control-urbano",
    numero: "01",
    nombre: "CONTROL URBANO",

    subtitulo:
      "Supervisión y protección del entorno histórico",

    descripcion:
      "Área relacionada con el control y seguimiento de las intervenciones en los espacios urbanos de valor patrimonial.",

    icono: IconoEdificio,

    // RESPONSABLE ACTUALIZADO
    responsable: "Arq. Eliseo Cuenca",

    cargo: "Responsable del Área de Control Urbano",

    imagenResponsable: "",

    funciones: [
      "Supervisión de intervenciones en inmuebles y espacios de valor patrimonial.",
      "Inspecciones y seguimiento de actuaciones en el entorno urbano histórico.",
      "Apoyo al cumplimiento de la normativa de protección patrimonial.",
      "Registro y seguimiento de observaciones técnicas.",
    ],
  },

  {
    id: "procesos",
    numero: "02",
    nombre: "PROCESOS",

    subtitulo:
      "Gestión y seguimiento administrativo",

    descripcion:
      "Área vinculada al tratamiento y seguimiento de procedimientos administrativos relacionados con la gestión del patrimonio histórico.",

    icono: IconoProcesos,

    // RESPONSABLE ACTUALIZADA
    responsable: "Abg. Emili Martínez",

    cargo: "Responsable del Área de Procesos",

    imagenResponsable: "",

    funciones: [
      "Seguimiento de procedimientos administrativos relacionados con el patrimonio.",
      "Revisión y organización de documentación correspondiente a procesos.",
      "Coordinación administrativa para el tratamiento de expedientes.",
      "Registro y seguimiento de actuaciones según los procedimientos aplicables.",
    ],
  },

  {
    id: "proyectos",
    numero: "03",
    nombre: "PROYECTOS",

    subtitulo:
      "Conservación y recuperación patrimonial",

    descripcion:
      "Área relacionada con la planificación y seguimiento de iniciativas orientadas a la conservación y recuperación del patrimonio histórico.",

    icono: IconoProyectos,

    // PENDIENTE DE CONFIRMACIÓN
    responsable: "Por confirmar",

    cargo: "Responsable del Área de Proyectos",

    imagenResponsable: "",

    funciones: [
      "Formulación de propuestas de conservación y recuperación patrimonial.",
      "Apoyo a la planificación de intervenciones en espacios históricos.",
      "Seguimiento técnico de iniciativas y proyectos patrimoniales.",
      "Coordinación de actividades relacionadas con proyectos de conservación.",
    ],
  },
];

// ============================================================
// TARJETA INTERACTIVA DE CADA ÁREA
// ============================================================

function TarjetaArea({
  area,
  expandida,
  onToggle,
}) {
  const Icono = area.icono;

  return (
    <Paper
      elevation={0}
      sx={{
        overflow: "hidden",
        borderRadius: "20px",

        border: expandida
          ? "1px solid #c88943"
          : "1px solid #e4d9c8",

        backgroundColor: "#fffdf9",

        boxShadow: expandida
          ? "0 14px 35px rgba(85, 47, 21, 0.12)"
          : "0 5px 18px rgba(58, 39, 22, 0.05)",

        transition:
          "border-color 250ms ease, box-shadow 250ms ease",
      }}
    >
      {/* CABECERA INTERACTIVA */}

      <Box
        component="button"
        type="button"
        onClick={onToggle}
        aria-expanded={expandida}
        aria-controls={`contenido-${area.id}`}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          textAlign: "left",

          padding: 0,
          border: "none",
          background: "transparent",
          color: "inherit",
          cursor: "pointer",

          "&:focus-visible": {
            outline: "3px solid #e9a83b",
            outlineOffset: "-3px",
          },
        }}
      >
        <Box
          sx={{
            height: "5px",
            background:
              "linear-gradient(90deg, #79242a, #c8792d, #e3ad52)",
          }}
        />

        <Box
          sx={{
            p: {
              xs: 2.5,
              sm: 3,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 58,
                  height: 58,
                  flexShrink: 0,
                  borderRadius: "16px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  color: "#a94c16",
                  backgroundColor: "#f7eadd",
                }}
              >
                <Icono />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    color: "#a94c16",
                  }}
                >
                  ÁREA {area.numero}
                </Typography>

                <Typography
                  component="h4"
                  sx={{
                    fontSize: {
                      xs: "1.13rem",
                      sm: "1.3rem",
                    },
                    fontWeight: 900,
                    color: "#263e33",
                    lineHeight: 1.3,
                  }}
                >
                  {area.nombre}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                color: "#a94c16",
                flexShrink: 0,
              }}
            >
              <IconoFlecha abierto={expandida} />
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 2,
              fontSize: "0.84rem",
              fontWeight: 800,
              color: "#92491b",
            }}
          >
            {area.subtitulo}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#625b50",
              fontSize: "0.91rem",
              lineHeight: 1.7,
            }}
          >
            {area.descripcion}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: "0.78rem",
              fontWeight: 900,
              color: "#8d302c",
              letterSpacing: "0.04em",
            }}
          >
            {expandida
              ? "OCULTAR INFORMACIÓN"
              : "CONOCER MÁS SOBRE EL ÁREA"}
          </Typography>
        </Box>
      </Box>

      {/* INFORMACIÓN DESPLEGABLE */}

      <Collapse
        in={expandida}
        timeout={350}
        unmountOnExit
      >
        <Box
          id={`contenido-${area.id}`}
          sx={{
            px: {
              xs: 2.5,
              sm: 3,
            },
            pb: 3,
          }}
        >
          <Divider
            sx={{
              mb: 3,
              borderColor: "#ebdfd0",
            }}
          />

          {/* RESPONSABLE */}

          <Typography
            component="h5"
            sx={{
              mb: 2,
              fontWeight: 900,
              fontSize: "0.93rem",
              color: "#293d31",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Responsable del área
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: "15px",
              backgroundColor: "#f7f0e7",
            }}
          >
            <Avatar
              src={
                area.imagenResponsable || undefined
              }
              alt={area.responsable}
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "#e5d3bd",
                color: "#985229",
              }}
            >
              <IconoUsuario />
            </Avatar>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "0.98rem",
                  color: "#303d33",
                }}
              >
                {area.responsable}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: "0.8rem",
                  color: "#7b6250",
                  lineHeight: 1.5,
                }}
              >
                {area.cargo}
              </Typography>
            </Box>
          </Box>

          {/* FUNCIONES */}

          <Typography
            component="h5"
            sx={{
              mt: 3,
              mb: 1.5,
              fontWeight: 900,
              fontSize: "0.93rem",
              color: "#293d31",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Principales funciones
          </Typography>

          <Box
            component="ul"
            sx={{
              m: 0,
              pl: 2.5,

              "& li": {
                color: "#5a544e",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                mb: 1,
                pl: 0.5,
              },

              "& li::marker": {
                color: "#b16a2b",
              },
            }}
          >
            {area.funciones.map(
              (funcion, index) => (
                <li key={index}>
                  {funcion}
                </li>
              )
            )}
          </Box>
        </Box>
      </Collapse>
    </Paper>
  );
}

// ============================================================
// SECCIÓN NUESTRAS ÁREAS
// ============================================================

function AreasDeTrabajo() {
  const [areaExpandida, setAreaExpandida] =
    useState(null);

  return (
    <Box
      sx={{
        px: {
          xs: 2,
          sm: 3,
          md: 5,
        },

        py: {
          xs: 4,
          md: 5,
        },

        maxWidth: "1150px",
        mx: "auto",
      }}
    >
      {/* TÍTULO */}

      <Box
        sx={{
          textAlign: "center",
          maxWidth: "750px",
          mx: "auto",
          mb: 4,
        }}
      >
        <Chip
          label="ORGANIZACIÓN INSTITUCIONAL"
          sx={{
            backgroundColor: "#f1e2cf",
            color: "#8b3f19",
            fontWeight: 900,
            letterSpacing: "0.08em",
            fontSize: "0.68rem",
          }}
        />

        <Typography
          component="h3"
          sx={{
            mt: 2,

            fontSize: {
              xs: "1.8rem",
              sm: "2.3rem",
              md: "2.7rem",
            },

            fontWeight: 900,
            color: "#244233",
            lineHeight: 1.2,
          }}
        >
          NUESTRAS ÁREAS DE TRABAJO
        </Typography>

        <Box
          sx={{
            width: 85,
            height: 4,
            mx: "auto",
            my: 2.5,
            borderRadius: 10,

            background:
              "linear-gradient(90deg, #8b2930, #e1a044)",
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: "0.94rem",
              sm: "1rem",
            },

            lineHeight: 1.8,
            color: "#6d655a",
          }}
        >
          La Dirección de Patrimonio Histórico
          cuenta con tres áreas de trabajo que
          contribuyen a la gestión, protección
          y conservación del patrimonio de la
          ciudad de Potosí.
        </Typography>
      </Box>

      {/* TARJETAS */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, minmax(0, 1fr))",
          },

          gap: {
            xs: 2,
            md: 2.5,
          },

          alignItems: "start",
        }}
      >
        {areasInstitucionales.map((area) => (
          <TarjetaArea
            key={area.id}
            area={area}
            expandida={
              areaExpandida === area.id
            }
            onToggle={() =>
              setAreaExpandida((actual) =>
                actual === area.id
                  ? null
                  : area.id
              )
            }
          />
        ))}
      </Box>
    </Box>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function PanelInstitucional() {
  const [abierto, setAbierto] = useState(false);

  const [seccionActiva, setSeccionActiva] =
    useState("identidad");

  const cerrarPanel = () => {
    setAbierto(false);
  };

  const abrirPanel = () => {
    setSeccionActiva("identidad");
    setAbierto(true);
  };

  return (
    <>
      {/* ======================================================
          BOTÓN LATERAL INSTITUCIÓN
          ====================================================== */}

      <Button
        type="button"
        aria-label="Abrir información institucional"
        aria-haspopup="dialog"
        aria-expanded={abierto}
        onClick={abrirPanel}
        sx={{
          position: "fixed",

          top: {
            xs: "160px",
            sm: "176px",
            md: "192px",
            xl: "208px",
          },

          right: 0,
          transform: "none",
          zIndex: 1200,

          minWidth: 0,

          minHeight: {
            xs: 58,
            sm: 64,
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,

          px: {
            xs: 1.8,
            sm: 2.2,
            md: 2.5,
          },

          py: 1.5,

          borderRadius: "14px 0 0 14px",

          border:
            "1px solid rgba(255, 206, 107, 0.8)",

          borderRight: "none",

          background:
            "linear-gradient(145deg, #7d1e2b 0%, #a63629 65%, #ab5a15 100%)",

          color: "#ffffff",

          boxShadow:
            "-3px 5px 20px rgba(38, 12, 11, 0.3)",

          fontSize: {
            xs: "0.82rem",
            sm: "0.9rem",
            md: "0.98rem",
          },

          fontWeight: 900,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",

          transition:
            "background 200ms ease, box-shadow 200ms ease",

          "&:hover": {
            background:
              "linear-gradient(145deg, #681825 0%, #942d22 65%, #995010 100%)",
          },

          "&:focus-visible": {
            outline: "3px solid #f3bc4d",
            outlineOffset: "2px",
          },
        }}
      >
        <IconoMenu />

        <Box component="span">
          Institución
        </Box>
      </Button>

      {/* ======================================================
          PANEL DESPLEGABLE
          ====================================================== */}

      <Drawer
        anchor="right"
        open={abierto}
        onClose={cerrarPanel}
        slotProps={{
          paper: {
            role: "dialog",
            "aria-modal": true,
            "aria-labelledby":
              "titulo-panel-institucional",

            sx: {
              width: {
                xs: "100%",
                sm: "96vw",
                md: "min(1100px, 94vw)",
                xl: "min(1250px, 88vw)",
              },

              maxWidth: "100vw",
              height: "100%",

              display: "flex",
              flexDirection: "column",
              overflow: "hidden",

              backgroundColor: "#f7f3ec",
            },
          },
        }}
      >
        {/* ==================================================
            CABECERA DEL PANEL
            ================================================== */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              "linear-gradient(105deg, #681b29 0%, #8f2928 70%, #a94c16 100%)",

            color: "#ffffff",

            borderBottom:
              "4px solid #efa532",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="p"
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.82rem",
                  md: "0.9rem",
                },

                letterSpacing: "0.1em",
                fontWeight: 800,
                color: "#ffdc8e",
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
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                },

                fontWeight: 900,
                lineHeight: 1.3,
                color: "#ffffff",
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

              color: "#ffffff",

              border:
                "1px solid rgba(255,255,255,0.45)",

              borderRadius: "12px",

              "&:hover": {
                backgroundColor:
                  "rgba(255,255,255,0.14)",
              },

              "&:focus-visible": {
                outline: "3px solid #f3bc4d",
                outlineOffset: "2px",
              },
            }}
          >
            <IconoCerrar />
          </IconButton>
        </Box>

        {/* ==================================================
            MENÚ INTERNO
            ================================================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            gap: {
              xs: 1,
              sm: 2,
            },

            px: 2,
            py: 2,

            backgroundColor: "#f4ecdf",

            borderBottom:
              "1px solid #e2d5c3",
          }}
        >
          <Button
            type="button"
            onClick={() =>
              setSeccionActiva("identidad")
            }
            aria-pressed={
              seccionActiva === "identidad"
            }
            sx={{
              px: {
                xs: 1.5,
                sm: 3,
              },

              py: 1.3,
              borderRadius: "12px",

              fontSize: {
                xs: "0.7rem",
                sm: "0.88rem",
              },

              fontWeight: 900,
              textTransform: "uppercase",

              backgroundColor:
                seccionActiva === "identidad"
                  ? "#7d2930"
                  : "#fffaf4",

              color:
                seccionActiva === "identidad"
                  ? "#ffffff"
                  : "#684b38",

              border:
                "1px solid rgba(125, 41, 48, 0.2)",

              "&:hover": {
                backgroundColor:
                  seccionActiva === "identidad"
                    ? "#682128"
                    : "#f4dfca",
              },
            }}
          >
            IDENTIDAD INSTITUCIONAL
          </Button>

          <Button
            type="button"
            onClick={() =>
              setSeccionActiva("areas")
            }
            aria-pressed={
              seccionActiva === "areas"
            }
            sx={{
              px: {
                xs: 1.5,
                sm: 3,
              },

              py: 1.3,
              borderRadius: "12px",

              fontSize: {
                xs: "0.7rem",
                sm: "0.88rem",
              },

              fontWeight: 900,
              textTransform: "uppercase",

              backgroundColor:
                seccionActiva === "areas"
                  ? "#7d2930"
                  : "#fffaf4",

              color:
                seccionActiva === "areas"
                  ? "#ffffff"
                  : "#684b38",

              border:
                "1px solid rgba(125, 41, 48, 0.2)",

              "&:hover": {
                backgroundColor:
                  seccionActiva === "areas"
                    ? "#682128"
                    : "#f4dfca",
              },
            }}
          >
            ÁREAS DE TRABAJO
          </Button>
        </Box>

        {/* ==================================================
            CONTENIDO INSTITUCIONAL
            ================================================== */}

        <Box
          role="region"
          aria-label="Contenido institucional"
          sx={{
            flex: 1,
            minHeight: 0,

            overflowY: "auto",
            overflowX: "hidden",

            overscrollBehavior: "contain",
          }}
        >
          {/* MISIÓN, VISIÓN Y CONTENIDO ORIGINAL */}

          <Box
            sx={{
              display:
                seccionActiva === "identidad"
                  ? "block"
                  : "none",
            }}
          >
            <MisionVision />
          </Box>

          {/* ÁREAS DE TRABAJO */}

          {seccionActiva === "areas" && (
            <AreasDeTrabajo />
          )}
        </Box>
      </Drawer>
    </>
  );
}
