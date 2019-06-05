---
title: 'HAC Tutorial #03: Game design & level editor'
lang: en-US
lastUpdated: '2019-06-04 06:35:34'
description: 'Third part of our game tutorial. This time we are exploring the first concepts of game design as well as using the hgl-editor to design the first level of our game.'
cover: /images/site/youtube.png
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning part3 game design game-design level level-design how-to programming
  - name: license
    content: CC-by-NC-SA
sidebar: auto
published: true
prev: /guides/hac-game-lib/tutorial-02-player-movements.html
next: false
icon: fas fa-code-branch
tags: 
  - hac-game-lib
  - tutorial
  - python
---

# HAC Tutorial #03: Game design & level editor

## Introduction

Welcome to this third tutorial! We are going to talk about game and level design and we are going to discover a tool from the hac-game-lib: the hgl-editor.  
I sincerely hope you will appreciate this one, I tried to dramatically increase the quality of the Youtube video. 

Most of the tutorial is in the video, in the article you will find:
 * The hac-game-lib installation instructions. 
 * A reference for the commands used in the video.
 * The level designed in the video.
 * The instructions to make it available to your own editor. 

Have fun trying stuff!

## Video

As usual the video is available on Youtube:

<youtube url="https://www.youtube.com/embed/cVpwkDLoBeQ" />

## hac-game-lib

### Installation

To follow this tutorial you will need the hac-game-lib on your system.  
You can either get it on [Github](https://github.com/arnauddupuis/hac-game-lib) or (this is the preferred solution) install it from PyPi by running:

``` bash
pip3 install virtualenv --user
virtualenv hgl
cd hgl
source bin/activate
pip3 install -i https://test.pypi.org/simple/ hac-game-lib
```

### Upgrade

If you already installed the hac-game-lib **via pip** please update your installation by running:
```bash
cd $HOME/Code/hgl
source bin/activate
pip3 install --upgrade -i https://test.pypi.org/simple/ hac-game-lib
```
This assume that your *hgl* virtual environment is located in a *Code* folder, in  your user directory. For example: */home/arnaud/Code/hgl*.  
**REPLACE THIS PATH BY YOUR ACTUAL INSTALLATION PATH.**

### Start the base game

To start the base game, from the hgl virtual environment, you simply need to type:

```bash
./bin/hgl-base_game.py
```

You will then need to choose if you want to use sprites or not. Just enter the number.  
Sprites might not be available in your terminal emulator.

You can also start the game in *sprite mode* directly by typing:
```bash
./bin/hgl-base_game.py sprite
```

And in *no-sprite mode* by typing:
```bash
./bin/hgl-base_game.py nosprite
```

### Start the editor

To launch the hgl-editor, it's not more complex:
```bash
./bin/hgl-editor.py
```

### Start the board testing tool

Here we have a little more to do. This script can take 2 parameters:
 1. The path (relative or absolute) to the level you want to test.
 2. The amount of turn you want to run.

If the second parameter is 0 you will be able to play normally.

In that case, the **a/w/s/d** keys will be used to move the player and **q** to quit.

```bash
./bin/hgl-board-tester.py hac-maps/TutoMap-hac-game-lib.json 300
./bin/hgl-board-tester.py hac-maps/TutoMap-hac-game-lib.json 0
```

## Resources

If you would like to play with the level designed in this tutorial, please find it [here](/TutoMap-hac-game-lib.json).

::: tip 
If you're browser displays a file that look like gibberish to you, right click on the link and click on *Save link as...*
:::

You need to save this file in a directory called hac-maps.

::: tip

Assuming you created your hgl virtual environment in $HOME/Code, the easiest solution would be to save the [level file](/TutoMap-hac-game-lib.json) in $HOME/Code/hgl/hac-maps/.

If you ran hgl-editor.py at least once, this folder is going to exist in your hgl directory.

:::

## Conclusion

That's about it. I hope you liked it, feel free to share your feedback and/or the level you designed in the comments.

I'll see you for the Shorty #3, where we are going to see how to load the level designed with the hgl-editor and use it in a game.

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

<disqus />




[Game]: https://hac-game-lib.readthedocs.io/en/latest/game.html