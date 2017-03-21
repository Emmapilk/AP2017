//sketch08

// step 1. Declare Objects
var car = [];
var button;
var bg;

function preload() {
  bg = loadImage("data/road.jpg");
}
function setup() {
 createCanvas(windowWidth, windowHeight);
 
//step 2. Initialize object 
 car[0] = new Car(color(255,0,0), 1, 10, 100, 20);
 car[1] = new Car(color(0,0,255), 2, 20, 300, 10);

}

function draw() {
 background(bg);
 button = createButton('add');
 button.position(0,0);
 button.mousePressed(add);
  
//step 3. Use object 
 for (var i = 0; i <car.length; i++) {
  car[i].drive();
  car[i].display();
 }
}

function add() {
  car[car.length] = new Car(color(random(155,255)), random(0.1,1.5), random(10,20), random(10,500), 30);
}

function Car(getcolor, speed, xpos, ypos, size) {
	this.getcolor = getcolor;
	this.speed = speed;
	this.pos = createVector(xpos, ypos);
	this.size = size;
	this.tick = Date.now();
	
	this.display = function() {
		stroke(0);
 		fill(this.getcolor);
  		rect(this.pos.x,this.pos.y,this.size,this.size);
	}
	
	this.drive = function() {
	
		this.tock = Date.now();
		this.delta = this.tock - this.tick;
		
		this.pos.x = this.pos.x + (this.delta*this.speed);
 		if (this.pos.x > width) {
 			 this.pos.x = 0;
 		} 
		this.tick = this.tock;
	}
	
}


