let food = ["spicy", "Curry", "Toad in the hole", "Ramin noodles"];
food[0] = "Burger";
food.push("Chicken");
food.unshift("Pizza")

for (i = 0; i < food.length; i++){
    let foodItems = food[i];
    console.log(foodItems)
}

let foodBest = food.splice(2,2);
console.log(foodBest);