---
title: "DoPTA: Improving Document Layout Analysis using Patch-Text Alignment"
date: 2024-12-17
published: "Dec 2024"
description: "A document encoder trained with patch–text alignment that understands document images without needing OCR at inference."
authors: ["Nikitha SR", "Tarun Ram Menta", "Mausoom Sarkar"]
venue: "arXiv 2024"
category: "Preprint"
selected: true
paper: "https://arxiv.org/abs/2412.12902"
pdf: "https://arxiv.org/pdf/2412.12902"
figureCaption: "Pre-training of DoPTA. Document image patches and tokenized OCR text pass through image and text encoders, trained with a patch–text contrastive loss against IoU-based ground truth and a masked-patch reconstruction loss. Only the image encoder is needed downstream."
figureAlt: "Diagram of DoPTA pre-training: a document page is split into image patches, some masked, and OCR text tokens. Patches go through the DoPTA encoder and an image decoder for reconstruction loss; tokens go through a text encoder. A patch–text contrastive loss aligns them using an IoU-based ground-truth matrix between text tokens and patches."
bibtex: |
  @article{sr2024dopta,
    title = {{DoPTA: Improving Document Layout Analysis using Patch-Text Alignment}},
    author = {SR, Nikitha and Menta, Tarun Ram and Sarkar, Mausoom},
    journal = {arXiv preprint arXiv:2412.12902},
    year = {2024}
  }
---

## Abstract

The advent of multimodal learning has brought a significant improvement in document AI. Documents are now treated as multimodal entities, incorporating both textual and visual information for downstream analysis. However, works in this space are often focused on the textual aspect, using the visual space as auxiliary information. While some works have explored pure vision based techniques for document image understanding, they require OCR identified text as input during inference, or do not align with text in their learning procedure. Therefore, we present a novel image-text alignment technique specially designed for leveraging the textual information in document images to improve performance on visual tasks. Our document encoder model DoPTA - trained with this technique demonstrates strong performance on a wide range of document image understanding tasks, without requiring OCR during inference. Combined with an auxiliary reconstruction objective, DoPTA consistently outperforms larger models, while using significantly lesser pre-training compute. DoPTA also sets new state-of-the art results on D4LA, and FUNSD, two challenging document visual analysis benchmarks.
