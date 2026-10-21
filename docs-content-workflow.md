# Publishing with Markdown and Git

Create one `.md` file in `src/content/blog/` (notes and writing) or `src/content/life/` (for papers, copy `src/content/research/visual-intelligence.md`; for art, just drop images into `src/assets/art/`). For example:

```md
---
title: "Why I make things"
date: 2026-10-10
description: "A short sentence to help readers decide whether to open it."
category: "Essay"   # or "Note"
tags: ["curiosity"]
draft: true        # remove when it's ready to publish
---

Write your post here using ordinary Markdown.

## A section heading

Use **bold**, links, lists, code, and blockquotes whenever they help.
```

Save the file and commit it. Astro automatically builds a listing card and a dedicated article page.

```bash
git add .
git commit -m "Add a journal entry"
git push
```

When the repository is connected to Vercel or Cloudflare Pages, a push can trigger a deployment. To add a picture to an entry, put it in `public/images/` and add `image: "/images/file-name.jpg"` and `alt: "Describe the image"` to the frontmatter.

Treat every file committed to a public Git repository as public. Keep private diary entries, addresses, private photos, unpublished sensitive research, confidential work material, and API keys out of this repository.
