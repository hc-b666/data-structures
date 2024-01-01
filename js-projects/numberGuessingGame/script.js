let randomNumber;
let attempts = 0;
const min = 1;
const max = 100;
const rollButton = document.getElementById("rollButton");
const userGuess = document.getElementById("userGuess");
const howClose = document.getElementById("howClose");
const result = document.getElementById("result");

// Choosing a Random number
rollButton.onclick = function() {
    randomNumber = Math.floor(Math.random() * max) + min;
    rollButton.textContent = "Number is chosen";
    howClose.textContent = "";
    attempts = 0;
}

// Checking whether the guess is correct
userGuess.onclick = function() {
    // if random number is undefined
    if (randomNumber == undefined) {
        howClose.textContent = "Choose a number!";
    }
    // if userinput is less than 1 or higher than 100
    else if (min > document.getElementById("userInput").value || max < document.getElementById("userInput").value) {
        howClose.textContent = `Choose a number between ${min} and ${max}.`
    }
    else {
        // Number of attempts
        attempts++;
        // Checking
        console.log(randomNumber);
        console.log(document.getElementById("userInput").value);
        // Correct
        if (document.getElementById("userInput").value == randomNumber) {
            result.textContent = `You are CORRECT! You guessed it in ${attempts} attempts`;
            rollButton.textContent = "Choose a number";
            howClose.textContent = "";
        }
        // Incorrect
        else {
            result.textContent = "You are wrong";
            // Giving a hint to user
            if (document.getElementById("userInput").value < randomNumber) {
                howClose.textContent = `Higher! Random Number is higher than ${document.getElementById("userInput").value}.`;
            }
            else {
                howClose.textContent = `A bit less! Random Number is less than ${document.getElementById("userInput").value}.`;
            }
        }
    }
}



