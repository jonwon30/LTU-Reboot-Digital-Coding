/*
let temp1 = prompt("what is the temperature between 1 and 100?")
let tempnNum = parseInt(temp1)
if (tempnNum <= 10 ){
    console.log ("you need to wear a coat");
} else if  (tempnNum > 10 && tempnNum < 20 ) {
    console.log ("you may not need a coat");
} else if (tempnNum >=20 && tempnNum < 42 ) {
    console.log ("you won't need a coat");
} else if (tempnNum != 42 && tempnNum != 100 ) {
    console.log ("wow thats hot!");
} else {
    console.log("please enter a number, that entry wasn't valid")
}; */

let num1 = 100;
let num2 = 10;

function numPercent (a, b) {
    let percentage = a * b / 100;
    total = num1 + percentage
    return total;
}

console.log(numPercent(num1, num2));
