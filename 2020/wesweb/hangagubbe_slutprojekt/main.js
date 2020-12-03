const functions = require('./functions') //Including functions from functions.js
const readline = require('readline') //Including readline.

//Defining readline interfaces.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Two different variables for easy & hard wordlists. 
let easyRandWord = functions.randomWordFunc("easy")
let hardRandWord = functions.randomWordFunc("hard")
console.log("Easy: " + easyRandWord + "\n" + "Hard: " + hardRandWord);

//Read how much letters the word choosen have depending on which difficulty the player choose.
rl.on('line', (input) => {
    console.log(`Received: ${input}`); //Receiving all the letters which is being entered.
    let easywordindex = (easyRandWord.indexOf(input)) //If indexOf input is != -1 it exist in the choosen word, else its not.
    let sln = easyRandWord.length
    console.log("The length of the choosen word is: " + sln)
    if (easywordindex != -1) {
        console.log("Letter exist in the word: " + easywordindex)
    }
    else
    {
        console.log("Letter doesn't exist in the word: " + easywordindex)
    }
  });