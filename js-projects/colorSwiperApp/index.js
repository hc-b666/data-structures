// February 2, 2024, 23:42
"use strict";

const body = document.body;
const createEl = tag => document.createElement(tag);

const hexColorArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// HTML 
let h1 = createEl("h1");
h1.textContent = "Random Hex Color Swiper";

let h3 = createEl("h3");
h3.textContent = `Color : `;
let span = createEl("span");
let button = createEl("button");
button.textContent = "Choose Color";
let container = createEl("div");
container.append(h3, button);

body.append(h1, container);

// Random Hex Color
function randomHexColor ()
{
    let hex = `#`;
    for (let i = 0; i < 6; i++)
    {
        let randomHex = hexColorArray[Math.floor(Math.random() * hexColorArray.length)];
        hex = hex + randomHex;
    }
    span.textContent = `${hex}`;
    h3.append(span);
    body.style.backgroundColor = `${hex}`;
}

window.addEventListener("DOMContentLoaded", function ()
{
    button.addEventListener("click", randomHexColor);
});