//  refernce the fileSystem module that ships with node
var fs = require("fs");

//  drinks
fs.readFile('drinks.txt' , 'UTF8', function(err, drinks) {
    console.log(drinks);

    // food heading
    console.log("\nFOOD:");
});

// drink heading
console.log("DRINKS:");

// food
fs.readFile('food.txt' , 'UTF8', function(err, food) {
    console.log(food);
});