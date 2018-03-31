var img;

function setup() {
    background(255);
    createCanvas(windowWidth, windowHeight); 
    textSize(15);
    textAlign(CENTER);

    img = loadImage("logo_sketches/data/qux_logo_s.png");
    imageMode(CENTER);
}

function draw() {
    fill(20);

    text("Under construction", width*0.5, height*0.6);
    pushMatrix();
    rotate(3*frameCount);
    translate(width*0.5, height*0.5);
    //image(img, width*0.5, height*0.5, 100, 100);
    popMatrix();
}

function touchStarted() {
    ellipse(width * 0.5, height * 0.5, 10, 10);
} 

function touchEnded() {
   if(mouseX < width * 0.5) {
	link("https://moha.qux-jp.com");
    } else {
	link("https://kohei.qux-jp.com");
    }
}

function link(url, winName, options) {

      winName && open(url, winName, options) || (location = url);

}
