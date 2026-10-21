---
title: "Parameter efficient local implicit image function network for face segmentation"
date: 2023-03-27
published: "Jun 2023"
description: "FP-LIIF: a lightweight face-parsing network built on local implicit image functions that matches state-of-the-art accuracy with 1/26th of the parameters."
authors: ["Mausoom Sarkar", "Nikitha SR", "Mayur Hemani", "Rishabh Jain", "Balaji Krishnamurthy"]
venue: "CVPR 2023"
category: "Conference paper"
selected: true
paper: "https://openaccess.thecvf.com/content/CVPR2023/html/Sarkar_Parameter_Efficient_Local_Implicit_Image_Function_Network_for_Face_Segmentation_CVPR_2023_paper.html"
pdf: "https://openaccess.thecvf.com/content/CVPR2023/papers/Sarkar_Parameter_Efficient_Local_Implicit_Image_Function_Network_for_Face_Segmentation_CVPR_2023_paper.pdf"
figureCaption: "The simple architecture of FP-LIIF: a light convolutional encoder of modified resblocks, followed by a pixel-only MLP decoder."
figureAlt: "Diagram: a face image passes through a light CNN encoder into latent features; a pixel MLP predicts per-pixel class probabilities such as nose, skin and upper lip, producing a coloured face-parsing mask."
bibtex: |
  @inproceedings{sarkar2023parameter,
    title = {{Parameter efficient local implicit image function network for face segmentation}},
    author = {Sarkar, Mausoom and SR, Nikitha and Hemani, Mayur and Jain, Rishabh and Krishnamurthy, Balaji},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    pages = {20970--20980},
    year = {2023}
  }
---

## Abstract

Face parsing is defined as the per-pixel labeling of images containing human faces. The labels are defined to identify key facial regions like eyes, lips, nose, hair, etc. In this work, we make use of the structural consistency of the human face to propose a lightweight face-parsing method using a Local Implicit Function network, FP-LIIF. We propose a simple architecture having a convolutional encoder and a pixel MLP decoder that uses 1/26th number of parameters compared to the state-of-the-art models and yet matches or outperforms state-of-the-art models on multiple datasets, like CelebAMask-HQ and LaPa. We do not use any pretraining, and compared to other works, our network can also generate segmentation at different resolutions without any changes in the input resolution. This work enables the use of facial segmentation on low-compute or low-bandwidth devices because of its higher FPS and smaller model size.
