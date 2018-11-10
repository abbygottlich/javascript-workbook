// write a for loop for each array to set up the board (for each even space, place a piece)
// each color can only move in one direction (use greater than or less than)
// you can't jump your own player
// put checkers on board
// 12 white checkers, 12 red checkers
// switch between two players
// change space to null after piece has been jumped
// check for win (all of one type of checker is gone/has been jumped/null)
// valid move function (can't move to a full spot or white spot)
// reset board function

// take in a input
// split the input

//Write a setGame function to place the pieces on the board (for loop)
//Write a validMoveX function that only allows X pieces to move down, and into null spots (split the string/use greater than or less than)
//Write a validMoveO function that only allows O pieces to move up, and into null spots (split the string/use greater than or less than)
//Write a movePiece function that allows pieces to move from one spot to another
//Write a jumpOpponent function that allows one piece to jump over another, ommitting the piece that was jumped over
//Write a switchPlayer function that alternates between Xs and Os
//Write a XIsKing function that allows the X pieces to move diagonally forward or backwards after one has reached the other side of the board
//Write a OIsKing function that allows the O pieces to move diagonally forward or backwards after one has reached the other side of the board
//Write a checkForWin function that says "winner" when one player has captured all of the other players pieces

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker() {
  // Your code here
}

class Board {
  constructor() {
    this.grid = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(" ");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(" ");
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question("which piece?: ", whichPiece => {
    rl.question("to where?: ", toWhere => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests
if (typeof describe === "function") {
  describe("Game", () => {
    it("should have a board", () => {
      assert.equal(game.board.constructor.name, "Board");
    });
    it("board should have 24 checkers", () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe("Game.moveChecker()", () => {
    it("should move a checker", () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker("50", "41"); //piece starts at 5,0 and jumps to 4,1
      assert(game.board.grid[4][1]);
      game.moveChecker("21", "30");
      assert(game.board.grid[3][0]);
      game.moveChecker("52", "43");
      assert(game.board.grid[4][3]);
    });
    it("should be able to jump over and kill another checker", () => {
      game.moveChecker("30", "52");
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
