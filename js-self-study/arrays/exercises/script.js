// Exercises with ARRAYS

// Exercise 1: User enters numbers and sumbits and all elements will be displayed
const userInput = document.getElementById("userInput");
const btnAdd = document.getElementById("btnAdd");
const resultDisplay = document.getElementById("resultDisplay");
const maxNumber = document.getElementById("maxNumber");
const averageNumber = document.getElementById("averageNumber");
let allNumbers = []; // assign new array[]
let max = 0;
let average = 0;

btnAdd.onclick = function() {
    let userValue = Number(userInput.value); // assign userInput to new variable userValue
    allNumbers.push(userValue); // push it to array
    resultDisplay.textContent = `All Numbers: ${allNumbers.join(', ')}`;
    
    // Exercise 2: Show Max number
    for (let i = 0; i < allNumbers.length; i++) {
        if (allNumbers[i] > max) {
            max = allNumbers[i];
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
}



