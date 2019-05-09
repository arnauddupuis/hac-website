---
title: 'Shorty #01: Board constructor'
lang: en-US
lastUpdated: '2019-03-27 18:44:01'
description: 'Second part of our game tutorial. This time about the player movements. In this tutorial we will learn about that and more game management.'
cover: /images/site/youtube.png
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning player movement part2
  - name: license
    content: CC-by-NC-SA
sidebar: auto
published: true
prev: false
next: /guides/hac-game-lib/shorty-02-item-management.html
icon: fas fa-code-branch
tags: 
  - hac-game-lib
  - shorty
  - python
---

# Shorty #01: Board constructor

## Introduction

The [Board] object is the base of your level design. As such it is very important to master the different options of the constructor so your [Board] look and behave how you like.

Good luck! :woman_student: :man_student:

## hac-game-lib

To follow this tutorial you will need the hac-game-lib on your system.  
You can either get it on [Github](https://github.com/arnauddupuis/hac-game-lib) or (this is the preferred solution) install it from PyPi by running:

``` bash
pip3 install virtualenv --user
virtualenv hacgl-shorty-1
cd hacgl-shorty-1
source bin/activate
pip3 install colorama
pip3 install -i https://test.pypi.org/simple/ hac-game-lib
```

## Video

This shorty is done under the form of a code along video available on Youtube (still a bad one but bear with us, it'll become better over time).
It is also using the interactive interpreter, so we don't save any files here. The [code](#code) section is therefor more an example of what you are going to find in the tutorial than anything else.

<youtube url="https://www.youtube.com/embed/9y1XBwrB5OI" />

## Code

Here is an example of the code, you'll find in this shorty video.

``` python
from gamelib.Board import Board
import gamelib.Utils as Utils
import gamelib.Sprites as Sprites

myboard = Board(
    size=[5,5], 
    ui_border_top=Utils.WHITE_SQUARE, 
    ui_border_left=Utils.WHITE_SQUARE, 
    ui_border_bottom=Utils.MAGENTA_SQUARE, 
    ui_border_right=Utils.MAGENTA_SQUARE,
    ui_board_void_cell=Utils.BLACK_SQUARE
    )

myboard.display()

myboard = Board(
    size=[5,5], 
    ui_borders=Sprites.WALL , 
    ui_board_void_cell=Utils.BLACK_SQUARE
    )

myboard.display()

# Get creative!
myboard = Board(
    size=[5,5], 
    ui_borders=Sprites.UNICORN_FACE , 
    ui_board_void_cell=Utils.CYAN_SQUARE,
    player_starting_position=[2,3]
    )

myboard.display()

```

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

<disqus />



[Board]: https://hac-game-lib.readthedocs.io/en/latest/board.html