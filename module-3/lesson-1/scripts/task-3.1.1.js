/* alert("Hello World");
console.log("alert from the console"); */

// alert("2nd alert message")
console.log("2nd console log message");
document.write("document write message")

var messageTask = "New Message"
console.log(messageTask);
document.write(messageTask);

var x = 10;
var y = 20;

console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);
console.log(x % y);

var firstName = "John";
var lastName = " Stapylton";
var  fullName = firstName + lastName;
console.log (firstName);
console.log (fullName);
console.log(`My first name is ${firstName} and my second name is ${lastName}, my full name is ${firstName} ${lastName}`);

var bill = 100;
var billn = bill.toFixed(2);
var tip =  bill/10;
var total_bill = bill + tip;
var n = total_bill.toFixed(2);
console.log ("the bill is £" + billn + " " + "The tip is " + tip + "% " + "the final bill is £" + n );