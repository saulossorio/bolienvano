# Certificates and Bitcoin records: how every field is made

Everything needed to register a work or a sale **without any assistant**: only a Mac or Linux
terminal and, for the Bitcoin step, the free OpenTimestamps tool or website. Read it together
with `README.md` ("Certificates of authenticity") and `AGENTS.md`.

## 1. What exists

| File in `public/certificate/proof/` | What it is |
|---|---|
| `<coa>.txt` | The **authorship record** of a work: its details, as text. Registered once |
| `<coa>-<n>.txt` | The **n-th sale record** of that work (`-1` first sale, `-2` second...). Names no one |
| `<coa>.ots`, `<coa>-<n>.ots` | The Bitcoin proof of each text file (OpenTimestamps) |
| `src/data/timestamps.js` | Which records each work has and in which Bitcoin block each was confirmed |

`<coa>` is the certificate number of `src/data/artworks.js`, for example `AO-2019-ARE3`.

**Golden rule: a record is never edited, renamed in its content, or re-saved.** The proof is
the SHA-256 of the exact bytes of the text file. One changed letter, space or line break and it
no longer matches. A wrong record is not fixed: ask Don Andy, then register a new one.

## 2. The fingerprint (SHA-256)

A SHA-256 fingerprint turns any text or file into 64 characters (digits 0-9 and letters a-f,
always lowercase here). The same input always gives the same 64 characters; one different
character gives a completely different result; the input cannot be recovered from it.

Compute the fingerprint of a **file**:

```sh
shasum -a 256 file.txt        # macOS
sha256sum file.txt            # Linux
```

Compute the fingerprint of a **text typed in the terminal** (note the final `\n`):

```sh
printf 'line one\nline two\n' | shasum -a 256
```

Only the first 64 characters of the output matter (the `-` or file name after them does not).

## 3. Text format rules (every record)

- Plain text, **UTF-8**, no BOM, no tabs.
- **Line breaks are `\n`** (Unix), never Windows `\r\n`.
- **One line break at the end** of the file, and no blank lines anywhere.
- No spaces at the start or end of any line. One space after each `:`.
- Accents and `ñ` are fine, written as normal characters.
- Fingerprints inside a record: 64 characters, lowercase.
- Dates `YYYY-MM-DD` (for example `2026-11-12`), never `12/11/2026`: it reads the same in every language.

## 4. The authorship record (once per work)

Exactly seven lines, in this order, taken from `src/data/artworks.js` and the English
`media` list in `src/content/en/ui.js`:

```
Artist: Andy Ossorio
Certificate: AO-2019-ARE3
Title: Cuadrito
Year: 2019
Medium: Watercolor on paper
Size: 15x15 cm
Edition: Unique original, 1/1
```

| Line | Where it comes from |
|---|---|
| `Artist` | Always `Andy Ossorio` |
| `Certificate` | The work's `coa` |
| `Title` | The **Spanish** title (`src/content/es/artworks.js`) |
| `Year` | `year` in `artworks.js` |
| `Medium` | The **English** text of its `medium` (`Watercolor on paper`, `Ink on paper`...) |
| `Size` | `size` in `artworks.js`, character for character (`15x15 cm`) |
| `Edition` | Always `Unique original, 1/1` |

The build stops if an authorship record and the artwork data differ (certificate, year,
medium, size). The title is not checked, so copy it carefully.

## 5. The owner record (never saved in this repo)

Two lines, made at the moment of the sale and kept **only** by Don Andy and the owner:

```
Owner: Ana Perez
Code: K7M2-QX4P-9TRB-HC3N
```

- `Owner`: the owner's full name **exactly as written in "Emitido a" on the paper certificate**.
  Upper and lower case count, and so do accents (`Pérez` is not `Perez`).
- `Code`: a secret code that Don Andy invents for that sale and writes by hand in the
  "Código del propietario" line of the paper certificate.
  - **16 characters** in 4 groups of 4, joined by hyphens. Letters in capitals.
  - Only these characters: `ABCDEFGHJKMNPQRSTUVWXYZ23456789` (no `I`, `L`, `O`, `0`, `1`, so
    nothing can be misread when handwritten).
  - Random, one code per sale, **never reused** and never made from a name, a date or a pattern.
  - Why 16 and not shorter: the owner's name can be guessed, so only the code protects the
    record. 16 characters cannot be guessed in practice; 8 could be guessed in minutes by a
    computer.
  - Never typed into a website, never saved in this repo, in an email or in a chat.
