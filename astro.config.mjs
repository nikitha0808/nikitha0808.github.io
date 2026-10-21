import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({
  // Published on GitHub Pages from the repository nikitha0808/nikitha0808.github.io
  site: 'https://nikitha0808.github.io',
  integrations: [mdx()],
  // The old studio section is now the art archive.
  redirects: {
    '/studio': '/art/',
    '/writing': '/blog/',
    '/writing/[slug]': '/blog/[slug]',
  },
});
