let menuItem = 1;
let img;
let w;
let h;

function preload(){
	img = loadImage("icon.png");
}
function setup(){
	w = windowWidth;
	h = windowHeight;
	createCanvas(w, h);
	//frameRate(15);
	lines = loadStrings("highscore.txt");
	console.log(lines);
	

}
function draw(){
	background(81,95,186);
	if(menuItem == 1){
		imageMode(CENTER);
		image(img,w/2,h/2,192,192);
		if(mousePressed){
			menuItem=2;
		}
	}
	if(menuItem == 2){
		fill(255);
		textAlign(CENTER);
		text("Velkommen til denne appen.\nHer kan du finne ut alt mulig.\nog spille spill...",w/2,h/2);

		rect(w/2,h-(h/3),w,10);

		if(mousePressed){
			menuItem = 3;

		}
	}
	if(menuItem == 3){
		background(random(0,255));
		text("THE END IS NEAR",w/2,h/2);
	}

}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	w = windowWidth;
	h = windowHeight;
  }
  