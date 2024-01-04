// Exercises with ARRAYS

const userInput = document.getElementById("userInput");
const btnAdd = document.getElementById("btnAdd");
const resultDisplay = document.getElementById("resultDisplay");
const maxNumber = document.getElementById("maxNumber");
const averageNumber = document.getElementById("averageNumber");
const evenNumbers = document.getElementById("evenNumbers");
const oddNumbers = document.getElementById("oddNumbers");

let allNumbers = []; // assign new array[]

let max = 0;
let average = 0;

btnAdd.onclick = function() {
    // Exercise 1: User enters numbers and sumbits and all elements will be displayed
    let userValue = Number(userInput.value); // assign userInput to new variable userValue
    allNumbers.push(userValue); // push it to array
    resultDisplay.textContent = `All Numbers: ${allNumbers.join(', ')}`;
    
    // Exercise 2: Show Max number
    for (let number of allNumbers) {
        if (number > max) {
            max = number;
            maxNumber.textContent = `Max is ${max}`;
        }
    }
    
    // Exercise 3: Show Average
    let sum = 0; // reset sum each time button clicked
    for (let i = 0; i < allNumbers.length; i++) {
        sum = sum + allNumbers[i];
    }
    average = sum / allNumbers.length;
    averageNumber.textContent = `Average is ${average.toFixed(2)}`; 

    // Exercise 4: Even / Odd Numbers
    let evenNumbersArray = [];
    let oddNumbersArray = [];
    for (let number of allNumbers) {
        if (number % 2 === 0) {
            evenNumbersArray.push(number);
            evenNumbers.textContent = `Even Numbers: ${evenNumbersArray.join(', ')}`;
        }
        else {
            oddNumbersArray.push(number);
            oddNumbers.textContent = `Odd Numbers: ${oddNumbersArray.join(', ')}`;
        }
    }
}



