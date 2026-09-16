const curves = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  curves.push(new trigonometryCurve(sin, [255,0,0]))
  curves.push(new trigonometryCurve(cos, [0,255,0]))
  curves.push(new trigonometryCurve(tan, [0,0,255]))
}

function draw() {
  background(220);
  curves.forEach(curve => curve.draw())
}

class trigonometryCurve {
  constructor(trig = sin, color = [255,0,0], frequency = 2, trailSize = 100, speed = 2, dotsize = 25) {
    this.coords = []
    this.frequency = frequency
    this.trailSize = trailSize
    this.speed = speed
    this.dotsize = dotsize
    this.trig = trig
    this.color = color
    angleMode(DEGREES)
  }
  draw() {
    noStroke();
    let x = width / (360 * this.frequency) * ((frameCount * this.speed) % (360 * this.frequency))
    let y = this.trig(frameCount * this.speed)
    this.coords.push({
      x: x,
      y: y
    })
    this.coords = this.coords.slice(-this.trailSize)
    this.coords.forEach((coord, count) => {
      fill(
        this.color[0] - (255 / this.trailSize * (Math.abs(this.coords.length - count))),
        this.color[1] - (255 / this.trailSize * (Math.abs(this.coords.length - count))),
        this.color[2] - (255 / this.trailSize * (Math.abs(this.coords.length - count)))
      )
      circle(
        coord.x, 
        (height / 2) + ((height / 4) * coord.y),
        max(1, this.dotsize - (this.dotsize / this.trailSize * (Math.abs(this.coords.length - count))))
      )
    })
  }
}