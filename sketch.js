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
let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
    background(209, 80, 30)
    let particle = new Particle(30, 30)

    particle.show()
}