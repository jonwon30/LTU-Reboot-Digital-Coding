let favouriteRecipe = {
    recipeTitle: "Beef Burger",
    servings: 2,
    ingredients: ["bun","meat","onion","ketchup"],
    directions: ["cook the meat","add meat to the buns", "top off with onion and ketchup"],

}

// let favIngredients = favouriteRecipe.ingredients;
// console.log(favouriteRecipe.ingredients)

let ingredients = function() {
for (i = 0; i < favIngredients.length; i++){
    return(favIngredients[i])
}
}

ingredients()
