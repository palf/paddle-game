# Paddle Game

A dual screen game in which you play Pong with a friend.

<!-- You can try it out here: -->
<!-- http://palf-paddle.herokuapp.com/ -->

## Setup

This application requires [**node**](http://nodejs.org/) and [**npm**](https://npmjs.org/)

To install, run the following:

    npm install
    node app

You can then navigate to [http://localhost:5000](http://localhost:5000) to see the landing page.

As this app is intended to run on [Heroku](https://www.heroku.com/), if you have the [command-line tools](https://devcenter.heroku.com/categories/command-line) installed, you can run:

    foreman start

## Usage

Once you are up and running, you can open the landing page at [http://your.ip.address:5000](http://palf-paddle.herokuapp.com). It has links to the Remote and World pages, as well as supplementary information. I recommend opening the World page first.

* [Remote](http://palf-cannon.herokuapp.com/remote)
  * this page has a large blue shape that expects drag events and gestures
  * drag your mouse or finger across the blue shape to send an event to the World
  * You can choose between Left and Right remotes
* [World](http://palf-cannon.herokuapp.com/world)
  * this page has a canvas area that contains the game world
  * on events from the Remotes, the paddles will be moved up or down.

