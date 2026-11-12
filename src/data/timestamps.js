// Certificates registered on the Bitcoin blockchain with OpenTimestamps, by certificate
// number (coa in src/data/artworks.js).
//
// For each one, public/certificate/proof/ holds the record that was registered
// (<coa>.txt, never edited afterwards) and its proof (<coa>.ots). The page shows the
// record's SHA-256 and links both files so anyone can check them on opentimestamps.org.
//
//   stamped   day the record was sent (YYYY-MM-DD)
//   block     Bitcoin block that confirms it; null while the confirmation is pending
//   date      day of that block (YYYY-MM-DD)

export const timestamps = {
  'AO-2019-ARE3': { stamped: '2026-11-12', block: null, date: null },
};
