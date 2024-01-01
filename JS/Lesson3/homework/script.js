// Homework - 1
// let userInput = prompt("Enter number between 10 and 80");
let userInput = 45; 
userInput = Number(userInput);

if (userInput < 10 || userInput > 80) {
    console.log("Enter valid number between 10 and 80.");
    // alert("Enter valid number between 10 and 80.");
}
else if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log(`${userInput} is can be divided by  3 and 5.`);
    // alert(`${userInput} is can be divided by 3 and 5.`);
}
else {
    console.log(`${userInput} is cannot be divied by 3 and 5.`);
    // alert(`${userInput} is cannot be divided by 3 and 5.`);
}



// Homework - 2
console.log("\n\n");
// let userInput2 = prompt("Enter number between 10 and 80");
let userInput2 = 33; 
userInput2 = Number(userInput2);

if (userInput2 < 10 || userInput2 > 80) {
    console.log("Enter valid number between 10 or 80.");
    // alert("Enter valid number between 10 or 80.");
}
else if (userInput2 % 3 === 0 || userInput2 % 5 === 0) {
    console.log(`${userInput2} is can be divided by  3 or 5.`);
    // alert(`${userInput2} is can be divided by 3 or 5.`);
}
else {
    console.log(`${userInput2} is cannot be divied by 3 or 5.`);
    // alert(`${userInput2} is cannot be divided by 3 or 5.`);
}



// Homework - 3
console.log("\n\n");
// let userInput3 = prompt("Enter number between 100 and 150");
let userInput3 = 150;
userInput3 = Number(userInput3);

if (userInput3 < 100 || userInput3 > 150) {
    console.log("Enter valid number between 100 and 150.");
    // alert("Enter valid number between 100 and 150.");
}
else if (userInput3 % 10 === 0 && userInput3 % 15 === 0) {
    console.log(`${userInput3} is can be divided by 10 and 15.`);
    // alert(`${userInput3} is can be divided by 10 and 15.`);
}
else {
    console.log(`${userInput3} is cannot be divided by 10 and 15.`);
    // alert(`${userInput3} is cannot be divided by 10 and 15.`);
}



// Homework - 4
console.log("\n\n");
let userInput4 = 3;

for (m = 1; m <= userInput4; m++) {
    for (i = 1; i <= 10; i++) {
        let result = m * i;
        console.log(`${m} * ${i} = ${result}`);
    }
}



// Homework - 5
console.log("\n\n");
// let userInput5 = prompt("Enter number between 1 and 20");
let userInput5 = 5;
userInput5 = Number(userInput5);

if (userInput5 < 1 || userInput5 > 20) {
    console.log("Enter valid number between 1 and 20.");
    // alert("Enter valid number between 1 and 20.");
}
else {
    userInput5 = userInput5 ** 2;
    console.log(`${userInput5}`);
    // alert(`${userInput5}`);
}



// Homework - 6
// Ternary method example
console.log("\n\n");
let userInput6 = 64;

let result = userInput6 < 1 || userInput6 > 100 ? `Enter valid number between 1 and 100.`
    : userInput6 >= 86 ? `${userInput6} is A`
        : userInput6 >= 71 ? `${userInput6} is B`
            : userInput6 >= 56 ? `${userInput6} is C`
                : `${userInput6} is F`;

console.log(result);



// Homework - 7
console.log("\n\n");
let userInput7 = 34;

let result2 = userInput7 < 1 || userInput7 > 90 ? `Enter valid age!`
            : userInput7 >= 70 ? `${userInput7} Wow! you are so old`
            : userInput7 >= 50 ? `${userInput7} you are Grandfather/Grandmother`
            : userInput7 >= 22 ? `${userInput7} you are man/women`
            : userInput7 >= 16 ? `${userInput7} you gotto go university`
            : userInput7 >= 6 ? `${userInput7} you are teen/school time`
            : userInput7 >= 3 ? `${userInput7} you are boy/girl/kindergarten time`
            : `${userInput7} you are baby!`;

console.log(result2);             



// Homework - 8
console.log("\n\n");
let password = "name";
let isTrue2 = true;

while (isTrue2) {
    // let userAnswer = prompt("To enter the website answer to following question: \nWhat is yours, but mostly used by others?");
    userAnswer = "Name";         
    userAnswer = userAnswer.toLowerCase();

    if (userAnswer === password) {
        // alert("Correct! Welcome to website!");
        console.log("Correct! Welcome to website!"); 
        isTrue2 = false;
    } 
    else {
        // alert("Incorrect! Try again.");
        console.log("Incorrect! Try again."); 
    }
}



// Homework - 9 
console.log("\n\n");
// let userInput8 = prompt("Enter valid number between 0 and 1000");
let userInput8 = 10;
userInput8 = Number(userInput8);

if (userInput8 < 0 || userInput8 > 1000) {
    // alert("Enter valid number between 1 and 1000");
    console.log("Enter valid number between 1 and 1000");
}
else if (userInput8 % 2 === 0) {
    // alert(`${userInput8} is EVEN`);
    console.log(`${userInput8} is EVEN`);
}
else {
    // alert(`${userInput8} is ODD`);
    console.log(`${userInput8} is ODD`); 
}



// Homework - 10 
console.log("\n\n");
// let userInput91 = prompt("Enter the first number");
let userInput91 = 4;
userInput91 = Number(userInput91);
// let userInput92 = prompt("Enter the second number");
let userInput92 = 2;
userInput92 = Number(userInput92);
// let userInput93 = prompt("Enter the third number");
let userInput93 = 3;
userInput93 = Number(userInput93);
let max;

if (userInput91 > userInput92) {
    max = userInput91;
} 
else {
    max = userInput92;
} 

if (userInput93 > max) {
    max = userInput93;
}

// alert(`Max is ${max}`);
console.log(`Max is ${max}`);



// Homework - 11
console.log("\n\n");
let isTrue = true;
// let fullName = prompt("What is your FULL NAME?");
let fullName = "Muhammadbobur Abdukarimov";
fullName = fullName.toUpperCase();
let age;

while (isTrue) {
    // age = prompt("What is your age? (Only numbers)");
    age = "18";
    age = Number(age);
    if (!isNaN(age)) {
        isTrue = false;
    }
}

// let hometown = prompt("Where do you live? Enter your city or hometown.");
let hometown = "Tashkent";
hometown = hometown.toUpperCase();
// let isStudent = prompt("Where do you study?");
let isStudent = "WIUT";
isStudent = isStudent.toUpperCase();
// let hobby = prompt("What is your hobby?");
let hobby = "playing free fire";
hobby = hobby.toUpperCase();

// alert(`My full name is ${fullName}. I am ${age} years old. I live in ${hometown}. I study at ${isStudent}. My hobby is ${hobby}.`);
console.log(`My full name is ${fullName}. I am ${age} years old. I live in ${hometown}. I study at ${isStudent}. My hobby is ${hobby}.`);






