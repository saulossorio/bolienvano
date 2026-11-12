// Certificates registered on the Bitcoin blockchain with OpenTimestamps, by certificate
// number (coa in src/data/artworks.js), oldest record first.
//
// Each record has two files in public/certificate/proof/: the text that was registered
// (<file>.txt, never edited afterwards: one changed letter breaks the proof) and its
// proof (<file>.ots).
//
//   file      file name: <coa> for the authorship, <coa>-<n> for the n-th sale
//   kind      'authorship' (the artist declares the work, once) or 'sale' (ownership passes
//             to a buyer; the record holds only the SHA-256 of the owner's record, their name
//             plus a secret code that the owner keeps with the paper certificate, so no name
//             is ever public. Each sale also holds the SHA-256 of the record before it)
//   stamped   day the record was sent (YYYY-MM-DD)
//   block     Bitcoin block that confirms it; null while the confirmation is pending
//   date      day of that block (YYYY-MM-DD)

export const timestamps = {
  'AO-2019-ARE3': [
    { file: 'AO-2019-ARE3',   kind: 'authorship', stamped: '2026-11-12', block: 975519, date: '2026-11-12' },
    { file: 'AO-2019-ARE3-1', kind: 'sale',       stamped: '2026-11-12', block: 975519, date: '2026-11-12' },
  ],
};
