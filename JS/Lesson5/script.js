// Javascript Lesson 5 - 06.01.2023 

// RETURN KEYWORD ------------------------------------------------------------
// In JavaScript, the return keyword is used in a function to specify the value 
// that should be output by that function. When the JavaScript interpreter encounters a return statement, 
// it stops executing the function and returns the specified value.


// Example function without return 
// it console logs the value but it does not return the value of function
function subtract(a, b) 
{
    let difference = a - b;
    console.log(difference); // 2
}

subtract(3, 1);
console.log(typeof subtract(2, 3)); // undefined

// Example function with return
// it returns the value of function
function add(a = 1, b = 2) 
{
    let sum = a + b;
    return sum; // 3
}

console.log(add(2, 3));
console.log(add(), typeof add()); // 3, number


// function stops running when it hits a return statement
function multiply(a, b) 
{
    let product = a * b;
    return product;
    console.log(product); // this line will not run
}
// ------------------------------------------------------------------------------------------



// HOISTING ------------------------------------------------------------------------------------------
// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their containing scope during the compile phase, 
// before the code has been executed. It's important to note that only the declarations are hoisted, 
// not initializations.

// var and function declarations are hoisted
// let and const are not hoisted, function expressions(arrow functions) are not hoisted

// Variables
console.log(varHoisted); // undefined
var varHoisted = 'var hoisted';

// console.log(letNotHoisted); // ReferenceError: Cannot access 'letNotHoisted' before initialization
let letNotHoisted = 'let not hoisted';

// Functions
functionDeclarationHoisted(); // function declaration hoisted

function functionDeclarationHoisted()
{
    console.log('function declaration hoisted');
}

// functionExpressionNotHoisted(); // TypeError: functionExpressionNotHoisted is not a function

let functionExpressionNotHoisted = function () 
{
    console.log('function expression not hoisted');
}


// WINDOW OBJECT
console.log(window); // Shows the window object


// TEMPORAL DEAD ZONE (TDZ)
console.log(i);
console.log("hey");
var i = 1;

// console.log(j);
console.log("hey"); // temporal dead zone
let j = 1;
// ------------------------------------------------------------------------------------------



// SCOPES ------------------------------------------------------------------------------------------
//In JavaScript, a scope is a region of the code where a variable can be accessed. There are three types of scopes:
// 1. Global Scope
// Variables declared outside any function or block are in the global scope. 
// They can be accessed from any part of the code, including functions and blocks.
var globalVar = 1;
{
    var globalVar = 2;
    console.log(globalVar); // Var can be accessed from anywhere in global and block scope
}
console.log(globalVar);

let globalLet = 1;
{
    let globalLet = 2;
    console.log(globalLet);// let and const can be accessed only in block scope
}
console.log(globalLet);


console.log("\n");
// 2. Block Scope
// Variables declared within a block (like if, for, while, switch, 
// or any set of {}) using let or const are in the block scope. 
// They can only be accessed within the block they are declared.

var blockVar = 1;
if (true) 
{
    var blockVar = 2;
    console.log(blockVar); // Var can be accessed from anywhere in global and block scope
}
console.log(blockVar);

let blockLet = 1;
if (true) 
{
    let blockLet = 2;
    console.log(blockLet);// let and const can be accessed only in block scope
}
console.log(blockLet);


console.log("\n");
// 3. Function Scope
// Variables declared within a function using var are in the function scope. 
// They can only be accessed within the function they are declared.

var functionVar = 1;
function functionScopeVar()
{
    var functionVar = 2;
    console.log(functionVar); // var can not access from outside of function
}
functionScopeVar();
console.log(functionVar);

let functionLet = 1;
function functionScopeLet() 
{
    let functionLet = 2;
    console.log(functionLet); // let and const can not access from outside of function
}
functionScopeLet();
console.log(functionLet);
// ------------------------------------------------------------------------------------------



// PRIMITIVE vs NON-PRIMITIVE ------------------------------------------------------------
// primitive data types: string, number, boolean, null, undefined, symbol, bigint
// non-primitive data types: object, array, function



// OBJECT ------------------------------------------------------------------------------------------
// In JavaScript, an object is a non-primitive data type that allows you to store multiple values as a single entity.
// It's a collection of properties, where each property is an association between a key (or name) and a value. 
// A property's value can be a function, in which case the property is known as a method.
let user = 
{
    userName: "John",
    userSurname: "Doe",
    age: 30,
    isAdmin: true,
}
console.log(user, typeof user);

// console logging object's properties
console.log(user.userName);
console.log(user.age);
console.log(user.isStudent);

// adding new property to object
user.isMarried = false;
console.log(user);

// deleting property from object
delete user.isAdmin;
console.log(user);

// editing property of object
user.age = 25;
console.log(user);


