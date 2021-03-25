---
title: "Author Override"
author: An Author
excerpt: "A post to test author overrides using a data file."
categories:
  - layout
---

Sites that may have content authored from various individuals can be accommodated by using [data files](https://jekyllrb.com/docs/datafiles/).

To attribute an author to a post or page that is different from the site `author` specified in `_config.yml`:

**Step 1.** Create an author `.md` file in the `_authors/` directory and add data using the following format:

```yaml
# _authors/an_author.md
---
name: An Author
role: Chief Editor
contact: an.author@example.com
image: og.png
---
An Author is an.author is An Author.

Biography goes here, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.

```

**Step 2.** Assign the authors to a post or page you wish to override the `site.author` with. 

Example: To assign `An Author` as an author for a post, the following YAML Front Matter would be applied:

```yaml
author: An Author
```

Alternatively, if you don't feel like creating a whole author file,
there's an easier and quicker way to attribute an author to a post, always in the
post's Front Matter:

```yaml
author: newauthor
contact: https://example.com/authorprofile # put any link you like: email, twitter, mastodon, instagram...
```
