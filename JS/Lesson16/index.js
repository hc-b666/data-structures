// February 1, 2024
"use strict";

const qs = tag => document.querySelector(tag);
const getID = tag => document.getElementById(tag);

const inpProduct = getID("inpProduct");   
const inpWeight = getID("inpWeight");   
const inpPrice = getID("inpPrice");   
const btnEnter = getID("btnEnter");   
const btnTotal = getID("btnTotal");
const displayTotal = getID("displayTotal");
const tbody = getID("tbody");

let productArr = [];
let idp = 0;

function mapProduct ()
{
    tbody.innerHTML = "";
    productArr.map(item => 
    {
        let tr = document.createElement("tr");

        let tdnumber = document.createElement("td");
        tdnumber.textContent = item.idd;
        let tdtitle = document.createElement("td");
        tdtitle.textContent = item.nameP;
        let tdweight = document.createElement("td");
        tdweight.textContent = item.pw;
        let tdprice = document.createElement("td");
        tdprice.textContent = item.pp;
        let tdtotal = document.createElement("td");
        tdtotal.textContent = item.pw * item.pp;

        tr.append(tdnumber, tdtitle, tdweight, tdprice, tdtotal);
        tbody.append(tr);
    });
}

function addProduct ()
{
    let product = inpProduct.value;
    let weight = +inpWeight.value;
    let price = +inpPrice.value;

    idp++;
    productArr.push( {idd: idp, nameP: product, pw: weight, pp: price, id: idp} );
    mapProduct();
}

function totalCalc ()
{
    let total = 0;

    for (let i = 0; i < productArr.length; i++) 
    {
        total = total + productArr[i].pw * productArr[i].pp;
    }

    displayTotal.textContent = total;
}

window.addEventListener("DOMContentLoaded", function ()
{
    btnEnter.addEventListener("click", addProduct);
    btnTotal.addEventListener("click", totalCalc);
});

// STRING METHODS

// string.length
// string[index]
// string.indexOf("char") no char = -1
// string.indexOf("") = 0
// string.lastIndexOf("char")
// string.lastIndexOf("") = lastindex
// string.charAt(index)

// string.includes("char") boolean
// string.toUpperCase()
// string.toLowerCase()
// string.split("") by char creates array
// string.split(" ") by word creates array
// string.trim()

// string.slice(0, 1) -works
// string.substring(0, 1) -dont work
// string.substr(0, 1)  kinda works like splice in array

// string.concat(string) connects two strings
// string.endsWith() boolean
// string.startsWith() boolean

// string.replace("1", "2") the first matching condition changes
// string.replaceAll("1", "2") changes all matching conditions
// string.replace(/1/g, "2") changes all matching conditions
// string.replace(/l/gi, "t") change insensetive conditions as well like l and L
// g = global i = insensetive

// MATH METHODS | OBJECTS

// Number(number)
// +number
// parseInt(number) takes whole number and dont take string if the number comes first
// parseFloat(number) takes floating point as well and dont take string if the number comes first


