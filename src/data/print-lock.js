// Who can print or save a certificate (src/lib/lock.js). Only salted fingerprints are kept
// here: never write a code in this file or anywhere in the repo.
//
//   master   the artist's own code, opens every certificate
//   owners   the owner's code of each work that has been sold, by certificate number
//            (the code written by hand on the paper certificate)
//
// To make a key: node scripts/print-lock.mjs [code]   (see the script)

export const master = { salt: '78a9c37e43118d5731391b9fdfe458c7', hash: '4783dd92d418d2e81042cdd5852086f87a2fd6fe816edc4dd8fb7c38ca1abc75' };

export const owners = {
  // Test sale of Cuadrito
  'AO-2019-ARE3': { salt: '972247d29cdc218c01a5ea4063c62143', hash: '71b053551266ccc63140fdb37211dc1d4b78265dfd99bd9d10ba578c67f7c8d0' },
};
