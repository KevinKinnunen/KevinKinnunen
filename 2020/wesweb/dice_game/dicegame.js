const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var lineInputs = 0
const lines = []

rl.on('line', (input) => {
    lineInputs++
    lines.push(input)

    if (lineInputs == 2) {
        let gunnar = lines[0]
        let emma = lines[1]

        gunnarDiceOne = (Number(gunnar.split(' ')[1]) + Number(gunnar.split(' ')[4])) / 2
        gunnarDiceTwo = (Number(gunnar.split(' ')[2]) + Number(gunnar.split(' ')[6])) / 2

        emmaDiceOne = (Number(emma.split(' ')[2]) + Number(emma.split(' ')[5])) / 2
        emmaDiceTwo = (Number(emma.split(' ')[1]) + Number(emma.split(' ')[7])) / 2



        if (gunnar > emma) {
            console.log("Gunnar is champ")
        }
        else if (gunnar < emma) {
            console.log("Emma comes out victorius")
        }
        else {
            console.log("TIE, SAY GOODBYE")
        };

    }
});