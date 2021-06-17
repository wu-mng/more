---
title: "Responsive Images"
categories:
  - Layout
tags:
  - images
  - responsive images
  - layout
---
**More** is capable of generating responsive images (multiple copies, 
at different sizes, of a picture) that will always suit every screen 
and device perfectly. But how to use them?

<!--more-->

- First, switch on responsive images in `_config.yml`:

```yaml
  responsive_images: 
    active: true
```

- Place your images in `/assets/images/uploads/`   
- Start the npm script by typing `npm run rig` while in the `/npm` directory
- Restart Jekyll 

(...ok, a bit convoluted, I know, but we're working on an automated process...).

Note that **npm** needs to be installed in your system, refer to [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm) for instructions.

Also be aware that the original files will be optimized, and then **deleted**;
see `npm/uploads_cleanup.js` for more informations.

But let's see how this works in practice. A **medium** sized image is the default value, 
and since it fill all the available space, it doesn't need any alignment:

```
{% raw %}{% include image.html src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt="The painting..." %}{% endraw %}
```

{% include image.html src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' %}

A **small** image is **aligned** to the **left** by default:

```
{% raw %}{% include image.html class="img-small" src="1280px-vincent..." alt="The painting..."{% endraw %}
```
{% include image.html class="img-small" src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.

And now, for a perfectly **centered** image:

```
{% raw %}{% include image.html class="img-small center" src="1280px-vincent..." %}{% endraw %}
```
{% include image.html class="img-small center" src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' %}

or a **right** leaning one; let's also add a **caption**, for a change:

```
{% raw %}{% include image.html class="img-small right" src="1280px-vincent..." caption='"The Bedroom in Arles" (first version) by Vincent Van Gogh - public domain image' %}{% endraw %}
```

{% include image.html class="img-small right" src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' caption='"The Bedroom in Arles" (first version) by Vincent Van Gogh - public domain image' %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.

Well, you get the gist of it... but before we wrap it up, let me introduce you the **thumbnail**:
```
{% raw %}{% include image.html class="img-thumb" src="1280px-vincent..." %}{% endraw %}
```

{% include image.html class="img-thumb" src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.

Of course it's possible to **center** and **caption** the thumbnails as well:
```
{% raw %}{% include image.html class="img-thumb center" src="1280px-vincent..." caption='"The Bedroom in Arles"...' %}{% endraw %}
```
{% include image.html class="img-thumb center" src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' caption='"The Bedroom in Arles" (first version) by Vincent Van Gogh - public domain image' %}

You might be wondering: what if I don't have a wall of text like your _lorem ipsum_,
how will the text wrap properly around the image? 

Let's take, as an example, a **right** aligned thumbnail with a shorter text:
```
{% raw %}{% include image.html class="img-thumb right" src="1280px-vincent..." %}{% endraw %}
```

{% include image.html class="img-thumb right" src="1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg" alt='The painting &quot;The Bedroom&quot;, realized by Vincent van Gogh in 1888, depicts his bedroom in Arles, France. The door to the right opened on to the upper floor and the staircase; the door to the left was that of the guest room he held prepared for Gauguin; the window in the front wall looked on to Place Lamartine and its public gardens.' %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.

Now, how does **this very text** gets to hang around here, and **not wrap around** the
image? Well, that's because it has a `.clear` class... to use it, put this just
after the paragraph:
{: .clear }
```
(...)
to use it, put this just after the paragraph:
{% raw %}{: .clear }{% endraw %}
```

And this concludes our tour. Enjoy your responsive images!
