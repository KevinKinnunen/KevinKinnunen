const functions = require('./functions') //Including functions from functions.js
const readline = require('readline'); //Including readline.
const { randomBytes } = require('crypto');

//Defining readline interfaces.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Two different variables for easy & hard wordlists. 
let RandomWord = ""
let word = ""
let tries = 8 //Tries
let sln = RandomWord.length //Counting the length of the word.
function setupGame(){
    rl.question('What level do you choose? (easy / hard): ', (answer) => { //2 levels which you can play in. 
        if (answer == 'easy') //If answer is easy.
        {
            RandomWord = functions.randomWordFunc("easy") //Taking a word from easy arraylist.
            console.log("The length of the choosen word is: " + sln) //Counting the length of the word.
            console.log("Easy level: " + RandomWord)
        } else if (answer == 'hard'){
            RandomWord= functions.randomWordFunc("hard")
            console.log("The length of the choosen word is: " + sln)
            console.log("Hard level: " + RandomWord)
        }
        word = ""
        tries = 8
    })
}

setupGame()

rl.on('line', (input) => {
    console.log(`Received: ${input}`); //Receiving all the letters which is being entered.
    let RandomWordindex = (RandomWord.indexOf(input)) //If indexOf input is != -1 it exist in the choosen word, else its not.
    if (RandomWordindex != -1) { //If not equals -1 (letter exist in the word)
        console.log("Letter exist in the word: " + RandomWordindex)
       // word += line //Saving the letter into the variable word.  ################################################################ reason why program crash.
    }
    else 
    {
        console.log("Letter doesn't exist in the word: " + RandomWordindex)
        --tries //If letter doesn't exist in the word, -1 try out of 8.
    } if (word == RandomWord) //If word is the orginal choosen word, you won. 
    {
        console.log("You won! The word: " + word)
    } else if (tries == 0) //If you've guessed too many times, you lose and game will start over with a new word.
    {
        console.log("You've lost, you have 0 tries! GAMEOVER!")
    }
  });