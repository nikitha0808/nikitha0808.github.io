/**
 * The art archive is built from the files in src/assets/art/ — no code needed.
 *
 *   src/assets/art/watercolour/2024-03-morning-light.jpg   → "Morning light", 2024, Watercolour
 *   src/assets/art/watercolour/2024-03-morning-light.md    → (optional) what inspired it
 *
 * Sub-folders name the medium; a date prefix sets the order (newest first).
 * The optional .md beside an image can set title, year, medium and alt text in its frontmatter;
 * its body is the note shown on the artwork's page.
 *
 * At build time each image is also "read" by a small k-means clustering, giving its five main pigments.
 */
import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import sharp from 'sharp';
import path from 'node:path';

export interface Box { x: number; y: number; w: number; h: number }

export interface Pigment { hex: string; share: number; light: boolean }

export interface Artwork {
  slug: string;
  src: ImageMetadata;
  title: string;
  year?: string;
  medium?: string;
  alt: string;
  pigments: Pigment[];
  featured: boolean;
  excerpt?: string; // the start of the note, as plain text, for the hover reveal
  content: Box; // the painted area inside any plain white margins, as fractions of the image
  note?: CollectionEntry<'artnotes'>;
}

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/art/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG}', { eager: true });

const MEDIA: Record<string, string> = { digital: 'Digital', generative: 'Generative', ink: 'Ink & pencil', pencil: 'Ink & pencil', sketches: 'Ink & pencil', watercolour: 'Watercolour', watercolor: 'Watercolour', painting: 'Painting' };
const titleFrom = (slug: string) => {
  const words = slug.replace(/[-_]+/g, ' ').trim();
  return words ? words[0].toUpperCase() + words.slice(1) : 'Untitled';
};
const key = (p: string) => p.replace(/^\.?\//, '').replace(/\.[^./]+$/, '');
/** The note's opening as plain text: no links or emphasis, cut at ~150 characters. */
function excerptOf(body?: string) {
  if (!body) return undefined;
  const text = body
    .split('\n').filter((l) => !/^_?Originally posted/.test(l.trim())).join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
  if (text.length <= 150) return text || undefined;
  const cut = text.slice(0, 150);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.!?…-]+$/, '') + '…';
}

/** Where the painting itself sits, ignoring near-white margins that scans and exports often add. */
async function contentBox(file: string): Promise<Box> {
  try {
    const { data, info } = await sharp(file).greyscale().resize({ width: 480, withoutEnlargement: true }).raw().toBuffer({ resolveWithObject: true });
    const W = info.width, H = info.height;
    const plain = (vals: number[]) => {
      const m = vals.reduce((a, b) => a + b, 0) / vals.length;
      const sd = Math.sqrt(vals.reduce((a, b) => a + (b - m) ** 2, 0) / vals.length);
      return m > 235 && sd < 12;
    };
    const col = (x: number) => Array.from({ length: Math.ceil(H / 2) }, (_, i) => data[i * 2 * W + x]);
    const row = (y: number, x0: number, x1: number) => Array.from({ length: Math.ceil((x1 - x0 + 1) / 2) }, (_, i) => data[y * W + x0 + i * 2]);
    let L = 0, R = W - 1, T = 0, B = H - 1;
    while (L < W / 3 && plain(col(L))) L++;
    while (R > (2 * W) / 3 && plain(col(R))) R--;
    while (T < H / 3 && plain(row(T, L, R))) T++;
    while (B > (2 * H) / 3 && plain(row(B, L, R))) B--;
    const pad = 2; // a couple of pixels inside the edge, to drop anti-aliased borders
    if (L) L += pad; if (R < W - 1) R -= pad; if (T) T += pad; if (B < H - 1) B -= pad;
    return { x: L / W, y: T / H, w: (R - L + 1) / W, h: (B - T + 1) / H };
  } catch {
    return { x: 0, y: 0, w: 1, h: 1 };
  }
}

const toHex = (c: number[]) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

/** Five main pigments by k-means on a 32×32 thumbnail, largest cluster first. */
async function pigments(file: string, k = 5): Promise<Pigment[]> {
  try {
    const { data } = await sharp(file).resize(32, 32, { fit: 'cover' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    const px: number[][] = [];
    for (let i = 0; i < data.length; i += 3) px.push([data[i], data[i + 1], data[i + 2]]);
    const lum = (c: number[]) => 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2];
    const sorted = [...px].sort((a, b) => lum(a) - lum(b));
    let centres = Array.from({ length: k }, (_, i) => [...sorted[Math.floor(((i + 0.5) / k) * sorted.length)]]);
    let assign = new Array(px.length).fill(0);
    for (let iter = 0; iter < 12; iter++) {
      assign = px.map((p) => {
        let best = 0, bd = Infinity;
        centres.forEach((c, j) => { const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2 + (p[2] - c[2]) ** 2; if (d < bd) { bd = d; best = j; } });
        return best;
      });
      centres = centres.map((c, j) => {
        const members = px.filter((_, i) => assign[i] === j);
        return members.length ? [0, 1, 2].map((ch) => members.reduce((s, m) => s + m[ch], 0) / members.length) : c;
      });
    }
    return centres
      .map((c, j) => ({ hex: toHex(c), share: assign.filter((a) => a === j).length / px.length, light: lum(c) > 150 }))
      .filter((p) => p.share > 0)
      .sort((a, b) => b.share - a.share);
  } catch {
    return [];
  }
}

let cache: Promise<Artwork[]> | undefined;

export function getArtworks(): Promise<Artwork[]> {
  return (cache ??= build());
}

async function build(): Promise<Artwork[]> {
  const notes = await getCollection('artnotes');
  const noteFor = new Map(notes.map((n) => [key(n.filePath ?? ''), n]));
  const seen = new Set<string>();

  const works = await Promise.all(
    Object.entries(files).map(async ([file, mod]) => {
      const parts = file.replace('/src/assets/art/', '').split('/');
      const base = parts.pop()!.replace(/\.[^.]+$/, '');
      const folder = parts[0];
      const m = base.match(/^(\d{4})(?:-\d{2})?(?:-\d{2})?[-_ ]*(.*)$/);
      const note = noteFor.get(key(file));
      const meta = note?.data ?? {};
      const title = meta.title ?? titleFrom(m ? m[2] : base);
      return {
        base,
        folder,
        src: mod.default,
        title,
        year: meta.year ?? m?.[1],
        medium: meta.medium ?? (folder ? MEDIA[folder.toLowerCase()] ?? titleFrom(folder) : undefined),
        alt: meta.alt ?? `Artwork: ${title}`,
        note,
        featured: meta.featured ?? false,
        excerpt: excerptOf(note?.body),
        pigments: await pigments(path.join(process.cwd(), file)),
        content: await contentBox(path.join(process.cwd(), file)),
      };
    }),
  );

  // Oldest first so duplicate names get stable slugs; the archive shows newest first.
  return works
    .sort((a, b) => a.base.localeCompare(b.base))
    .map(({ base, folder, ...art }) => {
      let slug = base.toLowerCase();
      if (seen.has(slug) && folder) slug = `${folder}-${slug}`;
      seen.add(slug);
      return { ...art, slug };
    })
    .reverse();
}
