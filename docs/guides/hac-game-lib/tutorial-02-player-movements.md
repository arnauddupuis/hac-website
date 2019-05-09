---
title: 'HAC Tutorial #02: Player movements'
lang: en-US
lastUpdated: '2019-03-30 18:44:01'
description: 'Second part of our game tutorial. This time about the player movements. In this tutorial we will learn about that and more game management.'
cover: /images/site/youtube.png
meta:
  - name: keywords
    content: hyrule astronomy club hac-game-lib python python3 guides tutorial beginner educational kids coding games learning player movement part2
  - name: license
    content: CC-by-NC-SA
sidebar: auto
published: true
prev: /guides/hac-game-lib/tutorial-01-the-game-object.html
next: false
icon: fas fa-code-branch
tags: 
  - hac-game-lib
  - tutorial
  - python
---

# HAC Tutorial #02: Player movements

## Introduction

The second tutorial of our series is about learning to make the player move (for the kids from our Coding Class, it's the lesson entitled "I like to move it, move it").  
We will also dig more into game management to create a nice way of quitting the game, create a main event loop, correctly display the game, etc.

## hac-game-lib

To follow this tutorial you will need the hac-game-lib on your system.  
You can either get it on [Github](https://github.com/arnauddupuis/hac-game-lib) or (this is the preferred solution) install it from PyPi by running:

``` bash
pip3 install virtualenv --user
virtualenv hacgl-tutorial-2
cd hacgl-tutorial-2
source bin/activate
pip3 install colorama
pip3 install -i https://test.pypi.org/simple/ hac-game-lib
```

## Video

This second tutorial is also done under the form of a code along video available on Youtube (still a bad one but bear with us, it'll become better over time).

<youtube url="https://www.youtube.com/embed/-A_GHQOvPDE" />

## Code

Here is the final code of this tutorial.

::: warning IMPORTANT NOTE
In the video there is an error in the code that display the board. The *clear_screen()* and *display_board()* are done **before** moving the player.  
This results in a one turn delay of the movement.
:::

``` python
from gamelib.Game import Game
from gamelib.Board import Board
import gamelib.Utils as Utils
import gamelib.Sprites as Sprites
import gamelib.Constants as Constants
from gamelib.Characters import Player
import time

mygame = Game(name='Demo game')
board1 = Board(name='Level 1', ui_borders=Sprites.WALL, ui_board_void_cell=Utils.BLACK_SQUARE, player_starting_position=[0,0])
board2 = Board(name='Level 2', ui_borders=Utils.RED_SQUARE, ui_board_void_cell=Utils.BLACK_SQUARE, player_starting_position=[4,4])

mygame.player = Player(name='DaPlay3r', model=Sprites.UNICORN_FACE)

mygame.add_board(1,board1)
mygame.add_board(2,board2)

mygame.change_level(1)

key = None
# Main game loop
while True:
    
    if key == 'q':
        print( Utils.yellow_bright("Good bye and thank you for playing!") )
        break
    elif key == 'w':
        mygame.move_player(Constants.UP,1)
    elif key == 's':
        mygame.move_player(Constants.DOWN,1)
    elif key == 'a':
        mygame.move_player(Constants.LEFT,1)
    elif key == 'd':
        mygame.move_player(Constants.RIGHT,1)
    elif key == '3':
        mygame.move_player(Constants.DRDOWN,1)
    mygame.clear_screen()
    mygame.display_board()
    key = Utils.get_key()
    time.sleep(0.1)
```

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

<disqus />




[Game]: https://hac-game-lib.readthedocs.io/en/latest/game.html