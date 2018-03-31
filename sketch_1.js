//Just particle

var PARTICLE_NUM = 40;
var PARTICLE_SIZE = 30;
var DIST_THRETH = 150;

var particles = new Array(PARTICLE_NUM);

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.vx = new p5.Vector(random(-2.0, 2.0),random(-2.0, 2.0),0);

  this.draw = function() {

    this.x += this.vx.x;
    this.y += this.vx.y;

    if(this.x < 0) {
      this.x = width;
    }
    if(width < this.x) {
      this.x = 0;
    }

    if(this.y < 0) {
      this.y = height;
    }

    if(height < this.y) {
      this.height = 0;
    }
    ellipse(this.x, this.y, PARTICLE_SIZE, PARTICLE_SIZE);
  }

  this.isAt = function(x, y) {
    if(abs(this.x - x) < PARTICLE_SIZE*0.5 && abs(this.y - y) < PARTICLE_SIZE*0.5) {
      return true;
    } else {
      return false;
    }
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
  background(255);

    //Draw Line
    for(var i = 0; i < PARTICLE_NUM; i++) {
      for(var j = 0; j < PARTICLE_NUM; j++) {
        var distance = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        if(distance < DIST_THRETH) {
          strokeWeight(1);
          stroke(64);
          line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        }
      }
    }

    //Draw Circle
    for(var i = 0; i < PARTICLE_NUM; i++) {
      strokeWeight(1);
      stroke(255, 25);

      if(particles[i].isAt(mouseX, mouseY)) {
        fill(127);
        particles[i].draw();
        textSize(12);
        textAlign(LEFT, CENTER);
        fill(168);
        text(random(100000, 1000000), particles[i].x,particles[i].y);
      } else {
        fill(41, 209, 243);
        particles[i].draw();
      }
    }

    fill(0);
    textSize(64);
    textAlign(CENTER);
    text('Qux', width*0.5, height*0.5);
}
