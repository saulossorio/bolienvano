import { defineConfig } from 'astro/config';

// PUBLIC_PREVIEW=1 builds the preview for GitHub Pages (saulossorio.github.io/bolienvano/):
// different address, hidden from search engines, no analytics.
const preview = process.env.PUBLIC_PREVIEW === '1';

export default defineConfig({
  site: preview ? 'https://saulossorio.github.io' : 'https://bolienvano.com',
  base: preview ? '/bolienvano' : '/',

  // Pages are built as about.html, gallery/invisible.html… exactly like the old
  // Webflow site, so every existing link and search result keeps working.
  build: { format: 'file' },
  trailingSlash: 'never',
});
