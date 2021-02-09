// task 1 Reading list

/* 
conditions:

TITLE = string
AUTHOR = string
READ = boolean TRUE

Step 1
Keep track of which books you read and which books you want to read


1. Create an ARRAY of objects, where each object descrbes a book and has properties to the 
    1.a title
    2.b auther
    2.c read = boolean TRUE or FALSE 

Step 2
1. use a FOR LOOP to iterate through the ARRAY of OBJECTS (books) for each book.
2. CONSOLE.LOG
2.a book title 
2.b book author 
2.c string showing if read or not with a string showing i've read it or not read it.

*/

let books = [{
    title: "The Hobbit",
    author: "J.R Tolkin",
    read: true,
    },
    {
    title: "Harry Potter",
    author: 'J.K. Rowling',
    read: false,
    },
    {
    title: "Lord of the Rings",
    author: "J.R Tolkin",
    read: false,
    },
    {
    title: "return of the king",
    author: "J.R Tolkin",
    read: true,
    }
];

for ( let book = 0; book < books.length; book++) {
    if (books [book ].read == true){
        console.log(`The Book ${books[ book ].title}  by  ${books [ book ].author}` + " " + "you have read this book" )
    } else {
        console.log(`The Book ${books[ book ].title}  by  ${books [ book ].author}` + " " + "you haven't read this book" )
    }
}

/* task 2

Conditions: 

recipeTitle (a string)
servings (a number)
ingredients (an array of strings)
directions (a string)

Step 1
Create an object that holds the information of your favourite recipes.:

Step 2
list all recipes
create a loop to list all recipes with CONSOLE.LOG
*/

let recipe = [
    {
    recipeTitle: "Burger",
    servings: "3",
    ingredients: ["Bread Bun", "Meat", "Lettuce", "Ketchup", "Mustard", "Cheese"],
    directions: "1. Cut the bread bun into two. 2. place the meat on the bottom of the bread bun. 3. Place the cheese ontop of the meat. 4. Then the lettuce.  5. Add a dash of ketchup then mustard.  6. Finally put the top of the breadbun onto the Burger to finish", 
    },
    {
     recipeTitle: "Pizza",
    servings: "3",
    ingredients: ["Bread Base","Tomatoe Puree", "Ham", "Cheese", "Pineapple"],
    directions: "1. Spread the Puree onto the Bread Base. 2. Add the Cheese. 3. Then the Ham. 4. Finally add the Pinapple", 
    },
];

for ( let food = 0; food < recipe.length; food++) {
        console.log("Food: " + recipe[ food ].recipeTitle  + ". Servings: " + recipe[ food ].servings + "." + "\n" + "Ingredients: " + recipe[ food ].ingredients + "\n" + "Directions: " + recipe[ food ].directions ) 
    }


/* task 3

fixStart
create a function called fixStart, it should take a single argument, a string and return a version where all occurances of it's first character have been replaced with '*', except for the first character itself.  You can assume that the string is at least one character long.  For example:

fixStart ('babble'): ba**le
fixStart ('turtle'): tur*le

Steps:
Create a function that can take any word
set a let for the first letter in that word
Create a LOOP to iterate through the word, matching the first letter of the string
if found, console.log '*' instead of the found letter.
Console log the full word again but amended as per above

*/

function fixStart ( word ) {
    let firstWord = word[0];
    let newWord = "";

    for (loop = 0; loop < word.length; loop++) {
        if (word[loop] === firstWord) {
            newWord = "*"
            console.log(newWord)
        } else {
            console.log(newWord)
        }
    }
    console.log(word)
}

fixStart("babble")

