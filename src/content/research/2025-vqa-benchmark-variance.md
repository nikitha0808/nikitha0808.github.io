---
title: "Evaluating variance in visual question answering benchmarks"
date: 2025-10-19
published: "Oct 2025"
description: "How much multimodal LLM scores on 14 VQA benchmarks move with training seed, framework non-determinism and model scale, and what that means for evaluating them."
authors: ["Nikitha SR"]
venue: "ICCV 2025 Workshop on What's Next in Multimodal Foundational Models"
category: "Workshop paper"
selected: true
paper: "https://openaccess.thecvf.com/content/ICCV2025W/MMFM/html/SR_Evaluating_Variance_in_Visual_Question_Answering_Benchmarks_ICCVW_2025_paper.html"
pdf: "https://openaccess.thecvf.com/content/ICCV2025W/MMFM/papers/SR_Evaluating_Variance_in_Visual_Question_Answering_Benchmarks_ICCVW_2025_paper.pdf"
figureCaption: "Variance across benchmarks for LLaVA-1.5-7B and InternVL2.5-8B trained with different seeds."
figureAlt: "Bar chart of score variance on eleven VQA benchmarks for LLaVA-1.5 7B and InternVL2.5-8B. Variance differs widely by benchmark and model, peaking for InternVL2.5-8B on MM-Vet."
bibtex: |
  @inproceedings{sr2025evaluating,
    title = {{Evaluating variance in visual question answering benchmarks}},
    author = {SR, Nikitha},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) Workshops},
    pages = {4253--4262},
    year = {2025}
  }
---

## Abstract

Multimodal large language models (MLLMs) have emerged as powerful tools for visual question answering (VQA), enabling reasoning and contextual understanding across visual and textual modalities. Despite their advancements, the evaluation of MLLMs on VQA benchmarks often relies on point estimates, overlooking the significant variance in performance caused by factors such as stochastic model outputs, training seed sensitivity, and hyperparameter configurations. This paper critically examines these issues by analyzing variance across 14 widely used VQA benchmarks, covering diverse tasks such as visual reasoning, text understanding, and commonsense reasoning. We systematically study the impact of training seed, framework non-determinism, model scale, and extended instruction finetuning on performance variability. Additionally, we explore Cloze-style evaluation as an alternate assessment strategy, studying its effectiveness in reducing stochasticity and improving reliability across benchmarks. Our findings highlight the limitations of current evaluation practices and advocate for variance-aware methodologies to foster more robust and reliable development of MLLMs.
