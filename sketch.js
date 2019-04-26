let menuItem = 1;
let img;
let w;
let h;
let r2p =true;
let rotnr = 0;

function preload(){
	
	img = loadImage("icon.png");
	img2 = loadImage("stort.jpg")
}
function setup(){
	w = windowWidth;
	h = windowHeight;
	createCanvas(w, h);
	//frameRate(15);	

}
function muspre(){
	if(!mouseIsPressed){
		r2p=true;
	}
}
function rclick(pg){
	if(mouseIsPressed && r2p && mouseX > windowWidth-(windowWidth/3)){
		menuItem = pg;
		r2p = false;

	}
}
function lclick(pg){
	if(mouseIsPressed && r2p && mouseX < (windowWidth/3)){
		menuItem = pg;
		r2p = false;

	}
}
function draw(){
	background(75,89,180);

	
	if(menuItem == 1){
		if(!mouseIsPressed){
			r2p=true;
		}
		imageMode(CENTER);
		image(img,w/2,h/2,100,100);
		lclick(0);
		rclick(2);
	}
	if(menuItem == 2){
		muspre(); //sjekker at knappen er klar for å trykkes
		fill(255);
		textAlign(CENTER);
		text("Velkommen til denne appen.\nHer kan du finne ut alt mulig.\nog spille spill...",w/2,h/2);
		noStroke();
		rect(0,h-(h/3),w,10);
		lclick(1);
		rclick(3);
	}
	if(menuItem == 3){
		muspre(); //sjekker at knappen er klar for å trykkes
		background(random(0,255));
		text("THE END IS NEAR",w/2,h/2);
		lclick(2);
		rclick(4);
	}
	if(menuItem == 4){
		muspre(); //sjekker at knappen er klar for å trykkes
		background(0,255,0);
		rectMode(CENTER);
		fill(0,150,0);
		rect(w/2,h/2,w-10,h-10);
		fill(0,100,0);
		rect(w/2,h/2,w-30,h-30);
		fill(255);
		text("well, this is the end.",w/2,h/2);
		push();
		translate(w/2,h/4);
		rotate(rotnr);
		rotnr+=.1;
		rect(0,0,20,20);
		pop();
		lclick(3);
		rclick(5);

	}
	if(menuItem==5){
		muspre(); //sjekker at knappen er klar for å trykkes
		image(img2,w/2,h/2,h*.75,h);
		lclick(4);
		rclick(5);
	}


}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	w = windowWidth;
	h = windowHeight;
  }
  