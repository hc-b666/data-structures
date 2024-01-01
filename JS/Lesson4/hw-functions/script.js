// EXERCISES WITH FUNCTIONS

// Exercise 1: Sum of two numbers - Declaration Function
function sumOfTwoNumbers(a = 1, b = 2) {
	let sum = a + b;
	return sum;
}
let sumResult = sumOfTwoNumbers(6, 8);
console.log(sumResult);

// Exercise 2: Factorial Calculator - Expression Function
let factorialCalculator = function (a = 5) {
	let factorial = 1;
	for (let i = 1; i <= a; i++) {
		factorial = factorial * i;
	}
	return factorial;
}
let factorialResult = factorialCalculator(5);
console.log(factorialResult);

// Exercise 3: Checking whether the word is Palindrome - Expression Function
let palindromeChecker = function (userInput = "mam") {
	userInput = userInput.replaceAll(" ", "").toLowerCase();
    let reversedInput = userInput.split("").reverse().join("");

	if (userInput === reversedInput) {
        console.log(`${userInput} is a palindrome!`);
	}
    else {
        console.log(`${userInput} is NOT a palindrome!`);
    }
}
palindromeChecker("Taco cat");

// Exercise 4: Even or Odd - Arrow Function
let evenOddChecker = (a = 1) => {
    let evenOdd;
    if (a % 2 === 0) {
        evenOdd = `${a} is EVEN`;
    }
    else {
        evenOdd = `${a} is ODD`;
    }
    return evenOdd;
}
let evenOddResult = evenOddChecker(12);
console.log(evenOddResult);

// Exercise 5: Min and Max - Arrow Function
let minMaxCalculator = (a = 1, b = 2, c = 3) => {
    let max;
    let min;
    if (a > b) {
        min = b;
        max = a;
    }
    else {
        min = a;
        max = b;
    }

    if (c > max) {
        max = c;
    } 
    else {
        if (min > c) {
            min = c;
        }
    }
    return [min, max];
}

let [minResult, maxResult] = minMaxCalculator();
console.log(minResult, maxResult);

// Exercise 6: Fahrenheit to Celcius - Expression Function
let celciusToFahrenheit = function (celcius = 1) {
    let fahrenheit = celcius * (9 / 5) + 32;
    return fahrenheit;
}

let celciusToFahrenheitResult = celciusToFahrenheit(100);
console.log(`${celciusToFahrenheitResult} Fahrenheit`);

