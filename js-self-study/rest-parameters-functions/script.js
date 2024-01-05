// Rest Parameters
// Rest parameters are used to create functions that accept any number of arguments.
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// The rest parameter syntax looks exactly like the spread operator syntax.

// Example 1
const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'pasta';

function refrigerator(...foods) { // ...foods is the rest parameter
    console.log(foods); // logs an array of all the arguments passed to the function
    console.log(...foods); // logs each argument passed to the function
}

refrigerator(food1, food2, food3, 'sushi'); // logs ['pizza', 'hamburger', 'pasta', 'sushi'] and 'pizza' 'hamburger' 'pasta' 'sushi'

// Example 2
function sum(...numbers) { // ...numbers is the rest parameter
    let result = 0; // initialize result to 0
    for (let number of numbers) { // iterate over the numbers array
        result += number; // add each number to result
    }
    return result; // return the result
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9); 
console.log(total); // 45

// Example 3
function combineStrings(...strings) { // ...strings is the rest parameter
    return strings.join(" "); // join the strings with a space
}

let fullName = combineStrings('John', 'Doe', 'Smith');
console.log(fullName);



