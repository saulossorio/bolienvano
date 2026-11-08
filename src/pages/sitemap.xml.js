// Generates /sitemap.xml with every public page in every language, each one listing
// its versions in the other languages (hreflang), as search engines ask.
import { artworks, years } from '../data/artworks.js';
import { exhibitions } from '../data/exhibitions.js';
import { pageUrl, languages } from '../lib/urls.js';

const paths = [
  '', 'about', 'gallery', 'gallery/hiperconciente', 'exhibitions', 'contact', 'privacy',
  ...years.map((y) => `gallery/${y.year}`),
  ...artworks.map((a) => `gallery/${a.slug}`),
  ...exhibitions.map((e) => `exhibitions/${e.slug}`),
];

export function GET({ site }) {
  const href = (p, lang) => new URL(pageUrl(p, lang), site).href;
  const urls = paths.flatMap((p) => languages.map((lang) => [
    `  <url><loc>${href(p, lang)}</loc>`,
    ...languages.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href(p, l)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${href(p, 'en')}"/>`,
    '  </url>',
  ].join('\n')));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
