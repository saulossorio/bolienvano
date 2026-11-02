# bolienvano.com

Website of the artist Andy S. Static site built with [Astro](https://astro.build).

> v2 in progress on the `v2` branch. Preview: https://saulossorio.github.io/bolienvano/
> The live site is still v1 (Webflow export), served from `main`.

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
| `src/styles/global.css` | Colors, fonts and shared styles |
| `public/` | Copied as-is: `contact.php`, `.htaccess`, icons, exhibition PDFs |
| `legacy/` | Old Webflow site, reference only. Deleted before v2 goes live |

## Contact form

`public/contact.php` sends the form to bolienvano@gmail.com. It needs PHP, so it works on
Hostinger but not on the GitHub Pages preview.

## Analytics

Google Tag Manager (`GTM-5J63MXV`) is the only script loaded; GA4 is configured inside it.
