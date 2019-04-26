let menuItem = 1;
let img;
let w;
let h;
let r2p =true;

function preload(){
	
	img = loadImage("icon.png");
}
function setup(){
	w = windowWidth;
	h = windowHeight;
	createCanvas(w, h);
	//frameRate(15);	

}
function draw(){
	background(75,89,180);

	
	if(menuItem == 1){
		if(!mouseIsPressed){
			r2p=true;
		}
		imageMode(CENTER);
		image(img,w/2,h/2,100,100);
		if(mouseIsPressed ){
			console.log("menu 1 press");
			r2p = false;
			menuItem=2;
		}
	}
	if(menuItem == 2){
		if(!mouseIsPressed){
			r2p=true;
		}
		fill(255);
		textAlign(CENTER);
		text("Velkommen til denne appen.\nHer kan du finne ut alt mulig.\nog spille spill...",w/2,h/2);
		noStroke();
		rect(0,h-(h/3),w,10);

		if(mouseIsPressed && r2p){
			menuItem = 3;
			r2p = false;

		}
	}
	if(menuItem == 3){
		if(!mouseIsPressed){
			r2p=true;
		}
		background(random(0,255));
		text("THE END IS NEAR",w/2,h/2);
		if(mouseIsPressed && r2p){
			menuItem = 4;
			r2p = false;

		}
	}
	if(menuItem == 4){
		if(!mouseIsPressed){
			r2p=true;
		}
		background(0,255,0);
		rectMode(CENTER);
		fill(0,150,0);
		rect(w/2,h/2,w-10,h-10);
		fill(0,100,0);
		rect(w/2,h/2,w-30,h-30);
		fill(255);
		text("this is the end.",w/2,h/2);
		if(mouseIsPressed && r2p){
			menuItem = 4;
			r2p = false;

		}
	}


}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	w = windowWidth;
	h = windowHeight;
  }
  