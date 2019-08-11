---
layout: post
title: Visual Studio Code and SCSS Linting
date: 2019-08-11 14:11:00
tags: jekyll vscode scss
---

Well shit...my first "serious" problem with this experiment.

I love Visual Studio Code, I use it every day for nearly all programming/text related activity.  I figured it'd be a no-brainer to use for this blog experiment - and so far that's been correct.  BUT! I ran into this minor problem.

<!--more-->

Enter [jekyll/jekyll#3408](https://github.com/jekyll/jekyll/issues/3408).

So per https://jekyllrb.com/docs/assets/

>Jekyll provides built-in support for [Sass](https://sass-lang.com/) and can work with [CoffeeScript](https://coffeescript.org/) via a Ruby gem. In order to use them, you must first create a file with the proper extension name (one of `.sass`, `.scss`, or `.coffee`) and start the file with two lines of triple dashes, like this:

```css
---
---

// start content
.my-definition
  font-size: 1.2em
```

![ugh]({{ site.baseurl }}/images/Screenshot 2019-08-11 at 12.15.28.png)
*Ugh - Linting please...*

The linter catches this syntax as an error!  After much googling, I couldn't find a real solution, so I had to disable linting for `scss`...not ideal.

```json
"scss.validate": false
```

With that disabled, no more linting errors in VS Code.  This however disables linting entirely so now if there's a **real** problem, I may miss it.

Now on to my next challenge, adding/fixing the clipboard functionality in the `code` blocks...