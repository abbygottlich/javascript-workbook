'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// my code starts here

// find first vowel of word: 'findFirstVowel' (for loop)
    // if first vowel is first letter of word, add "yay" to end of word
    // if first vowel is in another position: 'translateWord', 
      // remove all consinents before it (.split and .splice)
      // add those consinents to the end of the word (.join)
      // add "ay" to the end of all of that

const findFirstVowel = (word) => {
  for (let i = 0; i < word.length; i++) {
    const charPosition = word[i];
    if(charPosition == 'a' || charPosition == 'e' || charPosition == 'i' || charPosition == 'o' || charPosition == 'u'){
    return i;}
  }
}

const translateWord = (word, vowelPosition) => {
  if(vowelPosition == 0){
    return word + 'yay'
  }else{
    const separateLetters = word.split('');
    const removeConsonants = separateLetters.splice(0, vowelPosition);
    return separateLetters.join('') + removeConsonants.join('') + 'ay';
  }
}


function pigLatin(word) {

  // Your code here
  const vowelPosition = findFirstVowel(word)
  return translateWord(word, vowelPosition)

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
