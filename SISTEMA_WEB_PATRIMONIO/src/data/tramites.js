const requisitosLote = [
  'Folio Real actualizado.',
  'Sentencia ejecutoriada, excepcionalmente, cuando el trámite esté sujeto a usucapión o regulación del derecho de propiedad urbana. En estos casos no se requiere la presentación del Folio Real o los testimonios.',
  'Testimonios de la Escritura Pública del actual y anterior propietario, como instrumento constitutivo del derecho de propiedad.',
  'Declaratoria de Herederos, excepcionalmente, cuando el inmueble esté sujeto a sucesión hereditaria.',
  'Plano de División y Partición aprobado o por aprobar, excepcionalmente, cuando existan usos comunes, servidumbres de paso o colindancias en propiedad horizontal. Debe contener las firmas de los copropietarios en señal de conformidad con la proporción correspondiente al uso común. Si existe un plano aprobado anteriormente, presentar copia legalizada, para delimitar las superficies de usos comunes e identificar cada propiedad.',
  'Fotostática legalizada del pago de impuestos de la última gestión.',
  'Fotostáticas de Carnet de Identidad vigentes del o los peticionantes.',
  'Plano aprobado en original o fotostática legalizada y Resolución Municipal, en el caso de trámites de cambio de nombre.',
  'Original y copia de los planos, conforme al formato establecido en la Ley Municipal 122/2017.',
  'Folder, carátula municipal y demás formularios necesarios para la aprobación, adquiridos en valores de Recaudaciones del G.A.M.P.',
];

const presentacionLote =
  'Todos los requisitos deben presentarse al inicio del trámite por el propietario o su representante legal, debidamente acreditado con Poder Notarial, mediante memorial dirigido al Alcalde o Alcaldesa Municipal, en Trámites Internos del Edificio Central, Plaza 10 de Noviembre.';

const requisitosPosteriores = {
  titulo: 'Después de la inspección y revisión técnica',
  introduccion:
    'Además de los requisitos señalados en el artículo 11 de la Ley 122/2017, el cartel solicita adjuntar al legajo los siguientes documentos después de la inspección y revisión técnica:',
  items: [
    'Un CD con el plano graficado en formato DWG, AutoCAD 2015.',
    'En el mismo CD: seis fotografías digitales del inmueble y su entorno inmediato, en formato PDF y/o JPG, identificando claramente el inmueble objeto de valoración.',
    'Declaración Jurada Notarial en casos de variación de superficie, morfología y linderos respecto al registro en Derechos Reales o a planos aprobados anteriormente. Debe avalar la correspondencia del documento técnico elaborado por el proyectista patrocinador con la realidad física del inmueble. El propietario asume la responsabilidad por los datos técnicos consignados.',
    'Cuando el lote sea producto de sentencia ejecutoriada por usucapión o regulación del derecho de propiedad urbana, presentar el plano e informe técnico del perito designado durante el proceso judicial, para corroborar y verificar el plano presentado.',
    'Formulario PROREVI en caso de trámites de regularización por la Ley 247.',
  ],
};

