let gissatalet = 5 //5 försök.
let randint = Math.floor(Math.random() * 10) + 1; //1 - 10.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    let ninput = parseInt(input)

    if (ninput < randint){ //Lägre
        console.log("Gissa på ett högre tal!");
    }
    else if (ninput > randint){ //Högre
        console.log("Gissa på ett lägre tal!");
    } else if (ninput == randint){ //Lika 
        console.log("Haha du vann!");
        process.exit() //Exit ifall du gissar rätt.
    }
gissatalet--; //-1 per försök.
if (gissatalet == 0)
{
    console.log("YOU SUCK! :D");
    process.exit() //exit efter 5 försök.
}
  });


