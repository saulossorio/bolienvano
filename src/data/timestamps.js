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
//   time      UTC time of that block (HH:MM)

export const timestamps = {
  'AO-2019-ARE3': [
    { file: 'AO-2019-ARE3',   kind: 'authorship', stamped: '2026-11-12', block: 975519, date: '2026-11-12', time: '04:20' },
  ],
  'AO-2023-RXNA': [
    { file: 'AO-2023-RXNA', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-HT6T': [
    { file: 'AO-2023-HT6T', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-UC3N': [
    { file: 'AO-2023-UC3N', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-RGHV': [
    { file: 'AO-2023-RGHV', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-V2AW': [
    { file: 'AO-2023-V2AW', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-WSXS': [
    { file: 'AO-2023-WSXS', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-3XR4': [
    { file: 'AO-2023-3XR4', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-768B': [
    { file: 'AO-2023-768B', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-8Q9K': [
    { file: 'AO-2023-8Q9K', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-XJ6F': [
    { file: 'AO-2023-XJ6F', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-S5XT': [
    { file: 'AO-2023-S5XT', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2023-NQBK': [
    { file: 'AO-2023-NQBK', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-F8MP': [
    { file: 'AO-2022-F8MP', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-82CG': [
    { file: 'AO-2022-82CG', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-M6EQ': [
    { file: 'AO-2022-M6EQ', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-2959': [
    { file: 'AO-2022-2959', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-4TVE': [
    { file: 'AO-2022-4TVE', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-C7SR': [
    { file: 'AO-2022-C7SR', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-J3SF': [
    { file: 'AO-2022-J3SF', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-SU78': [
    { file: 'AO-2022-SU78', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2022-X5HG': [
    { file: 'AO-2022-X5HG', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-C3KU': [
    { file: 'AO-2021-C3KU', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-CMJF': [
    { file: 'AO-2021-CMJF', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-APBD': [
    { file: 'AO-2021-APBD', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-CPTA': [
    { file: 'AO-2021-CPTA', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-9RHE': [
    { file: 'AO-2021-9RHE', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-3WEQ': [
    { file: 'AO-2021-3WEQ', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-KS7Z': [
    { file: 'AO-2021-KS7Z', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-GDPV': [
    { file: 'AO-2021-GDPV', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-5ZHE': [
    { file: 'AO-2021-5ZHE', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-TZ7M': [
    { file: 'AO-2021-TZ7M', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-4CGZ': [
    { file: 'AO-2021-4CGZ', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-DN64': [
    { file: 'AO-2021-DN64', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-YUXY': [
    { file: 'AO-2021-YUXY', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-NS7K': [
    { file: 'AO-2021-NS7K', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-URTM': [
    { file: 'AO-2021-URTM', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-MBSC': [
    { file: 'AO-2021-MBSC', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2021-DP68': [
    { file: 'AO-2021-DP68', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2020-JUSV': [
    { file: 'AO-2020-JUSV', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2020-UUGY': [
    { file: 'AO-2020-UUGY', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
  'AO-2019-F8KV': [
    { file: 'AO-2019-F8KV', kind: 'authorship', stamped: '2026-11-14', block: 975860, date: '2026-11-14', time: '23:48' },
  ],
};
