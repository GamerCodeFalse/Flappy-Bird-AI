function nG() {
  gen++;
  textSize(24);
  text("gen: " + gen,5,20);
  console.log("generation " + gen);
  calculateFitness();
  for (let i = 0; i < total; i++) {
    birds[i] = pickOne();
  }
  savedBirds = [];
}
function pickOne() {
  let index = 0;
  let r = random(1);
  while(r > 0){
    r = r - savedBirds[index].f;
    index++;
  }
  index--;
  let bird = savedBirds[index];
  let child = new Bird(bird.brain);
  child.mutate();
  return child;
}
function calculateFitness() {
  let sum = 0;
  for (let bird of savedBirds) {
    sum += bird.score;
  }
  for (let bird of savedBirds) {
    bird.f = bird.score / sum;
  }
}