- The two lines end with `\n`. Fingerprint:

```sh
printf 'Owner: Ana Perez\nCode: K7M2-QX4P-9TRB-HC3N\n' | shasum -a 256
```

This fingerprint is the `To` line of the sale record. Don Andy keeps the owner record
(name and code) offline: without it nobody can prove who owns the work.

## 6. The sale record (once per sale)

Six lines. File `<coa>-<n>.txt`, where `<n>` is 1 for the first sale of that work:

```
Certificate: AO-2019-ARE3
Transfer: 1
Date: 2026-11-12
From: Andy Ossorio
To (SHA-256 of the owner record): 06b7ad331485b9b48ff9080ea057f38d53bffd8494725492ae6db0a105b857ac
Previous record (SHA-256): 19edbfc84abf3cf16b84a9adb90204ded0ed35f9ff86ab21a2838a36a7c5dbac
```

| Line | How to fill it |
|---|---|
| `Certificate` | The work's `coa` |
| `Transfer` | `1` for the first sale, then `2`, `3`... Matches the number in the file name |
| `Date` | The day of the sale, `YYYY-MM-DD` |
| `From` | `Andy Ossorio` for the artist's own sale (the only case defined so far) |
| `To (SHA-256 of the owner record)` | The fingerprint of the owner record (section 5) |
| `Previous record (SHA-256)` | The fingerprint of the **previous record's file**: the authorship record for sale 1, sale `n-1` for sale `n` (`shasum -a 256 public/certificate/proof/AO-2019-ARE3.txt`) |

The `Previous` line chains each sale to the one before it, so none can be inserted or changed
without breaking the chain.

Not defined yet (ask Don Andy before the first case): a sale made by an owner instead of by
the artist, and any change to these labels. Changing a label changes the format of every later
record.

## 7. Register a record in Bitcoin

1. Save the text in `public/certificate/proof/<file>.txt`, following sections 3-6. Check it
   with `cat -e <file>.txt`: every line must end with `$` and there must be no `^M`.
2. **Send it.** Install the tool once (`pip install opentimestamps-client`) and run:

   ```sh
   ots stamp public/certificate/proof/<file>.txt
   ```

   It creates `<file>.txt.ots`. Rename it to `<file>.ots`. Without the tool, upload the `.txt`
   to https://opentimestamps.org and download the `.ots` it returns.
3. **Wait a few hours.** The proof is pending until Bitcoin confirms it. Then:

   ```sh
   ots upgrade public/certificate/proof/<file>.ots
   ots info public/certificate/proof/<file>.ots     # shows BitcoinBlockHeaderAttestation(<block>)
   ```

   If it leaves a `.bak` copy, delete it.

   (On the website: upload the `.ots` again and download the upgraded one.) Replace the pending
   `.ots` in the repo with the upgraded one. Only then does it hold the Bitcoin block.
4. Add the record to `src/data/timestamps.js`: `file`, `kind` (`authorship` or `sale`),
   `stamped` (day it was sent), `block` (the number from step 3), `date` and `time` (UTC day and
   time of that block, shown on any block explorer such as mempool.space).
5. Push to `claude-workspace`, check the certificate page on the preview (the "Check" button
   must turn green), and publish only with Don Andy's "sí" (see `AGENTS.md`).

## 8. A sale, start to finish

1. Don Andy invents the code (section 5) and writes the owner's name and the code by hand on the
   paper certificate. He keeps a copy of the owner record offline.
2. Compute the owner fingerprint (section 5) and the previous-record fingerprint (section 6).
3. Write the sale record (section 6), register it in Bitcoin (section 7), add it to
   `timestamps.js`, publish.
4. Later, to prove ownership, the owner shows the certificate. Anyone recomputes the
   fingerprint of `Owner:` + `Code:` and compares it with the `To` line of the record on the
   work's page. If they are equal, the owner is the one registered.

## 9. When a fingerprint does not match

Almost always one of these:

- The **final line break** is missing or doubled.
- A name written without its accent, or in other capitals, than on the certificate.
- A space at the end of a line, or a typing error in the code (`O` for `0`, `I` for `1`).
- A text saved by a word processor that changed the line breaks or added a BOM. Use a plain-text
  editor or the terminal.

Never "fix" a registered record. Compare it with `cat -e` and find the difference in the new text.
