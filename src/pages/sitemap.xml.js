// Generates /sitemap.xml with every public page.
import { artworks, years } from '../data/artworks.js';
import { exhibitions } from '../data/exhibitions.js';
import { pageUrl } from '../lib/urls.js';

const paths = [
  '', 'about', 'gallery', 'gallery/hiperconciente', 'exhibitions', 'contact', 'privacy',
  ...years.map((y) => `gallery/${y.year}`),
  ...artworks.map((a) => `gallery/${a.slug}`),
  ...exhibitions.map((e) => `exhibitions/${e.slug}`),
];

export function GET({ site }) {
  const urls = paths.map((p) => `  <url><loc>${new URL(pageUrl(p), site).href}</loc></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
