# pongclone_js

A simple web browser pong game, built with html, css and javascript. Built as a learning exercise by Ed Bosisto with guidance from YouTube channel https://www.youtube.com/@WebDevSimplified

### To play, simply open index.html in a browser.

###### index.html
Contains divs for all game components.
- 2 paddles (player and computer)
- 1 ball
- Scoreboard (player and computer)

###### styles.css
Makes use of foreground and background color variables which slowly change during gameplay to make the experience more dynamic and intense.
The rest is basic styling for the game's components.

###### script.js
Contains all js logic for the pong game. Imports paddle and ball classes from paddle.js and ball.js respectively.
- functions include
  - update()
  - isLose()
  - handleLose()
Frames are handled using requestAnimationFrame rather than a set interval for smoother gameplay.

###### ball.js
Contains logic for the ball object.
- get and set x and y values.
- rect() to assist with detecting collision with walls and paddles.
- reset() to reset ball position, direction and velocity after each point is scored.
- update() calculates the new positon of the ball after each animation frame.
- isCollision() detects collision with paddles (and passed to update() to reverse x direction).

###### paddle.js
Contains logic for paddles, both player and computer.
- Player paddle follows mouse movement in y direction (up and down the screen).
- Computer paddle follows the y coordinate of the ball, increasing in speed to a set maximum (SPEED). This simple AI ensures the computer CAN be beaten.

