// Javascript --------------------------------------------------------------------------------------------
// Lesson 1 (21.12.2023)



// Console.log() - is a function that prints the value of the variable in the console
// console.warn() - is a function that prints the value of the variable in the console with a warning
// alert() - is a function that prints the value of the variable in the browser window



// Variables - is a container that stores data values --------------------------------------------------------------------------------------------
// var - is a keyword that declares a variable
var x = 1;
// let - is a keyword that declares a variable
let y = 2;
// const - is a keyword that declares a variable
const w = 3;



// Differences between var, let and const:
// 1. var has a global scope
// 2. let has a block scope
// 3. const has a block scope
// Global Scope is the scope outside the function and block scope is the scope inside the function
// 4. var can be redeclared
var a = 1;
var a = 2;
// 5. let can not be redeclared 
let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared
// 6. const can not be redeclared
const c = 1;
// const c = 2; // SyntaxError: Identifier 'c' has already been declared
// 7. var can be updated 
var d = 1;
d = 2;
// 8. let can be updated 
let e = 1;
e = 2;
// 9. const can not be updated
const f = 1;
// f = 2; // TypeError: Assignment to constant variable.
// 10. var is hoisted 
// 11. let is not hoisted 
// 12. const is not hoisted



// Rules of declaring variables: --------------------------------------------------------------------------------------------
// 1. The name must start with a letter, underscore or dollar sign. The name can contain letters, numbers, underscores and dollar signs
var userName = "Bobur";
var _userName = "Bobur";
var $userName = "Bobur";
var userName1 = "Bobur";
// 2. The name is case sensitive
var userSurname = "Abdukarimov";
var usersurname = "Abdukarimov";
// 3. The name must not contain spaces
// var user Name = "Bobur"; // SyntaxError: Unexpected identifier
// 4. The name must not contain reserved words
// var var = "Bobur"; // SyntaxError: Unexpected token 'var'
// 5. The name should be descriptive
var clientName = "Bobur";
var clientSurname = "Abdukarimov";
var clientAge = 20;
// 6. The name should be written in camelCase
var moduleLeaderName = "Bobur";



// Data Types: --------------------------------------------------------------------------------------------
// 1. String - is a sequence of characters 
var text = "Hello World!";
// 2. Number - is a number 
var number = 123;
// 3. Boolean - is a true/false value 
var isTrue = true;
var isFalse = false;
// 4. Null - is an empty value 
var empty = null;
// 5. Undefined - is a variable that has not been assigned a value 
var notDefined;
// 6. Object - is a collection of properties 
var user = {
    name: "Bobur",
    surname: "Abdukarimov",
    age: 20
}
// Changing the value of the object
// Dot notation
user.name = "Boburjon";
// Bracket notation
user["age"] = 18;
console.log(user);
// 7. Symbol - is a unique value 
var symbol = Symbol();
// 8. BigInt - is a large number 
var bigInt = 1234567890123456789012345678901234567890n;



// Operators: --------------------------------------------------------------------------------------------
// 1. Assignment Operator - is a = b
// 2. Arithmetic Operators - is a + b, a - b, a * b, a / b, a % b, a ** b
// 3. Increment Operator - is a++, ++a
// 4. Decrement Operator - is a--, --a
// 5. Comparison Operators - is a == b, a === b, a != b, a !== b, a > b, a < b, a >= b, a <= b
// 6. Logical Operators - is a && b, a || b, !a
// 7. String Operators - is a + b
// 8. Conditional (Ternary) Operator - is a ? b : c
// 9. Comma Operator - is a, b
// 10. Unary Operators - is delete, typeof, void
// 11. Relational Operators - is in, instanceof
// 12. Bitwise Operators - is a & b, a | b, a ^ b, a << b, a >> b, a >>> b






// Arrays: --------------------------------------------------------------------------------------------
// Arrays are used to store multiple values in a single variable
// 1. Creating an array
var fruits = ["Apple", "Banana", "Orange", "Mango"];
// 2. Changing the value of the array
fruits[2] = "Raspberry";
// 3. Adding a new value to the array
fruits[4] = "Strawberry";
console.log(fruits);
console.log(fruits.length);
// 4. Accessing the last element of the array
console.log(fruits[fruits.length - 1]);
// 5. Accessing the first element of the array
console.log(fruits[0]);
// 6. Accessing the middle element of the array
console.log(fruits[Math.floor(fruits.length / 2)]);











