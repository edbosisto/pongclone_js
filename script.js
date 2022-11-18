import Ball from './ball.js'
import Paddle from './paddle.js'

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

let lastTime
// Create an infinite loop which runs each time the animation frame can update.
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}


// As soon as something can run on screen, update function is called. 
window.requestAnimationFrame(update)
