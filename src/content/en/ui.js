// Every interface text and short page text in English.
export default {
  lang: 'en',
  locale: 'en-US',   // used to write dates ("August 4, 2022")

  site: {
    name: 'Andy S.',
    description: 'Andy S. is a bolivian contemporary artist based in Curitiba, Brazil. Works mainly with painting, using techniques such as oil painting, ink painting and watercolor.',
  },

  nav: {
    about: 'About',
    gallery: 'Works',
    exhibitions: 'Exhibitions',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close menu',
    theme: 'Dark mode',
  },

  // Techniques used in src/data/artworks.js
  media: {
    watercolor: 'Watercolor on paper',
    ink: 'Ink on paper',
    oilCanvas: 'Oil on canvas',
    oilPanel: 'Oil on panel',
  },

  artwork: {
    price: 'US$',
    available: 'Enquire about this work',
    ask: 'Ask about this work',
    seeAvailable: 'Available works',
    year: 'Year',
    technique: 'Technique',
    size: 'Size',
    status: { available: 'Available', ask: 'Price on request', sold: 'Sold' },
    detail: 'detail',
    view: 'view',
    previous: 'Previous work',
    next: 'Next work',
    back: 'All works from',
  },

  // Home page
  home: {
    allWorks: 'All works',
  },


  gallery: {
    title: 'Works',
    jump: 'Jump to year',
    works: 'works',
    availableOnly: 'Available only',
    noneAvailable: 'No works are available right now.',
    description: 'Artworks gallery by the bolivian artist Andy S.',
    yearCover: 'Artworks from',
  },

  exhibitions: {
    title: 'Exhibitions',
    description: 'Solo exhibitions of the bolivian artist Andy S.',
    photo: 'Photo',
    read: 'Read more',
    works: 'Works',
    views: 'Installation views',
    nftAlso: 'Also shown, as an NFT',
    exhibitedIn: 'Exhibited in',
  },

  about: {
    title: 'About',
    // Biography: third person, facts only
    paragraphs: [
      'Andy S. is a Bolivian painter who lives and works in Curitiba, Brazil. His work centers on the human figure and the inner life of the individual: quiet, private moments in which a feeling becomes visible.',
      'He works mainly in oil and ink, and also in watercolor. His language moves between figuration, expressionism and minimalism, and stays open to experiment.',
      'His work has been shown in Bolivia and Brazil, including a solo exhibition at the Contemporary Art Museum of Santa Cruz de la Sierra in 2022.',
    ],
    cv: 'CV',
    solo: 'Solo exhibitions',
    projects: 'Projects',
  },

  contact: {
    title: 'Contact',
    description: 'Get in touch with the artist Andy S.',
    intro: 'For artworks, commissions, exhibitions or press. I usually reply within a few days.',
    mapTitle: 'Based in Curitiba, Brazil',
    name: 'Name',
    email: 'Email',
    topic: 'About',
    // Reasons to write, sent as the email subject. 'buy' is picked when coming from an artwork.
    topics: { buy: 'Buying a work', commission: 'A commission', exhibition: 'An exhibition', press: 'Press', other: 'Something else' },
    work: 'Regarding',
    message: 'Message',
    required: 'required',
    privacy: 'Your details are only used to reply to you.',
    submit: 'Send message',
    sending: 'Sending…',
    done: 'Thank you. Your message has been sent and I will reply soon.',
    fail: 'The message could not be sent. Please try again in a moment.',
  },

  // Cookie notice: analytics only run after the visitor agrees
  cookies: {
    label: 'Cookies',
    text: 'May this site use cookies to count visits? Nothing else is tracked.',
    accept: 'Accept',
    decline: 'Decline',
    settings: 'Cookies',
  },

  nft: {
    title: 'Hiperconciente',
    description: 'Hiperconciente is the first incursion of the artist Andy S. in the world of crypto art, and also, the first NFT (Non Fungible Token) artwork exhibited in a Bolivian museum.',
    year: '2022',
    medium: 'Indian ink on paper / Performance',
    size: '100x152 cm',
    paragraphs: [
      'Hiperconciente is the first incursion of the artist Andy S. in the world of crypto art, and also, the first NFT (Non Fungible Token) artwork exhibited in a Bolivian museum.',
      'Minted in the Ethereum blockchain, the work is made up of a digital part and a physical part. A series of videos present us a wonderful performance full of symbolism. Likewise, a painting, made in the middle of the aforementioned performance, stands out for its level of abstraction and richness of details.',
      'The physical part of the work is exhibited at the Museum of Contemporary Art, and its digital part, on the NFT Verisart art platform.',
    ],
    imageAlt: 'Hiperconciente, Indian ink on paper',
    videos: ['Hiperconciente (NFT)', 'Hiperconciente'],
    visit: 'Visit NFT',
    performance: 'Performance',
    play: 'Play video',
  },

  // Invitation card to the Hiperconciencia opening (in Spanish, as printed)
  invitation: {
    title: 'Invitación',
    description: 'Invitación a la noche de inauguración de la exposición de arte "Hiperconciencia".',
    open: 'Abrir invitación',
    host: 'Andy S.',
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
    title: 'Page not found',
    lines: ['This page does not exist.'],
    back: 'Go back',
  },

  // Full-screen image viewer
  viewer: {
    label: 'Image viewer',
    close: 'Close',
    previous: 'Previous image',
    next: 'Next image',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    fit: 'Fit to screen',
  },

  a11y: {
    skip: 'Skip to content',
    newTab: 'opens in a new tab',
  },
};
