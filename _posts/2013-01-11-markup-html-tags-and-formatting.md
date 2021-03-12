---
title: "HTML Tags and Markdown Formatting"
date: 2021-03-10
categories:
  - Markup
tags:
  - content
  - css
  - formatting
  - html
  - markup
---

A variety of common markup showing how the theme styles them.

## Header two

### Header three

#### Header four

##### Header five

###### Header six

small text
{: .small }

smaller text
{: .smaller }

<!--more-->

## Blockquotes

Single line blockquote:

> Software is like sex: it’s better when it’s free.

Multi line blockquote with a cite reference:

> Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without loosing something.
>
>> Richard Stallman 


## Tables

| \#  | Person           | Idea        |
| --- | ---------------- | ----------- |
| 1   | Richard Stallman | Gnu         |
| 2   | Linus Torvalds   | Linux       |
| 3   | Ian Murdock      | Debian      |
| 4   | Bruce Perens     | Open Source |


| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

{% comment %}
# TODO

## Forms

<form>
  <fieldset>
    <legend>Personalia:</legend>
    Name: <input type="text" size="30"><br>
    Email: <input type="text" size="30"><br>
    Date of birth: <input type="text" size="10">
  </fieldset>
</form>

## Buttons

Make any link standout more when applying the `.btn` class.

```html
<a href="#" class="btn--success">Success Button</a>
```

[Default Button](#){: .btn}
[Primary Button](#){: .btn .btn--primary}
[Success Button](#){: .btn .btn--success}
[Warning Button](#){: .btn .btn--warning}
[Danger Button](#){: .btn .btn--danger}
[Info Button](#){: .btn .btn--info}
[Inverse Button](#){: .btn .btn--inverse}
[Light Outline Button](#){: .btn .btn--light-outline}

```markdown
[Default Button Text](#link){: .btn}
[Primary Button Text](#link){: .btn .btn--primary}
[Success Button Text](#link){: .btn .btn--success}
[Warning Button Text](#link){: .btn .btn--warning}
[Danger Button Text](#link){: .btn .btn--danger}
[Info Button Text](#link){: .btn .btn--info}
[Inverse Button](#link){: .btn .btn--inverse}
[Light Outline Button](#link){: .btn .btn--light-outline}
```

[X-Large Button](#){: .btn .btn--primary .btn--x-large}
[Large Button](#){: .btn .btn--primary .btn--large}
[Default Button](#){: .btn .btn--primary }
[Small Button](#){: .btn .btn--primary .btn--small}

```markdown
[X-Large Button](#link){: .btn .btn--primary .btn--x-large}
[Large Button](#link){: .btn .btn--primary .btn--large}
[Default Button](#link){: .btn .btn--primary }
[Small Button](#link){: .btn .btn--primary .btn--small}
```

## Notices

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice}` class.
{: .notice}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--primary}` class.
{: .notice--primary}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--info}` class.
{: .notice--info}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--warning}` class.
{: .notice--warning}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--success}` class.
{: .notice--success}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--danger}` class.
{: .notice--danger}

{% endcomment %}

## HTML Tags

**`<address>`**

<address>Provides contact information<br> 
for a person or people<br> or for an organization</address>

**`<href>`**

This is an example of an [anchor tag or link](https://www.linuxfoundation.org/ "Linux").

**`<abbr>`**

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

**`<cite>`**

"Code is poetry." ---<cite>Automattic</cite>

**`<code>`**

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

**`<del>`**

This tag will let you ~~strikeout text~~.

**`<em>`**

The emphasize tag should _italicize_ text.

**`<ins>`**

This tag should denote <ins>inserted</ins> text.

**`<kbd>`**

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

**`<pre>`**

This tag styles large blocks of code.

<pre>
.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
	and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

**`<q>`**

<q>Just a short text, with automatically inserted quotation marks.</q>

**`<strong>`**

This tag shows **bold text**.

**`<sub>`**

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

**`<sup>`**

Still sticking with science and Albert Einstein's E = MC<sup>2</sup>, which should lift the 2 up.

**`<var>`**

This allows you to denote <var>variables</var>.
