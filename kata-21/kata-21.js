let prompt = require("prompt-sync")();

let answer = prompt("Guess a number: ");

const num = Math.floor(Math.random()*100);
let guesses = [];

// getting the correct answer counts as an attempt
let attempts = 1;

do {
  console.log(num);
  if (guesses.includes(answer)) {
    console.log("Already guessed!")
    answer = prompt("Guess a number: ");
  } else if (isNaN(answer)) {
    console.log("Not a number! Try again!");
    answer = prompt("Guess a number: ");
  } else {
    if (answer > num) {
      console.log("Too High!");
      guesses.push(answer);    
      answer = prompt("Guess a number: ");
      attempts ++;
    } else if (answer < num) {
      console.log("Too Low!");
      guesses.push(answer);
      answer = prompt("Guess a number: ");
      attempts ++;
    }
  
  }

}
while (answer != num);

console.log(`You got it! You took ${attempts} attempts!`);
