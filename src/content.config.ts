import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Papers: one Markdown file per paper in src/content/research/. The body is the abstract / notes.
const paper = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(), // one-sentence summary shown in lists
  authors: z.array(z.string()).default([]),
  venue: z.string().optional(), // e.g. "CVPR 2026", "arXiv preprint"
  category: z.string().optional(), // e.g. "Conference paper", "Workshop", "Preprint"
  selected: z.boolean().default(false), // show on the home page
  figureCaption: z.string().optional(), // main figure: put the image in src/assets/papers/<same file name>
  figureAlt: z.string().optional(), // describe the figure for screen readers
  paper: z.string().url().optional(),
  pdf: z.string().url().optional(),
  published: z.string().optional(), // how the date reads, e.g. "Jun 2025"; `date` is used for ordering
  draft: z.boolean().default(false), // shows in `npm run dev`, never published
  code: z.string().url().optional(),
  project: z.string().url().optional(),
  bibtex: z.string().optional(),
});

const note = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  description: z.string(),
  category: z.string().optional(),
  image: z.string().optional(),
  alt: z.string().optional(),
  draft: z.boolean().default(false),
});

// Blog posts: notes and longer writing. `draft: true` shows locally but is left out of the built site.
const post = note.extend({
  date: z.coerce.date(),
  category: z.string().default('Note'), // e.g. "Note", "Essay"
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const from = (name: string) => glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${name}` });

// Art notes: an optional .md beside an artwork image (same file name) holding what inspired it.
const artNote = z.object({
  title: z.string().optional(),
  year: z.coerce.string().optional(),
  medium: z.string().optional(),
  alt: z.string().optional(),
  featured: z.boolean().default(false), // hung larger on the art wall
});

export const collections = {
  research: defineCollection({ loader: from('research'), schema: paper }),
  blog: defineCollection({ loader: from('blog'), schema: post }),
  life: defineCollection({ loader: from('life'), schema: note }),
  artnotes: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/assets/art' }), schema: artNote }),
};
