// ============================================================
// DATOS DE TRÁMITES Y REQUISITOS
// Dirección de Patrimonio Histórico de Potosí
//
// Fuente de transcripción: fotografías de los carteles
// proporcionadas para la organización del contenido.
//
// Las transcripciones incompletas se señalan expresamente.
// La información debe contrastarse con la normativa vigente
// antes de considerarse una publicación institucional oficial.
// ============================================================


// ============================================================
// 1. PLANOS DE LOTE Y CAMBIO DE NOMBRE
// Artículo 11, Ley Municipal 122/2017, según el cartel.
// ============================================================

const requisitosLote = [
  'Folio Real actualizado.',

  'Sentencia ejecutoriada, excepcionalmente, cuando el trámite esté sujeto a usucapión o regulación del derecho de propiedad urbana. En estos casos, excepcionalmente, no es requisito la presentación del Folio Real o los testimonios.',

  'Testimonios de la Escritura Pública del actual y anterior propietario, como instrumento constitutivo del derecho de propiedad.',

  'Declaratoria de Herederos, excepcionalmente, cuando se trate de un bien inmueble sujeto a sucesión hereditaria.',

  'Plano de DIVISIÓN Y PARTICIÓN aprobado o por aprobar, excepcionalmente, cuando existan usos comunes, servidumbres de paso o colindancias en propiedad horizontal. El plano debe contener las respectivas firmas de los copropietarios en señal de conformidad con la proporción que les corresponde con relación al uso común. Si existiera un plano aprobado anteriormente, se debe presentar copia legalizada, con el fin de delimitar las superficies de los usos comunes e identificar claramente cada propiedad.',

  'Fotostática legalizada del pago de impuestos de la última gestión.',

  'Fotostáticas de Carnet de Identidad vigentes del o los peticionantes.',

  'Plano aprobado en original o fotostática legalizada y Resolución Municipal, en el caso de trámites de cambio de nombre.',

  'Original y copia de los planos, conforme al formato establecido en la Ley Municipal 122/2017.',

  'Folder, carátula municipal y demás formularios necesarios para la aprobación, adquiridos en valores de Recaudaciones del G.A.M.P.',
];

const presentacionLote =
  'Todos los requisitos deberán presentarse al inicio del trámite, ya sea por el propietario o su representante legal, debidamente acreditado con Poder Notarial, mediante memorial dirigido al Alcalde o Alcaldesa Municipal, en Trámites Internos del Edificio Central, Plaza 10 de Noviembre.';


// ============================================================
// DOCUMENTACIÓN POSTERIOR A LA INSPECCIÓN DE PLANOS DE LOTE
// ============================================================

const requisitosPosterioresLote = {
  titulo: 'Requisitos posteriores a la inspección y revisión técnica',

  introduccion:
    'Según el cartel, cada trámite que ingrese para su revisión y posterior aprobación, además de los requisitos señalados en el artículo 11 de la Ley Municipal 122/2017, deberá adjuntar al legajo los siguientes documentos después de la inspección y revisión técnica:',

  items: [
    'En formato digital (CD), el plano graficado en formato DWG, AutoCAD 2015, y seis fotografías digitales del inmueble y su entorno inmediato, en formato PDF y/o JPG, identificando claramente el inmueble objeto de valoración.',

    'Declaración Jurada Notarial en los casos de variación de superficie, morfología y dimensiones respecto al registro en Derechos Reales o a planos aprobados anteriormente. Debe avalar que el documento técnico elaborado por el proyectista patrocinador corresponde a la realidad física del inmueble. El propietario asume la responsabilidad por los datos técnicos consignados.',

    'Cuando el lote sea producto de sentencia ejecutoriada por usucapión o regulación del derecho de propiedad urbana, presentar el plano e informe técnico del perito designado durante el proceso judicial, para efectos de corroboración y verificación del plano presentado.',

    'Formulario PROREVI en caso de trámites de regularización por la Ley 247.',
  ],
};


