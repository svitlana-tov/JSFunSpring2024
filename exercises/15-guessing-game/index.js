import prompt from "readline-sync";

const startGame = () => {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  const maxGuesses = 5;
  let guessesTaken;

  guessesTaken = 0;
  while (guessesTaken < maxGuesses) {
    const guess = prompt.question("Guess a number between 1 and 10: ");
    const guessNum = parseInt(guess);

    guessesTaken++;
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 10) {
      console.log("Please enter a valid number between 1 and 10");
    } else if (guessNum === secretNumber) {
      console.log("Congratulations! You won the game!");
      break;
    } else if (guessNum < secretNumber) {
      console.log("Your number is too low! Try again!");
    } else {
      console.log("Your number is too high! Try again!");
    }
  }
  if (guessesTaken >= maxGuesses) {
    console.log(`Game over! The number was ${secretNumber}`);
  }
};

const playAgain = () => {
  const playAgainInput = prompt
    .question("Do you want to play again?: ")
    .toLowerCase();
  return playAgainInput === "yes";
};
const main = () => {
  let continuePlaying = true;
  while (continuePlaying) {
    const gameWon = startGame();
    if (!gameWon) {
      continuePlaying = playAgain();
    } else {
      continuePlaying = false;
    }
  }
  console.log("Thanks for playing! Goodbye!");
};
main();
