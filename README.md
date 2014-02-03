ballotta
========

## Intro
Ballotta is a node.js app that implements a range voting system.

## Tech
Ballotta uses express.io for communication server-client communication (combination of express.js ontop of node.js and sockets.io), jade as templating system and Mozilla Bricks for some visual components.

## Installation
### Requirements
You should have npm installed in your system.
### Cloning and setup
Clone the repo locally and run:
```
npm install
```
### Runnning
You are ready to fire up the node server and start playing around.
```
node app.js
```
Your dev server should be live at localhost:3000 by default.

## Usage
Creating votes is a simple as navigating to / filling out all fields (with as many options as you like). Then the voting pages will be available under /v/slug_url where you can vote and see the results live.

## Contribution
Feel free to open issues and start working on the already open ones. Fork and branch with issue number and then pull request.
