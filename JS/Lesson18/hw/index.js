"use strict";

const body = document.body;
const carOrder = document.getElementById("carOrder");

// Car Object Constructor
function Car(name, color, price)
{
    this.name = name;
    this.color = color;
    this.price = price;
}

// Car Object Array
let carObject = 
[
    {name: "Damas", price: {1: 3000, 2: 5000, 3: 7000}},
    {name: "Nexia", price: {1: 4000, 2: 6000, 3: 8000}},
    {name: "Jentra", price: {1: 10000, 2: 12000, 3: 14000}},
    {name: "Malibu", price: {1: 15000, 2: 17000, 3: 19000}},
    {name: "Prado", price: {1: 20000, 2: 22000, 3: 24000}},
];

// Create Select Options
function createSelectOptions(selectElement, options) 
{
    options.forEach(option => 
    {
        let optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.text = option.text;
        selectElement.append(optionElement);
    });
}

window.addEventListener("DOMContentLoaded", function ()
{
    carOrder.addEventListener("submit", function (event)
    {
        event.preventDefault();
        const carName = carOrder.carName.value;
        const carColor = carOrder.carColor.value;

        let selectedCar = carObject.find(car => car.name === carName);
        let options = Object.keys(selectedCar.price).map(key => 
        {
            return {value: key, text: `Option ${key}: ${selectedCar.price[key]}`};
        });

        let priceSelect = document.createElement("select");
        priceSelect.name = "carPrice";
        createSelectOptions(priceSelect, options);
        let btnOrder = document.createElement("button");
        btnOrder.textContent = "Order";
        
        let priceForm = document.createElement("form");
        priceForm.append(priceSelect, btnOrder);
        body.append(priceForm);
    
        priceForm.addEventListener("submit", function (event) 
        {
            event.preventDefault();
            const carPrice = priceForm.carPrice.value;
            const orderedCar = new Car(carName, carColor, selectedCar.price[carPrice]);

            let carInfo = document.createElement("p");
            carInfo.textContent = `You ordered a ${orderedCar.color} ${orderedCar.name} for ${orderedCar.price}.`;
            body.append(carInfo);
        });
    });
});