let functionNew = function () {
    console.log("This is a function")
    document.write("this is also part of the function")
    console.log("Also part of the function" + " " + 5 * 10);
}
functionNew();


function test (a, b) { // a and b can be called anything.
    console.log(a + b); // using the placeholders in the brackers above.
}

test(10, 15) // a = 10, b = 15.  test calls the function and the numbers represent a, b.

function fullName (firstName, LastName) {
    fullName = firstName + " " + LastName
    console.log("Your full name is " + fullName)
}

let firstName = prompt("What is your first Name?");
let lastName = prompt("What is your last Name?");
fullName(firstName, lastName)
