function drinkOrder (size, drink) {

    switch (drink) {
        case 'cola':
            console.log("You ordered a " + drink);
            break;
        case 'orange' :
            console.log("You ordered a " + size + " " + drink);
            break;
        case 'lemonade':
            console.log("You ordered a " + size + " " + drink);
            break;
        default:
            console.log("You ordered a " + size + " " + drink);
            break;
    }

    switch (size) {
        case 'small':
            console.log("the size is " + size);
            break;
        case 'medium' :
            console.log("the size is " + size);
            break;
        case 'large':
            console.log("the size is " + size);
            break;
        default:
            console.log("we dont have that size");
            break;
    }
}

/*
let size = prompt("What size?").toLowerCase
let drink = prompt("What drink would you like?").toLowerCase
let size1 = size.toLowerCase
let drink1 = drink.toLowerCase */

drinkOrder('small','cola')