// Texts of the site, one folder per language.
// To add a language: copy src/content/en/ to a new folder (e.g. es/), translate it,
// and add it here.
import ui from './en/ui.js';
import artworkTitles from './en/artworks.js';
import exhibitionTexts from './en/exhibitions.js';

import { artworks } from '../data/artworks.js';
import { exhibitions } from '../data/exhibitions.js';

export const t = ui;
export { artworkTitles, exhibitionTexts };

// Stop the build if a text is missing, instead of publishing an empty title
for (const a of artworks) {
  if (!artworkTitles[a.slug]) throw new Error(`Missing title for artwork "${a.slug}" in src/content/${ui.lang}/artworks.js`);
  if (!ui.media[a.medium]) throw new Error(`Unknown technique "${a.medium}" for artwork "${a.slug}"`);
}
for (const e of exhibitions) {
  if (!exhibitionTexts[e.slug]) throw new Error(`Missing texts for exhibition "${e.slug}" in src/content/${ui.lang}/exhibitions.js`);
  for (const slug of e.works ?? []) {
    if (!artworks.some((a) => a.slug === slug)) throw new Error(`Exhibition "${e.slug}" lists unknown artwork "${slug}"`);
  }
}
