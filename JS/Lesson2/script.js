// Javascript Lesson 2
`user strict`
// `user strict` - in strict mode, you can not, for example, use undeclared variables



numberNumber = 1;
console.log(numberNumber,typeof numberNumber); // 1 "number"
// typeof - returns the type of the variable



// Template Literals `${variable}`
let name = "John";
let age = 25;   
console.log(`My name is ${name}. I am ${age} years old.`); // My name is John. I am 25 years old.



// Coersion
// Coersion is the process of converting one type to another
// number + string = string
// string + number = string



// NaN - not a number
let num = "Hello" * 5;
console.log(num); // NaN  




// Conversion [string -> number]
let stringNumber = "24";
// Number(string-variable) 
console.log(Number(stringNumber)); // 24 number
// +string-variable
console.log(+stringNumber); // 24 number
// parseInt(string-variable)
console.log(parseInt(stringNumber)); // 24 number
// parseFloat(string-variable)
console.log(parseFloat(stringNumber)); // 24 number



// Conversion [number -> string]
// String(number-variable)
let numberString = 56;
console.log(String(numberString)); // "56" string
// number-variable.toString()
console.log(numberString.toString()); // "56" string



//  Exercises
let i = "24";
let j = "6";
console.log(i + j); // 246
console.log(i / j); // 4
console.log(i - j); // 18

let m = 15;
let n = 5;
let o = 3;
console.log(m + n + o); // 23
console.log(m.toString() + n.toString() + o.toString()); // 1553
console.log(m.toString() + n.toString() - o); // 152
console.log(m / n + o.toString()); // 33



// Operators
// Operands - the values that operators are applied to 

// Math Operators
let a = 5;
let b = 10;
console.log(a + b); // 15   "+" - addition
console.log(a - b); // -5   "-" - subtraction
console.log(a * b); // 50   "*" - multiplication
console.log(a / b); // 0.5   "/" - division
console.log(a % b); // 5   "%" - remainder
console.log(a ** b); // 9765625   "**" - exponentiation

a++; // a = a + 1 
++a; // a = a + 1 
// Difference between a++ and ++a
// a++ - postincrement
// ++a - preincrement
a--; // a = a - 1
--a; // a = a - 1
// Difference between a-- and --a
// a-- - postdecrement
// --a - predecrement



// Comparison Operators
let x = 5;
let y = 10;
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
console.log(x == y); // false
console.log(x === y); // false
console.log(x != y); // true
console.log(x !== y); // true

// Difference between == and ===
// == - compares the values
// === - compares the values and the types

// Meaning of != and !==
// != - not equal
// !== - not equal value or not equal type



// Logic Operators
let z = 5;
let k = 10;
// && - and
console.log(z > 0 && k > 0); // true
console.log(z > 0 && k < 0); // false
console.log(z < 0 && k > 0); // false
console.log(z < 0 && k < 0); // false
// || - or
console.log(z > 0 || k > 0); // true
console.log(z > 0 || k < 0); // true
console.log(z < 0 || k > 0); // true
console.log(z < 0 || k < 0); // false



// Operator Precedence
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication *, Division /, Remainder %
// 4. Addition +, Subtraction -



// Falsy - false, 0, "", null, undefined, NaN
// Truthy - true, 1, " ", "0", [], {}, function() {}





// Showing variables in the web page
let userName = "Muhammadbobur";
let userAge = 18;
let userIsStudent = true;
document.getElementById("userName").textContent = `My name is ${userName}.`;
document.getElementById("age").textContent = `I am ${userAge} years old.`;
document.getElementById("isStudent").textContent = `I am a student at WIUT: ${userIsStudent}.`;

// document - the document object represents your web page
// getElementById("id") - returns the element that has the ID attribute with the specified value
// textContent - sets or returns the text content of the specified node, and all its descendants



