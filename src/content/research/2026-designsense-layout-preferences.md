---
title: "DesignSense: A Human Preference Dataset and Reward Modeling Framework for Graphic Layout Generation"
date: 2026-02-26
published: "Feb 2026"
description: "DesignSense-10k: 10,235 human preference pairs for graphic layouts, and a reward model that judges layout quality the way people do."
authors: ["Varun Gopal", "Rishabh Jain", "Aradhya Mathur", "Nikitha SR", "Sohan Patnaik", "Sudhir Yarram", "Mayur Hemani", "Balaji Krishnamurthy", "Mausoom Sarkar"]
venue: "arXiv 2026"
category: "Preprint"
paper: "https://arxiv.org/abs/2602.23438"
pdf: "https://arxiv.org/pdf/2602.23438"
figureCaption: "Preference orderings predicted by frontier vision-language models and by DesignSense, trained on DesignSense-10k. Each layout pair is judged as Left, Right, Both Good or Both Bad; the right panel shows each model's agreement with human judgment."
figureAlt: "Pairs of graphic layouts marked with which version Gemini 2.5 Pro, GPT-5, DesignSense and human annotators preferred, beside a bar chart of each model's agreement with human judgment."
bibtex: |
  @article{gopal2026designsense,
    title = {{DesignSense: A Human Preference Dataset and Reward Modeling Framework for Graphic Layout Generation}},
    author = {Gopal, Varun and Jain, Rishabh and Mathur, Aradhya and SR, Nikitha and Patnaik, Sohan and Yarram, Sudhir and Hemani, Mayur and Krishnamurthy, Balaji and Sarkar, Mausoom},
    journal = {arXiv preprint arXiv:2602.23438},
    year = {2026}
  }
---

## Abstract

Graphic layouts serve as an important and engaging medium for visual communication across different channels. While recent layout generation models have demonstrated impressive capabilities, they frequently fail to align with nuanced human aesthetic judgment. Existing preference datasets and reward models trained on text-to-image generation do not generalize to layout evaluation, where the spatial arrangement of identical elements determines quality. To address this critical gap, we introduce DesignSense-10k, a large-scale dataset of 10,235 human-annotated preference pairs for graphic layout evaluation. We propose a five-stage curation pipeline that generates visually coherent layout transformations across diverse aspect ratios, using semantic grouping, layout prediction, filtering, clustering, and VLM-based refinement to produce high-quality comparison pairs. Human preferences are annotated using a 4-class scheme (left, right, both good, both bad) to capture subjective ambiguity. Leveraging this dataset, we train DesignSense, a vision-language model-based classifier that substantially outperforms existing open-source and proprietary models across comprehensive evaluation metrics (54.6% improvement in Macro F1 over the strongest proprietary baseline). Our analysis shows that frontier VLMs remain unreliable overall and fail catastrophically on the full four-class task, underscoring the need for specialized, preference-aware models. Beyond the dataset, our reward model DesignSense yields tangible downstream gains in layout generation. Using our judge during RL based training improves generator win rate by about 3%, while inference-time scaling, which involves generating multiple candidates and selecting the best one, provides a 3.6% improvement. These results highlight the practical impact of specialized, layout-aware preference modeling on real-world layout generation quality.
