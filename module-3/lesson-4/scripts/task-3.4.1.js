let message = alert("This is a times table programme");
let timesTable = prompt("Enter number for the times table");
let timesTable1 = parseInt(timesTable);

for(i = 1; i <= 12; i++) {
    console.log(`${timesTable} * ${i} = ${timesTable1 * i}`)
}