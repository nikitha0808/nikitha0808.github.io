import type { SpeciesKey } from './species';

export const SITE = {
  name: 'Nikitha', // author names containing this are emphasised in author lists
  title: 'Nikitha SR',
  scholar: 'https://scholar.google.com/citations?user=qH6n4U0AAAAJ&hl=en',
  instagram: 'https://www.instagram.com/tayosdoodle/',
  email: '', // e.g. 'you@example.com' (shown on About and in the footer)
  linkedin: 'https://www.linkedin.com/in/nikitha-sr-ba2081144/',
  github: '', // e.g. 'https://github.com/your-name' (hidden while empty)
  cv: '/cv.pdf', // put your CV at public/cv.pdf; the link appears once the file exists
};

/** Contact links in display order, skipping any not set up yet. `short` is the label in the About page's link row;
 *  `row: false` keeps a link out of that row (it still shows in the footer). */
export function contactLinks(hasCv: boolean) {
  return [
    SITE.email && { label: 'Email', short: 'Email', href: `mailto:${SITE.email}` },
    SITE.scholar && { label: 'Google Scholar', short: 'Scholar', href: SITE.scholar },
    SITE.linkedin && { label: 'LinkedIn', short: 'LinkedIn', href: SITE.linkedin },
    SITE.github && { label: 'GitHub', short: 'GitHub', href: SITE.github },
    hasCv && { label: 'CV', short: 'CV', href: SITE.cv },
    SITE.instagram && { label: 'Art on Instagram', short: 'Instagram', href: SITE.instagram, row: false },
  ].filter(Boolean) as { label: string; short: string; href: string; row?: boolean }[];
}

export type SectionKey = 'research' | 'art' | 'blog' | 'about' | 'life';

export interface Section { key: SectionKey; label: string; href: string; species: SpeciesKey; blurb: string }

export const sections: Section[] = [
  { key: 'research', label: 'Research', href: '/research/', species: 'coral', blurb: 'Papers on computer vision, multimodal AI, and visual representation learning.' },
  { key: 'art', label: 'Art', href: '/art/', species: 'mitosis', blurb: 'Digital and generative pieces, ink and pencil sketches, watercolours.' },
  { key: 'blog', label: 'Blog', href: '/blog/', species: 'maze', blurb: 'Notes and essays, written to think.' },
  { key: 'about', label: 'About', href: '/about/', species: 'spots', blurb: 'The specimen record.' },
];

export const life: Section = { key: 'life', label: 'Life', href: '/life/', species: 'maze', blurb: 'Small notes from ordinary days.' };

export const sectionByKey = Object.fromEntries([...sections, life].map((s) => [s.key, s])) as Record<SectionKey, Section>;

// Drafts are visible in `npm run dev` but never published.
export const isPublished = ({ data }: { data: { draft?: boolean } }) => import.meta.env.DEV || !data.draft;

type Dated = { data: { date?: Date } };
export const byNewest = (a: Dated, b: Dated) => (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0);

// Frontmatter dates are parsed as UTC midnight; format in UTC so they don't shift a day.
export const formatDate = (d: Date, month: 'short' | 'long' | '2-digit' = 'short') =>
  d.toLocaleDateString('en', { year: 'numeric', month, day: '2-digit', timeZone: 'UTC' });
export const isoDay = (d: Date) => d.toISOString().slice(0, 10).replaceAll('-', '.');
