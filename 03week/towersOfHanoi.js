// player clicks block to place on peg
// if peg is empty, block will be placed
// if peg already has block(s):
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
  const startingStack = stacks[startStack];
  // pop off the end value
  const inHand = startingStack.pop();
  // place the popped off value on the end of the ending stack
  const endingStack = stacks[endStack];
  if (inHand) {
    endingStack.push(inHand);
  }
}

function isLegal(startStack, endStack) {
  // targeting the array that represents endingStack
  const endingStack = stacks[endStack];
  // targeting the last item that was placed on the ending stack
  const lastItem = endingStack[endingStack.length - 1];
  // targeting the array that represents startingStack
  const startingStack = stacks[startStack];
  // targeting the last item of startingStack
  const inHand = startingStack[startingStack.length - 1];
  // if the peg is empty or the value of inHand is less than the value of lastItem, return true
  if (endingStack.length === 0 || inHand < lastItem) {
    return true;
  } else {
    // if the lastItem value is smaller than the inHand value, it's an invalid move
    console.log("Invalid move. Try again");
    return false;
  }
}

function checkForWin() {
  // once all blocks are moved to last peg, return 'winner'
  if (stacks.c.length === 4) {
    return true;
  }
}

function reset() {
  if (checkForWin) {
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
}

function towersOfHanoi(startStack, endStack) {
  // check to see if move is legal
  if (isLegal(startStack, endStack)) {
    // if move is legal, place piece on peg
    movePiece(startStack, endStack);
    // once the piece has been moved, check for a win
    if (checkForWin()) {
      console.log("Winner!");
      reset();
    }
  } else {
    console.log("Not a legal move. Try again.");
  }
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
getPrompt();

// Tests

// describe("#movePiece()", () => {
//   it("should pick up the last piece player clicked on", () => {
//     stacks = {
//       a: [4, 3, 2],
//       b: [],
//       c: []
//     };
//     assert.equal(movePiece("a"));
//   });
//   it("should place the last piece player clicked on", () => {
//     stacks = {
//       a: [4, 3, 2],
//       b: [1],
//       c: []
//     };
//     assert.equal(movePiece("a"));
//   });

// if (typeof describe === "function") {
//   describe("#towersOfHanoi()", () => {
//     it("should be able to move a block", () => {
//       towersOfHanoi("a", "b");
//       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//     });
//   });

//   describe("#isLegal()", () => {
//     it("should not allow an illegal move", () => {
//       stacks = {
//         a: [4, 3, 2],
//         b: [1],
//         c: []
//       };
//       assert.equal(isLegal("a", "b"), false);
//     });
//     it("should allow a legal move", () => {
//       stacks = {
//         a: [4, 3, 2, 1],
//         b: [],
//         c: []
//       };
//       assert.equal(isLegal("a", "c"), true);
//     });
//   });

//   describe("#checkForWin()", () => {
//     it("should detect a win", () => {
//       stacks = { a: [], b: [4, 3, 2, 1], c: [] };
//       assert.equal(checkForWin(), true);
//       stacks = { a: [1], b: [4, 3, 2], c: [] };
//       assert.equal(checkForWin(), false);
//     });
//   });
// } else {
//   getPrompt()
// }
