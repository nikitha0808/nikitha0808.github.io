---
# YOUR ABOUT PAGE. Lines starting with "#" up here are notes to you; they never appear on the site.
#
# Write your own words below the second "---" line, in ordinary Markdown:
#   - a blank line starts a new paragraph (the first paragraph is shown a little larger)
#   - ## Heading            for a section heading
#   - **bold**, *italics*, [link text](https://…), "- item" for lists, "> " for a quote
# The contact links (email, LinkedIn, Google Scholar, CV) are added at the end automatically:
#   set email and LinkedIn in src/lib/sections.ts, and put your CV at public/cv.pdf.
#
# Preview while you write: run `npm run dev` and open http://localhost:4321/about/
# When you're happy: commit and push, and the live site updates by itself.

# The big heading. A coloured full stop is added after it automatically.
title: "About"

# YOUR PHOTO on the left. Save it as src/assets/portrait.jpg (or .png / .webp).
# A portrait shape works best (taller than wide). Until it's there, the live page shows only your text.
portraitCaption: "Bangalore, 2026"       # a short line under the photo; "" for none
portraitAlt: "Portrait of Nikitha"       # describes the photo for screen readers

# A QUESTIONNAIRE. Write your answer after "a: |", on the next line, indented like the examples.
# Only questions you answer appear on the site; leave the rest as a: "" and they stay hidden.
# Skip, reword, reorder or delete any question, or add your own (copy a "- q:" block).
# Leave a blank line inside an answer to start a new paragraph.
#
# Example of an answered question:
#   - q: Where did you grow up?
#     a: |
#       In a village surrounded by paddy fields.
#
#       Second paragraph, if you like.
questionsTitle: "A few questions"
questions:
  # Roots
  - q: "Where did you grow up, and what do you remember most about it?"
    a: ""
  - q: "A smell, sound or season that takes you straight back home?"
    a: ""
  - q: "Who taught you to notice things?"
    a: ""

  # Seeing: research
  - q: "What first made you curious about how machines see?"
    a: ""
  - q: "Which question in your research do you keep coming back to?"
    a: ""
  - q: "Something living eyes do that you wish our models could?"
    a: ""

  # Making: art
  - q: "When did you start drawing, and why did you keep going?"
    a: ""
  - q: "Where does a painting usually begin for you: a colour, a feeling, a memory?"
    a: ""
  - q: "Which of your pieces are you proudest of, and why?"
    a: ""
  - q: "Pencil, brush or iPad, and what changes when you switch?"
    a: ""

  # Everyday
  - q: "What does a perfect monsoon day look like?"
    a: ""
  - q: "A book that changed how you see things?"
    a: ""
  - q: "What's on repeat right now?"
    a: ""
  - q: "A small thing that makes an ordinary day good?"
    a: ""

  # Now and next
  - q: "What are you learning at the moment?"
    a: ""
  - q: "Something you'd love to make, study or do someday?"
    a: ""
  - q: "What would you like someone to feel after spending time on this site?"
    a: ""
---

I'm Nikitha, a computer vision researcher based in Bangalore.

I studied at [IIT Madras](https://www.iitm.ac.in/), then joined [Adobe Research](https://research.adobe.com/), where I worked on computer vision and multimodal AI: [parsing faces](/research/2023-fp-liif-face-segmentation/), [understanding documents](/research/2024-dopta-document-layout/), [giving multimodal models sharper eyes](/research/2025-hire-high-resolution-features/), and [asking how much we can trust the benchmarks we use to evaluate them](/research/2025-vqa-benchmark-variance/). Now I'm at [Sarvam AI](https://www.sarvam.ai/), working on image generation. I want to help build a model that is truly flawless, and the first step is finding and clearly defining the flaws in today's best models.

I love working on hard research problems. When I spend enough time with a problem and read widely around it, the papers start to connect, and finding those missing links is the creative part of research for me. I also enjoy optimisation, whether that means making models faster or making them perform better. And I like building an intuition for how AI models are built and why they behave the way they do.

I've never quite found the words for why I love computer vision, but I know the feeling: it makes me happy when an algorithm creates a beautiful image, or truly understands one. It's tied to why I make art digitally: I like making machines create good visual work, and I look for beauty in everything around me. That's a big part of why I'm loving Bangalore so far.

## Why this site

I've always been a quiet person. I tend to work on my own, and since I was a child I've taken the harder route to most things, whether it's a project or simply getting my point across.

That makes my work a little ironic. Research runs on communication: writing papers, giving talks, explaining ideas. Yet the way I've always said things best is through painting.

This site is my attempt to bridge that gap. It's a way of putting myself out into the world, and a place to practise saying things in words.
