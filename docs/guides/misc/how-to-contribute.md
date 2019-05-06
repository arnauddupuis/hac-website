---
title: "[WIP] How to contribute"
lang: en-US
lastUpdated: 2019-05-06 00:22:19
description: A guide to help the Hyrule Astronomy club by contributing small changes or entire articles to the website.
cover: /images/site/octocat.png
meta:
  - name: keywords
    content: hyrule astronomy club guides tutorial beginner educational kids learning github contribution contribute contributing
  - name: license
    content: CC-by-NC-SA
sidebar: auto
published: true
prev: false
next: false
# icon: fas fa-code-branch
icon: fas fa-tools
tags: 
  - general
  - github
  - contributing
---

# How to contribute

🚧👷 **THIS ARTICLE IS A WORK IN PROGRESS** 👷🚧

## Introduction

This guide is going to walk through the process of making contributions to the Hyrule Astronomy Club website. The principles of pull requests (we'll see more about that in a bit) can be extended to contribute to the hac-game-lib, but I'm going to assume that if you have the capacity to contribute to the hac-game-lib git and github pull requests are not really an issue :wink:.

This website is actually the result of a very straightforward yet organized technology stack and workflows (One more sentence to look smart at dinners!). 
 1. The website code is using the [Vuepress] framework with some [custom made modules](https://github.com/arnauddupuis/hac-website/tree/master/docs/.vuepress/components).
 2. All the code is hosted on [Github](https://github.com/arnauddupuis/hac-website).
 3. The compiled website is hosted on [Netlify].
 4. Every time commits are pushed in the master branch, a webhook is triggered for [Netlify] to build the new version of the website.

So all the content of this website is versioned on git. And all pages are actually [Markdown](https://en.wikipedia.org/wiki/Markdown) formatted files that are converted by [Vuepress] into HTML.

Markdown is extremely simple and straightforward, if you don't know this markup language you can read the excellent [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) from Adam Pritchard.

Now, with all of this in mind, 

## Corrections

![01](/images/guides/misc/Contributing/01.png)
![02](/images/guides/misc/Contributing/02.png)
![03](/images/guides/misc/Contributing/03.png)
![04](/images/guides/misc/Contributing/04.png)
![05](/images/guides/misc/Contributing/05.png)
![06](/images/guides/misc/Contributing/06.png)
![07](/images/guides/misc/Contributing/07.png)
![08](/images/guides/misc/Contributing/08.png)
![09](/images/guides/misc/Contributing/09.png)
![10](/images/guides/misc/Contributing/10.png)

## New pages

![11](/images/guides/misc/Contributing/11.png)
![12](/images/guides/misc/Contributing/12.png)
![13](/images/guides/misc/Contributing/13.png)
![14](/images/guides/misc/Contributing/14.png)

[Vuepress]: https://v1.vuepress.vuejs.org/
[Netlify]: https://www.netlify.com/