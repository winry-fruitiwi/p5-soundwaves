class Particle {
    constructor(x, y) {
        this.originalX = x;
        this.originalY = y;
        // none of the original things will change, but the rest will!
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(0, 0, 100, 80)
        strokeWeight(6)
        point(this.x, this.y)
    }
}
