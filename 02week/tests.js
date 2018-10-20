if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('rOcK', ' scissors '), "Hand one wins!");
        assert.equal(rockPaperScissors('rOcK', ' rock '), "It's a tie!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'ROCK'), "Hand one wins!");
        assert.equal(rockPaperScissors('Paper', 'PAPER'), "It's a tie!");
        assert.equal(rockPaperScissors('sCiSsOrs', 'rock '), "Hand two wins!");
        assert.equal(rockPaperScissors('sCiSsOrs', 'paper '), "Hand one wins!");
        assert.equal(rockPaperScissors('sCiSsOrs', 'scissors '), "It's a tie!");
      });
      it('should detect an invalid entry', () => {
        assert.equal(rockPaperScissors('rock', 'dragon'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('rock', 'fire'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('rock', ''), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('paper', 'dragon'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('paper', 'fire'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('paper', ''), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('scissors', 'dragon'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('scissors', 'fire'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('scissors', ''), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('dragon', 'rock'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('fire', 'rock'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('', 'rock'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('dragon', 'paper'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('fire', 'paper'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('', 'paper'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('dragon', 'scissors'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('fire', 'scissors'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('', 'scissors'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('dragon', 'dragon'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('fire', 'fire'), "Invalid entry. Please try again.");
        assert.equal(rockPaperScissors('', ''), "Invalid entry. Please try again.");
      });
      it('should detect minor spelling errors', () => {
        assert.equal(rockPaperScissors('rocj', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rokc', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('tock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('roxk', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rocl', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rocj', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('rokc', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('tock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('roxk', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('rocl', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('rocj', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('rokc', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('tock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('roxk', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('rocl', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'rocj'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rokc'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'tock'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'roxk'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rocl'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'rocj'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rokc'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'tock'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'roxk'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rocl'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'rocl'), "It's a tie!");
        assert.equal(rockPaperScissors('rock', 'rokc'), "It's a tie!");
        assert.equal(rockPaperScissors('rock', 'tock'), "It's a tie!");
        assert.equal(rockPaperScissors('rock', 'roxk'), "It's a tie!");
        assert.equal(rockPaperScissors('rock', 'rocl'), "It's a tie!");
        assert.equal(rockPaperScissors('oaper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('[aper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('psper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('papwe', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('oaoer', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('oaper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('[aper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('psper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('papwe', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('oaoer', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('oaper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('[aper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('psper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('papwe', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('oaoer', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'oaper'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', '[aper'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'psper'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'papwe'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'oaoer'), "It's a tie!");
        assert.equal(rockPaperScissors('rock', 'oaper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', '[aper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'psper'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'papwe'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'oaoer'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'oaper'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', '[aper'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'psper'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'papwe'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'oaoer'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissor', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('sisssors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('sissodx', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('siccors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('siddord', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissor', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('sisssors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('sissodx', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('siccors', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('siddord', 'rock'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissor', 'scissors'), "It's a tie!");
        assert.equal(rockPaperScissors('sisssors', 'scissors'), "It's a tie!");
        assert.equal(rockPaperScissors('sissodx', 'scissors'), "It's a tie!");
        assert.equal(rockPaperScissors('siccors', 'scissors'), "It's a tie!");
        assert.equal(rockPaperScissors('siddord', 'scissors'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'scissor'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'sisssors'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'sissodx'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'siccors'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'siddord'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissor'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'scissor'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'sissodx'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'siccors'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'siddord'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'scissor'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'sisssors'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'sissodx'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'siccors'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'siccors'), "It's a tie!");
        
      });
    });
  } else {
  
    getPrompt();
  
  }