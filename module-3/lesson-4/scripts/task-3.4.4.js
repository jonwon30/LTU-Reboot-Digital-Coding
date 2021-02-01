let favouriteRecipe = {
    recipeTitle: "Beef Burger",
    servings: 2,
    ingredients: ["bun","meat","onion","ketchup"],
    directions: ["cook the meat","add meat to the buns", "top off with onion and ketchup"],
    letsCook: function (food) {
       console.log ("I'm hungry lets cook" + food)
    },
}

console.log(favouriteRecipe.letsCook("pizza"));
console.log("hello World")
