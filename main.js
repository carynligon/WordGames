// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var wordDiv = document.querySelector('#word');
var startBtn = document.querySelector('#start-btn');
var selectedWord;
var selector = Math.floor(commonWords.length * Math.random());
var numBlanks = [];
var guessInput = document.querySelector('input');
var guess = '';
var turnsLeft = 7;
var pastGuesses = [];
var pastGuessesDiv = document.querySelector('#guesses');


startBtn.addEventListener('click', function () {
  selectedWord = commonWords[selector];
  wordDiv.textContent = '';
  numBlanks = [];
  turnsLeft = 7;
  guessInput.value = '';
  pastGuesses = [];
  for (i = 0; i < selectedWord.length; i++) {
    if (wordDiv.textContent === '') {
    numBlanks.push('_');
    } else {
      wordDiv.textContent = '';
      numBlanks = [];
    }
  }
  wordDiv.textContent = numBlanks.join(' ');
  console.log(numBlanks);
});

guessInput.addEventListener('keyup', function () {
  guess = guessInput.value;
  console.log(guess);
  for (i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guess) {
      numBlanks[i] = guess;
      wordDiv.textContent = numBlanks.join(' ');
      guessInput.value = '';
    }
  }
  if (wordDiv.textContent.indexOf('_') === -1) {
    guessInput.value = 'You won!';
    }
  else {
    turnsLeft--;
    pastGuesses.push(guess);
    console.log(pastGuesses);
    guessInput.value = '';
    if (turnsLeft === 0) {
      guessInput.value = 'Game over';
      prompt('Game over. Would you like to play again?');
      guessInput.value = '';
      numBlanks = [];
      wordDiv.textContent = '';
    }
  }
});


// Need to figure out forEach for multiple of same letters:
// guessInput.addEventListener('keyup', function () {
//   guess = guessInput.value;
//   console.log(guess);
//   selectedWord.split('').forEach(function(guess, i) {
//     if (guess !== -1) {
//       numBlanks[i] = guess;
//     }
//     else if (wordDiv.textContent.indexOf('_') === -1) {
//       guessInput.value = 'You won!';
//       }
//     else {
//       turnsLeft--;
//       pastGuesses.push(guess);
//       console.log(pastGuesses);
//       guessInput.value = '';
//       if (turnsLeft === 0) {
//         guessInput.value = 'Game over';
//       }
//     }
//   });
// });
