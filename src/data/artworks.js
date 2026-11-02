// All artworks, newest year first; inside each year, in gallery order.
// Texts (title, technique) live in src/content/<language>/artworks.js under the same slug.
//
//   slug      page address: gallery/<slug>.html, and image names in src/assets/artworks/
//   year      gallery year
//   medium    technique key, translated in src/content/<language>/ui.js (media)
//   size      as written on the label
//   price     in US dollars, only when it is for sale at a fixed price
//   status    'available' (shows price + Contact), 'ask' (Ask here), 'sold' (Not available)
//
// Each artwork has three images: <slug>_mockup.jpg, <slug>_zoom1.jpg, <slug>_zoom2.jpg

export const artworks = [
  // 2023
  { slug: 'humana',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'paciencia',              year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'ultimo-recurso',         year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'incertidumbre',          year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'nadie',                  year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'luchas',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 244, status: 'available' },
  { slug: 'cavilaciones-matutinas', year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'espera',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'invisible',              year: 2023, medium: 'watercolor', size: '23x23 cm', price: 262, status: 'available' },
  { slug: 'cargando-un-fantasma',   year: 2023, medium: 'watercolor', size: '23x23 cm', price: 295, status: 'available' },
  { slug: 'pesada',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available' },
  { slug: 'crisis',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 244, status: 'available' },

  // 2022
  { slug: 'tarde-de-domingo', year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask' },
  { slug: 'sal-de-ahi',       year: 2022, medium: 'ink', size: '100x152 cm', status: 'sold' },
  { slug: 'pausa',            year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask' },
  { slug: 'cayendo',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask' },
  { slug: 'rutina',           year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask' },
  { slug: 'memento',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask' },
  { slug: 'errores',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask' },
  { slug: 'disociacion',      year: 2022, medium: 'ink', size: '100x152 cm', status: 'sold' },
  { slug: 'ausente',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'sold' },

  // 2021
  { slug: 'detalles-del-desorden', year: 2021, medium: 'ink',       size: '29x29 cm', status: 'ask' },
  { slug: 'miradas-pt-2-4',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'sold' },
  { slug: 'miradas-pt-2-3',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'ask' },
  { slug: 'miradas-pt-2-2',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'sold' },
  { slug: 'miradas-pt-2-1',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'sold' },
  { slug: 'miradas-pt-1-8',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask' },
  { slug: 'miradas-pt-1-7',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold' },
  { slug: 'miradas-pt-1-6',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask' },
  { slug: 'miradas-pt-1-5',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold' },
  { slug: 'miradas-pt-1-4',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold' },
  { slug: 'miradas-pt-1-3',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold' },
  { slug: 'miradas-pt-1-2',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask' },
  { slug: 'miradas-pt-1-1',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask' },
  { slug: 'futuro',                year: 2021, medium: 'oilCanvas', size: '40x30 cm', status: 'ask' },
  { slug: 'pasado',                year: 2021, medium: 'oilCanvas', size: '30x40 cm', status: 'sold' },
  { slug: 'camisa-negra',          year: 2021, medium: 'oilCanvas', size: '30x40 cm', status: 'sold' },
  { slug: 'escape',                year: 2021, medium: 'oilPanel',  size: '40x30 cm', status: 'ask' },

  // 2020
  { slug: 'reflejo',       year: 2020, medium: 'oilPanel', size: '40x30 cm', status: 'ask' },
  { slug: 'joven-y-viejo', year: 2020, medium: 'oilPanel', size: '40x30 cm', status: 'ask' },

  // 2019
  { slug: 'inspired', year: 2019, medium: 'watercolor', size: '23x30 cm', status: 'ask' },
  { slug: 'cuadrito', year: 2019, medium: 'watercolor', size: '15x15 cm', status: 'ask' },
];

// Gallery years, newest first, with the artwork whose detail is the year's cover
export const years = [
  { year: 2023, cover: 'invisible' },
  { year: 2022, cover: 'tarde-de-domingo' },
  { year: 2021, cover: 'miradas-pt-1-5' },
  { year: 2020, cover: 'joven-y-viejo' },
  { year: 2019, cover: 'inspired' },
];
