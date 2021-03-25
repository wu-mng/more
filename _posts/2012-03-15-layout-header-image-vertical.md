---
title: "Featured Image (Vertical)"
image: assets/img/rembrandt_and_saskia_in_the_scene_of_the_prodigal_son_-_google_art_project.jpg
alt: '"Rembrandt and Saskia in the parable of the prodigal son" is a painting by the Dutch master Rembrandt. It portrays two people who had been identified as Rembrandt himself and his wife Saskia. In the Protestant contemporary world, the theme of the prodigal son was a frequent subject for works of art due to its moral background.' 
caption: '"Rembrandt and Saskia in the parable of the prodigal son" by Rembrandt - public domain image'
categories:
  - Layout
tags:
  - featured images
  - images
  - layout
---
This post should display a **header image**, if the theme supports it.

Non-square images can provide some unique styling issues.

This post tests a vertical header image.
{: .clear }

<!--more-->

To display a featured image in the header, just add its url to the post's **Front Matter**: 

```yaml
---
image: assets/img/rembrandt_and_saskia_in_the_scene_of_the_prodigal_son_-_google_art_project.jpg
---
```
you could even omit the relative url and just leave the file name, but it's better
to keep it for compatibility with *jekyll-seo-tag*.

You can also add the `alt` and `caption` tags: 

```yaml
---
alt: '"Rembrandt and Saskia in the parable of the prodigal son" is a painting by the Dutch master Rembrandt. It portrays two people who had been identified as Rembrandt himself and his wife Saskia. In the Protestant contemporary world, the theme of the prodigal son was a frequent subject for works of art due to its moral background.' 
caption: '"Rembrandt and Saskia in the parable of the prodigal son" by Rembrandt - public domain image' 
---
```
