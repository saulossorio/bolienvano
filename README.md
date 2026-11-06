# bolienvano.com

Website of the artist Andy S. Static site built with [Astro](https://astro.build).

## Branches and publishing

| Branch | What | Published at |
|---|---|---|
| `redesign` | Work in progress (source code) | Preview: https://saulossorio.github.io/bolienvano/ |
| `production` | Source code of what is live | Builds into `main` automatically |
| `main` | The finished site only (built files). Never edit by hand | bolienvano.com (Hostinger publishes `main` as is) |

- **Publish:** merge `redesign` into `production` and push. The Deploy workflow builds the site and commits it to `main`.
- **Undo a publish:** revert the last "Build of …" commit on `main`.
- Never put source code on `main`: Hostinger cannot build it and the site goes down.

## Edit the content

| What | Where |
|---|---|
| Artworks (year, technique, size, price, availability, order) | `src/data/artworks.js` |
| Artwork titles | `src/content/en/artworks.js` |
| Exhibitions (date, photos) | `src/data/exhibitions.js` |
| Exhibition texts | `src/content/en/exhibitions.js` |
| Everything else you read on the site | `src/content/en/ui.js` |
| Images (originals) | `src/assets/` |

Texts are separated by language in `src/content/<language>/`. If a title or an image is
missing, the build stops and says which one.

**Add an artwork:** put `<slug>_mockup.jpg`, `<slug>_zoom1.jpg` and `<slug>_zoom2.jpg` in
`src/assets/artworks/`, add a line to `src/data/artworks.js` and its title to
`src/content/en/artworks.js`. The year page, the artwork page and the sitemap update by themselves.

## Run it locally

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # final site in dist/
```

## Where things are

| Path | What |
|---|---|
| `src/pages/` | One file per address (`about.astro` → `about.html`) |
| `src/components/` | Header, footer, gallery tile, year and artwork pages |
| `src/layouts/Base.astro` | Shared `<head>`: SEO, analytics (GTM), fonts |
| `src/styles/global.css` | Design tokens (colors, type, spacing, motion) and shared styles |
| `src/lib/schema.js` | Structured data for search engines and AI (artist, artworks, exhibitions) |
| `src/pages/llms.txt.js` | `/llms.txt`: plain-text summary of the site for AI assistants |
| `public/` | Copied as-is: `contact.php`, `.htaccess`, icons, exhibition PDFs |
| `legacy/` | Old Webflow site, reference only. Deleted before v2 goes live |

## Design system

Every visual value is a token at the top of `src/styles/global.css`; components
only use `var(--…)`, never raw sizes. Change a token and the whole site follows.

| Tokens | Use |
|---|---|
| `--wall` `--ink` `--muted` `--line` `--available` `--accent` | Colors (`--accent` only for form errors) |
| `--display` `--sans` | Syne for titles, Familjen Grotesk for text |
| `--text-xs` … `--text-5xl` | Type scale; the large steps grow with the screen |
| `--space-3xs` … `--space-2xl`, `--space` | Spacing scale; `--space` separates page sections |
| `--space-row` | Space between a list line and its text, the same in every list |
| `--container` `--gutter` | Page width and side margins |
| `--ease` `--fast` `--slow` | The one easing and two speeds of every transition |

Exception: `src/pages/invitacion.astro` keeps its own sizes (it reproduces the printed card).

## Contact form

`public/contact.php` sends the form to bolienvano@gmail.com. It needs PHP, so it works on
Hostinger but not on the GitHub Pages preview.

## Analytics

Google Tag Manager (`GTM-5J63MXV`) is the only script loaded; GA4 is configured inside it.
