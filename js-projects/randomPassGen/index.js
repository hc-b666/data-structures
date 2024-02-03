// Random Password Generator 
// February 3, 2024, 10:12 a.m.
"use strict";

const body = document.body;
const charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/", "|", "`", "~"];
const createEl = tag => document.createElement(tag);

let title = createEl("h1");
title.textContent = "Random Password Generator";

let passDisplay = createEl("span");
let h2 = createEl("h2");
h2.textContent = `Random Password: `;
let btnGenerate = createEl("button");
btnGenerate.textContent = "Generate Random Password";
let div = createEl("div");
div.append(h2, btnGenerate);

body.append(title, div);

function generateRandomPassword ()
{
    let password = "";
    for (let i = 0; i < 12; i++)
    {
        let random = charArray[Math.floor(Math.random() * charArray.length)];
        password += random;
    }
    passDisplay.textContent = password;
    h2.append(passDisplay);
}

window.addEventListener("DOMContentLoaded", function ()
{
    btnGenerate.addEventListener("click", generateRandomPassword);
});
