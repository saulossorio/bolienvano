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
    date: 'Fecha',
    signature: 'Firma',
    verify: 'Verifica este certificado en',
    print: 'Imprimir o guardar como PDF',
    note: 'Válido solo con la firma manuscrita del artista.',
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
