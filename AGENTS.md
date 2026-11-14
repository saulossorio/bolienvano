# AGENTS.md: rules for any agent working on this repo

The website of the artist **Andy Ossorio**: https://bolienvano.com. The owner is Don Andy.
`README.md` explains how the site is built and where everything is. This file says
**what you may change, what you must ask first, and what you never do**. Read both
before your first change.

## 1. How the repo works

| Branch | Holds | Published at |
|---|---|---|
| `claude-workspace` | The source code. **All work happens here** | Preview: https://saulossorio.github.io/bolienvano/ (every push) |
| `main` | Only the built site, written by the Deploy workflow | https://bolienvano.com (Hostinger serves `main` as is) |

- Every push to `claude-workspace` runs **CI** (`ci.yml`: build, HTML validation, link
  check, contact.php tests) and the **Preview** (`preview.yml`, GitHub Pages).
- **Publishing to bolienvano.com** = `gh workflow run deploy.yml --ref claude-workspace`.
  It builds and commits to `main`, and Hostinger serves it right away.
- You don't need to build locally: CI builds every push. If CI fails, the change is
  not done.

## 2. Always

1. **Work on `claude-workspace`.** Never commit, merge or push to `main` by hand. Source
   code on `main` takes the live site down.
2. **Publishing needs Don Andy's explicit "sí" every time.** An earlier "yes" does not
   cover a new change. Show him the preview first.
3. **Wait and check before you report.** After a push, wait for CI and Preview to finish
   (`gh run watch <id> --exit-status`), then check the change is really served (`curl`
   the page on the preview). Never say "it will be ready in a few minutes". If a Pages
   deploy hangs for more than about 10 minutes, cancel it and run
   `gh workflow run preview.yml --ref claude-workspace`.
   After a production deploy, check bolienvano.com the same way.
4. **Follow the design system** (section 5). Every visual value is a token from
   `src/styles/global.css`, and every element is an existing pattern.
5. **Every text in three languages.** English, Spanish and Portuguese are in
   `src/content/en|es|pt/`, with the same keys. The build stops if a key is missing.
   Never leave a page in English inside `/es/` or `/pt/`.
6. **Keep the docs true.** If you change how something works, update `README.md`,
   this file and the design system page (`src/pages/design-system.astro`) in the same commit.
7. **Commit messages** say what changed for the visitor, in plain English.
8. **Talk to Don Andy in short Spanish:** the conclusion plus one question, no long reports.

## 3. Changes you may make without asking (if they were requested)

- **Artworks:** add a work, change price or availability (`available` | `ask` | `sold`),
  size, order, or title in the three languages. See README, "Add an artwork".
- **Exhibitions:** add one or edit its texts (three languages), photos, works shown.
- Fix typos and translations, and fix broken links.
- Fix a bug, as long as the fix stays inside the design system and doesn't change how the
  site looks.
