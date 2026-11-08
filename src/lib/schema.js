// Structured data (schema.org JSON-LD) so search engines and AI assistants can
// read the site as facts: who the artist is, each artwork (year, technique, size,
// price) and each exhibition (date, venue, works shown). Base.astro writes it into
// every page; pages add their own item through the `schema` prop. Every item is in
// the language of its page.
import { texts } from '../content/index.js';
import { socials } from '../data/socials.js';
import { pageUrl } from './urls.js';

const url = (path, site, lang) => new URL(pageUrl(path, lang), site).href;
// One id for the artist in every language, so it is always the same person
export const artistId = (site) => `${url('', site)}#artist`;

// The artist and the website, on every page
export function siteGraph(site, lang) {
  const { t } = texts(lang);
  return [
    {
      '@type': 'Person',
      '@id': artistId(site),
      name: t.site.name,
      // Earlier names, so search engines link them to the same artist
      alternateName: ['Andy S.', 'Andy Serrano', 'bolienvano'],
      jobTitle: 'Painter',
      description: t.site.description,
      nationality: { '@type': 'Country', name: 'Bolivia' },
      homeLocation: { '@type': 'Place', name: 'Curitiba, Brazil' },
      url: url('', site),
      sameAs: socials.map((s) => s.url),
    },
    {
      '@type': 'WebSite',
      '@id': `${url('', site, lang)}#website`,
      name: t.site.name,
      url: url('', site, lang),
      inLanguage: t.lang,
      publisher: { '@id': artistId(site) },
    },
  ];
}

// "100x152 cm" -> width and height
function dimensions(size) {
  const m = size.match(/([\d.]+)\s*x\s*([\d.]+)\s*(cm|mm|m)/i);
  if (!m) return {};
  const d = (v) => ({ '@type': 'Distance', name: `${v} ${m[3]}` });
  return { width: d(m[1]), height: d(m[2]) };
}

export function artworkSchema(artwork, site, imageUrl, lang) {
  const { t, artworkTitles } = texts(lang);
  const page = url(`gallery/${artwork.slug}`, site, lang);
  const item = {
    '@type': 'VisualArtwork',
    '@id': `${page}#artwork`,
    name: artworkTitles[artwork.slug],
    url: page,
    image: imageUrl,
    creator: { '@id': artistId(site) },
    dateCreated: String(artwork.year),
    artform: 'Painting',
    artMedium: t.media[artwork.medium],
    ...dimensions(artwork.size),
  };
  if (artwork.status === 'available' && artwork.price) {
    item.offers = {
      '@type': 'Offer', price: artwork.price, priceCurrency: 'USD',
      availability: 'https://schema.org/InStock', url: page,
    };
  } else if (artwork.status === 'sold') {
    item.offers = { '@type': 'Offer', availability: 'https://schema.org/SoldOut', url: page };
  }
  return item;
}

export function exhibitionSchema(exhibition, site, imageUrl, lang) {
  const text = texts(lang).exhibitionTexts[exhibition.slug];
  return {
    '@type': 'ExhibitionEvent',
    name: text.title,
    url: url(`exhibitions/${exhibition.slug}`, site, lang),
    image: imageUrl,
    description: text.summary,
    startDate: exhibition.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: text.venue, address: { '@type': 'PostalAddress', addressLocality: text.city, addressCountry: text.country } },
    organizer: { '@id': artistId(site) },
    workFeatured: (exhibition.works ?? []).map((slug) => ({ '@id': `${url(`gallery/${slug}`, site, lang)}#artwork` })),
  };
}
