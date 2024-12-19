---
sidebar_position: 3
---

# Introduction to Generations

Generating images is the fun part. You can either generate your images though our pre trained models that can generate good quality images for almost anything except your product. To generate your product images your will need [train your model](../trainings/intro) first.

## Understand the parameters.

The generating page can be overwhealing if its your first time looking at it. but its actually pretty self explainatory. All you gotta do is select your parameters and hit the generate button. Qupine will handle the rest and generate an image for you. Parameters that will have to enter are as follows.

- Model - You need to select the model from a drop down model.
- Prompt - This is where you enter the prompt for the image you want to generate. Make sure your prompt is in line with the model you are using.
- Aspect Ratio - This will configure the aspect ratio that you want the generate image to be in.
- Output Format - You can selected the type of image you want. Your options are `png`, `jpeg` and `webp`.
- Safety Tolerance - By deafult there is a prompt safety filter that will stop you from generating NSFW images. Disabling this will bypass this filter. NOTE: This wont bypass all filters. There are still some filters in the pipeline that will stop you from generating certain type of images.

![Genearte image page screenshot](/img/generate-page.png)
