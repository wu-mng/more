---
title: "Lopado­temacho­selacho­galeo­kranio­leipsano­drim­hypo­trimmato­silphio­karabo­melito­katakechy­meno­kichl­epi­kossypho­phatto­perister­alektryon­opte­kephallio­kigklo­peleio­lagoio­siraio­baphe­tragano­pterygon"
categories:
  - Edge Case
tags:
  - content
  - css
  - edge case
  - html
  - layout
  - title
---

This post has a [very long](https://en.wikipedia.org/wiki/Lopadotemachoselachogaleokranioleipsanodrimhypotrimmatosilphiokarabomelitokatakechymenokichlepikossyphophattoperisteralektryonoptekephalliokigklopeleiolagoiosiraiobaphetraganopterygon){: target="_blank" rel="noopener" }
word for a title.

A few things to check for:

  * Non-breaking text in the title, content, and comments should have no adverse effects on layout or functionality.
  * Check the browser window / tab title.
  * If you are a theme developer, check that this text does not break anything.

<!--more-->

The following CSS properties will help you support non-breaking text.

```css
-ms-word-wrap: break-word;
word-wrap: break-word;
```

If the text is inside a flex container, you might also need to use this property:

```css
.flex-container {
  min-width: 0;  
}
```
