// Every interface text and short page text in English.
export default {
  lang: 'en',
  locale: 'en-US',   // used to write dates ("August 4, 2022")

  site: {
    name: 'Andy S.',
    description: 'Andy S. is a bolivian contemporary artist based in Curitiba, Brazil. Works mainly with painting, using techniques such as oil painting, ink painting and watercolor.',
    credit: 'Sierra Agencia Digital',
  },

  nav: {
    home: 'Home',
    about: 'About',
    gallery: 'Gallery',
    nft: 'NFT',
    exhibitions: 'Exhibitions',
    contact: 'Contact',
    menu: 'Menu',
  },

  // Techniques used in src/data/artworks.js
  media: {
    watercolor: 'Watercolor on paper',
    ink: 'Ink on paper',
    oilCanvas: 'Oil on canvas',
    oilPanel: 'Oil on panel',
  },

  artwork: {
    price: 'Price: U$',
    available: 'Contact',
    ask: 'Ask here',
    sold: 'Not available',
    detail: 'detail',
    view: 'view',
  },

  gallery: {
    title: 'Gallery',
    description: 'Artworks gallery by the bolivian artist Andy S.',
    yearCover: 'Artworks from',
  },

  exhibitions: {
    title: 'Exhibitions',
    description: 'Solo exhibitions of the bolivian artist Andy S.',
    previous: 'Previous photo',
    next: 'Next photo',
    photo: 'Photo',
  },

  about: {
    title: 'About',
    photoAlt: 'Andy S. picture',
    paragraphs: [
      'Andy S. is a bolivian artist currently living in Curitiba, Brazil.',
      'Inspired by the beauty of hidden emotions in the world around him, he creates paintings that unearth deep feelings capturing the inner world of the individual.',
      'Andy works focused on figurative art, expressionism and minimalism, however, his work is under constant experimentation.',
      'His contemporary artworks focus above all on the human figure.',
      'While mostly known for his oil paintings and ink drawings, Andy S. has also experience as a watercolorist and digital illustrator.',
    ],
  },

  contact: {
    title: 'Contact',
    description: 'Get in touch with the artist Andy S.',
    heading: 'Get in touch',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Submit',
    sending: 'Please wait...',
    done: "Thank you for your message! I'll be in contact very soon.",
    fail: 'Oops! Something went wrong while submitting the form. Please contact me in a different way.',
    mapHeading: "I'm currently here...",
    mapTitle: 'Current location: Curitiba, Brazil',
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
    lines: ['Page under construction', 'Please come back later'],
    back: 'Go back',
  },

  a11y: {
    skip: 'Skip to content',
    newTab: 'opens in a new tab',
  },
};
