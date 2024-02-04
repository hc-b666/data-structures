// February 4, 2024
"use strict";

const qs = tag => document.querySelector(tag);
const getID = tag => document.getElementById(tag);

const btnChooseRandomNumber = getID("btnChooseRandomNumber");
const userGuess = getID("userGuess");
const btnCheckUserGuess = getID("btnCheckUserGuess");
const displayHint = qs(".displayHint");

let min = 1;
let max = 100;
let randomNum;
let attempt = 1;

function randomNumber () 
{
    randomNum = Math.round(Math.random() * (max - min) + min);
    btnChooseRandomNumber.textContent = "Number is Chosen";
}

function checkUserGuess ()
{
    let userGuessValue = +userGuess.value;

    if (userGuessValue < 1 || userGuessValue > 100) 
    {
        alert("The number should be around 1 and 100. Try Again!");
    }
    else 
    {
        if (userGuessValue === randomNum)
        {
            alert(`Correct! You guessed it with ${attempt} attempts!`);
            attempt = 1;
            btnChooseRandomNumber.textContent = "Choose Random Number";
            randomNum = null;
            displayHint.textContent = "";
        }
        else 
        {
            displayHint.textContent = userGuessValue < randomNum ? `Random Number is higher than ${userGuessValue}` : `Random Number is less than ${userGuessValue}`;
            attempt++;
        }
    }

    userGuess.value = "";
}

window.addEventListener("DOMContentLoaded", function ()
{
    btnChooseRandomNumber.addEventListener("click", randomNumber);
    btnCheckUserGuess.addEventListener("click", checkUserGuess);
});