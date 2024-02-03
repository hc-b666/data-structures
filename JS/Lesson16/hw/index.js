"use strict";

const qs = tag => document.querySelector(tag);
const getID = tag => document.getElementById(tag);

const inputLong = getID("inputLong");
const inputChange = getID("inputChange");
const inputChanged = getID("inputChanged");
const btnChange = getID("btnChange");
const btnUpperCase = getID("btnUpperCase");
const btnLowerCase = getID("btnLowerCase");
const display = getID("display");

const inputEmail = getID("inputEmail");
const inputPassword = getID("inputPassword");
const btnEnter = getID("btnEnter");

window.addEventListener("DOMContentLoaded", function ()
{
    btnChange.addEventListener("click", function ()
    {
        let inputLongValue = inputLong.value;
        let inputChangeValue = inputChange.value;
        let inputChangedValue = inputChanged.value;

        while (inputLongValue.includes(inputChangeValue))
        {
            inputLongValue = inputLongValue.replace(inputChangeValue, inputChangedValue);
        }
        display.textContent = `Result: ${inputLongValue}`;
    });

    btnUpperCase.addEventListener("click", function ()
    {
        let inputLongValue = inputLong.value;
        display.textContent = `Result: ${inputLongValue.toUpperCase()}`;
    });

    btnLowerCase.addEventListener("click", function ()
    {
        let inputLongValue = inputLong.value;
        display.textContent = `Result: ${inputLongValue.toLowerCase()}`;
    });

    btnEnter.addEventListener("click", function ()
    {
        let inputEmailValue = inputEmail.value;
        let inputPasswordValue = inputPassword.value;

        if (inputEmailValue.includes("@") && inputEmailValue.includes(".") && inputPasswordValue.length >= 8)
        {
            display.textContent = `Welcome ${inputEmailValue}`;
        }
        else
        {
            display.textContent = `Invalid email or password`;
        }
    });
});
