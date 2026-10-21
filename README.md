# Nikitha — a life in progress

A warm, nature-inspired personal website for research, writing, life, and art. Nature is the emotional thread—quiet grounding, not a literal rural-life theme. Built with Astro; designed to be version-controlled with Git and eventually expanded with Markdown-driven content.

## What this site is
A portfolio of research papers, an archive of artworks, and a blog. Life is a smaller corner, linked from the footer.

- **Papers:** one Markdown file per paper in `src/content/research/` (see `visual-intelligence.md` for every field: authors, venue, paper/code/project links, BibTeX, teaser image). `selected: true` puts a paper on the home page.
- **Blog:** one Markdown (or MDX) file per post in `src/content/blog/`, with `title`, `date`, `description`, and optionally `category` ("Note", "Essay", …), `tags`, and `draft: true` to keep it out of the published site.
- **Paper figures:** put the main figure in `src/assets/papers/` with the same name as the paper's file
  (e.g. `2025-hire-high-resolution-features.png`), and add `figureCaption` and `figureAlt` to its frontmatter.
- **Art:** drop image files into `src/assets/art/` (sub-folders `digital/`, `ink/`, `watercolour/` set the medium). Add a `.md` with the same name beside an image for a note on what inspired it; each piece gets its own page. See `src/assets/art/_README.md`.

## Design direction: a site that grows itself
In 1952 Alan Turing wrote down how chemicals reacting and diffusing could grow the patterns of living
things: a leopard's spots, a coral's branches. Every pattern on this site is grown, live, from his
Gray–Scott reaction–diffusion equations (`src/components/Culture.astro`, WebGL2).

- **The name is grown, not typeset.** The home page seeds the equations with the letters NIKITHA SR; the
  name grows for a couple of seconds, then rests. Press and drag (or tap) to feed it. No two visits grow alike.
- **Each section is a species**, in a stain from home (`src/lib/species.ts`): Research grows as coral in
  monsoon indigo, Art as dividing cells in laterite, Blog as a labyrinth in young paddy green, About as
  lacework in turmeric.
- **Painted, not plotted:** the shader renders the chemistry like watercolour: wash, body, pigment pooled at edges.
- **A machine reads the art:** each artwork's five main pigments come from k-means clustering at build time.
- **Type & colour:** Fredoka (rounded headings) and Nunito (text) on soft mint-sage; dark green rules and microscope registration marks.
- Reduced-motion visitors get the patterns fully grown, without the animation. Without WebGL2, a still pattern.

## Content
- **Papers:** one Markdown file per paper in `src/content/research/` (see `visual-intelligence.md` for every
  field: authors, venue, links, BibTeX, `selected`). Put your Google Scholar URL in `SITE.scholar`
  in `src/lib/sections.ts` to show the Scholar link.
- **Art:** drop images into `src/assets/art/digital/`, `ink/` or `watercolour/`. A `.md` with the same name beside
  an image holds the note on what inspired it. See `src/assets/art/_README.md`.
- **Blog:** one Markdown or MDX file per post in `src/content/blog/`. `draft: true` keeps it unpublished.
- **About:** add `public/images/portrait.jpg` to show yourself as a vision model sees you.
- **Signature:** see `src/assets/hand/README.md`.

## Run locally
Install Node.js (LTS), then from this folder run:

```bash
npm install
npm run dev
```

Open the local URL Astro prints in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Publish with Git
1. Create a new GitHub repository and upload these files.
2. Commit and push your changes.
3. Import the repository into Vercel or Cloudflare Pages.
4. Set the build command to `npm run build` and output directory to `dist`.

## A note about Markdown
Add entries as Markdown files in `src/content/research/` (papers), `blog/`, or `life/`. The section listing and individual article pages are generated automatically. See `docs-content-workflow.md` for the publishing workflow.

## Before publishing
- Replace draft/placeholder text with your own writing.
- Add your real paper, code, email, and professional links only where you want them public.
- Add your own artwork and photos with descriptive alt text.
- Review the About page and remove any phrasing that doesn't sound like you.


