const SPEED = 0.02

export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        this.reset()
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
    }

    rect() {
        return this.paddleElem.getBoundingClientRect()
    }

    reset() {
        this.position = 50
    }

    update(delta, ballHeight) {
        // Position is incremented by an amount depending on where the ball is (if paddle below ball, paddle moves up)
        // If ball is further away, paddle moves faster. Max speed is limited by SPEED variable
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}