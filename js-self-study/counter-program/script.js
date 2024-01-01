// Counter Program

const incrementButton = document.getElementById("increment-btn");
const resetButton = document.getElementById("reset-btn");
const decrementButton = document.getElementById("decrement-btn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

// Increment Function
incrementButton.onclick = function() {
    count++;
    counterLabel.textContent = count;
}

// Decrement Function
decrementButton.onclick = function() {
    count--;
    counterLabel.textContent = count;
}

// Reset Function
resetButton.onclick = function() {
    count = 0;
    counterLabel.textContent = count;
}








