// Currency Convertor

const userInput = document.getElementById("userInput");
const dollarToSom = document.getElementById("dollarToSom");
const somToDollar = document.getElementById("somToDollar");
const resultDisplay = document.getElementById("resultDisplay");
let userInputCurrency;

function convert() {
    userInputCurrency = Number(userInput.value);

    if (dollarToSom.checked) {
        userInputCurrency = userInputCurrency * 12326.74;
        resultDisplay.textContent = `Result: ${Number(userInput.value)} dollar is ${userInputCurrency.toFixed(2)} som`;
    }

    else if (somToDollar.checked) {
        userInputCurrency = userInputCurrency / 12326.74;
        resultDisplay.textContent = `Result: ${Number(userInput.value)}som  is ${userInputCurrency.toFixed(2)} dollar`;    
    }
    else {
        resultDisplay.textContent = "Choose currency";
    }
}


