// Exhibitions, newest first. Texts live in src/content/<language>/exhibitions.js under the same slug.
//
//   slug     page address: exhibitions/<slug>.html
//   date     opening day, YYYY-MM-DD
//   cover    image shown in the exhibitions list (src/assets/exhibitions/)
//   photos   images of the page slider, in order

export const exhibitions = [
  {
    slug: 'cor-ne-edito',
    date: '2023-06-22',
    cover: 'cor-ne-edito_tb.jpg',
    photos: ['cor-ne-edito1.jpg', 'cor-ne-edito3.jpg'],
  },
  {
    slug: 'hiperconciencia',
    date: '2022-08-04',
    cover: 'hiperconciencia2.jpg',
    photos: ['hiperconciencia2.jpg', 'hiperconciencia3.jpg', 'hiperconciencia1.jpg'],
  },
  {
    slug: 'introspeccion',
    date: '2021-07-31',
    cover: 'introspeccion2.jpg',
    photos: ['introspeccion3.jpg', 'introspeccion2.jpg', 'introspeccion1.jpg'],
  },
];
