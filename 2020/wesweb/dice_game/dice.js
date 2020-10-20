// Läsa in två rader
// Dela upp raderna i tal som ska sparas i variabler
// Räkna ut snittet av varje rad 1

const lines = []

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    lines.push(input)
    if(lines.length == 2)
    {
        const gunnarNums = lines[0].split(' ')
        const emmaNums = lines[1].split(' ')
        let gunnarSum = 0
        let emmaSum = 0
        for (let i = 0; i < gunnarNums.length; i++) {
            gunnarSum += Number(gunnarNums[i])
        }

        for (let i = 0; i < emmaNums.length; i++) {
            emmaSum += Number(emmaNums[i])
        }

        if (gunnarSum > emmaSum){
            console.log("Gunnar win!");
        }
        else if (emmaSum > gunnarSum){
            console.log("Emma win!");
        }
        else
        {
            console.log("TIE! :D")
        }
    }
  });