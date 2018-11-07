"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "abcd";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// Guess has to be valid, format guess(.lowerCase and .trim) → isValidInput() returns T/F
// must be letters from letters array
// must have 4
// can’t be null

const isValid = guess => {
  const formattedGuess = guess.toLowerCase().trim();
  const guessArr = formattedGuess.split("");
  const isValidVar = guessArr.some(letter => {
    const lettersNotIncluded = !letters.includes(letter);
    return lettersNotIncluded;
    console.log(lettersNotIncluded, "letters not included");
  });
  console.log(isValidVar);
  return isValidVar;
};

// function generateSolution() {
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, letters.length);
//     solution += letters[randomIndex];
//   }
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

function generateHint(guess) {
  // your code here
  const guessArr = guess.split("");
  const solutionArr = solution.split("");
  let rightLetterRightPlace = 0;
  let rightLetterWrongPlace = 0;
  guessArr.forEach((letter, index) => {
    // console.log(letter, "current", solutionArr[index]);
    const correspondingLetter = solutionArr[index];
    if (letter == correspondingLetter) {
      //add to “right place, right letter” count
      rightLetterRightPlace++;
    } else if (solutionArr.includes(letter)) {
      //add to “right letter, wrong place” count
      rightLetterWrongPlace++;
    }
  });
  console.log(
    `${rightLetterRightPlace} are the right letter in the right place - ${rightLetterWrongPlace} are the right letter in the wrong place`
  );
}

const checkForWin = guess => {
  return guess === solution;
};

const hasGuessesRemaining = () => {
  console.log(`You have ${10 - board.length} guesses remaining.`);
  return board.length < 10;
};

const resetBoard = () => {
  board = [];
};

function mastermind(guess) {
  solution = "abcd"; // Comment this out to generate a random solution
  // your code here
  if (isValid(guess)) {
    board.push(guess);
    if (checkForWin(guess)) {
      console.log("Winner! Let's play again!");
      resetBoard();
    } else if (hasGuessesRemaining()) {
      //tell user that they lost and show solution
      generateHint(guess);
      // TODO: hasGuessesRemaining
    }
  } else {
    console.log("Invalid guess. Try again.");
  }
}

function getPrompt() {
  rl.question("guess: ", guess => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  // generateSolution();
  getPrompt();
}