export const tramites = [
  {
    id: 'planos-lote',
    titulo: 'Planos de lote y cambio de nombre',
    descripcion:
      'Documentación para tramitar la aprobación de planos de lote o el cambio de nombre del propietario.',
    imagen: '/images/normativa-055-bg.jpeg',
    referencia: 'Artículo 11. Ley Municipal 122/2017, según el cartel.',
    bloques: [
      {
        titulo: 'Documentación para iniciar el trámite',
        items: requisitosLote,
      },
      {
        titulo: 'Presentación de la solicitud',
        texto: presentacionLote,
      },
      requisitosPosteriores,
    ],
  },
  {
    id: 'fusion-lotes',
    titulo: 'Fusión de lotes',
    descripcion:
      'Requisitos generales y documentos adicionales para la aprobación de planos de fusión.',
    imagen: '/images/normativa-122-bg.jpeg',
    referencia:
      'Artículo 11, parágrafo II. Ley Municipal 122/2017, según el cartel.',
    bloques: [
      {
        titulo: 'Documentación general',
        introduccion:
          'El cartel indica presentar los requisitos del parágrafo I del artículo 11, además de los documentos específicos de fusión.',
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
      requisitosPosteriores,
    ],
  },
  {
    id: 'inspeccion-tecnica',
    titulo: 'Inspección técnica',
    descripcion:
      'Indicaciones para programar y realizar la inspección de planos de lote, división, fusión y cambio de nombre.',
    imagen: '/images/normativa-055-bg.jpeg',
    referencia:
      'Cartel: Inspección técnica en la tramitación y aprobación de planos de lote y cambio de nombre.',
    pendiente:
      'El final del cartel está cortado y algunos fragmentos tienen reflejos. Falta completar el último requisito con una fotografía de la parte inferior.',
    bloques: [
      {
        titulo: 'Programación de la inspección',
        items: [
          'Cuando el trámite vuelve de Catastro con el código catastral otorgado, el interesado debe acercarse a la ventanilla de Control Urbano con copia del memorial de trámite. La Secretaría de Control Urbano comunicará la hora y fecha de la inspección. Este párrafo presenta reflejos en la fotografía.',
          'El día de la inspección, el administrado debe presentarse a la hora señalada. Existe una tolerancia de diez minutos; pasado ese tiempo no se efectuará la inspección y deberá solicitar su reprogramación en Secretaría de Control Urbano. La demora es responsabilidad del administrado.',
          'Se recomienda la participación del técnico externo responsable de la mensura y elaboración del plano presentado, es decir, quien lo firma, para aclarar dudas u otras situaciones durante la inspección.',
        ],
      },
      {
        titulo: 'Condiciones obligatorias',
        items: [
          'La inspección verifica el hecho físico representado en el plano de lote, división o fusión. Los propietarios deben permitir el ingreso a la totalidad del predio para su revisión y corroboración.',
          'El predio objeto de la solicitud de aprobación debe tener muros perimetrales propios consolidados.',
          'En divisiones no consolidadas, que todavía no están físicamente divididas y constituyen una propuesta futura, la división debe estar marcada. La continuación de este requisito no aparece completa en la fotografía.',
        ],
      },
    ],
  },
  {
    id: 'revision-anteproyectos',
    titulo: 'Revisión de anteproyectos',
    descripcion:
      'Documentación para la revisión del anteproyecto arquitectónico de construcción nueva y ampliación.',
    imagen: '/images/normativa-122-bg.jpeg',
    referencia: 'Cartel: Requisitos para la revisión de anteproyectos.',
    pendiente:
      'Parte del recuadro inferior está borrosa. Su transcripción debe confirmarse con una fotografía más nítida.',
    bloques: [
      {
        titulo: 'Alcance',
        texto:
          'El cartel menciona construcción nueva, relevamiento y ampliación. También aclara expresamente que los planos de relevamiento no requieren revisión de anteproyecto.',
      },
      {
        titulo: 'Documentación requerida',
        items: [
          'Carta de solicitud dirigida al Director de Patrimonio Histórico. El cartel identifica al Ph. D. Arq. Juan Carlos Ramos Cortez; confirmar el destinatario actual antes de presentar la solicitud.',
          'Copia fotostática de la Cédula de Identidad vigente del o los propietarios, clara y legible.',
          'Comprobante de caja original por derecho de inspección, adquirido en la Unidad de Recaudaciones del G.A.M.P.',
          'Folio Real actualizado o Testimonio de Propiedad, en fotocopia simple.',
          'Plano de lote aprobado, en fotocopia simple.',
          'Resolución Municipal de aprobación de plano de lote, en fotocopia simple.',
          'Formulario N.º 15, en fotocopia simple.',
          'Formulario de CUSNE, en fotocopia simple.',
          'Comprobante de pago de impuestos de la última gestión, en fotocopia simple.',
          'Presentación de toda la documentación en un folder tamaño oficio. Todos los documentos deben estar foliados; no se permiten hojas sueltas.',
          'Memoria descriptiva del anteproyecto con imágenes actuales del inmueble, firmada y sellada por el arquitecto responsable.',
          'Anteproyecto arquitectónico a escala 1:100 o 1:50, firmado y sellado por el arquitecto responsable.',
        ],
      },
      {
        titulo: 'Contenido del anteproyecto: parte legible del recuadro',
        items: [
          'Todas las plantas con indicación de las partes a modificar, demoler y/o construir.',
          'Todas las fachadas exteriores e interiores donde se efectúen modificaciones, con indicación de las mismas.',
          'Perfil urbano de toda la cuadra con la propuesta de fachada inmersa.',
          'Dos cortes mínimos: uno transversal y otro longitudinal. La continuación de este punto debe confirmarse.',
          'Plano de cimientos de las nuevas construcciones.',
          'Plano de techos cuando se efectúen modificaciones en los mismos.',
          'Planos de detalles y especificaciones técnicas, incluyendo forma y material de los elementos patrimoniales a intervenir. Confirmar la redacción exacta de este punto.',
          'Plano de ubicación.',
          'El resto del recuadro requiere una fotografía más nítida para completar la transcripción.',
        ],
      },
      {
        titulo: 'Presentación',
        texto:
          'El cartel indica que el anteproyecto arquitectónico debe presentarse en papel bond, firmado y sellado por el arquitecto responsable del diseño.',
      },
    ],
  },
  {
    id: 'planos-construccion',
    titulo: 'Planos de construcción, relevamiento y ampliación',
    descripcion:
      'Requisitos para tramitar la aprobación de planos de construcción, relevamiento y ampliación.',
    imagen: '/images/1.jpeg',
    referencia: 'Artículo 14, según el cartel fotografiado.',
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
          'Disco compacto, CD, con el archivo digital en formato DWG, AutoCAD, de la graficación total de los planos impresos presentados, para corroboración y verificación.',
          'Para construcciones superiores a tres niveles, presentar cálculo estructural de la estabilidad del inmueble firmado por el profesional competente. Las terrazas y/o azoteas, cubiertas o libres, se consideran un nivel más de construcción.',
          'Fotostática legalizada del pago de impuestos de la última gestión.',
          'Fotostáticas de Carnet de Identidad del o los peticionantes.',
          'Original y copia de los planos de construcción, firmados por el profesional arquitecto, a escala 1:50. Deben contener todas las plantas, elevaciones, detalles de ubicación y plano de sitio a escala adecuada. Cada lámina debe incluir en la parte inferior derecha el carimbo con toda la información requerida.',
          'Folder, carátula municipal y demás formularios necesarios para la aprobación.',
        ],
      },
      {
        titulo: 'Presentación de la solicitud',
        texto:
          'Todos los requisitos deben presentarse al inicio del trámite por el propietario o su representante legal, debidamente acreditado con Poder Notarial, mediante memorial dirigido al Director de Patrimonio Histórico.',
      },
    ],
  },
];