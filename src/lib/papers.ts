/**
 * A paper's main figure is picked up from src/assets/papers/ by file name:
 *   src/content/research/2025-hire-high-resolution-features.md
 *   src/assets/papers/2025-hire-high-resolution-features.png   ← its figure
 * Caption and alt text go in the paper's frontmatter (figureCaption, figureAlt).
 */
import type { ImageMetadata } from 'astro';

const figures = import.meta.glob<{ default: ImageMetadata }>('/src/assets/papers/*.{png,jpg,jpeg,webp,avif,gif}', { eager: true });

export const figureFor = (slug: string): ImageMetadata | undefined =>
  Object.entries(figures).find(([path]) => path.split('/').pop()!.replace(/\.[^.]+$/, '') === slug)?.[1].default;
