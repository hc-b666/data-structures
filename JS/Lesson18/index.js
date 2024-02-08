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
// object can iterated with for item in object 
// number, boolean string can be used as a key in object but it will be converted to string, array and object cannot be

// MAP OBJECTS are iterable and array objects number boolean string can be used as a key 
// let map = new Map([ ["name", "bobur"], ["age", 19] ])
// map.set(key, value)    add new key
// map.size  returns size of map
// map.has searches by key 
// map.get(key)  returns value
// map.clear   clears the map object

// difference between weakset and set is that weakset is not iterable and it does not have size property
// garbage collection is done in weakset

// difference between weakmap and map is that weakmap is not iterable and it does not have size property
// garbage collection is done in weakmap


// String.padStart(length, value)
// string.padEnd(length, value)



// ES - ECHASCRIPT    
// ES 6 there was update with variables

// this = window. always returns window object 

// arrow function always returns window 
// function d and e search parent. to solve this problem use use strict
// use declaration function in objects 

// object {name: "john", functionname(){}}

// Object.freeze(object) // cannot be changed

// new Object // creates new object
// Object.assign // copies object 
// Object.create // creates new object with prototype

// constructors are used to create new objects with parameters
// function Car(){}
// to create constructor function use capital letter