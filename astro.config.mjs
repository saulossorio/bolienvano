import { defineConfig } from 'astro/config';
import { mkdir, rename } from 'node:fs/promises';

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

  // The home page in Spanish and Portuguese lives at /es/ and /pt/: Astro writes it as
  // es.html, so it is moved to es/index.html, which every server opens for /es/.
  integrations: [{
    name: 'language-homes',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        for (const lang of ['es', 'pt']) {
          await mkdir(new URL(`${lang}/`, dir), { recursive: true });
          await rename(new URL(`${lang}.html`, dir), new URL(`${lang}/index.html`, dir));
        }
      },
    },
  }],
});
