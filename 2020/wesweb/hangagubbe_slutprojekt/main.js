const functions = require("./functions"); //Including functions from functions.js
const readline = require("readline"); //Including readline.

//Defining readline interfaces.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Two different variables for easy & hard wordlists.
let RandomWord = "";
let word = "";
let tries = 7; //Tries
function setupGame() {
  rl.question("What level do you choose? (easy / hard): ", (answer) => {
    //2 levels which you can play in.
    if (answer == "easy") {
      //If answer is easy.
      RandomWord = functions.randomWordFunc("easy"); //Taking a word from easy arraylist.
      console.log("The length of the word is: " + RandomWord.length); //Counting the length of the word.
      //console.log("Easy level! + RandomWord "); //+ RandomWord
    } else if (answer == "hard") { 
      RandomWord = functions.randomWordFunc("hard");
      console.log("The length of the word is: " + RandomWord.length);
      //console.log("Hard level! + RandomWord "); //+ RandomWord
    }
    else
    {
        setupGame();
    }
    word = "";
    tries = 8;
  });
}

setupGame(); //Calling setupGame function.
let wrongGuesses = [];

function statusOfGame(input) {
  let RandomWordindex = RandomWord.indexOf(input); //If indexOf input is != -1 it exist in the choosen word, else its not.
  if (RandomWordindex != -1) {
    //If not equals -1 (letter exist in the word)
    
    console.log("\x1b[33m%s\x1b[0m", "Ooo nice! :D ");
    word += input; //Saving the letter into the variable word.
  } else {
    console.log("\x1b[31m%s\x1b[0m", "Wrong letter! ");
    wrongGuesses.push(input);
    --tries; //If letter doesn't exist in the word, -1 try out of 8.
  }

  if (word == RandomWord) {
    //If word is the orginal choosen word, you won.
    console.log(
        "\x1b[32m%s\x1b[0m",
      "Congratz you won the game!\n The word were: " +
        word + 
        "\nGG WP! Game will now reset! :D"
    );
    setupGame();
  } else if (tries == 7) {
    
    console.log(
      `
    +---+
    |   |
        |
        |
        |
        |
  =========''', ''' 
      `
    )

    console.log("Status: 7 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 6) {
    console.log(
      `
      +---+
      |   |
      O   |
          |
          |
          |
    =========''', '''
      `
    )
    console.log("Status: 6 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 5) {
    console.log(
      `
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========''', '''
      `
    )
    console.log("Status: 5 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 4) {
    console.log(
      `
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========''', '''
      `
    )
    console.log("Status: 4 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 3) {
    console.log(
      `
      +---+
      |   |
      O   |
     /|\\  |
          |
          |
    =========''', '''
      `
    )
    console.log("Status: 3 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 2) {
    console.log(
      `
      +---+
      |   |
      O   |
     /|\\  |
     /    |
          |
    =========''', '''
      `
    )
    console.log("Status: 2 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 1) {
    console.log(
      `
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========''']
      `
    )
    console.log("Status: 1 tries left!\n");
      console.log("WrongGuesses: " + wrongGuesses.join());
  } else if (tries == 0) {
      //If you've guessed too many times, you lose and game will start over with a new word.
    console.log(
      `
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========''']
      `
    )
    console.log("\x1b[31m%s\x1b[0m", "GAMEOVER!\n",
    "The game will now reset! :D\n")
    wrongGuesses = [];
    setupGame();
  }
}

rl.on("line", (input) => {
  console.log(`Received the letter: ${input}`); //Receiving all the letters which is being entered.
  statusOfGame(input); //Calling statusOfGame function.
});
