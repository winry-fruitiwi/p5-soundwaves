class Particle {
    constructor(x, y) {
        this.originalX = x;
        this.originalY = y;
        // none of the original things will change, but the rest will!
        this.x = x;
        this.y = y;
        // this activation switch is either true or false. If it's true and
        // the delay is zero, we can start oscillating.
        this.activated = false;

        // if this is zero because it counts down and the activation switch
        // is true, we can start oscillating.
        this.delay = this.originalX // I'll consider removing originalX.
        // this is the internal count that is never reset. This will prevent
        // jumps from one oscillation to another.
        this.angle = 0;
    }

    show() {
        stroke(0, 0, 100, 50)
        strokeWeight(6)
        point(this.x, this.y)
    }

    // this activates the particle and then assigns it a period, an
    // amplitude, and a delay.
    activate(amplitude, period, delay) {
        // console.log("Ok, I'll be oscillating in " + delay + " frames!")
        // makes the particle start preparing for oscillation in update.
        this.activated = true
        this.amplitude = amplitude;
        this.delay = delay;
        this.period = period;
    }

    // makes the particle update if it's activated, or does nothing otherwise.
    update() {
        if (this.activated) {
            if (this.delay > 0) {
                // Wispy: Decrementing delay...
                this.delay--
            } else {
                // Wispy: Now it's time to oscillate because I've prepared!
                let ω = TAU/this.period
                let oscillation = this.amplitude * sin(ω*this.angle)
                this.angle += 0.05
                this.x = this.originalX + oscillation

                /* This is what we do if we want to make a single pulse wave
                 that stops after a half-period.
                if (-0.1 < sin(ω*this.angle) < 0.1) {
                    this.activated = false;
                    this.angle = 0;
                }*/
            }
        }
    }

}
// Zz helped me get this class running and I'm trying to copy his examples
// with a little bit of my own kick.
