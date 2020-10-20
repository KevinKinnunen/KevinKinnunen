let gissatalet = 5
let randint = Math.floor(Math.random() * 10) + 1; //1 - 10

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    let ninput = parseInt(input)

    if (ninput < randint){
        console.log("Gissa på ett högre tal!");
    }
    else if (ninput > randint){
        console.log("Gissa på ett lägre tal!");
    } else if (ninput == randint){
        console.log("Haha du vann!");
        process.exit()
    }
gissatalet--; //5 gissningar max för att vinna annars, process.exit.
if (gissatalet == 0)
{
    console.log("YOU SUCK! :D");
    process.exit()
}
  });


