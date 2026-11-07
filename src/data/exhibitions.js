// Exhibitions, newest first. Texts live in src/content/<language>/exhibitions.js under the same slug.
//
//   slug     page address: exhibitions/<slug>.html
//   date     opening day, YYYY-MM-DD
//   cover    image shown in the exhibitions list (src/assets/exhibitions/), or
//   coverWork  an artwork slug instead, for shows without installation photos
//   photos   photos of the exhibition, in order
//   works    artworks shown in it (slugs from src/data/artworks.js); their pages link back
//   nft      true if the NFT Hiperconciente was part of it

export const exhibitions = [
  {
    slug: 'cor-ne-edito',
    date: '2023-06-22',
    coverWork: 'luchas',   // no installation photos of this show: one of its works
    photos: ['cor-ne-edito1.jpg', 'cor-ne-edito3.jpg'],
    works: ['humana', 'paciencia', 'ultimo-recurso', 'incertidumbre', 'nadie', 'luchas',
            'cavilaciones-matutinas', 'espera', 'invisible', 'cargando-un-fantasma', 'pesada', 'crisis'],
  },
  {
    slug: 'hiperconciencia',
    date: '2022-08-04',
    cover: 'hiperconciencia2.jpg',
    photos: ['hiperconciencia2.jpg', 'hiperconciencia3.jpg', 'hiperconciencia1.jpg'],
    works: ['tarde-de-domingo', 'sal-de-ahi', 'pausa', 'cayendo', 'rutina', 'memento', 'errores', 'disociacion', 'ausente'],
    nft: true,
  },
  {
    slug: 'introspeccion',
    date: '2021-07-31',
    cover: 'introspeccion2.jpg',
    photos: ['introspeccion3.jpg', 'introspeccion2.jpg', 'introspeccion1.jpg'],
    // To confirm with the artist: assumed to be the 2021 oils and ink drawings
    works: ['futuro', 'pasado', 'camisa-negra', 'escape', 'detalles-del-desorden',
            'miradas-pt-2-4', 'miradas-pt-2-3', 'miradas-pt-2-2', 'miradas-pt-2-1',
            'miradas-pt-1-8', 'miradas-pt-1-7', 'miradas-pt-1-6', 'miradas-pt-1-5',
            'miradas-pt-1-4', 'miradas-pt-1-3', 'miradas-pt-1-2', 'miradas-pt-1-1'],
  },
];