// ============================================================
// 2. CATÁLOGO PRINCIPAL
// ============================================================

export const tramites = [

  // ----------------------------------------------------------
  // TRÁMITE 1
  // ----------------------------------------------------------

  {
  id: 'planos-lote',

  categoria: 'Trámites administrativos',

  titulo: 'Planos de lote y cambio de nombre',

    titulo: 'Planos de lote y cambio de nombre',

    descripcion:
      'Documentación para la tramitación y aprobación de planos de lote y cambio de nombre.',

    imagen: '/images/normativa-055-bg.jpeg',

    referencia:
      'Artículo 11. Ley Municipal 122/2017, según el cartel fotografiado.',

    bloques: [
      {
        titulo: 'Documentación para iniciar el trámite',

        items: requisitosLote,
      },

      {
        titulo: 'Presentación de la solicitud',

        texto: presentacionLote,
      },

      requisitosPosterioresLote,

      {
        titulo: 'Consideración importante',

        texto:
          'El cartel contempla documentación adicional posterior a la inspección y revisión técnica. Debe distinguirse de los requisitos que se presentan al inicio del trámite.',
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 2
  // ----------------------------------------------------------

  {
    id: 'fusion-lotes',
    categoria: 'Trámites administrativos',

    titulo: 'Fusión de lotes',

    descripcion:
      'Requisitos generales y documentos adicionales para la aprobación de planos de fusión.',

    imagen: '/images/normativa-122-bg.jpeg',

    referencia:
      'Artículo 11, parágrafo II, según el cartel fotografiado.',

    bloques: [
      {
        titulo: 'Documentación general',

        introduccion:
          'El cartel indica que, para la aprobación de planos de fusión, además de los documentos específicos, se deben presentar los requisitos establecidos en el parágrafo I del artículo 11.',

        items: requisitosLote,
      },

      {
        titulo: 'Documentos adicionales para fusión',

        items: [
          'Copia legalizada u original de planos individuales aprobados cuando las superficies sean iguales o mayores a la mínima establecida de 60,00 m² para la aprobación en la Ley Municipal de Preservación de Áreas Históricas de Potosí.',

          'Planos individuales sin aprobar cuando las superficies sean menores a la mínima establecida de 60,00 m² para la aprobación en la Ley Municipal de Preservación de Áreas Históricas de Potosí.',
        ],
      },

      {
        titulo: 'Presentación de la solicitud',

        texto: presentacionLote,
      },

      requisitosPosterioresLote,
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 3
  // ----------------------------------------------------------

  {
    id: 'inspeccion-tecnica',
    categoria: 'Inspecciones técnicas',

    titulo: 'Inspección técnica de planos de lote',

    descripcion:
      'Indicaciones para programar y realizar la inspección técnica durante la tramitación y aprobación de planos de lote, división, fusión y cambio de nombre.',

    imagen: '/images/normativa-055-bg.jpeg',

    referencia:
      'Cartel: Para la inspección técnica en la tramitación y aprobación de planos de lote y cambio de nombre.',

    pendiente:
      'Una parte del primer apartado y la continuación del último punto están parcialmente ocultas o fuera del encuadre de las fotografías. No se completa el contenido que no puede leerse con suficiente claridad.',

    bloques: [
      {
        titulo: 'I. Programación de la inspección',

        items: [
          'Cuando el trámite vuelve de Catastro con la otorgación del código catastral, el interesado deberá aproximarse a la ventanilla de Control Urbano con la copia del memorial de trámite. La Secretaría de Control Urbano comunicará la hora y fecha de la inspección. Algunas palabras del primer párrafo están parcialmente ocultas por reflejos en la fotografía.',

          'El día de la inspección, el administrado deberá presentarse a la hora señalada. Existe un lapso de tolerancia de diez minutos. Pasado ese tiempo, no se efectuará la inspección y el interesado deberá apersonarse a la Secretaría de Control Urbano para solicitar la reprogramación. La demora producida será de entera responsabilidad del administrado.',

          'Se recomienda que en la inspección técnica participe el técnico externo responsable de la mensura y elaboración del plano presentado, es decir, quien lo firma, para aclarar dudas u otras situaciones que puedan presentarse durante la inspección.',
        ],
      },

      {
        titulo: 'II. Condiciones obligatorias',

        introduccion:
          'El cartel especifica las siguientes condiciones para realizar la inspección:',

        items: [
          'La inspección verifica el hecho físico representado en el plano de lote, división o fusión objeto de aprobación. Los propietarios deben permitir el ingreso a la totalidad del predio representado en el plano de lote para efectos de revisión y corroboración.',

          'Para realizar la inspección, el predio objeto de la solicitud de aprobación deberá tener muros perimetrales propios consolidados.',

          'En divisiones no consolidadas, es decir, cuando no estén físicamente divididas y se trate de una propuesta de consolidación futura, la división deberá estar marcada. La continuación del requisito no se distingue completamente en la fotografía.',
        ],
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 4
  // ----------------------------------------------------------

  {
    id: 'revision-anteproyectos',
    id: 'revision-anteproyectos',

    titulo: 'Revisión de anteproyectos',

    descripcion:
      'Requisitos para la revisión de anteproyectos de construcción nueva, relevamiento y ampliación.',

    imagen: '/images/normativa-122-bg.jpeg',

    referencia:
      'Cartel: Requisitos para la revisión de anteproyectos.',

    pendiente:
      'El cartel contiene un recuadro con especificaciones técnicas cuyo texto es demasiado pequeño y borroso en la fotografía. Se transcriben los puntos legibles, pero no se presentan como una transcripción íntegra del recuadro.',

    bloques: [
      {
        titulo: 'Alcance del trámite',

        texto:
          'El cartel contempla la construcción nueva, el relevamiento y la ampliación. También indica expresamente que los planos de relevamiento no requieren revisión de anteproyecto.',
      },

      {
        titulo: 'Documentación requerida',

        items: [
          'Carta de solicitud dirigida al Director de Patrimonio Histórico.',

          'Copia fotostática de la Cédula de Identidad vigente del o los propietarios, clara y legible.',

          'Comprobante de caja original por derecho de inspección, adquirido en la Unidad de Recaudaciones del G.A.M.P.',

          'Folio Real actualizado o Testimonio de Propiedad, en fotocopia simple.',

          'Plano de lote aprobado, en fotocopia simple.',

          'Resolución Municipal de aprobación de plano de lote, en fotocopia simple.',

          'Formulario N.º 15, en fotocopia simple.',

          'Formulario de CUSNE, en fotocopia simple.',

          'Comprobante de pago de impuestos de la última gestión, en fotocopia simple.',

          'Presentación de toda la documentación en un folder tamaño oficio. Todos los documentos deben estar foliados; no se permiten hojas sueltas.',

          'Memoria descriptiva del anteproyecto, con imágenes actuales del inmueble, firmada y sellada por el arquitecto responsable.',

          'Anteproyecto arquitectónico a escala 1:100 o 1:50, firmado y sellado por el arquitecto responsable.',
        ],
      },

      {
        titulo: 'Contenido del anteproyecto arquitectónico',

        introduccion:
          'Los siguientes puntos se transcriben del recuadro inferior en la medida en que resultan legibles en la fotografía:',

        items: [
          'Todas las plantas con indicación de las partes a modificar, demoler y/o construir.',

          'Todas las fachadas exteriores e interiores donde se efectúen modificaciones, con indicación de las mismas.',

          'Perfil urbano de toda la cuadra con la propuesta de fachada inmersa.',

          'Dos cortes mínimos: uno transversal y otro longitudinal, donde se muestren las modificaciones o nuevas construcciones.',

          'Plano de cimientos de las nuevas construcciones.',

          'Plano de techos cuando se efectúen modificaciones en los mismos.',

          'Planos de detalles y especificaciones técnicas de los elementos que se intervengan. La redacción completa de este punto no se distingue con suficiente claridad en la fotografía.',

          'Plano de ubicación.',
        ],
      },

      {
        titulo: 'Presentación final',

        texto:
          'El cartel indica que todo el anteproyecto arquitectónico debe realizarse en papel bond y estar firmado y sellado por el arquitecto responsable.',
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 5
  // ----------------------------------------------------------

  {
    id: 'planos-construccion',
    categoria: 'Trámites administrativos',

    titulo: 'Planos de construcción, relevamiento y ampliación',

    descripcion:
      'Requisitos para la tramitación y aprobación de planos de construcción, relevamiento y ampliación.',

    imagen: '/images/1.jpeg',

    referencia:
      'Artículo 14, según el cartel fotografiado.',

    bloques: [
      {
        titulo: 'Documentación requerida',

        items: [
          'Folio Real actualizado.',

          'Original o fotostática legalizada del plano de lote aprobado a nombre del peticionante.',

          'Original o fotostática legalizada de la Resolución Municipal a nombre del peticionante.',

          'Original o fotostática legalizada del Formulario de Uso de Suelo y Normas de Edificación, CUSNE.',

          'Original o fotostática legalizada del Formulario de Línea y Nivel.',

          'Original o fotostática legalizada del Formulario de solicitud de inscripción de propiedad de inmueble, Formulario 15.',

          'Acta del anteproyecto.',

          'Plano del anteproyecto.',

          'Disco compacto (CD) que contenga el archivo digital en formato DWG, AutoCAD, de la graficación total de los planos impresos presentados, para efectos de corroboración y verificación.',

          'Cuando se trate de construcciones superiores a tres niveles, presentar el cálculo estructural de la estabilidad del inmueble, firmado por el profesional competente. Se consideran como un nivel más de construcción las terrazas y/o azoteas, estén cubiertas o libres.',

          'Fotostática legalizada del pago de impuestos de la última gestión.',

          'Fotostáticas de Carnet de Identidad del o los peticionantes.',

          'Original y copia de los planos de construcción, firmados por el profesional arquitecto, a escala 1:50. Los planos deben contener la graficación de todas las plantas, elevaciones y detalles de ubicación, además del plano de sitio en una escala adecuada. Cada lámina debe incluir, en la parte inferior derecha, el carimbo con toda la información requerida.',

          'Folder, carátula municipal y demás formularios necesarios para la aprobación.',
        ],
      },

      {
        titulo: 'Presentación de la solicitud',

        texto:
          'Todos los requisitos deberán presentarse al inicio del trámite, ya sea por el propietario o su representante legal, debidamente acreditado con Poder Notarial, mediante memorial dirigido al Director de Patrimonio Histórico.',
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 6
  // ----------------------------------------------------------

  {
    id: 'inspeccion-denuncia',
    categoria: 'Inspecciones técnicas',

    titulo: 'Inspección técnica por denuncia o afectación de inmueble',

    descripcion:
      'Documentación solicitada para presentar una solicitud de inspección técnica por denuncia o afectación de un inmueble.',

    imagen: '/images/normativa-055-bg.jpeg',

    referencia:
      'Cartel: Solicitud de inspección técnica por denuncia o afectación de inmueble.',
      

    bloques: [
      {
        titulo: 'Documentación requerida',

        items: [
          'Carta de solicitud dirigida al Director de Patrimonio Histórico, con timbre de Bs 5, manifestando el motivo de la solicitud de inspección y declarando con claridad el tipo de afectación.',

          'Fotografías impresas del interior, el frontis y el perfil de la cuadra, con impresión clara y visible.',

          'Cédula de Identidad vigente del o los solicitantes o denunciantes, en fotocopia simple, clara y legible.',

          'Folio Real o Testimonio de Propiedad que acredite el derecho propietario, en fotocopia simple, clara y legible.',

          'Plano de lote aprobado a nombre del administrado solicitante o denunciante, en fotocopia simple, clara y legible.',

          'Comprobante de pago de impuestos de la última gestión, en fotocopia simple, clara y legible.',

          'Comprobante de caja por derecho de inspección, en original.',
        ],
      },

      {
        titulo: 'Presentación de documentos',

        texto:
          'Los documentos deberán presentarse foliados y en un folder. No se admiten hojas sueltas.',
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 7
  // ----------------------------------------------------------

  {
    id: 'obras-menores',
    categoria: 'Autorizaciones patrimoniales',

    titulo: 'Autorización para intervenciones de obras menores',

    descripcion:
      'Requisitos para solicitar autorización de refacción de fachadas, reposición de muros perimetrales, construcciones menores interiores y pintado de fachadas.',

    imagen: '/images/normativa-122-bg.jpeg',

    referencia:
      'Cartel: Solicitud de autorización de intervenciones de obras menores.',

    bloques: [
      {
        titulo: 'Tipos de intervención contemplados',

        items: [
          'Refacción de fachadas exteriores.',

          'Reposición de muros perimetrales.',

          'Construcciones menores en el interior del inmueble.',

          'Mejoramiento y pintado de fachadas.',
        ],
      },

      {
        titulo: 'Documentación requerida',

        items: [
          'Carta de solicitud dirigida al Director de Patrimonio Histórico, con timbre de Bs 5, explicando el motivo de la intervención.',

          'Cédula de Identidad vigente del o los administrados solicitantes o denunciantes, en fotocopia simple, clara y legible.',

          'Memoria descriptiva de la obra menor, con imágenes actuales, cronograma de las actividades que se pretenden realizar, bosquejo y/o croquis referenciales, firmada por el administrado solicitante y/o profesional competente.',

          'Folio Real o Testimonio de Propiedad que acredite el derecho propietario, en fotocopia simple, clara y legible.',

          'Plano de lote aprobado, a nombre del administrado solicitante o denunciante, en fotocopia simple, clara y legible.',

          'Comprobante de pago de impuestos de la última gestión, en fotocopia simple, clara y legible.',

          'Comprobante de caja por derecho de inspección, en original.',
        ],
      },

      {
        titulo: 'Presentación de documentos',

        texto:
          'Los documentos deberán presentarse foliados y en un folder. No se admiten hojas sueltas.',
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 8
  // ----------------------------------------------------------

  {
    id: 'emergencia-preventivos',
    categoria: 'Autorizaciones patrimoniales',

    titulo: 'Autorización por emergencia y trabajos preventivos',

    descripcion:
      'Documentación para solicitar autorización por emergencia y/o ejecución de trabajos preventivos en un inmueble.',

    imagen: '/images/1.jpeg',

    referencia:
      'Cartel: Solicitud de autorización por emergencia y/o trabajos preventivos.',

    bloques: [
      {
        titulo: 'Documentación requerida',

        items: [
          'Carta de solicitud dirigida al Director de Patrimonio Histórico, exponiendo con claridad la situación del inmueble y el caso de emergencia, consignando el número telefónico del administrado.',

          'Cédula de Identidad vigente del o los administrados solicitantes o denunciantes, en fotocopia simple, clara y legible.',

          'Folio Real o Testimonio de Propiedad que acredite el derecho propietario, en fotocopia simple, clara y legible.',

          'Plano de lote aprobado a nombre del administrado solicitante o denunciante, en fotocopia simple, clara y legible.',

          'Comprobante de pago de impuestos de la última gestión, en fotocopia simple, clara y legible.',

          'Comprobante de caja por derecho de inspección, en original.',
        ],
      },

      {
        titulo: 'Presentación de documentos',

        texto:
          'Los documentos deberán presentarse foliados y en un folder. No se admiten hojas sueltas.',
      },
    ],
  },


  // ----------------------------------------------------------
  // TRÁMITE 9
  // ----------------------------------------------------------

  {
    id: 'letreros-publicitarios',
    categoria: 'Autorizaciones patrimoniales',

    titulo: 'Autorización de letreros publicitarios',

    descripcion:
      'Requisitos y procedimiento para la autorización, actualización o regularización de letreros publicitarios.',

    imagen: '/images/normativa-055-bg.jpeg',

    referencia:
      'Carteles de autorización de letreros publicitarios. Se menciona la Ordenanza Municipal 026/2000 para la verificación técnica.',

    bloques: [
      {
        titulo: 'Requisitos iniciales',

        items: [
          'Carta de solicitud dirigida al Director de Patrimonio Histórico, explicando el motivo de la solicitud.',

          'Copia de la Cédula de Identidad del administrado o solicitante, en fotocopia simple.',

          'Licencia de funcionamiento a nombre del administrado o solicitante, en fotocopia simple.',

          'Formulario PH-07, «Solicitud para la colocación de publicidad», adquirido en la sección de valores de la Dirección de Recaudaciones del G.A.M.P., ubicada en avenida Universitaria, Complejo Municipal Ferroviario.',

          'Croquis de ubicación.',

          'Fotografías del letrero a instalar.',
        ],
      },

      {
        titulo: 'Presentación de documentos',

        texto:
          'La presentación de los documentos deberá estar foliada y engrapada. El cartel indica que no se permitirán hojas sueltas.',
      },

      {
        titulo: 'Actualización de la autorización',

        introduccion:
          'El cartel distingue la actualización de la autorización cuando ya existe un letrero publicitario con su respectiva patente.',

        items: [
          'Presentar los requisitos enunciados en los puntos 1 al 5.',

          'Adjuntar dos fotografías impresas del letrero publicitario existente y de su base de sujeción en la fachada, para efectos de verificación.',
        ],
      },

      {
        titulo: 'Regularización de la autorización',

        introduccion:
          'El cartel contempla la regularización cuando ya existe un letrero publicitario, pero no se cuenta con la patente.',

        items: [
          'Presentar los requisitos enunciados en los puntos 1 al 5.',

          'Adjuntar dos fotografías impresas del letrero publicitario existente y de su base de sujeción en la fachada.',

          'Presentar un bosquejo o dibujo del letrero, elaborado a mano alzada o por computadora, que refleje el tipo de material y las dimensiones reales del mismo.',
        ],
      },

      {
        titulo: 'Nueva autorización',

        items: [
          'Presentar los requisitos enunciados en los puntos 1 al 5.',

          'Adjuntar una propuesta de diseño del letrero publicitario con sus dimensiones, materiales a utilizar y otras especificaciones.',

          'Presentar dos fotografías impresas de la fachada del inmueble, señalando el lugar donde se ubicará el letrero.',
        ],
      },

      {
        titulo: 'Verificación técnica',

        items: [
          'El técnico Restaurador será designado para la verificación, constatando la ubicación de la propuesta de letrero.',

          'En caso de que el letrero ya esté instalado, se verificarán las alturas, materialidad, diseño y color, los cuales deben estar acordes con la Ordenanza Municipal 026/2000.',

          'El cartel indica que, si no se cumplen los requisitos y no se cuenta con autorización, el Municipio, en coordinación con la Intendencia Municipal, procederá al retiro de los letreros.',
        ],
      },

      {
        titulo: 'Emisión de autorización en borrador',

        texto:
          'El técnico Restaurador emitirá la autorización en borrador con marca de agua. Este documento habilitará al solicitante para el pago de la patente anual correspondiente.',
      },

      {
        titulo: 'Cancelación anual de pago',

        texto:
          'El pago deberá realizarse en la Unidad de Recaudaciones del G.A.M.P. El cartel señala que el pago de valores es de manera anual.',
      },

      {
        titulo: 'Viabilización de la propuesta',

        texto:
          'La propuesta pasará nuevamente a la Unidad para realizar la constancia del estado del trámite. Para la viabilización, se deberá adjuntar tres copias del recibo de pago.',
      },
    ],
  },

];