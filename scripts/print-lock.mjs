// Makes the print lock of a certificate (see src/lib/lock.js).
//
//   node scripts/print-lock.mjs            a new random owner code, and its key
//   node scripts/print-lock.mjs 54GW-AGST  the key of a code you already have
//
// Paste the key line into src/data/print-lock.js. The code itself goes only on the paper
// certificate (and in Don Andy's private records), never in this repo.
import { lockFor } from '../src/lib/lock.js';

const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const random = () => Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) => alphabet[b % alphabet.length]).join('');
const code = process.argv[2] ?? `${random().slice(0, 4)}-${random().slice(4)}`;
const { salt, hash } = await lockFor(code);

console.log(`Code: ${code}`);
console.log(`{ salt: '${salt}', hash: '${hash}' }`);
