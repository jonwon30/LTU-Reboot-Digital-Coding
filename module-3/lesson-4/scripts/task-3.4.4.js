let favouriteRecipe = {
    recipeTitle: "Beef Burger",
    servings: 2,
    ingredients: ["bun","meat","onion","ketchup"],
    directions: ["cook the meat","add meat to the buns", "top off with onion and ketchup"],
    letsCook: function () {
       console.log (`I'm hungry lets cook ${favouriteRecipe.recipeTitle}`)
    },
}

console.log(favouriteRecipe.letsCook);
