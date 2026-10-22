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
# It's shown as a circle, so a square crop of your face works best. Without one, the live page shows only your text.
portraitCaption: "2026"       # a short line under the photo; "" for none
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

I love working on hard research problems. When I spend enough time with a problem and read widely around it, the papers start to connect, and finding those missing links is the creative part of research for me. Much of my work has been on efficiency: getting vision and multimodal models to do more with less, without giving up accuracy. I also enjoy developing an intuition for how AI models work, and why they behave the way they do.

I studied Biological Engineering and Data Science at [IIT Madras](https://www.iitm.ac.in/). My first research was on modelling biological networks. It taught me a lot, but I found that I connected far more with problems I could see, so when a chance came to work on computer vision, I took it. I then joined Adobe's [Media and Data Science Research (MDSR) Lab](https://research.adobe.com/), where I worked on [a wide range of research problems](/research/), from [parsing faces](/research/2023-fp-liif-face-segmentation/) to [building layout generators that think like designers](/research/2026-designsense-layout-preferences/). Somewhere along the way I picked up the nickname "paper destroyer", because I find it hard not to notice what's missing in a result. I'm currently at [Sarvam AI](https://www.sarvam.ai/), working on image generation, and I'm very excited about what's cooking.

I've never quite found the words for why I love computer vision, but I know the feeling: it makes me happy when an algorithm creates a beautiful image, or truly understands one. It's tied to why I [paint digitally](/art/): I like making machines create good visual work, and I look for beauty in everything around me. That's also a big part of why I'm loving Bangalore so far (okay, at least Indiranagar!).

## Why this site

I've always been a quiet person, and I do my best thinking on my own. Since I was a child, I've been drawn to the harder route, both in my projects and in how I express myself.

That makes my work a little ironic. Research runs on communication: writing papers, giving talks, explaining ideas. Yet the way I've always said things best is through painting.

This site is my attempt to bridge that gap. It's a way of putting myself out into the world, and a place to practise saying things in words (with a little help from AI, of course).
