// The problem
/*
1. write a programme that prints the numbers from 1 to 100.
2. for multipules of 3 print 'fizz' instead of number
3. for multipules of 5 print 'buzz' instead of number
4. for numbers which are mutipules of 3 & 5 print fizzbuzz
5. print remainder numbers
*/

// create a FUNCTION, with a temporary number, by putting ( number ) in brackets.  When we call the number the entry in brackers equals the ( number ) .  The code will end when the number is reached.
// add a STANDARD FOR LOOP in the FUNCTION. 
// steps 2,3,5 need to have remainder = zero so we use the % character, example -- 10 % 3 = 1 ( 3 x 3 = 9, so remainder = 1).
// steps 2,3,5 % steps to print to  CONSOLE, so CONSOLE.LOG command with the corrosponding word 'fizz', 'buzz' etc.
// do step 4 first, as the  code may ignore this if step 2 and 3 done first. Requires a if statement (code x2 using and (&&) %3 == 0 && %5 == 0) {}
// do step 2 next requires an if else statement (code) {}
// do step 3 next, requires an else statement (code) {}
// call FUNCTION and add the number into the brackets (), example (100)

function fizzBuzz (number) {
    for (i = 0; i < number; i++) {;
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz")
        } else if (i % 3 === 0) {
        console.log ("fizz")
        } else if (i % 5 === 0) {
        console.log ("buzz")
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(100)