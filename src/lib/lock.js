// The print lock of the certificates. Printing or saving a certificate asks for a code: the
// artist's own, or the owner's code of that work (the one written by hand on the paper
// certificate). The page only holds a salted PBKDF2 fingerprint of each code, never the code.
//
// It keeps casual visitors from printing; it cannot stop someone who knows how to read a
// page's code, and doesn't need to: a printed copy has no handwritten signature, so it is
// worth nothing. The same function runs in the browser and in scripts/print-lock.mjs.

const ITERATIONS = 210000;

// Codes are read without case, spaces or dashes: 54gw agst = 54GW-AGST
export const normalize = (code) => code.toUpperCase().replace(/[^A-Z0-9]/g, '');

const hex = (bytes) => [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
const unhex = (text) => Uint8Array.from(text.match(/../g), (b) => parseInt(b, 16));

export async function fingerprint(code, salt) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(normalize(code)), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: unhex(salt), iterations: ITERATIONS }, key, 256);
  return hex(bits);
}

// Does the code open any of these { salt, hash } keys?
export async function opens(code, keys) {
  if (!normalize(code)) return false;
  for (const key of keys) {
    if (await fingerprint(code, key.salt) === key.hash) return true;
  }
  return false;
}

// A new key for a code: { salt, hash }
export async function lockFor(code) {
  const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
  return { salt, hash: await fingerprint(code, salt) };
}
