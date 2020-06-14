---
title: "hac-game-lib - v1.1.0 - Release notes"
lang: en-US
lastUpdated: '2020-06-13 10:58:26'
description: "Release notes of the hac-game-lib release version v1.1.0."
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
prev: /news/hac-game-lib-v1.0.1-release-notes.html
next: false
# An icon from FontAwesome
icon: fas fa-code-branch
# pick one or two
tags: 
  - hac-game-lib
  - python
---

# hac-game-lib - v1.1.0 - Release notes

![hac-game-lib version](https://img.shields.io/badge/Version-1.1.0-blue.svg)

## Introduction

There's no way around it: this release is packed with new features and bugfixes. New documentation has been added and examples have been updated to better demonstrate the possibilities of the hac-game-lib.

### Overview

 * Fix many issues with strings all across the library.
 * Fix many issues with variables interpolation in exceptions.
 * Fix a bug in Game.load_board() that was causing corruptions.
 * Fix multiple typos in the documentation.
 * Fix an issue with the user directory in hgl-editor
 * Fix many issues with the PatrolActuator.
 * **New feature:** partial display (dynamically display only a part of a board)
 * **New feature:** new mono directional actuator.
 * **New feature:** projectiles (can be sent and completely managed by the game object)
 * **New feature:** new assets module to hold many non core submodules.
 * **New feature:** Assets.Graphics that add thousands of glyphs (including emojis) to
   the current capacities of the library.
 * **New feature:** Add support for PatrolActuator in hgl-editor.
 * **New feature:** Add support for PathFinder actuator in hgl-editor.
 * **New feature:** Add an object parent system.
 * **New feature:** Add a configuration system to hgl-editor.
 * *Improvement*: Add full configuration features to the Game object.
 * *Improvement*: Add a new example in the form of a full procedural generation platform
   game (see examples/suparex).
 * *Improvement*: Improved performances particularly around the features that relies on
   Board.place_item(). Up to 70 times faster.
 * *Improvement*: It is now possible to specify the first frame index in Animation.
 * *Improvement*: Formatted all the code with black.
 * *Improvement*: PathFinder.add_waypoint() now sets the destination if it wasn't set
   before.

## Release details

Let's see what it looks like in more details.

### Statistics

|      Item       |  Data |
| :-------------: | ----: |
| *Files changed* |    92 |
|   *Additions*   | 10382 |
|   *Deletions*   |  1376 |
|    *Commits*    |    84 |

The full list is available on [Github](https://github.com/arnauddupuis/hac-game-lib/compare/v1.0.1...v1.1.0).

### Breaking changes

No breaking changes, but a lot of improvements.

### Deprecation

We are now at the stage in the lifecycle of the library that some early designs seems not that good.
So it's time to move on. The first part of the library that gets the deprecation hammer is the Sprites module.
Version 1.1.0 introduce the Assets module, which in turn contains a Graphics module. This one contains a lot more prepackaged 'graphics' assets including:
 * over 1200 more emojis (Assets.Graphics.Sprites). The new Sprites class is not interchangeable with the old one as named are now using the standardized unicode names.
 * all unicode glyphs for box drawing
 * all unicode glyphs for blocks
 * all unicode glyphs for geometric shapes.

Please have a look at the [module's documentation](https://hac-game-lib.readthedocs.io/en/latest/graphics.html) for a complete list.

### Documentation

The documentation index has been reworked to give a better access to the whole library more easily. 

All new classes have been documented with examples.

### Bugfixes

Here is a list of the bug fixes in that release:
 * Fix many issues with strings all across the library. With the effort of code formatting being compliant with flake8, a lot of strings got messed up. This release fixes most of it (hopefully all of it).
 * Fix many issues with variables interpolation in exceptions. For the same reason, lots of variables were not interpolated any more in the exceptions.
 * Fix a bug in Game.load_board() that was causing corruptions.
 * Fix multiple typos in the documentation.
 * Fix an issue with the user directory in hgl-editor
 * Fix many issues with the PatrolActuator. It was not behaving as expected at all, this is now fixed.


### Improvements / New features

This release brings a lot of new features and various improvements. See the overview for a complete list.
Let's have a more in depth look at the most significant ones.

#### Performance improvements

Starting with under the hood improvements, the code for Board.place_item() is now up to 70 times faster. This brings overall performance increase when creating or loading boards, or manipulating items during game execution.

#### Partial display

While teaching I always felt constrained by the size of the terminal. Now it is not a concern anymore with the introduction of partial display.

Board now has a new method called [display_around()](https://hac-game-lib.readthedocs.io/en/latest/board.html#gamelib.Board.Board.display_around) that can display the board in a specific radius around an object.

So now instead of using:

```python
my_board.display()
```

We can just use:
```python
my_board.display(my_game.player, 15, 60)
```

But the beauty of it is that the game engine can do it for you and automatically choose between partial and full display based on the viewport:
```python
my_game = Game()
my_game.load_board('my_awesome_and_very_big_level.json', 1)
# Just add the 2 following lines and you're good to go!
my_game.enable_partial_display = True
my_game.partial_display_viewport = [15, 60]
# This will call display_around() if the board is bigger than 30x120
my_game.display()
```

#### Projectiles

For a long time now, my students wanted to have the built-in (of course...) ability to send fireballs. It is now possible with the [Projectile class](https://hac-game-lib.readthedocs.io/en/latest/movable.html#gamelib.Movable.Projectile).
This class is extremely configurable and can either be used as it or as a base class. The most basic use would be:

```python
# While moving use a red '~*' model and an explosion emoji on hit or at the end or 
# the road. The fireball as a range of 5 cells and as an area of effect of 1 cell around
# impact point (in all directions).
# The hit_callback parameter is a reference to a callable function that is taking care
# of the actual effects of the projectile
fireball = Projectile(model=Utils.red_bright('~*'), 
                      hit_model=Graphics.Sprites.COLLISION,
                      range=5,
                      is_aoe=True,
                      aoe_radius=1,
                      hit_callback=burn_them_all)
# Give a direction to the fireball
fireball.set_direction(Constants.RIGHT)
# And add it to the game next to the player
my_game.add_projectile(1, fireball,
                       my_game.player.pos[0], my_game.player.pos[1] + 1)
# Then let the game object do the heavy lifting
my_game.actuate_projectiles(my_game.current_level)
```

But that's only the first layer: projectiles can be configured to have different animations and/or models based on their directions. There should be nothing to hold back your creativity!

The effects of a projectiles are determined by a callback function. Please have a look at the [documentation](https://hac-game-lib.readthedocs.io/en/latest/movable.html#gamelib.Movable.Projectile) for more on this.

A side effect of the creation of that class is the creation of a [unidirectional actuator](https://hac-game-lib.readthedocs.io/en/latest/simpleactuators.html#gamelib.Actuators.SimpleActuators.UnidirectionalActuator).

#### Evolution of Sprites

For quite some time now we discussed the replacement of the Sprites module by an Assets one. This is now done and the Assets module has been added to that release.

The Sprites one is now officially deprecated. Please re-read the Deprecation section for the changes.

Over time, the Assets module will hold all the non core classes or modules that are useful but should be considered more as an asset of the framework than a core part of it.

#### Object parent system

This release also feature a deep change in the philosophy of the library: all objects now have a parent member that gives the ownership of the object.

It has become obvious with the increasing complexity of the library that single unowned objects could no longer be the norm. We need ownership and link between objects. It is a change that is going to become more and more used and useful with the next versions of the library, but it is already extremely useful with projectiles.

#### hgl-editor

The editor has received a lot of love in that release! It has now a full configuration system (thanks to the addition of the configuration support in the Game object). This will prevent some iof the repetition we've seen in the work with the editor. It will now sae your resolution, the parameters of the last created board (for re-use), the viewport for partial display, etc.

Because, yes: the hgl-editor benefits from partial display and it is even configurable (hit "V"). This means that the editor can be used to work on boards that are very big (I personally worked on a 1000x1000 board).

It is also now possible to use the PatrolActuator and the PathFinder actuator in the editor. The path edition is possible from the editor:
![PathFinder Edition](/images/news/path-finder-edition.png)

In that example, the green lizard is the NPC with a PathFinder actuator and the green squares are the waypoints he is going to visit. As it is using a PathFinder, it will find it's way automatically to these waypoints.

#### Suparex

Last but not least, a new example has been added. It is called **suparex** and it is a procedurally generated platform game. It looks like that:
![Suparex](/images/news/suparex-720.gif)

Have fun!

## Conclusion

This is one of the most feature packed release of the hac-game-lib and we certainly hope that you are going to like it!

The new release is available on [PyPi](https://test.pypi.org/project/hac-game-lib/) and on [Github](https://github.com/arnauddupuis/hac-game-lib) of course.

As usual, to install that new version, we strongly recommend to do it in a virtual environment:
``` bash
pip3 install virtualenv --user
virtualenv hgl
cd hgl
source bin/activate
pip3 install hac-game-lib 
```

But if you just want the hac-game-lib to be available more widely:
```bash
pip3 install --user hac-game-lib
```

As a closing thought, I am thinking of renaming the hac-game-lib into **Gally**. The main reason is that the name was initially never thought to leave our little club and it makes no sense for anyone but us ;)

## Share

If you like that content, feel free to share it on social platforms:

<social />

## Comments

If you have any question or feedback, feel free to communicate in the comments.

<disqus />