---
title: 'Shorty #02: Item management'
lang: en-US
lastUpdated: '2019-04-17 18:44:01'
description: 'In this shorty we are taking a look at item management: how to position items on a board, how to move things around, etc.'
cover: /images/site/youtube.png
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning item placement part2
  - name: license
    content: CC-by-NC-SA
sidebar: auto
published: true
prev: /guides/hac-game-lib/shorty-01-board-constructor.html
next: false
icon: fas fa-code-branch
tags: 
  - hac-game-lib
  - tutorial
  - python
---

# Shorty #02: Item management

## Introduction

In this video we are taking a look at item management: how to position [items] on a [board], how to move things around, etc.  
We are going to cover [items] placement on the [Board], movement of [movable objects](https://hac-game-lib.readthedocs.io/en/latest/movable.html), retrieving of an object at given coordinates and deletion of [items].

## hac-game-lib

To follow this shorty you will need the hac-game-lib on your system.  
You can either get it on [Github](https://github.com/arnauddupuis/hac-game-lib) or (this is the preferred solution) install it from PyPi by running:

``` bash
pip3 install virtualenv --user
virtualenv hacgl-shorty-2
cd hacgl-shorty-2
source bin/activate
pip3 install colorama
pip3 install -i https://test.pypi.org/simple/ hac-game-lib
```

## Video

This second shorty is also done under the form of a code along video available on Youtube (it's getting better, right?).

<youtube url="https://www.youtube.com/embed/TWOr1SamNV8" />

## Code

Here is the final code of this shorty.

``` python
from gamelib.Board import Board
import gamelib.Utils as Utils
import gamelib.Sprites as Sprites
import gamelib.Constants as Constants
from gamelib.Characters import Player, NPC
from gamelib.Structures import Wall
import time

myboard = Board(
    size=[5,5], 
    ui_borders=Utils.WHITE_SQUARE, 
    ui_board_void_cell=Utils.BLACK_SQUARE
    )


myboard.place_item(
    Wall(model=Utils.GREEN_SQUARE),
    3,
    1
    )

myplayer = Player( model=Sprites.COWBOY )
myboard.place_item( myplayer, 0, 4 )

npc1 = NPC( model=Sprites.HAPPY_GHOST )
myboard.place_item( npc1, 2, 2 )

myboard.display()
time.sleep(1)

myboard.move( npc1, Constants.LEFT, 1 )

myboard.display()
time.sleep(1)

myboard.move( npc1, Constants.UP, 1 )

myboard.display()
time.sleep(1)

if npc1 == myboard.item(1,1):
    myboard.move( myboard.item(0,4), Constants.DOWN,1)

myboard.display()
time.sleep(1)

myboard.clear_cell(3,1)

myboard.display()
time.sleep(1)
```

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

<disqus />

[Board]: https://hac-game-lib.readthedocs.io/en/latest/board.html
[items]: https://hac-game-lib.readthedocs.io/en/latest/boarditem.html