// models a wind particle that oscillates back and forth.

class Particle {
    constructor(x, y) {
        this.originalX = x
        this.x = x
        this.y = y
        // if we're activated, we can oscillate in update (implemented later).
        this.activated = false;
    }

    show() {
        stroke(0, 0, 100, 50)
        strokeWeight(6)
        point(this.x, this.y)
    }
}
