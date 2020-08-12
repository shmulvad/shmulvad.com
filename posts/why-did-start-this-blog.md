---
title: 'Why Did I Start This Blog'
author: 'Søren Mulvad'
date: '2020-08-12'
heroImg: 'new.jpg'
categories: ['Personal']
short: 'I have started up this blog. But why?'
summary: '
I switched away from Wordpress and instead built this new website, in part to start up this blog. But why? In this post, I go over all my reasons for doing so.
'
---

## Table of Contents

## Why I Moved Away From Wordpress

Previously I had a website made in Wordpress hosted at this domain. I came to the conclusion that as a person studying computer science it might send the wrong impressions to have one's personal website being a Wordpress site. Furthermore, every time I actually had something I wanted to blog about, I felt put off by the fact that I

1. Would have to use the awful Wordpress-editor.
2. Could not easily use code or math in the posts that was formatted well.

Using the [Next.js tutorial](https://nextjs.org/learn/basics/create-nextjs-app) and [Future Imperfect](https://html5up.net/future-imperfect), I started building this site in React. I have since added several items so the posts can be fuzzy searched[^1], there is an [RSS feed](/api/feed.xml), and most importantly, I can easily write code

```javascript
const add = (a, b) => {
  return a + b
};
console.log(add(5, 10)); // 15
```

and inline math, $x = \frac{-b \pm \sqrt{d}}{2a}$, as well as on it's own line:

$$
x = \frac{-b \pm \sqrt{d}}{2a}
$$


## What I Plan to Blog About

I don't want to bind myself to a particular topic, though I promise I won't suddenly post cooking recipes. For now, my loose plans are to post about:

* Computer Science topics
* Programming tips
* ML and AI
* Automation
* macOS

Furthermore, in the more soft section I might write down my thoughts about

* Moving to a new country to study
* The value of a CS degree
* Work
* Etc.

As you could already guess, this is not an exhaustive list.

I hope you'll stick around anyway!





[^1]: Stuff like fuzzy search and category filtering is probably something I think is very nice but most people will never use it.
