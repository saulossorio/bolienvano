// Who can print or save a certificate (src/lib/lock.js). Only salted fingerprints are kept
// here: never write a code in this file or anywhere in the repo.
//
//   master   the artist's own code, opens every certificate
//   owners   the owner's code of each work that has been sold, by certificate number
//            (the code written by hand on the paper certificate)
//
// To make a key: node scripts/print-lock.mjs [code]   (see the script)

export const master = { salt: 'd2e157d932475b473a629b6afda3caf9', hash: '4c2f9f184b9a2c38c6e4da8220d83520ef56b007ace51f8942475de5db9e6d60' };

export const owners = {
  // Test sale of Cuadrito
  'AO-2019-ARE3': { salt: '972247d29cdc218c01a5ea4063c62143', hash: '71b053551266ccc63140fdb37211dc1d4b78265dfd99bd9d10ba578c67f7c8d0' },
};
