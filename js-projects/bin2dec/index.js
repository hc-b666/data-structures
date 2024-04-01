"use strict";

import { baseToDecimalConverter } from "./functions.js";

const getId = id => document.getElementById(id);

const type = getId("type");
const input = getId("input");
const btnConvert = getId("btnConvert");
const output = getId("output");

let base = 2;

window.addEventListener("DOMContentLoaded", () => {
    
    type.addEventListener("change", () => {
        switch(type.value) {
            case "binary": {
                base = 2;
            };
            case "decimal": {
                base = 10;
            };
            case "hex": {
                base = 16;
            };
            default: return;
        }
    });

    btnConvert.addEventListener("click", () => {
        let inputValue = input.value.toUpperCase();
        let outputResult = baseToDecimalConverter(inputValue, base);

        output.textContent = outputResult;
    });
});
