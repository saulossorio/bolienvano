// Generates /llms.txt: a plain-text summary of the site for AI assistants and
// AI search (llmstxt.org): who the artist is, the main pages, every artwork with
// its facts and availability, and the exhibitions. Built from the same data as the site.
import { t, artworkTitles, exhibitionTexts } from '../content/index.js';
import { artworks } from '../data/artworks.js';
import { exhibitions } from '../data/exhibitions.js';
import { socials } from '../data/socials.js';
import { pageUrl } from '../lib/urls.js';

const status = (a) =>
  a.status === 'available' ? `available, US$ ${a.price}` :
  a.status === 'sold' ? 'sold' : 'price on request';

export function GET({ site }) {
  const url = (path) => new URL(pageUrl(path), site).href;
  const lines = [
    `# ${t.site.name}`,
    '',
    `> ${t.site.description}`,
    '',
    ...t.about.paragraphs.map((p) => p.replace(/<[^>]+>/g, '')),
    '',
    '## Pages',
    '',
    `- [Works](${url('gallery')}): all artworks by year, with availability and prices`,
    `- [Exhibitions](${url('exhibitions')}): solo exhibitions`,
    `- [About](${url('about')}): biography`,
    `- [Contact](${url('contact')}): enquiries about works and commissions`,
    `- [Hiperconciente](${url('gallery/hiperconciente')}): ${t.nft.description}`,
    '',
    '## Artworks',
    '',
    ...artworks.map((a) =>
      `- [${artworkTitles[a.slug]}](${url(`gallery/${a.slug}`)}): ${a.year}, ${t.media[a.medium]}, ${a.size}; ${status(a)}`),
    '',
    '## Exhibitions',
    '',
    ...exhibitions.map((e) => {
      const x = exhibitionTexts[e.slug];
      return `- [${x.title}](${url(`exhibitions/${e.slug}`)}): opened ${e.date} at ${x.venue}, ${x.city}, ${x.country}. ${x.summary}`;
    }),
    '',
    '## Profiles',
    '',
    ...socials.map((s) => `- [${s.name}](${s.url})`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
