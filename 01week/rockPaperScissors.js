'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// user1 makes move
// user2 makes move
// user1 chooses rock, user2 chooses paper - user2 wins
// user1 chooses rock, user2 chooses scissors - user1 wins
// user1 chooses rock, user2 chooses rock - it's a tie
// user1 chooses paper, user2 chooses rock - user1 wins
// user1 chooses paper, user2 chooses scissors - user2 wins
// user1 chooses paper, user2 chooses paper - it's a tie
// user1 chooses scissors, user2 chooses rock - user2 wins
// user1 chooses scissors, user2 chooses paper - user1 wins
// user1 chooses scissors, user2 chooses scissors - it's a tie

function rockPaperScissors(hand1, hand2) {

  // Write code here

if(hand1=='rock' && hand2 =='paper'){
  return 'Player 2 Wins!'
}else if(hand1=='rock' && hand2 =='scissors'){
  return 'Player 1 Wins!'
}else if(hand1=='paper' && hand2 =='rock'){
  return 'Player 1 Wins!'
}else if(hand1=='paper' && hand2 =='scissors'){
  return 'Player 2 Wins!'
}else if(hand1=='scissors' && hand2 =='rock'){
  return 'Player 2 Wins!'
}else if(hand1=='scissors' && hand2 =='paper'){
  return 'Player 1 Wins!'
}else if(hand1=='rock' && hand2=='rock'){
  return 'It is a tie!'
}else if(hand1=='paper' && hand2=='paper'){
  return 'It is a tie!'
}else if(hand1=='scissors' && hand2=='scissors'){
  return 'It is a tie!'
}else {
  return 'Please enter "rock", "paper", or "scissors"'
}

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
