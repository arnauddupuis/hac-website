---
title: "hac-game-lib - v1.0.1 - Release notes"
lang: en-US
lastUpdated: '2020-03-19 18:39:10'
description: "Release notes of the hac-game-lib release version v1.0.1."
cover: /images/site/newspaper-circle.svg
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning news update game-lib
  - name: license
    content: CC-by-NC-SA
sidebar: auto
# For the article to be listed published has to be true.
published: false
# Relative path to previous or next article. false if not related to anything.
prev: /news/hac-game-lib-v1.0.0-release-notes.html
next: false
# An icon from FontAwesome
icon: fas fa-code-branch
# pick one or two
tags: 
  - hac-game-lib
  - python
---

# hac-game-lib - v1.0.0 - Release notes

![hac-game-lib version](https://img.shields.io/badge/Version-1.0.0-blue.svg)

## Introduction

The 1.0.0 update unfortunately introduced bugs in the hgl-editor that were not sufficiently test and QA. 
This update fixes (hopefully) all these bugs.

## Release details

Let's see what it looks like in more details.

### Statistics

| Item              | Data |
|:-----------------:|-----:|
| *Files changed* | 9   |
| *Additions*     | 307  |
| *Deletions*     | 133   |
| *Commits*       | 15   |

The full list is available on [Github](https://github.com/arnauddupuis/hac-game-lib/compare/v1.0.0...v1.0.1).

### Breaking changes

No breaking changes, but a lot of improvements.

### Documentation

No changes to the documentation.

### Bugfixes

Here is a list of the bug fixes in that release:
 * Fix a huge default save directory issue (see bellow) in hgl-editor.
 * Fix lots of strings in hgl-editor.
 * Fix a type issue in the Inventory class for the not_enough_space exception.

#### The great directory disaster

In 1.0.0 we introduced a nice feature: the ability for hgl-editor to look for maps in different directories. However it
was not sufficiently tested and the whole feature was buggy (particularly on a fresh install) in a bad way as the editor
was crashing when attempting to save a board.

This issue has been fixed and we are now using a cleaner way of handling that. We are going to improve significantly options
and sessions handling in the upcoming releases.

#### The strings calamity

Another major massive improvement for the code overall quality was the introduction of flake8 validation. That lead us to 
fragment the strings over multiple lines of code. And this in turn resulted in less than optimal display uin the editor
and the default displays of the library in general (extra spaces, dubious indentation, etc.).

This is (hopefully) completely back to normal in that release.

### Improvements / New features

No new feature, but we have a small improvement: the Board.display() function has been optimized and is now 10% to 20% faster to display the board.

#### Sneak peak

If you are feeling adventurous, you can try the next big feature to be released in 1.1: partial display. Here is a teaser:

<youtube url="https://www.youtube.com/embed/B4ljEZMtQLs" />

To use it you will need to replace your usual Game.display() call by:

```python
# mygame is your Game object
# first parameter is the object on which you want to center the view
mygame.current_board()._wip_display_around(mygame.player, 20, 20)

```

::: warning
This feature is under heavy development, use it at your own risk (I don't see how it could be risky but anyway). It will change in the future.
:::

## Conclusion

A lot has happened for the hac-game-lib and we are all super happy to bring you that feature loaded release!

This first official release is now available on [PyPi](https://test.pypi.org/project/hac-game-lib/) and on [Github](https://github.com/arnauddupuis/hac-game-lib) of course.

As usual, to install that new version, we strongly recommend to do it in a virtual environment:
``` bash
pip3 install virtualenv --user
virtualenv hgl
cd hgl
source bin/activate
pip3 install pipenv hac-game-lib 
```

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

If you have any question or feedback, feel free to communicate in the comments.

<disqus />