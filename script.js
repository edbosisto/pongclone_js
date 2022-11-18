import Ball from './ball.js'
import Paddle from './paddle.js'

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime
// Create an infinite loop which runs each time the animation frame can update.
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        // Computer paddle needs to know y position of the ball
        computerPaddle.update(delta, ball.y)

        // Alter color as game progresses
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))
        document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

        if (isLose()) handleLose()
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

function isLose() {
    // If ball has gone out of screen on left or right... someone loses
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
    const rect = ball.rect()

    // If ball goes off right of screen, player gets a point
    if (rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
        // Computer gets a point
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    // Reset ball and computer paddle to middle
    ball.reset()
    computerPaddle.reset()
}

// Set player paddle to follow Y position of mouse
document.addEventListener('mousemove', e => {
    // convert y position to value between 0 and 1, then multiply by 100 to get a position (paddle position is in vh)
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

// As soon as something can run on screen, update function is called. 
window.requestAnimationFrame(update)
