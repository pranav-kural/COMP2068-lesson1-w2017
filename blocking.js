//  refernce the fileSystem module that ships with node
var fs = require("fs");

//  drinks
console.log("DRINKS:");

var drinks = fs.readFileSync('drinks.txt' , 'UTF8');
console.log(drinks);

// food
console.log("\nFOOD:");
var food = fs.readFileSync('food.txt' , 'UTF8');
console.log(food);