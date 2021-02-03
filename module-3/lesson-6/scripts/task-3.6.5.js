let fullName = document.querySelector('input[name="full-name"]');
let submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener( 'click', function(event){
    event.preventDefault();
    console.log(fullName.value)
});


let num1 = document.querySelector('input[name="number1"]');
let submitButton2 = document.querySelector('input[type="submit2"]');

let num2 = document.querySelector('input[name="number2"]');
let submitButton3 = document.querySelector('input[type="submit3"]');

var a = num1.value
var b = num2.value

submitButton2.addEventListener( 'click', function(event){
    event.preventDefault();
});

submitButton3.addEventListener( 'click', function(event){
    event.preventDefault();
    console.log(a*b);
});