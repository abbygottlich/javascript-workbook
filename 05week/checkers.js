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
    //added this.checkers so we would have an array to push the checker pieces to
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      //white rows
      //for the first 2 odd rows,
      if (row === 0 || row === 2) {
        this.grid[row] = [];
        for (let column = 0; column < 8; column++) {
          //if the columns are even (divisible by two), push null into those spots
          if (column % 2 === 0) {
            this.grid[row].push(null);
            //otherwise, convert the row and column inputs to strings and push those coordinates into the checkers array
          } else {
            this.checkers.push(row.toString() + column.toString());
            //pushing a 'w' onto the board
            this.grid[row].push("w");
          }
        }
      } else if (row === 1) {
        //for row 1,
        this.grid[row] = [];
        for (let column = 0; column < 8; column++) {
          //for the first odd numbered column,
          if (!(column % 2 === 0)) {
            //push null into each spot
            this.grid[row].push(null);
          } else {
            //if it's not odd, push a 'w' into the spot
            this.checkers.push(row.toString() + column.toString());
            this.grid[row].push("w");
          }
        }
      }
      //black rows
      else if (row === 6) {
        this.grid[row] = [];
        for (let column = 0; column < 8; column++) {
          if (column % 2 === 0) {
            this.grid[row].push(null);
          } else {
            this.checkers.push(row.toString() + column.toString());
            this.grid[row].push("b");
          }
        }
      } else if (row === 5 || row === 7) {
        this.grid[row] = [];
        for (let column = 0; column < 8; column++) {
          if (!(column % 2 === 0)) {
            this.grid[row].push(null);
          } else {
            this.checkers.push(row.toString() + column.toString());
            this.grid[row].push("b");
          }
        }
      } else {
        //otherwise, push null into the spot
        this.grid[row] = [];
        // push in 8 columns of nulls
        for (let column = 0; column < 8; column++) {
          this.grid[row].push(null);
        }
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
          rowOfCheckers.push(this.grid[row][column]);
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
}

//   // Your code here

//   //Write a setGame function to place the pieces on the board (for loop)
//   const setBoard = () =>{
//   console.log(board[0][1].push('X'));
//   }

//   //Write a validMoveX function that only allows X pieces to move down, and into null spots (split the string/use greater than or less than)
//   const validMoveX = () =>{
//     input1.split
//   }

//   //Write a validMoveO function that only allows O pieces to move up, and into null spots (split the string/use greater than or less than)

//   const validMoveO = () =>{
//     input1.split
//   }

//   //Write a movePiece function that allows pieces to move from one spot to another
//   const movePiece = (input1, input2) =>{
//     if(input2===null){
//       input2.push()
//     }
//   }

//   //Write a jumpOpponent function that allows one piece to jump over another, ommitting the piece that was jumped over

// }

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
  }
  moveChecker() {
    //move checker function
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
      //assumes calling a board class in game constructor
      assert.equal(game.board.constructor.name, "Board");
    });
    //we need something called checkers in the board constructor
    //we need 24 of them
    it("board should have 24 checkers", () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe("Game.moveChecker()", () => {
    it("should move a checker", () => {
      assert(!game.board.grid[4][1]); //if there's not a piece at 4,1, you can move a piece there
      game.moveChecker("50", "41"); //piece starts at 5,0 and jumps to 4,1
      assert(game.board.grid[4][1]);
      game.moveChecker("21", "30");
      assert(game.board.grid[3][0]);
      game.moveChecker("52", "43");
      assert(game.board.grid[4][3]);
    });
    it("should be able to jump over and kill another checker", () => {
      game.moveChecker("30", "52"); //checker was moved from 3,0 to 5,1, deleting the checker at 4,1
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]); //no longer a checker at 4,1
      assert.equal(game.board.checkers.length, 23); //length is now 23 because a checker was removed
    });
  });
} else {
  getPrompt();
}
