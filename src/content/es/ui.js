// Every interface text and short page text in Spanish (same keys as en/ui.js).
export default {
  lang: 'es',
  locale: 'es-ES',   // used to write dates ("4 de agosto de 2022")

  site: {
    name: 'Andy Ossorio',
    description: 'Andy Ossorio es un artista contemporáneo boliviano radicado en Curitiba, Brasil. Trabaja principalmente con pintura, en técnicas como el óleo, la tinta y la acuarela.',
  },

  nav: {
    about: 'Sobre mí',
    gallery: 'Obras',
    exhibitions: 'Exposiciones',
    contact: 'Contacto',
    privacy: 'Privacidad',
    menu: 'Menú',
    close: 'Cerrar menú',
    theme: 'Modo oscuro',
    language: 'Idioma',
  },

  // Techniques used in src/data/artworks.js
  media: {
    watercolor: 'Acuarela sobre papel',
    ink: 'Tinta sobre papel',
    oilCanvas: 'Óleo sobre lienzo',
    oilPanel: 'Óleo sobre tabla',
  },

  artwork: {
    price: 'US$',
    available: 'Consultar por esta obra',
    ask: 'Preguntar por esta obra',
    seeAvailable: 'Obras disponibles',
    year: 'Año',
    technique: 'Técnica',
    size: 'Medidas',
    status: { available: 'Disponible', ask: 'Precio a consultar', sold: 'Vendida' },
    detail: 'detalle',
    view: 'vista',
    previous: 'Obra anterior',
    next: 'Obra siguiente',
    back: 'Todas las obras de',
  },

  // Home page
  home: {
    allWorks: 'Todas las obras',
  },


  gallery: {
    title: 'Obras',
    jump: 'Ir al año',
    works: 'obras',
    availableOnly: 'Solo disponibles',
    noneAvailable: 'Por ahora no hay obras disponibles.',
    description: 'Galería de obras del artista boliviano Andy Ossorio',
    yearCover: 'Obras de',
  },

  exhibitions: {
    title: 'Exposiciones',
    description: 'Exposiciones individuales del artista boliviano Andy Ossorio',
    photo: 'Foto',
    read: 'Leer más',
    works: 'Obras',
    views: 'Vistas de la exposición',
    nftAlso: 'También expuesta, como NFT',
    exhibitedIn: 'Expuesta en',
  },

  about: {
    title: 'Sobre mí',
    // Biography: third person, facts only
    paragraphs: [
      'Andy Ossorio es un pintor boliviano que vive y trabaja en Curitiba, Brasil. Su obra se centra en la figura humana y en la vida interior del individuo: momentos íntimos y silenciosos en los que un sentimiento se vuelve visible.',
      'Trabaja principalmente con óleo y tinta, y también con acuarela. Su lenguaje se mueve entre la figuración, el expresionismo y el minimalismo, y se mantiene abierto a la experimentación.',
      'Su obra se ha expuesto en Bolivia y Brasil, incluida una exposición individual en el Museo de Arte Contemporáneo de Santa Cruz de la Sierra en 2022.',
    ],
    cv: 'CV',
    solo: 'Exposiciones individuales',
    projects: 'Proyectos',
  },

  contact: {
    title: 'Contacto',
    description: 'Escribe al artista Andy Ossorio',
    intro: 'Para obras, encargos, exposiciones o prensa. Suelo responder en pocos días.',
    name: 'Nombre',
    email: 'Correo electrónico',
    topic: 'Asunto',
    // Reasons to write, sent as the email subject. 'buy' is picked when coming from an artwork.
    topics: { buy: 'Comprar una obra', commission: 'Encargo', exhibition: 'Exposición', press: 'Prensa', other: 'Otro' },
    work: 'Sobre',
    message: 'Mensaje',
    required: 'obligatorio',
    privacy: 'Tus datos solo se usan para responderte.',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    done: 'Gracias. Tu mensaje fue enviado y te responderé pronto. Te llegará una confirmación a tu correo.',
    fail: 'No se pudo enviar el mensaje. Vuelve a intentarlo en un momento.',
    noscript: 'Para enviar, el navegador necesita tener JavaScript activado.',
  },

  // Cookie notice: analytics only run after the visitor agrees
  cookies: {
    label: 'Cookies',
    text: '¿Puede este sitio usar cookies para contar visitas? No se rastrea nada más.',
    more: 'Detalles',
    accept: 'Aceptar',
    decline: 'Rechazar',
  },

  // Privacy page: what the site keeps about visitors, in plain words
  privacy: {
    title: 'Privacidad',
    description: 'Cómo bolienvano.com usa las cookies y los mensajes enviados por el formulario de contacto.',
    sections: [
      {
        title: 'Cookies',
        paragraphs: [
          'Solo si aceptas, este sitio usa Google Analytics para contar visitas y ver qué páginas se leen. Sus cookies duran hasta dos años. Google recibe tu visita sin tu nombre ni tu correo. No hay publicidad y nada se vende ni se comparte.',
          'Si rechazas, no se guardan cookies de análisis y se borran las guardadas antes.',
        ],
        change: true,
      },
      {
        title: 'Guardado en tu navegador',
        paragraphs: [
          'El sitio recuerda, solo en tu navegador, tu elección de cookies, tu idioma, si elegiste el modo claro u oscuro y qué obra mostró la última vez la página de inicio. Nada de esto se envía a ningún lugar.',
        ],
      },
      {
        title: 'Formulario de contacto',
        paragraphs: [
          'Tu nombre, tu correo y tu mensaje se envían por correo electrónico al artista y solo se usan para responderte; tu correo recibe además una confirmación automática. No se agregan a ninguna lista ni se comparten.',
        ],
      },
      {
        title: 'Tus derechos',
        paragraphs: [
          'Según la LGPD brasileña y el RGPD europeo puedes preguntar qué se guarda sobre ti, o pedir que se borre, escribiendo por el formulario de contacto.',
        ],
      },
    ],
    change: 'Cambiar la elección de cookies',
  },

  // Certificate of authenticity, one per artwork (certificate/<slug>.html). {title} is
  // filled in by the page.
  certificate: {
    title: 'Certificado de autenticidad',
    number: 'Certificado n.º',
    artist: 'Artista',
    work: 'Título',
    year: 'Año',
    technique: 'Técnica',
    size: 'Medidas',
    edition: 'Edición',
    unique: 'Original único, 1/1',
    statement: 'Certifico que {title} es una obra original y única, concebida y realizada enteramente por mi mano, y que no existe otra versión de ella. El artista conserva los derechos de autor y de reproducción de la obra; la propiedad de la obra física pasa a su comprador.',
    owner: 'Emitido a',
    ownerCode: 'Código del propietario',
    date: 'Fecha',
    signature: 'Firma',
    verify: 'Verifica este certificado en',
    print: 'Imprimir o guardar como PDF',
    note: 'Válido solo con la firma manuscrita del artista.',
    // Registro en la blockchain de Bitcoin (solo certificados en src/data/timestamps.js)
    chain: 'Registrado en la blockchain de Bitcoin',
    block: 'bloque',
    pending: 'confirmación pendiente',
    record: 'Registro (.txt)',
    proof: 'Prueba (.ots)',
    authorship: 'Autoría',
    verifyNow: 'Comprobar',
    verifying: 'Comprobando en la blockchain de Bitcoin…',
    verifiedTitle: 'Verificado en la blockchain de Bitcoin',
    confirmedBy: 'Confirmado por',
    mismatch: 'Este registro no coincide con la blockchain de Bitcoin.',
    offline: 'No se pudo consultar Bitcoin. Vuelve a intentarlo en un momento.',
    sale: 'Colección privada',
    // Questions and answers under the certificate: the same for every certificate, so nothing
    // about one work goes here. Neutral voice of a gallery or museum, present tense, 'you' only
    // where the reader is guided. The page shows them on certificates registered on Bitcoin.
    // a is HTML; {sources} is filled in with the block explorers. The item with id 'verify'
    // gets the check button and the downloads inside its two steps.
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cómo compruebo la autenticidad de este documento?', a: '<p>La autenticidad del documento puede ser comprobada de tres maneras:</p><ul><li><strong>La firma manuscrita original del artista.</strong> Es lo que da validez al certificado; una copia impresa de esta página no la incluye.</li><li><strong>El número de certificado.</strong> Debe coincidir con el que aparece en esta página, a la que se llega escaneando el código QR.</li><li><strong>El registro de la obra en el blockchain de Bitcoin.</strong> El blockchain guarda un sello criptográfico de los datos de la obra (artista, título, año, técnica y medidas). Si alguno de esos datos se modificara, el sello dejaría de coincidir. Puedes verificarlo <a class="line-link" href="#faq-verify">aquí</a>.</li></ul>' },
        { q: '¿Qué es un blockchain?', a: '<p>El blockchain, o cadena de bloques, es una tecnología emergente que permite guardar información de forma segura y compartida, sin depender de una única empresa o institución que la controle.</p><p>En lugar de almacenarse en un solo servidor, la información se copia en miles de computadoras conectadas entre sí. Cada nuevo registro se agrupa con otros en un bloque, y cada bloque queda enlazado al anterior, formando una cadena. Modificar un dato ya registrado exigiría alterar todos los bloques siguientes en la mayoría de esas computadoras al mismo tiempo, algo que en la práctica no es posible.</p><p>Por esta razón se utiliza para dejar constancia de que un dato existía en una fecha determinada y no ha sido modificado desde entonces.</p><p>El blockchain de Bitcoin, en funcionamiento desde 2009, fue el primero y sigue siendo el más extendido. Es el que se utiliza para registrar estos certificados.</p>' },
        { id: 'verify', q: '¿Cómo se verifica el registro en el blockchain?', a: '<p>El blockchain no contiene los datos de la obra, sino su huella digital: un código único que cambia por completo si se modifica un solo carácter. Verificar el registro consiste en comprobar que esa huella figura en el blockchain y corresponde a los datos de la obra.</p><p>Existen dos formas de hacerlo:</p>', steps: ['<strong>Desde esta página.</strong> El botón Comprobar consulta cuatro exploradores de bloques: {sources}. Un explorador de bloques es un sitio web independiente que lee el blockchain de Bitcoin y permite consultar cualquiera de sus bloques. Al no pertenecer a la misma empresa ni depender de este sitio, ninguno puede alterar el resultado.', '<strong>Por cuenta propia.</strong> Sin pasar por esta página, puedes descargar el registro y su prueba (el archivo que enlaza la huella con un bloque concreto) y subirlos a <a class="line-link" href="https://opentimestamps.org" target="_blank" rel="noopener">opentimestamps.org</a>, un servicio abierto y gratuito que los confirma directamente contra el blockchain de Bitcoin.'] },
        { q: '¿Son públicos los datos del propietario de la obra?', a: '<p>No. El registro en el blockchain es público, pero no incluye el nombre del propietario ni ningún otro dato personal. Contiene únicamente una huella criptográfica, de la que no es posible deducir de quién se trata.</p><p>Esa huella se calcula a partir del nombre del propietario y de un código personal que el artista anota a mano en el certificado. De este modo, solo el propietario puede demostrar, si lo desea, que el registro le corresponde.</p>' },
        { q: '¿Qué significa «Original único, 1/1»?', a: '<p>Indica que la obra existe en un solo ejemplar. En una serie de grabados o de fotografías, una misma imagen se produce en varias copias numeradas: 1/10, 2/10, 3/10. La fracción 1/1 señala que no hay otras: la obra fue creada una sola vez por el artista y no existe ninguna edición ni reproducción firmada.</p><p>Esta singularidad es parte de lo que distingue a una obra original de una edición.</p>' },
      ],
    },
  },

  nft: {
    title: 'Hiperconciente',
    description: 'Hiperconciente es la primera incursión del artista Andy Ossorio en el arte cripto y, además, la primera obra NFT (token no fungible) expuesta en un museo boliviano.',
    year: '2022',
    medium: 'Tinta china sobre papel / Performance',
    size: '100x152 cm',
    paragraphs: [
      'Hiperconciente es la primera incursión del artista Andy Ossorio en el arte cripto y, además, la primera obra NFT (token no fungible) expuesta en un museo boliviano.',
      'Acuñada en la blockchain de Ethereum, la obra se compone de una parte digital y una parte física. Una serie de videos nos presenta una performance llena de simbolismo. A su vez, una pintura, realizada en medio de esa performance, destaca por su nivel de abstracción y su riqueza de detalles.',
      'La parte física de la obra se expone en el Museo de Arte Contemporáneo, y su parte digital, en la plataforma de arte NFT Verisart.',
    ],
    imageAlt: 'Hiperconciente, tinta china sobre papel',
    videos: ['Hiperconciente (NFT)', 'Hiperconciente'],
    visit: 'Ver el NFT',
    performance: 'Performance',
    play: 'Reproducir video',
  },

  // Invitation card to the Hiperconciencia opening (in Spanish, as printed; the page
  // exists only once, so these texts are the same in every language)
  invitation: {
    title: 'Invitación',
    description: 'Invitación a la noche de inauguración de la exposición de arte "Hiperconciencia".',
    open: 'Abrir invitación',
    host: 'Andy S.',   // as printed on the 2022 card
    intro: 'tiene el grato honor de invitarte a la',
    event: 'NOCHE DE INAUGURACIÓN DE LA EXPOSICIÓN DE ARTE',
    name: '"Hiperconciencia"',
    place: ['Museo de Arte Contemporáneo (MAC)', 'Calle Sucre Esq. Potosí'],
    placeUrl: 'https://goo.gl/maps/D4WfBrmnrYeXXsBY9',
    date: ['Jueves 4 de Agosto de 2022', '19:30'],
    organizers: 'Organiza:',
    macAlt: 'Museo de Arte Contemporáneo',
    cityAlt: 'Gobierno Autónomo Municipal de Santa Cruz',
  },

  notFound: {
    title: 'Página no encontrada',
    lines: ['Esta página no existe.'],
    back: 'Volver',
  },

  // Full-screen image viewer
  viewer: {
    label: 'Visor de imágenes',
    close: 'Cerrar',
    previous: 'Imagen anterior',
    next: 'Imagen siguiente',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    fit: 'Ajustar a la pantalla',
  },

  a11y: {
    skip: 'Ir al contenido',
    newTab: 'se abre en una pestaña nueva',
  },
};
