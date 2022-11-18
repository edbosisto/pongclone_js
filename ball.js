const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        this.reset()
        this.rect()
    }

    // Get current x value of ball
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x")) 
    }
    // Set X value for ball
    set x(value) {
        this.ballElem.style.setProperty("--x", value)
    }

    // Get current y value of ball
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y")) 
    }
    // Set Y value for ball
    set y(value) {
        this.ballElem.style.setProperty("--y", value)
    }

    rect() {
        return this.ballElem.getBoundingClientRect()
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = { x: 0 }
        // Ensures the ball doesn't bounce too vertically or horizontally
        while (Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
            // Generate random number between 0 and 2 radians
            const heading = randomNumberBetween(0, 2 * Math.PI)
            // This ensures the ball moves a distance of 1 unit each time.
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()

        // Check if ball has gone past bottom or top of screen
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            // Reverse the Y direction of ball
            this.direction.y *= -1
        }

        if (rect.right >= window.innerWidth || rect.left <= 0) {
            // Reverse the Y direction of ball
            this.direction.x *= -1
        }
    }
}

// Random no. between 0 and 1, scaled by *(max-min), and add min to make sure min is smallest we have
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}
