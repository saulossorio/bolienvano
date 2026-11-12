// Checks a certificate's blockchain record in the visitor's browser, without trusting this
// website: it reads the OpenTimestamps proof (.ots), follows its SHA-256 steps from the
// record's text up to a Bitcoin block, and asks four independent block explorers whether
// that block really holds the result (its merkle root).
//
// Only what the proofs in public/certificate/proof/ use is read: append, prepend, SHA-256,
// and the Bitcoin attestation (pending attestations are skipped).

const MAGIC = [0x00, 0x4f, 0x70, 0x65, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x73, 0x00, 0x00, 0x50, 0x72, 0x6f, 0x6f, 0x66, 0x00, 0xbf, 0x89, 0xe2, 0xe8, 0x84, 0xe8, 0x92, 0x94];
const BITCOIN = '0588960d73d71901';

const hex = (bytes) => [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
const concat = (a, b) => { const c = new Uint8Array(a.length + b.length); c.set(a); c.set(b, a.length); return c; };
const sha256 = async (bytes) => new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));

// The Bitcoin blocks a proof leads to: [{ height, root }], or null if the record doesn't match
export async function readProof(record, ots) {
  let i = 0;
  const byte = () => { if (i >= ots.length) throw new Error('Proof ends too early'); return ots[i++]; };
  const bytes = (n) => { const b = ots.slice(i, i + n); i += n; return b; };
  const varuint = (read = byte) => { let value = 0, shift = 0, b; do { b = read(); value += (b & 0x7f) * 2 ** shift; shift += 7; } while (b & 0x80); return value; };
  const varbytes = () => bytes(varuint());

  if (MAGIC.some((b, k) => ots[k] !== b)) throw new Error('Not an OpenTimestamps proof');
  i = MAGIC.length;
  varuint();                                            // version
  if (byte() !== 0x08) throw new Error('Unknown hash');  // the record is hashed with SHA-256
  const digest = bytes(32);
  if (hex(await sha256(record)) !== hex(digest)) return null;

  const blocks = [];
  async function walk(msg) {
    const step = async (tag) => {
      if (tag === 0x00) {
        const kind = hex(bytes(8)), payload = varbytes();
        if (kind === BITCOIN) { let j = 0; blocks.push({ height: varuint(() => payload[j++]), root: hex([...msg].reverse()) }); }
        return;
      }
      if (tag === 0xf0) return walk(concat(msg, varbytes()));
      if (tag === 0xf1) return walk(concat(varbytes(), msg));
      if (tag === 0x08) return walk(await sha256(msg));
      throw new Error(`Unknown step ${tag}`);
    };
    let tag = byte();
    while (tag === 0xff) { await step(byte()); tag = byte(); }
    await step(tag);
  }
  await walk(digest);
  return blocks;
}

// Four independent sources for a block: its hash, merkle root and time (seconds)
const json = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(r.status); return r.json(); };
const text = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(r.status); return r.text(); };
const esplora = (api) => async (height) => {
  const hash = await text(`${api}/block-height/${height}`);
  const b = await json(`${api}/block/${hash}`);
  return { hash, root: b.merkle_root, time: b.timestamp };
};
export const explorers = [
  {
    name: 'Blockchain.com',
    get: async (height) => { const [b] = await json(`https://api.blockchain.info/haskoin-store/btc/block/height/${height}?notx=true`); return { hash: b.hash, root: b.merkle, time: b.time }; },
    link: (hash) => `https://www.blockchain.com/explorer/blocks/btc/${hash}`,
  },
  { name: 'Blockstream', get: esplora('https://blockstream.info/api'), link: (hash) => `https://blockstream.info/block/${hash}` },
  { name: 'Mempool', get: esplora('https://mempool.space/api'), link: (hash) => `https://mempool.space/block/${hash}` },
  {
    name: 'BlockCypher',
    get: async (height) => { const b = await json(`https://api.blockcypher.com/v1/btc/main/blocks/${height}?limit=1`); return { hash: b.hash, root: b.mrkl_root, time: Date.parse(b.time) / 1000 }; },
    link: (hash) => `https://live.blockcypher.com/btc/block/${hash}/`,
  },
];
