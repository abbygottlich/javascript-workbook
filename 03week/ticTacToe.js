"use strict";

// check if space is empty
// check if move is valid
// player1 puts an 'x' on the board
// switch player
// player 2 puts an 'o' on the board
// if there are 3 of the same letter in a horizontal row, return 'winner'
// if there are 3 of the same letter in a vertical row, return 'winner'
// if there are 3 of the same letter in a column, return 'winner'
// if all spaces are full and there is no winner, return 'tie'
// 8 different ways for each person to win
// reset game after a tie or after a win

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

// my code starts here

function horizontalWin() {
  if (
    //  none of the left column can be empty
    (board[0][0] != " " &&
      board[0][0] === board[0][1] &&
      board[0][1] === board[0][2]) ||
    (board[1][0] != " " &&
      board[1][0] === board[1][1] &&
      board[1][1] === board[1][2]) ||
    (board[2][0] != " " &&
      board[2][0] === board[2][1] &&
      board[2][1] === board[2][2])
  ) {
    console.log("horizontal win");
    return true;
  }
}

function verticalWin() {
  if (
    // none of the top row can be empty
    (board[0][0] != " " &&
      board[0][0] === board[1][0] &&
      board[1][0] === board[2][0]) ||
    (board[0][1] != " " &&
      board[0][1] === board[1][1] &&
      board[1][1] === board[2][1]) ||
    (board[0][2] != " " &&
      board[0][2] === board[1][2] &&
      board[1][2] === board[2][2])
  ) {
    console.log("vertical win");
    return true;
  }
}

function diagonalWin() {
  if (
    // the top left spot cannot be empty
    (board[0][0] != " " &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]) ||
    // the top right spot cannot be empty
    (board[0][2] != " " &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0])
  ) {
    console.log("diagonal win");
    return true;
  }
}

function checkForWin() {
  // if there is a horizontal win, vertical win, or diagonal win, return true
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  }
}

function itsATie() {
  // assuming there is a tie
  let isTied = true;
  // checking each array on the board
  board.forEach(row => {
    // checking each space in each array
    row.forEach(space => {
      // if the loop comes across a blank space, it will change the variable to false
      if (space === " ") {
        isTied = false;
      }
    });
  });
  // returning the value of isTied
  return isTied;
}

const validMove = (row, column) => {
  //  each input for row and column has to be between 0 and 2
  if ((row >= 0 && row <= 2) || (column >= 0 && column <= 2)) {
    return true;
  }
};

const emptySpot = (row, column) => {
  //  when space is empty, return true
  if (board[row][column] === " ") {
    return true;
  }
};

const reset = () => {
  //  X always goes first; to reset game, fill all spaces with an empty string
  playerTurn = "X";
  for (let i = 0; i < 3; i++) {
    board[i].fill(" ");
  }
};

const switchPlayer = () => {
  //  if the player currently has the value of X, switch it to O, otherwise switch it to X
  if (playerTurn == "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
};

function ticTacToe(row, column) {
  //  if the move is valid
  if (validMove(row, column)) {
    //  check for an empty spot
    if (emptySpot(row, column)) {
      //  place and X or O
      board[row][column] = playerTurn;
      // once it's placed, check for a win
      if (checkForWin()) {
        console.log("Winner!");
        //  if there is a winner, reset the game
        reset();
        //  if there isn't a winner, check for a tie
      } else if (itsATie()) {
        console.log("Tie Game!");
        //  if there is a tie, reset the game
        reset();
        //  if there is no winner and no tie, switch players
      } else {
        switchPlayer();
      }
      //  if the spot is filled already
    } else {
      console.log("Spot filled. Try again.");
    }
    //  if the move is invalid
  } else {
    console.log("Invalid move!");
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
