'use strict';

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


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// my code starts here

function horizontalWin() {
  if(board[0][0] != ' ' && board[1][0] != " " && board[2][0] != " "){
    for(let i = 0; i < 3; i++) {
      if(board[i].every(element => element == board[i][0])){
        console.log('horizontal win')
        return true
      }
    }
  }  
}

function verticalWin() {
  if(board[0][0] != ' ' && board[0][1] != " " && board[0][2] != " "){
    if(board[0][0] === board[1][0] && board[1][0] === board[2][0] || board[0][1] === board[1][1] && board[1][1] === board[2][1] || board[0][2] === board[1][2] && board[1][2] === board[2][2]){
      console.log('vertical win')
      return true
    }
  }  
}

function diagonalWin() {
  if(board[0][0] != ' ' && board[0][2] != " "){
    if(board[0][0] === board[1][1] && board[1][1] === board[2][2] || board[0][2] === board[1][1] && board[1][1] === board[2][0]){
      console.log('diagonal win')
      return true
    }
  }  
}

function checkForWin() {
  if(horizontalWin() || verticalWin() || diagonalWin()){
    return true
  }
}

function itsATie() {
  for(let i = 0; i < 3; i++) {
    if(board[i].every(element => element != ' ' && !horizontalWin && !verticalWin && !diagonalWin)){
      return true
    }
  }
}

const validMove = (row, column) => {
  if(row >= 0 && row <= 2 || column >=0 && column <= 2){
    return true
  }
}

const emptySpot = (row, column) => {
  if(!board[row][column].trim()){
    return true;
  }
}

const reset = () => {
  playerTurn = "X";
  for(let i = 0; i < 3; i++) {
    board[i].fill(' ');
  }
}

const switchPlayer = () => {
  if(playerTurn == 'X'){
    playerTurn = 'O'
  }else{
    playerTurn = 'X'
  }
}

function ticTacToe(row, column) {
  if(validMove(row, column)){
    if(emptySpot(row, column)){
      board[row][column] = playerTurn;
      if(checkForWin()){
        console.log("Winner!")
        reset();
      }else{
        switchPlayer();
      }
    }else{
      console.log('Spot filled. Try again.')
    }
  }else{
    console.log('Invalid move!')
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
