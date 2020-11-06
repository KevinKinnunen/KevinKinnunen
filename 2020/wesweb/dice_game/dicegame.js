const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getDiceSides(line){
    let numText = line.split(' ')
    let diceOne = (Number(numText[1]) - Number(numText[0]) + 1)
    let diceTwo = (Number(numText[3]) - Number(numText[2]) + 1)

    let diceSides = diceOne + diceTwo
    return diceSides
}

function calculateAvg(sides){
    let avg = sides / 2
    return avg
}

function printResultProbability(playerOneAvg, playerTwoAvg){
    if(playerOneAvg > playerTwoAvg){
        console.log("Gunnar has the highest probability of winning!")
    } else if (playerTwoAvg > playerOneAvg) {
        console.log("Emma has the highest probability of winning!")
    } else {
        console.log("TIE! :D")
    }
}

var lineInputs = 0
const lines = []

rl.on('line', (input) => {
    lineInputs++
    lines.push(input)

    if (lineInputs == 2) {
        let gunnarDice = getDiceSides(lines[0])
        let emmaDice = getDiceSides(lines[1])
        let gunnarAvg = calculateAvg(gunnarDice)
        let emmaAvg = calculateAvg(emmaDice)

        printResultProbability(gunnarAvg, emmaAvg)
        for (let index = 0; index < 2; index++) {
            lines.shift()    
        }
    }
});