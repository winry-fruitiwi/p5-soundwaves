/*
@author Winry
@date 2021-10-13

coding plan:
    particle class and show with test. Bugs: None!
    grid of particles. Bugs: Append instead of push.
    activate and oscillation:
        use amplitude, period, delay with comments. Bugs: None!
        mousePressed call. Bugs: None!
        oscillate with update. Bugs: Forgot the this dot, didn't divide angle?
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

    let MARGIN = 50
    let SPACING = 10
    const highlightedRow = 33

    // this code was an accident and it seemingly mirrors a sea snake swimming!
    // for (let column = 0; column <= 53; column++) {
    //     for (let column = 0; column <= 25; column++) {
    //         // shows that the pulses are just illusions!
    //         if (column === highlightedRow) {
    //             particles.push(new Particle(
    //                 MARGIN + column * SPACING,
    //                 MARGIN + column * SPACING,
    //                 color(0, 0, 100))) // new color property!
    //         } else {
    //             particles.push(new Particle(
    //                 MARGIN + column * SPACING,
    //                 MARGIN + column * SPACING))
    //         }
    //     }
    // }

    for (let column = 0; column <= 53; column++) {
        for (let row = 0; row <= 25; row++) {
            // shows that the pulses are just illusions!
            if (column === highlightedRow) {
                particles.push(new Particle(
                    MARGIN + column * SPACING,
                    MARGIN + row * SPACING,
                    color(0, 0, 100))) // new color property!
            } else {
                particles.push(new Particle(
                    MARGIN + column * SPACING,
                    MARGIN + row * SPACING))
            }
        }
    }
}

function draw() {
    background(209, 80, 30)
    // While I get things to activate, Wispy will be right here.
    // wispy.show()
    // wispy.update()

    for (let particle of particles) {
        particle.show()
        particle.update()
    }
}

// when we press our mouse we should activate our particle(s)!
function mousePressed() {
    // Here's Wispy to keep you company while I work on oscillation.
    // wispy.activate(
    //     50, // amplitude
    //     10, // period
    //     10   // delay
    // )

    for (let particle of particles) {
        particle.activate(
             16, // amplitude
             8, // period
             particle.originalX  // delay. This should change as the
            // particles get farther from the origin's x-coordinate. I can
            // also subtract the
         )
    }
}
