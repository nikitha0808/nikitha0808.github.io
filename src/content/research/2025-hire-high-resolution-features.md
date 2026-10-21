---
title: "HIRE: Lightweight High-Resolution Image Feature Enrichment for Multimodal LLMs"
date: 2025-06-21
published: "Jun 2025"
description: "A shallow feature enricher that upsamples image features for multimodal LLMs, keeping high-resolution performance with up to 1.5× fewer FLOPs."
authors: ["Nikitha SR", "Aradhya Neeraj Mathur", "Tarun Ram Menta", "Rishabh Jain", "Mausoom Sarkar"]
venue: "CVPR 2025 Workshop on What's Next in Multimodal Foundational Models"
category: "Workshop paper"
selected: true
paper: "https://arxiv.org/abs/2506.17608"
pdf: "https://arxiv.org/pdf/2506.17608"
figureCaption: "A very shallow UNet with a JBU feature enricher generates high-resolution enriched features, which are downsampled and concatenated with the lower-resolution CLIP features used by the MLLM."
figureAlt: "Pipeline: a low-resolution image goes through ViT-B, while a high-resolution image feeds a shallow UNet guidance generator and a JBU feature enricher; the enriched features are pooled and concatenated with the ViT features."
bibtex: |
  @article{sr2025hire,
    title = {{HIRE: Lightweight High-Resolution Image Feature Enrichment for Multimodal LLMs}},
    author = {SR, Nikitha and Mathur, Aradhya Neeraj and Menta, Tarun Ram and Jain, Rishabh and Sarkar, Mausoom},
    journal = {arXiv preprint arXiv:2506.17608},
    note = {CVPR 2025 Workshop on What's Next in Multimodal Foundational Models},
    year = {2025}
  }
---

## Abstract

The integration of high-resolution image features in modern multimodal large language models has demonstrated significant improvements in fine-grained visual understanding tasks, achieving high performance across multiple benchmarks. Since these features are obtained from large image encoders like ViT, they come with a significant increase in computational costs due to multiple calls to these encoders. In this work, we first develop an intuition for feature upsampling as a natural extension of high-resolution feature generation. Through extensive experiments and ablations, we demonstrate how a shallow feature enricher can achieve competitive results with tremendous reductions in training and inference time as well as computational cost, with upto 1.5x saving in FLOPs.
