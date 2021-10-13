// models a wind particle that oscillates back and forth.

class Particle {
    constructor(x, y) {
        this.originalX = x
        this.x = x
        this.y = y
        // if we're activated, we can oscillate in update (implemented later).
        this.activated = false
        // this is our internal angle like a frameCount that can pause.
        this.angle = 0
    }

    show() {
        stroke(0, 0, 100, 50)
        strokeWeight(6)
        point(this.x, this.y)
    }

    // activates the particle and assigns it: a delay, amplitude, and period.
    activate(amplitude, period, delay) {
        // Test statement for Wispy, the queen of water!
        console.log("I decree that we oscillate in " + delay + " frame(s)!")

        this.activated = true
        this.period = period
        this.delay = delay
        this.amplitude = amplitude
    }

    // we only start oscillating when we ain't not activated.
    update() {
        // Wispy: Have I declared activation?
        if (this.activated === true) {
            // Wispy: Is there a delay holding me back?
            if (this.delay > 0) {
                // Wispy: Let's decrement the delay!
                this.delay--
            }
            // Wispy: If there isn't...
            else {
                // Wispy: ...we start oscillating!
                // ωT = 2π, so ω = 2π/T
                let omega = TAU/this.period
                let oscillation = this.amplitude * sin(omega * this.angle/20)
                this.x = this.originalX + oscillation
                this.angle++
            }
        }
    }
}
