
var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;


function setup() {

  const parent = document.querySelector('#canvasHolder');
  let parentSize = parent.getBoundingClientRect();
  let height = parentSize.height;
  let width = parentSize.width;

  let canvas = createCanvas(width, height);
  canvas.parent("#canvasHolder");
  u = 100;
  l = 15;
  var highCount = height/80;
  var wideCount = width/80;
  count = int(highCount * wideCount);
  
  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
}

function draw() {
  
  
  
  if (mouseIsPressed) {
    background(37, 41, 53);
    stroke(255,163,163);
  } else {
    background(37, 41, 53);
    stroke(4, 194, 201);
  }
  
  strokeWeight(5);
  
  translate(20, 20);
  
  for (var i = 0; i <= count; i++) {
    mods[i].update();
    mods[i].draw2();
  }

}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  

}

Module.prototype.update = function() {
  // if (mouseIsPressed) {
  //   this.a = -20 * (atan2(mouseY-this.y, mouseX-this.x));
  // } else {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
  // }
}

Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rotate(this.a);
  line(-l,0,l,0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleActiveCanvas() {
  console.log('hi')
  canvas.classList.toggle('active');
}

const hero = document.querySelector('#hero');
const canvas = hero.querySelector('#canvasHolder');
const links = hero.querySelectorAll('a');

// links.addEventListener('mouseenter', toggleActiveCanvas);
// links.addEventListener('mouseleave', toggleActiveCanvas);

links.forEach(link => {
  link.addEventListener('mouseenter', toggleActiveCanvas);
})

links.forEach(link => {
  link.addEventListener('mouseleave', toggleActiveCanvas);
})