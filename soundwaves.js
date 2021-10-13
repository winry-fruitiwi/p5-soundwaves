/*
@author Winry
@date 2021-10-13

coding plan:
    particle class and show with test. Bugs: None!
    grid of particles. Bugs:
    activate and oscillation:
        use amplitude, period, delay with comments. Bugs:
        mousePressed call. Bugs:
        oscillate with update. Bugs:
 */
let font
let wispy

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // wispy is my single test air molecule!
    wispy = new Particle(320, 180)
}

function draw() {
    background(209, 80, 30)
    wispy.show()
}
