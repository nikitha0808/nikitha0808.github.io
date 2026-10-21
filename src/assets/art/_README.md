# Art archive

Drop image files into this folder, ideally in a sub-folder per medium, and they appear on /art/ and the
home page, newest first, resized and optimised at build time.

```
src/assets/art/
  digital/2026-02-tide-study.png
  ink/2025-11-palm-sketch.jpg
  watercolour/2024-03-morning-light.jpg
  watercolour/2024-03-morning-light.md    ← optional note
```

- Sub-folder → medium label (`digital`, `generative`, `ink`, `pencil`, `watercolour`, `painting`, or anything else).
- File name → caption: `2024-03-morning-light.jpg` → "Morning light", 2024.

## Notes on what inspired a piece
Add a `.md` file with the same name beside the image. Everything is optional:

```md
---
title: "Morning Light"          # overrides the name from the file
year: 2024
medium: "Watercolour on cotton paper"
alt: "Pale wash of a paddy field at dawn with two palms"
---

Write what you saw, felt, or were thinking about when you made it.
```

Each artwork gets its own page at /art/<file-name>/ showing the piece and its note.
