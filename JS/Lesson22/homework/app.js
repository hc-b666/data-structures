import Products from "./products.js";
import { ui } from "./functions.js";

const body = document.body;
const root = document.getElementById("root");
const foods = document.getElementById("foods");

window.addEventListener("DOMContentLoaded", function ()
{   
    ui(Products, foods, body, root);
});