/*
@author Winry
@date 2021-10-13

coding plan:
    particle class and show with test. Bugs: None!
    grid of particles. Bugs: Append instead of push.
    activate and oscillation:
        use amplitude, period, delay with comments. Bugs:
        mousePressed call. Bugs:
        oscillate with update. Bugs:
 */
let font
let wispy, particles

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // wispy is my single test air molecule!
    wispy = new Particle(320, 180)
    particles = []

    let MARGIN = 50;
    let SPACING = 18;

    for (let x = MARGIN; x < width-MARGIN; x += SPACING) {
        for (let y = MARGIN; y < height-MARGIN; y += SPACING) {
            particles.push(new Particle(x, y))
        }
    }
}

function draw() {
    background(209, 80, 30)
    // wispy.show()
    for (let particle of particles) {
        particle.show()
    }
}
