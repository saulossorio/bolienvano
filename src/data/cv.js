// The artist's CV, shown on the About page. Solo exhibitions come from
// src/data/exhibitions.js; everything else is listed here, newest first.
// Add sections the same way (e.g. education, group exhibitions, collections, press):
// a title in src/content/<language>/ui.js under about, and a list here.
// venue, city and country are shown on lines of their own under the text.
// Texts that change with the language have one value per language (en, es, pt).

export const projects = [
  {
    year: 2022,
    text: {
      en: '<em>Hiperconciente</em>, the first NFT artwork exhibited in a Bolivian museum',
      es: '<em>Hiperconciente</em>, la primera obra NFT expuesta en un museo boliviano',
      pt: '<em>Hiperconciente</em>, a primeira obra NFT exposta em um museu boliviano',
    },
    venue: { en: 'Contemporary Art Museum', es: 'Museo de Arte Contemporáneo', pt: 'Museu de Arte Contemporânea' },
    city: 'Santa Cruz de la Sierra',
    country: { en: 'Bolivia', es: 'Bolivia', pt: 'Bolívia' },
    link: 'gallery/hiperconciente',
  },
];
