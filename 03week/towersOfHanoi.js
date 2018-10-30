// player clicks block to place on peg
// if peg is empty, block will be placed
// if peg already has block(s)
  // if block on peg is smaller than block in hand, return 'invalid move'
  // if block on peg is larger than block in hand, block will be placed
// once all blocks are moved to last peg, return 'winner'

"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

  // Your code starts here

function movePiece(startStack, endStack) {
  // if peg already has block(s)
  // get the array of the starting stack
  let startingStack = getStackValue(startStack);
  // pop off the end value
  const inHand = startingStack.pop();
  // place the popped off value on the end of the ending stack
  const endingStack = getStackValue(endStack).push(inHand);

function getStackValue(stack) {
  switch (stack) {
    case "a":
      return stacks.a;
      break;
    case "b":
      return stacks.b;
      break;
    case "c":
      return stacks.c;
      break;
    default:
      return "Invalid Move";
  }
}

function isLegal(startStack, endStack) {
  // if peg is empty, block will be placed
  // start by grabbing the last item that was placed on the ending stack
  const lastItem = endstack.pop()
  // if it's smaller than the inHand value, it's an invalid move
  if(lastItem < inHand) {
    console.log('Invalid move. Try again')
  // if the peg is empty, or the block on the peg is larger than the block in hand, place it on the peg
  } else {
    endingStack
  }

function checkForWin() {
  // once all blocks are moved to last peg, return 'winner'
  if(stacks.c === [4, 3, 2, 1]){
    console.log('Winner!')
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here

  // player clicks block to place on peg
  // call isLegal function
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  // call function move piece here
  // call checkForWin function
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

// it('should keep player from placing larger block on top of smaller block', () => {
//   assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
//   assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
//   assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
// });

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}