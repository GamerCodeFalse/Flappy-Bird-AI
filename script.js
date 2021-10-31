const total = 500;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider;
let gen = 1;


function setup() {
  createCanvas(640, 480);
  slider = createSlider(1, 10, 1);
  for (let i = 0; i < total; i++) {
    birds[i] = new Bird();
  }
}
console.log("generation " + gen);
function draw() {
  for (let n = 0; n < slider.value(); n++) {
    if (counter % 100 == 0) {
      pipes.push(new Pipe());
    }
    counter++;
    for (let bird of birds) {
      bird.think(pipes);
      bird.Gravity();
    }

    if (birds.length === 0) {
      counter = 0;
      nG();
      pipes = [];
    }
  background(0,225,255);
  fill(0)
  textSize(24);
  text("gen:" + gen,5,20);
  for (let bird of birds) {
    bird.show();
  }

  for (let pipe of pipes) {
    pipe.show();
  }
  for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].Gravity();

      for (let j = birds.length - 1; j >= 0; j--) {
        if (pipes[i].hits(birds[j])) {
          savedBirds.push(birds.splice(j, 1)[0]);

        }
      }
      for (let i = birds.length - 1; i >= 0; i--) {
        if (birds[i].offScreen()) {
          savedBirds.push(birds.splice(i, 1)[0]);
        }
      }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
  }
}
// function keyPressed(){
  // if(key == ' '){
    //bird.up();
 // }
//}