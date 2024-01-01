



// Loops: --------------------------------------------------------------------------------------------
// 1. For loop
// for (statement 1; statement 2; statement 3) { code to be executed }
// Statement 1 - is executed before the loop starts
// Statement 2 - defines the condition for running the loop
// Statement 3 - is executed each time after the loop has been executed
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// 2. While loop
// while (condition) { code to be executed }
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// 3. Do while loop
// do { code to be executed } while (condition);
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 10);





// for (let i = 100; i <= 200; i++) {
//     if (i % 15 === 0) {
//         console.log(i);
//     }
// }

// let j = 12;
// while (j <= 25) {
//     console.log(j);
//     j++;
// }





// break 
// for (i = 46; i < 100; i++) {
//     console.log(i);
//     if (i % 3 === 0 && i % 5 === 0) {
//         break;
//     }
// }

// console.log("\n");

// continue
// for (j = 200; j < 240; j++) {
//     if (j % 10 === 0) {
//         continue;
//     }
//     console.log(j);
// }





// Functions: --------------------------------------------------------------------------------------------
// 1. Creating a function
function myFunction() {
    console.log("Hello World!");
}
myFunction();


// 2. Creating a function with parameters
function myFunction2(name, surname) {
    console.log("Hello " + name + " " + surname);
}
myFunction2("Bobur", "Abdukarimov");


// 3. Creating a function with parameters and return
function addFunction(a, b) {
    return a + b;
}
console.log(addFunction(2, 3));


// 4. Creating a function with default parameters
function myFunction3(name = "Bobur", surname = "Abdukarimov") {
    console.log("Hello " + name + " " + surname);
}
myFunction3();


// 5. Creating a function with rest parameters
function myFunction4(...args) {
    console.log(args);
}
myFunction4("Bobur", "Abdukarimov", 20);


// 6. Creating a function with rest parameters and return
function myFunction5(...args) {
    return args;
}
console.log(myFunction5("Bobur", "Abdukarimov", 20));


// 7. Creating an arrow function
const myFunction6 = () => {
    console.log("Hello World!");
}
myFunction6();


// 8. Creating an arrow function with parameters
const myFunction7 = (name, surname) => {
    console.log("Hello " + name + " " + surname);
}
myFunction7("Bobur", "Abdukarimov");





// function declaration
// function expression
// arrow function
// function parameters and arguments

//return



