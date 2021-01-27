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
};