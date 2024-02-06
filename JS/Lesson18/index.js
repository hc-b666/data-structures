// February 6, 2024 
"use strict";

const body = document.body;
const form = document.querySelector("form");

let hotel = 
{
    name: "Hilton",
    prices: {1: "50$", 2: "100$", 3: "150$"},
    locationn: {street: "Afrosiyob", city: "Toshkent"}
}

let {name, prices, locationn} = hotel;

window.addEventListener("DOMContentLoaded", function ()
{
    form.addEventListener("submit", function (event) 
    {
        event.preventDefault();
        let h1 = document.createElement("h1");
        let startDate = new Date(form.startDate.value);
        let endDate = new Date(form.endDate.value);
        let totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
        let rooms = form.roomSelect.value;        
        let sum = parseFloat(prices[`${rooms}`]) * totalDays;

        h1.textContent = `You reserved for ${totalDays}days in ${name}. ${rooms} rooms. Total sum is ${sum}`;

        body.append(h1);
    });
});

// object
// object for in works
// number, boolean key -> string, array cannot be

// MAP OBJECTS
// let map = new Map([
// ["name", "bobur"], ["age", 19] 
// ])
// map.set(key, value)    add new key
// map.size
// map.has searches by key
// map.get    gets value 
// map.clear

// weakset   elements are objects not iterable
// garbage collection 

// weakmap   keys are objects types



// String.padStart(length, value)
// string.padEnd(length, value)



// ES ECHASCRIPT    5,6 grand change in js let const added

// this 

// arrow function always returns window 
// function d and e search parent 
// use declaration in objects 

// object {functionname(){}}

// Object.freeze(object)

// new object
// object.assign, object.create

// function car(){}
// function Car(){}




