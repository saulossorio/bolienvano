// Texts of the site, one folder per language (en, es, pt), with the same keys.
// A page or component gets the texts of its own language with useTexts(Astro):
//   const { t, artworkTitles, exhibitionTexts, url, date, lang } = useTexts(Astro);
// url('about') links to a page in that same language; date() writes a date in it.
// To add a language: copy src/content/en/ to a new folder, translate it, add it below
// and to `languages` in src/lib/urls.js.
import enUi from './en/ui.js';
import enTitles from './en/artworks.js';
import enExhibitions from './en/exhibitions.js';
import esUi from './es/ui.js';
import esTitles from './es/artworks.js';
import esExhibitions from './es/exhibitions.js';
import ptUi from './pt/ui.js';
import ptTitles from './pt/artworks.js';
import ptExhibitions from './pt/exhibitions.js';

import { artworks } from '../data/artworks.js';
import { exhibitions } from '../data/exhibitions.js';
import { pageUrl, langOf, defaultLang } from '../lib/urls.js';
import { formatDate } from '../lib/dates.js';

const all = {
  en: { t: enUi, artworkTitles: enTitles, exhibitionTexts: enExhibitions },
  es: { t: esUi, artworkTitles: esTitles, exhibitionTexts: esExhibitions },
  pt: { t: ptUi, artworkTitles: ptTitles, exhibitionTexts: ptExhibitions },
};

// The texts of one language, with links and dates in it
export function texts(lang = defaultLang) {
  const x = all[lang];
  return { ...x, lang, url: (path) => pageUrl(path, lang), date: (iso) => formatDate(iso, x.t.locale) };
}

// The texts of the page being built, from its address
export const useTexts = (Astro) => texts(langOf(Astro.url));

// English, for the pages that exist only in English (design system, llms.txt)
export const { t, artworkTitles, exhibitionTexts } = all.en;

// Stop the build if a text is missing, instead of publishing an empty title
const keys = (o, p = '') => Object.entries(o).flatMap(([k, v]) =>
  v && typeof v === 'object' && !Array.isArray(v) ? keys(v, `${p}${k}.`) : [`${p}${k}`]);
const enKeys = keys(enUi);
for (const [lang, { t: ui, artworkTitles: titles, exhibitionTexts: texts }] of Object.entries(all)) {
  const missing = enKeys.filter((k) => !keys(ui).includes(k));
  if (missing.length) throw new Error(`Missing texts in src/content/${lang}/ui.js: ${missing.join(', ')}`);
  for (const a of artworks) {
    if (!titles[a.slug]) throw new Error(`Missing title for artwork "${a.slug}" in src/content/${lang}/artworks.js`);
    if (!ui.media[a.medium]) throw new Error(`Unknown technique "${a.medium}" for artwork "${a.slug}"`);
  }
  for (const e of exhibitions) {
    if (!texts[e.slug]) throw new Error(`Missing texts for exhibition "${e.slug}" in src/content/${lang}/exhibitions.js`);
    for (const slug of e.works ?? []) {
      if (!artworks.some((a) => a.slug === slug)) throw new Error(`Exhibition "${e.slug}" lists unknown artwork "${slug}"`);
    }
  }
}
