---
title: "Author Override"
author: a nerd
excerpt: "A post to test author overrides using a data file."
categories:
  - layout
---

Sites that may have content authored from various individuals can be accommodated by using [data files](https://jekyllrb.com/docs/datafiles/).

To attribute an author to a post or page that is different from the site author specified in `_config.yml`:

**Step 1.** Create an author `.md` file in the `_authors/` directory and add data using the following format:

```yaml
# _authors/a_nerd.md
---
name: anerd
display_name: A Nerd
role: Chief Editor
contact: a.nerd@pm.me
image: "1280px-vincent_van_gogh_-_de_slaapkamer_-_google_art_project.jpg"
---
A Nerd is anerd is A Nerd.

Biography goes here, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.

```

**Step 2.** Assign the authors to a post or page you wish to override the `site.author` with. 

Example: To assign `A Nerd` as an author for a post, the following YAML Front Matter would be applied:

```yaml
author: anerd
```

Alternatively, if you don't feel like creating a whole author file,
there's an easier and quicker way to attribute an author to a post:

```yaml
author: newauthor
contact: https://example.com/authorprofile 
# put any link you like: email, twitter, mastodon, instagram... 
```
