---
title: "Featured Image (Horizontal)"
image: assets/img/1280px-van_gogh_-_starry_night_-_google_art_project.jpg
alt: '"The Starry Night" is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.' 
caption: '"The Starry Night" by Vincent van Gogh - public domain image'
categories:
  - Layout
tags:
  - featured images
  - images
  - layout
---

This post should display a **header image**, if the theme supports it.

Non-square images can provide some unique styling issues. 

This post tests a horizontal header image.

<!--more-->

To display a featured image in the header, just add its url to the post's **Front Matter**: 

```yaml
---
image: assets/img/1280px-van_gogh_-_starry_night_-_google_art_project.jpg
---
```
you could even omit the relative url and just leave the file name, but it's better
to keep it for compatibility with *jekyll-seo-tag*.

You can also add the `alt` and `caption` tags: 

```yaml
---
alt: '"The Starry Night" is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.' 
caption: '"The Starry Night" by Vincent van Gogh - public domain image' 
---
```
