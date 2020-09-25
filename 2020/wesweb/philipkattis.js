const { type } = require('os');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Write a number: ", (answer) => {
    let numbers = answer.split(' ');
    let num1 = numbers[0].split('').reverse().join('');
    let num2 = numbers[1].split('').reverse().join('');

    if(num1 > num2){
        console.log("Number 1 is the largest");
    }
    else if (num2 > num1){
        console.log("Number 2 is the largest");
    }
    else {
        console.log("The numbers are the same");
    }
})