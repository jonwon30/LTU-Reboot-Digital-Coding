function calculator (num1, operator, num2,) {

    switch (operator) {
    case '+':
        return num1 + num2;
        break;
    case '-':
        return num1 - num2;
        break    ;   
    case '/':
        return num1 / num2;
        break;
    case '*':
        return num1 * num2;
        break;
    case '%':
        return num1 % num2;
        break;
    default:
        return "not possible"
        break;
}
}

let number1 = 16;
let number2 = 7;
let operator = '+';

let totalNum = calculator(number1,operator,number2);

console.log (`number ${number1} ${operator} ${number2} totals ${totalNum}`)