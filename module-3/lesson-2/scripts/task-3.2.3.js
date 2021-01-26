/* EXAMPLE */

function greet(greeting, name) {
  return greeting + ' ' + name;
}

var message = greet('Hello', 'Luke');
    console.log( message ); // Output: Hello Luke

/* EXAMPLE */

// ADD YOUR CODE BELOW HERE
let firstName = prompt("What is your first Name?");
let lastName = prompt("What is your last Name?");

function fullName (firstName, LastName) {
  fullName = firstName + " " + LastName
  return("Your full name is " + fullName)
};

var finalmessage = fullName(firstName, lastName);
console.log(finalmessage);


// ADD YOUR CODE ABOVE HERE