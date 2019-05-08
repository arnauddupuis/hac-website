---
title: 'HAC Tutorial - 01: The Game object'
lang: en-US
lastUpdated: 2019-04-30 19:04:10
description: First tutorial on the hac-game-lib. We will learn about the game object and how critical it is to game management.
cover: /images/site/youtube.png
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning
  - name: license
    content: CC-by-NC-SA
sidebar: auto
published: true
prev: false
next: false
icon: fas fa-code-branch
tags: 
  - hac-game-lib
  - tutorial
  - python
---

# HAC Tutorial - 01: The Game object

## Introduction

This first tutorial is all about the [Game] object!  
The [Game] object is key to game management. It does **a lot** of things behind your back to keep track of every object you are going to use in your game. 

By the end of these tutorials you will be able to do all that by yourself, but right now it ease the learning curve to rely on some (hopefully) robust pre-existing logic.

## hac-game-lib

To follow this tutorial you will need the hac-game-lib on your system.  
You can either get it on [Github](https://github.com/arnauddupuis/hac-game-lib) or install it from PyPi by running:

``` bash
pip3 install -i https://test.pypi.org/simple/ hac-game-lib
```

## Video

This first tutorial is done under the form of a code along video available on Youtube (a bad one but bear with us, it'll become better over time).

<youtube url="https://www.youtube.com/embed/CygRW942274" />

## Code

Here is the final code of this tutorial.

``` python
from gamelib.Game import Game
from gamelib.Board import Board
import gamelib.Utils as Utils
import gamelib.Sprites as Sprites
from gamelib.Characters import Player
import time

mygame = Game(name='Demo game')
board1 = Board(name='Level 1', ui_borders=Sprites.WALL, ui_board_void_cell=Utils.BLACK_SQUARE, player_starting_position=[0,0])
board2 = Board(name='Level 2', ui_borders=Utils.RED_SQUARE, ui_board_void_cell=Utils.BLACK_SQUARE, player_starting_position=[4,4])

mygame.player = Player(name='DaPlay3r', model=Sprites.UNICORN_FACE)

mygame.add_board(1,board1)
mygame.add_board(2,board2)

count = 0 
lvl = 1

while count < 10:
    mygame.clear_screen()
    mygame.change_level(lvl)
    mygame.current_board().display()
    lvl +=1 
    if lvl > 2:
        lvl = 1
    time.sleep(2)
    count += 1
```





[Game]: https://hac-game-lib.readthedocs.io/en/latest/game.html