// All artworks, newest year first; inside each year, in gallery order.
// Texts (title, technique) live in src/content/<language>/artworks.js under the same slug.
//
//   slug      page address: gallery/<slug>.html, and image names in src/assets/artworks/
//   year      gallery year
//   medium    technique key, translated in src/content/<language>/ui.js (media)
//   size      as written on the label
//   price     in US dollars, only when it is for sale at a fixed price
//   status    'available' (shows price + Contact), 'ask' (Ask here), 'sold' (Not available)
//   coa       certificate of authenticity number, AO-<year>-<4 random characters>: random so
//             it says nothing about how many works there are; fixed once given, never
//             changed or reused (certificate/<slug>.html)
//
// Each artwork has three images: <slug>_mockup.jpg, <slug>_zoom1.jpg, <slug>_zoom2.jpg

export const artworks = [
  // 2023
  { slug: 'humana',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-RXNA' },
  { slug: 'paciencia',              year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-HT6T' },
  { slug: 'ultimo-recurso',         year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-UC3N' },
  { slug: 'incertidumbre',          year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-RGHV' },
  { slug: 'nadie',                  year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-V2AW' },
  { slug: 'luchas',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 244, status: 'available', coa: 'AO-2023-WSXS' },
  { slug: 'cavilaciones-matutinas', year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-3XR4' },
  { slug: 'espera',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-768B' },
  { slug: 'invisible',              year: 2023, medium: 'watercolor', size: '23x23 cm', price: 262, status: 'available', coa: 'AO-2023-8Q9K' },
  { slug: 'cargando-un-fantasma',   year: 2023, medium: 'watercolor', size: '23x23 cm', price: 295, status: 'available', coa: 'AO-2023-XJ6F' },
  { slug: 'pesada',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 210, status: 'available', coa: 'AO-2023-S5XT' },
  { slug: 'crisis',                 year: 2023, medium: 'watercolor', size: '23x23 cm', price: 244, status: 'available', coa: 'AO-2023-NQBK' },

  // 2022
  { slug: 'tarde-de-domingo', year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask', coa: 'AO-2022-F8MP' },
  { slug: 'sal-de-ahi',       year: 2022, medium: 'ink', size: '100x152 cm', status: 'sold', coa: 'AO-2022-82CG' },
  { slug: 'pausa',            year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask', coa: 'AO-2022-M6EQ' },
  { slug: 'cayendo',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask', coa: 'AO-2022-2959' },
  { slug: 'rutina',           year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask', coa: 'AO-2022-4TVE' },
  { slug: 'memento',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask', coa: 'AO-2022-C7SR' },
  { slug: 'errores',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'ask', coa: 'AO-2022-J3SF' },
  { slug: 'disociacion',      year: 2022, medium: 'ink', size: '100x152 cm', status: 'sold', coa: 'AO-2022-SU78' },
  { slug: 'ausente',          year: 2022, medium: 'ink', size: '100x152 cm', status: 'sold', coa: 'AO-2022-X5HG' },

  // 2021
  { slug: 'detalles-del-desorden', year: 2021, medium: 'ink',       size: '29x29 cm', status: 'ask', coa: 'AO-2021-9RHE' },
  { slug: 'miradas-pt-2-4',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'sold', coa: 'AO-2021-3WEQ' },
  { slug: 'miradas-pt-2-3',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'ask', coa: 'AO-2021-KS7Z' },
  { slug: 'miradas-pt-2-2',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'sold', coa: 'AO-2021-GDPV' },
  { slug: 'miradas-pt-2-1',        year: 2021, medium: 'ink',       size: '29x42 cm', status: 'sold', coa: 'AO-2021-5ZHE' },
  { slug: 'miradas-pt-1-8',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask', coa: 'AO-2021-TZ7M' },
  { slug: 'miradas-pt-1-7',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold', coa: 'AO-2021-4CGZ' },
  { slug: 'miradas-pt-1-6',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask', coa: 'AO-2021-DN64' },
  { slug: 'miradas-pt-1-5',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold', coa: 'AO-2021-YUXY' },
  { slug: 'miradas-pt-1-4',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold', coa: 'AO-2021-NS7K' },
  { slug: 'miradas-pt-1-3',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'sold', coa: 'AO-2021-URTM' },
  { slug: 'miradas-pt-1-2',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask', coa: 'AO-2021-MBSC' },
  { slug: 'miradas-pt-1-1',        year: 2021, medium: 'ink',       size: '15x21 cm', status: 'ask', coa: 'AO-2021-DP68' },
  { slug: 'futuro',                year: 2021, medium: 'oilCanvas', size: '40x30 cm', status: 'ask', coa: 'AO-2021-C3KU' },
  { slug: 'pasado',                year: 2021, medium: 'oilCanvas', size: '30x40 cm', status: 'sold', coa: 'AO-2021-CMJF' },
  { slug: 'camisa-negra',          year: 2021, medium: 'oilCanvas', size: '30x40 cm', status: 'sold', coa: 'AO-2021-APBD' },
  { slug: 'escape',                year: 2021, medium: 'oilPanel',  size: '40x30 cm', status: 'ask', coa: 'AO-2021-CPTA' },

  // 2020
  { slug: 'reflejo',       year: 2020, medium: 'oilPanel', size: '40x30 cm', status: 'ask', coa: 'AO-2020-JUSV' },
  { slug: 'joven-y-viejo', year: 2020, medium: 'oilPanel', size: '40x30 cm', status: 'ask', coa: 'AO-2020-UUGY' },

  // 2019
  { slug: 'inspired', year: 2019, medium: 'watercolor', size: '23x30 cm', status: 'ask', coa: 'AO-2019-F8KV' },
  { slug: 'cuadrito', year: 2019, medium: 'watercolor', size: '15x15 cm', status: 'ask', coa: 'AO-2019-ARE3' },
];

// Gallery years, newest first, with the artwork whose detail is the year's cover
export const years = [
  { year: 2023, cover: 'invisible' },
  { year: 2022, cover: 'tarde-de-domingo' },
  { year: 2021, cover: 'miradas-pt-1-5' },
  { year: 2020, cover: 'joven-y-viejo' },
  { year: 2019, cover: 'inspired' },
];
