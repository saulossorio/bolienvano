// Every interface text and short page text in English.
export default {
  lang: 'en',
  locale: 'en-US',   // used to write dates ("August 4, 2022")

  site: {
    name: 'Andy Ossorio',
    description: 'Andy Ossorio is a bolivian contemporary artist based in Curitiba, Brazil. Works mainly with painting, using techniques such as oil painting, ink painting and watercolor.',
  },

  nav: {
    about: 'About',
    gallery: 'Works',
    exhibitions: 'Exhibitions',
    contact: 'Contact',
    privacy: 'Privacy',
    menu: 'Menu',
    close: 'Close menu',
    theme: 'Dark mode',
    language: 'Language',
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
    description: 'Artworks gallery by the bolivian artist Andy Ossorio',
    yearCover: 'Artworks from',
  },

  exhibitions: {
    title: 'Exhibitions',
    description: 'Solo exhibitions of the bolivian artist Andy Ossorio',
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
      'Andy Ossorio is a Bolivian painter who lives and works in Curitiba, Brazil. His work centers on the human figure and the inner life of the individual: quiet, private moments in which a feeling becomes visible.',
      'He works mainly in oil and ink, and also in watercolor. His language moves between figuration, expressionism and minimalism, and stays open to experiment.',
      'His work has been shown in Bolivia and Brazil, including a solo exhibition at the Contemporary Art Museum of Santa Cruz de la Sierra in 2022.',
    ],
    cv: 'CV',
    solo: 'Solo exhibitions',
    projects: 'Projects',
  },

  contact: {
    title: 'Contact',
    description: 'Get in touch with the artist Andy Ossorio',
    intro: 'For artworks, commissions, exhibitions or press. I usually reply within a few days.',
    name: 'Name',
    email: 'Email',
    topic: 'Subject',
    // Reasons to write, sent as the email subject. 'buy' is picked when coming from an artwork.
    topics: { buy: 'Buy a work', commission: 'Commission', exhibition: 'Exhibition', press: 'Press', other: 'Other' },
    work: 'Regarding',
    message: 'Message',
    required: 'required',
    privacy: 'Your details are only used to reply to you.',
    submit: 'Send message',
    sending: 'Sending…',
    done: 'Thank you. Your message has been sent and I will reply soon. A confirmation is on its way to your email.',
    fail: 'The message could not be sent. Please try again in a moment.',
    noscript: 'Sending needs JavaScript turned on in your browser.',
  },

  // Cookie notice: analytics only run after the visitor agrees
  cookies: {
    label: 'Cookies',
    text: 'May this site use cookies to count visits? Nothing else is tracked.',
    more: 'Details',
    accept: 'Accept',
    decline: 'Decline',
  },

  // Privacy page: what the site keeps about visitors, in plain words
  privacy: {
    title: 'Privacy',
    description: 'How bolienvano.com uses cookies and the messages sent through the contact form.',
    sections: [
      {
        title: 'Cookies',
        paragraphs: [
          'Only if you accept, this site uses Google Analytics to count visits and see which pages are read. Its cookies last up to two years. Google receives your visit without your name or email. There is no advertising and nothing is sold or shared.',
          'If you decline, no analytics cookies are set and the cookies set before are removed.',
        ],
        change: true,
      },
      {
        title: 'Stored in your browser',
        paragraphs: [
          'The site remembers, only in your browser, your cookie choice, your language, whether you chose light or dark mode and which work the home page showed last. None of this is sent anywhere.',
        ],
      },
      {
        title: 'Contact form',
        paragraphs: [
          'Your name, email and message are sent by email to the artist and used only to reply to you; your email also gets an automatic confirmation. They are not added to any list and not shared.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'Under the Brazilian LGPD and the European GDPR you can ask what is kept about you, or ask for it to be deleted, by writing through the contact form.',
        ],
      },
    ],
    change: 'Change cookie choice',
  },

  // Certificate of authenticity, one per artwork (certificate/<slug>.html). {title} and
  // {artist} are filled in by the page.
  certificate: {
    title: 'Certificate of Authenticity',
    number: 'Certificate no.',
    artist: 'Artist',
    work: 'Title',
    year: 'Year',
    technique: 'Technique',
    size: 'Dimensions',
    edition: 'Edition',
    unique: 'Unique original, 1/1',
    statement: 'I certify that {title} is an original, unique work, conceived and made entirely by my own hand, and that no other version of it exists. The artist keeps the copyright and the right to reproduce the work; ownership of the physical work passes to its buyer.',
    owner: 'Issued to',
    ownerCode: 'Owner code',
    date: 'Date',
    signature: 'Signature',
    verify: 'Verify this certificate at',
    print: 'Print or save as PDF',
    note: 'Valid only with the artist’s handwritten signature.',
    // Bitcoin blockchain record (only for certificates in src/data/timestamps.js)
    chain: 'Registered on the Bitcoin blockchain',
    block: 'block',
    pending: 'confirmation pending',
    record: 'Record (.txt)',
    proof: 'Proof (.ots)',
    authorship: 'Authorship',
    verifyNow: 'Check',
    verifying: 'Checking against the Bitcoin blockchain…',
    verifiedTitle: 'Verified on the Bitcoin blockchain',
    confirmedBy: 'Confirmed by',
    mismatch: 'This record does not match the Bitcoin blockchain.',
    offline: 'The Bitcoin sources could not be reached. Please try again in a moment.',
    sale: 'Private collection',
    // Questions and answers under the certificate: the same for every certificate, so nothing
    // about one work goes here. Neutral voice of a gallery or museum, present tense, 'you' only
    // where the reader is guided. The page shows them on certificates registered on Bitcoin.
    // a is HTML; {sources} is filled in with the block explorers. The item with id 'verify'
    // gets the check button and the downloads inside its two steps.
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How do I check the authenticity of this document?', a: '<p>The authenticity of this document can be checked in three ways:</p><ul><li><strong>The artist’s original handwritten signature.</strong> It is what makes the certificate valid; a printed copy of this page does not carry it.</li><li><strong>The certificate number.</strong> It must match the one shown on this page, which can be reached by scanning the QR code.</li><li><strong>The work’s record on the Bitcoin blockchain.</strong> The blockchain holds a cryptographic seal of the work’s details (artist, title, year, technique and dimensions). If any of those details were changed, the seal would no longer match. You can verify it <a class="line-link" href="#faq-verify">here</a>.</li></ul>' },
        { q: 'What is a blockchain?', a: '<p>A blockchain is an emerging technology that stores information securely and collectively, without relying on a single company or institution to control it.</p><p>Instead of being kept on one server, the information is copied across thousands of connected computers. Each new record is grouped with others into a block, and each block is linked to the previous one, forming a chain. Changing a record that has already been stored would require altering all the following blocks on most of those computers at the same time, which in practice is not possible.</p><p>For this reason it is used to leave proof that a piece of data existed on a given date and has not been modified since.</p><p>The Bitcoin blockchain, in operation since 2009, was the first and remains the most widely used. It is the one used to record these certificates.</p>' },
        { id: 'verify', q: 'How is the blockchain record verified?', a: '<p>The blockchain does not contain the work’s details, but their digital fingerprint: a unique code that changes completely if a single character is modified. Verifying the record means checking that this fingerprint appears on the blockchain and corresponds to the work’s details.</p><p>There are two ways to do it:</p>', steps: ['<strong>From this page.</strong> The Check button queries four block explorers: {sources}. A block explorer is an independent website that reads the Bitcoin blockchain and lets anyone look up any of its blocks. Since they do not belong to the same company or depend on this site, none of them can alter the result.', '<strong>On your own.</strong> Without going through this page, you can download the record and its proof (the file that links the fingerprint to a specific block) and upload them to <a class="line-link" href="https://opentimestamps.org" target="_blank" rel="noopener">opentimestamps.org</a>, a free, open service that confirms them directly against the Bitcoin blockchain.'] },
        { q: 'Is the owner’s information public?', a: '<p>No. The blockchain record is public, but it does not include the owner’s name or any other personal data. It contains only a cryptographic fingerprint, from which it is not possible to work out who the owner is.</p><p>That fingerprint is calculated from the owner’s name and a personal code that the artist writes by hand on the certificate. This way, only the owner can prove, if they wish, that the record belongs to them.</p>' },
        { q: 'What does “Unique original, 1/1” mean?', a: '<p>It indicates that the work exists as a single piece. In a series of prints or photographs, the same image is produced in several numbered copies: 1/10, 2/10, 3/10. The fraction 1/1 means there are no others: the work was created only once by the artist, and there is no edition or signed reproduction.</p><p>This singularity is part of what sets an original work apart from an edition.</p>' },
      ],
    },
  },

  nft: {
    title: 'Hiperconciente',
    description: 'Hiperconciente is the first incursion of the artist Andy Ossorio in the world of crypto art, and also, the first NFT (Non Fungible Token) artwork exhibited in a Bolivian museum.',
    year: '2022',
    medium: 'Indian ink on paper / Performance',
    size: '100x152 cm',
    paragraphs: [
      'Hiperconciente is the first incursion of the artist Andy Ossorio in the world of crypto art, and also, the first NFT (Non Fungible Token) artwork exhibited in a Bolivian museum.',
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
