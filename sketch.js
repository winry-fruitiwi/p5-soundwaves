/*
@author Winry
@date 2021-10-10

code planning:
    add particle class constructor and show
    add grid of particles
    add particle update: make the particles move in sine waves
        define ω = TWO_PI/T

        GENERAL FORMULA FOR SINE WAVE
        use it in a map for the amplitude, using sine
        independent variable for first sine is original_x and
        frameCount/scaleFactor
        for the second sine
    update every particle in particles

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

    // this requires nested loops so I'll do row-major order. That's
    // terminology I picked up from Java.
    for (let i = 20; i < width; i += 20) {
        for (let j = height/15; j < height; j += height/15) {
            particles.push(new Particle(i, j));
        }
    }
}

function draw() {
    background(209, 80, 30)
    // I'll bring this back later.
    // for (let particle of particles) {
    //     particle.show()
    // }

    wispy.show()
    wispy.update()
}

function mousePressed() {
    // hey wispy! Can you activate for me please? Wispy: Sure! Commencing
    // activation protocol...
    wispy.activate(50, 2, 10);
}
