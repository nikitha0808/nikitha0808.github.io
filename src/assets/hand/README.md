# Your hand, on the site

Your signature placed here replaces the typeset name in the header and the sign-off on posts. They are tinted to the
site's ink colour automatically, so draw in any dark pen.

| File name     | Where it appears                                        |
|---------------|---------------------------------------------------------|
| `signature`   | The name in the header, and the sign-off on blog posts  |

## From paper to site
1. Draw on plain white paper with a dark pen. Leave margin around it.
2. Scan, or photograph in even daylight from straight above.
3. Save the photos into `raw/` with the names above, e.g. `raw/signature.jpg`.
4. Run `npm run hand`. Clean transparent PNGs appear here.
5. If faint lines vanish, run `INK=140 PAPER=225 npm run hand`; if the paper shows grey, try `PAPER=190`.

Already have transparent PNGs or SVGs (e.g. from Procreate)? Put them here directly.
