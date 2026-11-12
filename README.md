# bolienvano.com

Website of the artist Andy Ossorio. Static site built with [Astro](https://astro.build).

**Agents (and people) changing this repo: read `AGENTS.md` first** — what may be changed,
what must be asked, and what never to do.

## Branches and publishing

| Branch | What | Published at |
|---|---|---|
| `claude-workspace` | Claude's working copy: the source code, edited here | Preview: https://saulossorio.github.io/bolienvano/ |
| `main` | The finished site only (built files). Never edit by hand | bolienvano.com (Hostinger publishes `main` as is) |

- **Publish:** run the Deploy workflow (Actions → Deploy → Run workflow on `claude-workspace`). It builds the site and commits it to `main`.
- **Undo a publish:** revert the last "Build of …" commit on `main`.
- Never put source code on `main`: Hostinger cannot build it and the site goes down.

## Edit the content

| What | Where |
|---|---|
| Artworks (year, technique, size, price, availability, order) | `src/data/artworks.js` |
| Artwork titles | `src/content/<lang>/artworks.js` |
| Exhibitions (date, photos) | `src/data/exhibitions.js` |
| Exhibition texts | `src/content/<lang>/exhibitions.js` |
| Everything else you read on the site | `src/content/<lang>/ui.js` |
| Images (originals) | `src/assets/` |

Texts are separated by language in `src/content/<language>/`. If a title or an image is
missing, the build stops and says which one.

**Add an artwork:** put `<slug>_mockup.jpg`, `<slug>_zoom1.jpg` and `<slug>_zoom2.jpg` in
`src/assets/artworks/`, add a line to `src/data/artworks.js` (with a new random `coa` number) and its title to
`src/content/en|es|pt/artworks.js`. The year page, the artwork page and the sitemap update by themselves.

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
| `src/pages/[...lang]/` | One file per address, built in each language (`about.astro` → `about.html`, `es/about.html`, `pt/about.html`) |
| `src/pages/` | Pages that exist once: 404, design system, invitation, sitemap, llms.txt |
| `src/components/` | Header, footer, gallery tile, year and artwork pages |
| `src/layouts/Base.astro` | Shared `<head>`: SEO, analytics (GTM), fonts |
| `src/styles/global.css` | Design tokens (colors, type, spacing, motion) and shared styles |
| `src/lib/schema.js` | Structured data for search engines and AI (artist, artworks, exhibitions) |
| `src/pages/llms.txt.js` | `/llms.txt`: plain-text summary of the site for AI assistants |
| `public/` | Copied as-is: `contact.php`, `.htaccess`, icons, exhibition PDFs |
| `legacy/` | Old Webflow site, reference only (delete only when Don Andy says so) |

## Design system

Every visual value is a token at the top of `src/styles/global.css`; components
only use `var(--…)`, never raw sizes. Change a token and the whole site follows.

| Tokens | Use |
|---|---|
| `--wall` `--paper` `--ink` `--prose` `--muted` `--line` `--available` `--accent` `--night` | Colors (`--prose` for long texts, `--accent` only for form errors, `--night` behind the image viewer and videos) |
| `--display` `--sans` `--text` | Syne for titles (weight 400), Familjen Grotesk for the interface, Inter for long texts |
| `--text-xs` … `--text-4xl` | Type scale; the large steps grow with the screen |
| `--tracking` | Letter spacing of every small uppercase text |
| `--space-3xs` … `--space-2xl`, `--space` | Spacing scale; `--space` separates page sections |
| `--space-row` | Space between a list line and its text, the same in every list |
| `--container` `--gutter` | Page width and side margins |
| `--bar` `--toolbar` `--target` | Height of the top bar and of the works year bar; smallest tap area |
| `--ease` `--fast` `--slow` | The one easing and two speeds of every transition |

Shared patterns in `global.css`: `.eyebrow` (small uppercase label), `.line-link` (quiet link with a thin line under it), `.button` (and `.button.outline`, lighter), `.input` (form field: a single line under the text), `.choice` (one option of a small set in a form: outlined, solid ink when picked), `.more`, `.section-head`, `.numeral` (a heading that is a number: plain figures in the reading type, never Syne), `.place` (a venue, then city and country on their own line).

Exception: `src/pages/invitacion.astro` keeps its own sizes (it reproduces the printed card).

## Contact form

`public/contact.php` sends the form to bolienvano@gmail.com, with the reason picked in the
form (and the artwork, when the visitor came from one) in the email subject. The visitor then
gets a short automatic confirmation in the language of the page (it never repeats their
name or message, so the form cannot be used to send text to someone else's address). It needs PHP,
so it works on Hostinger but not on the GitHub Pages preview.

## Languages

The site is in English, Spanish and Portuguese. English keeps the addresses of the old
site (`/about.html`); the others live under `/es/` and `/pt/`. Every page in
`src/pages/[...lang]/` is built once per language; pages and components get their texts
with `useTexts(Astro)` from `src/content/index.js`, which reads the language from the
address. Texts live in `src/content/<lang>/` with the same keys, and the build stops
if one is missing. The header has an EN · ES · PT switch; on a first visit to an English
page, a browser that prefers Spanish or Portuguese goes to that language once (never the
other way, so search engines see each language as it is). Each page lists its other
languages for search engines (hreflang), and so does the sitemap. The invitation, the
design system, llms.txt and the 404 page exist only once.

## Certificates of authenticity

Every artwork has its certificate at `certificate/<slug>.html`
(`src/pages/certificate/[slug].astro`), filled in from `src/data/artworks.js`: photo, title,
year, technique, size and its number (`coa`, AO-<year>- and 4 random characters, so it reveals nothing about how many works there are; never changed). It prints
(or saves as PDF) on one A4 page with blank lines for the owner, the date and the artist's
handwritten signature. Its QR code leads back to the same page to check it. Not in the menu
or the sitemap, hidden from search engines.

**Bitcoin blockchain record (test with Cuadrito).** A certificate can be registered on the
Bitcoin blockchain with [OpenTimestamps](https://opentimestamps.org):
`public/certificate/proof/<coa>.txt` is the authorship record and `<coa>-<n>.txt` the n-th
sale (never edit them: a single changed letter breaks the proof), each with its `.ots` proof;
`src/data/timestamps.js` lists them with their Bitcoin block. A sale record names no one: it
holds the SHA-256 of the owner's record (`Owner: <name>` and `Code: <secret>`), which only
Don Andy and the owner keep, never in this repo. The secret code is written by hand on the
paper certificate, in the "Owner code" line. The certificate then shows one line with
the Bitcoin block and, on screen only, what each record says in words and a "Verify now"
button: the visitor's browser follows the proof up to the block and asks three independent
explorers (Blockstream, Mempool, BlockCypher) whether that block holds it (`src/lib/ots.js`).
The files and manual steps (opentimestamps.org) stay folded under "How to verify it". The
build stops if an authorship record and the artwork data differ.
To register one: `ots stamp <coa>.txt`, then a few hours later `ots upgrade <coa>.txt.ots`
and fill in `block` and `date`.

## Analytics

Google Tag Manager (`GTM-5J63MXV`) is the only script loaded; GA4 is configured inside it.
It runs with Google Consent Mode: no analytics cookies until the visitor accepts the cookie
notice (`src/components/CookieNotice.astro`). The Privacy page (`src/pages/privacy.astro`,
linked in the footer) explains the cookies and the contact form and lets visitors change
their choice; update its text if the analytics change. The GA4 tag in GTM must keep its built-in consent checks on.
