// Program that solves QM and ISDS questions

const userInput = document.getElementById("userInput");
const btnAdd = document.getElementById("btnAdd");
const resultDisplay = document.getElementById("resultDisplay");
const maxNumber = document.getElementById("maxNumber");
const minNumber = document.getElementById("minNumber");
const sumNumber = document.getElementById("sumNumber");
const averageNumber = document.getElementById("averageNumber");
const evenNumbers = document.getElementById("evenNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const medianNumber = document.getElementById("medianNumber");

let allNumbers = []; 

let max = 0;
let min = 0;
let average = 0;
let median = 0;

btnAdd.onclick = function() {
    allNumbers.sort();


    // Display All numbers that user entered
    let userValue = Number(userInput.value); 
    allNumbers.push(userValue); 
    resultDisplay.textContent = `All Numbers: ${allNumbers.join(', ')}`;
    

    // Max ->
    max = Math.max(...allNumbers);
    maxNumber.textContent = `Max: ${max}`;


    // Min ->
    min = Math.min(...allNumbers);
    minNumber.textContent = `Min: ${min}`;
    


    // Sum & Average & Mean ->
    let sum = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        sum = sum + allNumbers[i];
    }
    average = sum / allNumbers.length;
    sumNumber.textContent = `Sum: ${sum}`;
    averageNumber.textContent = `Average: ${average.toFixed(2)}`; 


    // Odd & Even -> 
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

    
    // Median ->
    if (allNumbers.length % 2 === 1) {
        let middleIndex = Math.floor(allNumbers.length / 2);
        median = allNumbers[middleIndex];
    }
    else {
        let middleIndex1 = allNumbers.length / 2 - 1;
        let middleIndex2 = allNumbers.length / 2;
        median = (allNumbers[middleIndex1] + allNumbers[middleIndex2]) / 2;
    }
    medianNumber.textContent = `Median: ${median}`;
}



