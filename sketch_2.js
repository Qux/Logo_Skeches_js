//Just particle

var PARTICLE_NUM = 100;

var particles = new Array(PARTICLE_NUM);

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.vx = new p5.Vector(0,0,0);

  this.move = function() {
    ellipse(this.x, this.y, 10, 10);
  }

}

function setup() {
    background(0);
    createCanvas(windowWidth, windowHeight);
    textSize(64);


    for(var i = 0; i < PARTICLE_NUM; i++) {
      particles[i] = new Particle(Math.random() * width, Math.random() * height);
    }
}

function draw() {
    for(var i = 0; i < PARTICLE_NUM; i++) {
      strokeWeight(0);
      fill(127);
      particles[i].move();

    }

    fill(0);
    text('Qux', width*0.5, height*0.5);
}
