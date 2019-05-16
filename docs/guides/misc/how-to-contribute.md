---
title: "How to contribute to the website"
lang: en-US
lastUpdated: '2019-05-06 18:51:05'
description: A guide on how to help the Hyrule Astronomy club by contributing small changes or entire articles to the website.
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
icon: fas fa-code-branch
tags: 
  - general
  - github
  - contributing
---

# How to contribute to the website

## Video

<youtube url="https://www.youtube.com/embed/6-5scq6BRFo" />

## Introduction

This guide is going to walk through the process of making contributions to the Hyrule Astronomy Club website. The principles of pull requests (we'll see more about that in a bit) can be extended to contribute to the hac-game-lib, but I'm going to assume that if you have the capacity to contribute to the hac-game-lib git and github pull requests are not really an issue :wink:.

This website is actually the result of a very straightforward yet organized technology stack and workflows (one more sentence to look smart at dinners!). 
 1. The website code is using the [Vuepress] framework with some [custom made modules](https://github.com/arnauddupuis/hac-website/tree/master/docs/.vuepress/components).
 2. All the code is hosted on [Github](https://github.com/arnauddupuis/hac-website).
 3. The compiled website is hosted on [Netlify].
 4. Every time commits are pushed in the master branch, a webhook is triggered for [Netlify] to build the new version of the website.
 5. [Netlify] automatically deploy the website in production if all goes well.

So all the content of this website is versioned on git. And all pages are actually [Markdown](https://en.wikipedia.org/wiki/Markdown) formatted files that are converted by [Vuepress] into HTML.

Markdown is extremely simple and concise, if you don't know this markup language you can read the excellent [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) from Adam Pritchard.

Now, with all that in mind, contributing to this website is fairly easy provided that you have a [Github account](https://github.com/join).  

We will cover 2 main type of contributions: corrections or additions to existing pages and brand new pages/content. Let's dig into it.

## Corrections & additions

The first thing you might want to do is sending corrections (because you read one of the many typos or want to correct my horrible English) or additions to existing pages.

To do so, you will need a Github account so go [sign up](https://github.com/join) if you haven't yet.  
Github is a platform that offers git as a service. Git is a distributed version control system. It keeps track of changes in a file and replays them. It is by far the most commonly used source control management (SCM) software in the world.

Once you have your Github account we're good to go.

### hac-website repository

First, go to the hac-website repository: [https://github.com/arnauddupuis/hac-website](https://github.com/arnauddupuis/hac-website)  
It looks like that:  
![01](/images/guides/misc/Contributing/01.png)

### File & directories structure

Then go to the docs directory. This one contains 3 directories:
 * .vuepress
 * guides
 * news

![02](/images/guides/misc/Contributing/02.png)

The **.vuepress/** directory contains all images, configuration and custom components. The **guides/** directory contains all the guides (surprised?). They are organized in subdirectories (astronomy, hac-game-lib, misc). Finally, the **news/** directory contains my grocery list. Just kidding: it contains the news. 

### Edit a file online

Now, let's say you want to fix a typo in the [glossary](/guides/astronomy/glossary.md).  
It is located in [docs/guides/astronomy/glossary.md](https://github.com/arnauddupuis/hac-website/blob/master/docs/guides/astronomy/glossary.md) (the link will take you to the glossary on Github).

Once you are here, click on the pencil, as shown on this screenshot:  
![03](/images/guides/misc/Contributing/03.png)

This will do 3 things: fork the repository (create an instance for you), create a new branch for your changes and let you edit the file in the online editor.  
The Github editor will warn you that you are making changes to a file in a repository you don't hav access to. Github will take care of all the git actions for you: cloning, create a branch, etc.  
The editor is somewhat rudimentary but allows you to edit the file directly:

![04](/images/guides/misc/Contributing/04.png)

### Propose a change

Once you are finished with your changes, you have to file the box at the bottom of the page. The default title is often good enough but you need to describe your changes in the description box.

![05](/images/guides/misc/Contributing/05.png)

### Create the pull request.

Once you've fill the description box, you can click on the **Propose file change** button. This will bring you to a screen entitled **Comparing changes**. Here you will be presented with the *patch* you just generated.  
It might look impressive if you've never seen anything like that, but it's actually dead simple: lines prefixed by a plus sign are addition to the file and lines prefixed by a minus sign are subtractions. There is extra lines around the one changed but that is just for context so the patch utility knows where to make additions and subtractions.

Here, the thing you should really look for is that in the grey box at the top of the page (under the title), you can see the **Able to merge** sentence in green, like in the following screenshot:

![06](/images/guides/misc/Contributing/06.png)

If you can see the **Able to merge** label, the only thing to do is to click on the **Create pull request** green button.

Then check the title and description and click one more time on the **Create pull request** green button:  
![07](/images/guides/misc/Contributing/07.png)

This will bring you to a status screen with your pull request and the different automatic checks that are being done pre-deployment on [Netlify]. At this point the only one really important is the one that check the conflicts with the base branch.  
![08](/images/guides/misc/Contributing/08.png)

If you want to check the status of you pull requests after that, just go to your pull requests tab on Github.  
The green tick or red cross shows you the status once all the check are complete.  
![09](/images/guides/misc/Contributing/09.png)

And clicking on a PR brings up the details:  
![10](/images/guides/misc/Contributing/10.png)

## New articles / Content proposal

The workflow for new content proposal is globally the same. The difference is really in the initialization of the file.

### Create a new file

To create a new file, simply navigate to the relevant directory (in this example case [docs/guides/misc](https://github.com/arnauddupuis/hac-website/tree/master/docs/guides/misc)).  
Then, click on the **Create new file** button, as highlighted here:  
![11](/images/guides/misc/Contributing/11.png)

### Online edition

Like before, Github is going to warn you that you are creating a file in a project you don't have write access to. And again, you will be able to send a pull request:  
![12](/images/guides/misc/Contributing/12.png)

When you create a new file, you have to know the skeleton of a Markdown file for this website.  
There is 2 distinct parts:
 1. The metadata (they describe the file for search engines and for the website to correctly display the article).
 2. The content of the file (what is going to be displayed on the website).

### File metadata

The metadata are **always** starting with just 3 dashes on a line ('---). A typical structure is as follow:

``` YAML
---
title: "How to contribute"
lang: en-US
lastUpdated: 2019-05-06 00:22:19
description: "A guide to help the Hyrule Astronomy club by contributing small changes or entire articles to the website."
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
icon: fas fa-code-branch
tags: 
  - general
  - github
  - contributing
---
```

This example is directly taken from this very page. Here is a list of the main fields:
 * **title:** the title of the article. It is going to be used in the list of articles and by search engines.
 * **lang:** the language of the article.
 * **lastUpdated:** the time of last update, it is used to sort the articles by dates.
 * **description:** a short description of the topics covered in that article. Used in the list of articles and by search engines.
 * **cover:** an images to show in the top right corner of the article entry in the list.
 * **meta:** some meta information. Most important are keywords and license as it is indexed by search engines.
 * **sidebar:** this option controls the apparition of the sidebar (the left part with the table of content) on your article. The advised value for that option is *auto*. This way the sidebar is automatically generated from the article sections titles.
 * **published:** if set to true the article will appear in the listing of its category. If set to false it won't.
 * **prev & next:** either false or a relative link to another article (like */guides/astronomy/glossary.md* for example). If set to anything else than false, it will generate a link at the bottom of the article pointing toward the values of **prev** and/or **next**.
 * **icon:** an icon from the [FontAwesome library](https://fontawesome.com/icons?d=gallery&m=free).
 * **tags:** a list of tags that describe the content of your article.

### Writing and submitting the new content

When you are satisfied with your article, you can file the title and description box at the bottom of the page and click on the **Propose new file** green button.

![13](/images/guides/misc/Contributing/13.png)

You are then, falling back into the pull request creation workflow that we covered [earlier](#create-the-pull-request):

![14](/images/guides/misc/Contributing/14.png)

## Final steps

Once your pull request is submitted it comes down to me to accept it directly or to discuss it.  
All the discussion is done on Github in the comments of your pull request.

When it's accepted it is then merged into the master branch of the main repository and will be automatically published on the website.

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

<disqus />

[Vuepress]: https://v1.vuepress.vuejs.org/
[Netlify]: https://www.netlify.com/