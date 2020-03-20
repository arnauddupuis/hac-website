---
title: "hac-game-lib - 2020.3 - Release notes"
lang: en-US
lastUpdated: '2020-03-19 18:39:10'
description: "Release notes of the hac-game-lib release version 2020.3."
cover: /images/site/newspaper-circle.svg
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning news update game-lib
  - name: license
    content: CC-by-NC-SA
sidebar: auto
# For the article to be listed published has to be true.
published: true
# Relative path to previous or next article. false if not related to anything.
prev: /news/hac-game-lib-may-2019-update.html
next: false
# An icon from FontAwesome
icon: fas fa-code-branch
# pick one or two
tags: 
  - hac-game-lib
  - python
---

# hac-game-lib - 2020.3 - Release notes

![hac-game-lib version](https://img.shields.io/badge/Version-2020.3-blue.svg)

## Introduction

May has been another fairly intense development month for the hac-game-lib. There was some breaking changes, lots of improvements for documentation and examples and ground work for some major new features.

## Release details

Let's see what it looks like in more details.

### Statistics

| Item              | Data |
|:-----------------:|-----:|
| *Files changed* | 17   |
| *Additions*     | 382  |
| *Deletions*     | 58   |
| *Commits*       | 19   |

The full list is available on [Github](https://github.com/arnauddupuis/hac-game-lib/compare/43edca076bf59c2c27b5eccebaf4cf64703cc1c8...master).

### Breaking changes

Let's see the horrible first: there are some breaking changes. They are due to spelling errors in some class names.  
Here is the complete list of items that changed names:

| Initial name                | New name                   |
|-----------------------------|----------------------------|
| GenericActionnableStructure | GenericActionableStructure |
| Actionnable                 | Actionable                 |
| Imovable                    | Immovable                  |

I'm perfectly aware of the breaking nature of these changes but as the module is still very young and only available as an alpha version, I thought I was better fixing these errors right away.

### Documentation

The past weeks have been intense for documentation and it remains a goal to finish documenting the whole module before summer.  
We also added a couple of extra instructions/documentation for side problems like the support of emojis in the terminal and - on the website - how to run a local instance for contribution purpose.

Part of the work was also done to have a properly packaged version of the module for PyPi and therefore we spent some time on making the module more 'releasable'.

Finally, the example directory of the repository is now well populated with examples and tutorials. All code from the tutorial on [Youtube](https://www.youtube.com/channel/UCT_SxIlKaD6MM7JlQKelpgw) or on the [website](https://astro.hyrul.es/) is now hosted in this directory.

### Bugfixes

There is some bug fix commits in May, but they are entirely for the features introduced with this release.

### Improvements / New features

This month's work has been focused a lot on doors. More accurately on what we call "*overlappable* items". These are BoardItems that can be overlapped and if they also are *restorable*, then the player can go through and they remains on the board (or more accurately: they are restored to their initial place when the player leaves).  
As usual, we made a specific object that does all the right configuration automatically: **gamelib.Structures.Door**.
The editor is on par with the library and supports doors already.

This created a lot of issues with howe the Board was managing items but we are now good!  
One of these bugs was that after a player or NPC leave an area with more than one overlappable and restorable item, the board was leaving a trail of player like in that image (the player is the flying saucer and the blue and oange surface is only overlappable+restorable items):
![Bug](/images/news/hac-overlapping-bug.png)

When the expected behavior was more like that:
![Bug solved](/images/news/hac-overlapping-bug-solved.png)

In case you are in awe with the design of that board, don't be: it's a debug level that serves only that purpose :smiley:.

I also started to work on behavioral and advanced actuators. They will allow you to create NPC that finds their path automatically toward a destination or take decisions based on conditions. This is very early work and it **will** change **a lot** in the upcoming months.

Last but not least, the base_game.py (now known as hgl-base_game.py), is host to a new NPC: Unipici. This is to show how to create basic interactions with a NPC. Unipici can interact with the player by damaging or restoring his life on demand, and also give the player rewards based on answers to her riddles.  
This is really an example on how to manage interactions with the player and how to get fuzzy answers to open questions and rate them.

## Conclusion

A lot of new interesting things for new and returning programmers to learn in a fun context! The kids from our class continue to enjoy it!

This alpha release is available on [Test PyPi](https://test.pypi.org/project/hac-game-lib/) and on [Github](https://github.com/arnauddupuis/hac-game-lib) of course.

As usual, to install that new version, we strongly recommend to do it in a virtual environment:
``` bash
pip3 install virtualenv --user
virtualenv hgl
cd hgl
source bin/activate
pip3 install -i https://test.pypi.org/simple/ hac-game-lib
```

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

If you have any question or feedback, feel free to communicate in the comments.

<disqus />