- Replace an image with a better photo of the same work (same file name, maximum quality;
  never touch the originals in Don Andy's folders).

## 4. Ask Don Andy first

Describe the change in one or two lines, offer two or three options inside the current
design when there are choices, and wait for his answer.

- **Anything visual:** fonts, colors, sizes, spacing, layout, animations, new elements or
  patterns, a new design token. (He was rightly angry when a serif font was added without
  asking. The site has no serif.)
- New pages, sections, menu items or languages. Removing or renaming pages.
- Changing addresses (URLs): the English addresses must keep working forever (old links
  and Google).
- Anything in `public/contact.php` (spam rules, emails), analytics, cookies, the privacy text.
- New dependencies (`package.json`), workflow files, `astro.config.mjs`, `.htaccess`.
- Deleting files (including `legacy/`, the old Webflow site, kept for reference).

## 5. The design system: the rules

The site is a quiet gallery wall: the works are the protagonists, and the texts read like
museum labels. Full reference: `/design-system.html` (internal page) and README, "Design system".

- **Tokens only.** Colors, font sizes, spacing, easing and speeds come from
  `var(--…)` in `global.css`, never raw values (the only exception is the
  invitation page, which reproduces a printed card).
- **Three typefaces, each with one job:**
  - `--display` (Syne): the name and titles, **always weight 400** (Syne widens when bolder).
  - `--sans` (Familjen Grotesk): the interface (menu, labels, captions, buttons, forms, short texts).
  - `--text` (Inter): long texts (exhibition texts and summaries, biography, NFT text, privacy),
    always in `--prose`, the softer text color, all paragraphs the same size.
  - No other fonts, and no serif.
  - Numbers in headings (years, prices) use `.numeral`, never Syne.
- **Colors:** `--ink` for text, `--prose` for long texts, `--muted` for secondary text,
  `--line` for separators, `--accent` only for form errors, `--available` only for the green
  dot and the certificate's "verified" note. Light is the default theme; dark is only by the visitor's choice. Every color must work
  in both themes: never use `var(--wall)` as a text color on something that is always dark
  (the image viewer uses fixed light text).
- **Reuse the patterns:** `.eyebrow`, `.line-link`, `.button`, `.button.outline`, `.input`,
  `.choice`, `.more`, `.section-head`, `.numeral`, `.place`. Don't invent a lookalike; if
  something new is truly needed, ask (section 4), then add it to `global.css` and to the
  design system page.
- **Watercolors** (`medium: 'watercolor'`) are shown as a whole white sheet with
  `--sheet-shadow`: never cropped, no blend, aligned with the text.
- **Exhibition facts:** date, venue and city on one line with thin rules; venue apart from
  city and country (`venue`, `city`, `country` fields).
- Every page must work at phone width (no sideways scroll) and without JavaScript, except
  the controls that need it (theme switch, print button, form sending).

## 6. Never

- Never publish without Don Andy's "sí", force push, rewrite history, or delete branches.
- Never put an email address, phone number or any private data in the pages (bots harvest
  them; people write through the form).
- **Never put Don Andy's signature (image) on the site.** Certificates are signed by hand on
  paper; a public signature image could be used to forge them.
- **Never change or reuse a certificate number** (`coa` in `src/data/artworks.js`). New works
  get `AO-<year>-` plus 4 random characters from `ABCDEFGHJKMNPQRSTUVWXYZ23456789`, unique.
  They are random so they reveal nothing about how many works exist; never sequential.
- **Never edit or delete the blockchain records** in `public/certificate/proof/` (`<coa>.txt`
  and `<coa>.ots`): a single changed letter makes the proof fail. If a work's details change,
  ask Don Andy before registering it again.
- **Never write a print code** (the artist's or an owner's) in the repo, in a commit message or in
  a page: only the fingerprints made by `scripts/print-lock.mjs` go in `src/data/print-lock.js`.
  Codes are given to Don Andy and nobody else.
- Never weaken the contact form's spam protection (the `elapsed` field, the trap field,
  gibberish filter, 5 per hour per IP).
- Never send test messages through the live form without saying so (each one reaches Don
  Andy's inbox and counts toward the hourly limit).

## 7. Things that are easy to break

- **Hostinger runs PHP 7.4.** `public/contact.php` must not use PHP 8 syntax (`match`,
  `str_contains`, `?->`, named arguments). CI uses a newer PHP, so it will not catch this.
- **The contact form only works on bolienvano.com.** GitHub Pages cannot run PHP, so
  "could not be sent" on the preview is expected.
- **Languages:** pages live in `src/pages/[...lang]/` and get their texts and links with
  `useTexts(Astro)` (`t`, `url()`, `date()`). Always build links with `url()`, never by hand,
  or the Spanish and Portuguese pages will link to English.
- **The first-visit redirect** (in `Base.astro`) only goes from English pages to es/pt. Never
  make es/pt pages redirect, or Google stops seeing them.
- **Images:** originals live in `src/assets/` at full quality; Astro makes the sizes. Each
  artwork needs `<slug>_mockup.jpg`, `<slug>_zoom1.jpg`, `<slug>_zoom2.jpg`, or the build stops.
- **The invitation page** (`/invitacion.html`) is in Spanish only and reproduces a printed
  card from 2022 (it says "Andy S.", the old name). Leave it as is.

## 8. Checklist for every change

1. Pull `claude-workspace`. Make the change with tokens and patterns, in the three languages.
2. Update README / AGENTS.md / design system page if how something works changed.
3. Commit with a clear message and push to `claude-workspace`.
4. Wait for CI and Preview; check the change on the preview.
5. Tell Don Andy in a short message with the preview link, and ask whether to publish.
6. Only after his "sí": run Deploy, wait for it, check bolienvano.com, then confirm.
