const { type } = require('os');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number = r1.question("Write a number: ", (answer) => {

if(!answer || typeof(answer) == Number){
    console.log("You need to write something!");
    return
}
else if(answer < 1 || answer > 100) {
    console.log("The number must be smaller or equal to 100 or greater than 1");
    return;
}

for (let i = 1; i <= answer; i++) {
        console.log(i + " Abracadabra")
    }
});