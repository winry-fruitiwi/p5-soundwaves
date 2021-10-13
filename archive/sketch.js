/*
@author Winry
@date 2021-10-10

code planning:
    add particle class constructor and show
    add grid of particles
    add particle update: make the particles move in sine waves
    //     define ω = TWO_PI/T
    //
    //     GENERAL FORMULA FOR SINE WAVE
    //     use it in a map for the amplitude, using sine
    //     independent variable for first sine is original_x and
    //     frameCount/scaleFactor
    //     for the second sine
    // update every particle in particles
    that old stuff is junk, we just need an activation function

    optimizations:
        only columns need to be updated so we should just go through each
        column.
 */
let font, particles, wispy

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // wispy is our single air molecule!
    wispy = new Particle(300, 200)

    particles = []

    let SPACING=12
    let PADDING=50

    // this requires nested loops so I'll do row-major order. That's
    // terminology I picked up from Java.
    for (let x=PADDING; x<width-PADDING; x+=SPACING) {
        for (let y=PADDING; y<height-PADDING; y+=SPACING) {
            particles.push(new Particle(x, y));
        }
    }
}

function draw() {
    background(209, 80, 30)
    for (let particle of particles) {
        particle.show()
        particle.update()
    }
}

// Activates every particle. WARNING: Do not press multiple times, the program
// can't handle that!
function mousePressed() {
    // we need to activate either Wispy or her fellow air molecules when our
    // mouse is pressed, as if it made some very low sound.
    let period = 7;
    for (let particle of particles) {
        particle.activate(
            12, // amplitude
            period, // period. When this gets bigger, the delay should also get
            // bigger.
            particle.originalX // delay. This should get larger for
            // each particle to simulate waves, but if it gets too large
            // Wispy will be blown away for a few seconds and only then come
            // back!
        )
    }

}
