const functions = require('./functions')

let easyRandWord = functions.randomWordFunc("easy")
let hardRandWord = functions.randomWordFunc("hard")

console.log("Easy: " + easyRandWord + "\n" + "Hard: " + hardRandWord);