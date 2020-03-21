---
title: "hac-game-lib - v1.0.0 - Release notes"
lang: en-US
lastUpdated: '2020-03-19 18:39:10'
description: "Release notes of the hac-game-lib release version v1.0.0."
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

# hac-game-lib - v1.0.0 - Release notes

![hac-game-lib version](https://img.shields.io/badge/Version-1.0.0-blue.svg)

## Introduction

Finally the long awaited first official release for the hac-game-lib! This version contains so many changes thanks to so many people, let's dig in. 

First I would like to thank the following contributors for all the work they did during Hacktoberfest and after:
 * [@kaozdl](https://github.com/kaozdl)
 * [@Dansyuqri](https://github.com/Dansyuqri)
 * [@grimmjow8](https://github.com/grimmjow8)
 * [@Arekenaten](https://github.com/Arekenaten)
 * [@gunjanraval](https://github.com/gunjanraval)
 * [@achoudh5](https://github.com/achoudh5)
 * [@synackray](https://github.com/synackray)
 * [@fbidu](https://github.com/fbidu)
 * [@bwirtz](https://github.com/bwirtz)
 * [@f-osorio](https://github.com/f-osorio)
 * [@guilleijo](https://github.com/guilleijo)
 * [@diego-caceres](https://github.com/diego-caceres)
 * [@spassarop](https://github.com/spassarop)
 * [@caballerojavier13](https://github.com/caballerojavier13)


## Release details

Let's see what it looks like in more details.

### Statistics

| Item              | Data |
|:-----------------:|-----:|
| *Files changed* | 72   |
| *Additions*     | 6114  |
| *Deletions*     | 1512   |
| *Commits*       | 217   |

The full list is available on [Github](https://github.com/arnauddupuis/hac-game-lib/compare/2019.5a7...v1.0.0), but as you can see from these numbers a lot of work has been done.

### Breaking changes

No breaking changes, but a lot of improvements.

### Documentation

During [Hacktoberfest](https://hacktoberfest.digitalocean.com/), the project got a lot of new contributors (18 new contributors !) and lots of things moved faster than usual. The result is a 100% API documentation coverage.

More tutorials and applied documentation is going to come in the near future.

### Bugfixes

Here is a list of the bug fixes in that release:
 * Fix map loading in the hgl-editor : now it can work with more than 10 maps.
 * Fix the same type of issue in the first screen of the hgl-editor.
 * Fix back menu building in the hgl-editor.

### Improvements / New features

Here we have a lot to talk about!

#### More versatile get_key() function

Utils.get_key() can now capture all keys from the keyboard. That includes the arrow keys!

#### Say hello to path finding

This release includes a brand new actuator: the [PathFinder](https://hac-game-lib.readthedocs.io/en/latest/advancedactuators.html) advanced actuator.

That one can navigate between waypoints by automatically finding the shortest path. A short video of the a simple NPC finding his way into a maze is available on the [Youtube channel](https://www.youtube.com/channel/UCT_SxIlKaD6MM7JlQKelpgw).

<youtube url="https://www.youtube.com/embed/Uz7LwvijemQ" />

#### Welcome Animations 

Another new addition to the library is the freshly introduced [Animation](https://hac-game-lib.readthedocs.io/en/latest/animation.html) class. That one allows for a different kind of item representation: instead of the static one, we can now have animated models. It works for both Movables and Immovables objects.

Here is a bit of code that demonstrate both PathFinder and Animation:
```python
# Creating the patroller
patroller = NPC(model=Sprites.ALIEN, name='patroller')
# Creating a PathFinder actuator
patroller.actuator = PathFinder(game=g, actuated_object=patroller)
# Adding the NPC to the game engine
g.add_npc(1, patroller, 42, 28)
# Setting the first destination of the patroller (technically not required)
patroller.actuator.set_destination(43, 29)
# Adding various waypoints
patroller.actuator.add_waypoint(43, 29)
patroller.actuator.add_waypoint(43, 34)
patroller.actuator.add_waypoint(39, 34)
patroller.actuator.add_waypoint(39, 40)
patroller.actuator.add_waypoint(44, 40)
patroller.actuator.add_waypoint(44, 28)
# Adding an animation to that patroller
patroller.animation = Animation(
    animated_object=patroller, refresh_screen=redraw, display_time=0.5,
)
# Adding frames to the animation
patroller.animation.add_frame(Sprites.ALIEN)
patroller.animation.add_frame(Sprites.ALIEN_MONSTER)
patroller.animation.add_frame(Sprites.EXPLOSION)
patroller.animation.add_frame(Sprites.SKULL)
# Start the animation
patroller.animation.start()
```

#### Multiple map directories in hgl-editor

The map editor is now able to deal with multiple directories in which it can lad and save boards. That feature will be improved in the next release to store the configuration file in a unified version across operating systems.

#### Automation, build system and sanity

Finally a lot of work has been put into the "invisible" part of the development: the test and build workflow.

First of all, the entire library now passes Flake8 tests. Most of the errors were formatting but not only. Then we set up automatic continuous integration through CircleCI and an entire new process for contributions and pull requests. 

Last but not least, we switch the dependency management and build system from pip to pipenv.

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