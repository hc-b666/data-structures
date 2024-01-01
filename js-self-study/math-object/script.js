// Math Object

// Math object - built in object that has properties and methods for mathematical constants and functions

let z;

// Constants
z = Math.PI; // 3.141592653589793
z = Math.E; // 2.718281828459045

// round() - method that rounds a number to the nearest integer
z = Math.round(3.21); // 3
z = Math.round(3.56); // 4
z = Math.floor(3.23); // 3
z = Math.ceil(3.23); // 4
// trunc() - method that removes the decimal part of a number
z = Math.trunc(3.23); // 3

z = Math.pow(2, 3); // 8
z = Math.sqrt(144); // 12
z = Math.log(2); // 0.6931471805599453

// Trigonometry
z = Math.sin(45); // 0.8509035245341184
z = Math.cos(45); // 0.5253219888177297
z = Math.tan(45); // 1.6197751905438615

// Absolute value is the positive version of whatever number you pass in
z = Math.abs(-6); // 6 

// Sign returns the sign of a number, indicating whether the number is positive, negative or zero
z = Math.sign(-6); // -1
z = Math.sign(6); // 1
z = Math.sign(0); // 0

z = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9); // 1
z = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9); // 9



// Math Random
// Roll a die
let min = 1;
let max = 6;

let randomNumber = Math.floor(Math.random() * max) + min;

console.log(randomNumber);

