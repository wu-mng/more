---
title: "Lightbox"
categories:
  - Layout
tags:
  - images
  - lightbox
  - layout
---
**More** supports ligthboxes out-of-the-box (pun intended), all you have to do 
is add the `.lightbox` class to your image. 

<!--more-->

However it is advisable to do so in combination with our own [responsive images](layout-responsive-images):

```
{% raw %}{% include image.html class="img-thumb lightbox" src="1280px-van_gogh_-_starry_night_-_google_art_project.jpg" alt="The painting..." %}{% endraw %}
```

{% include image.html class="img-thumb lightbox" src="1280px-van_gogh_-_starry_night_-_google_art_project.jpg" alt='"The Starry Night" is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.' caption='"The Starry Night" by Vincent van Gogh' %}

A few lines of text to put the image in context...Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.
