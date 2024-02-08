"use strict";

const createEl = tag => document.createElement(tag);

const body = document.body;
const carOrder = document.getElementById("carOrder");

let carInfo;

// Car Object Constructor
function Car(name, color, price)
{
    this.name = name;
    this.color = color;
    this.currentColor = this.color[Object.keys(this.color)[0]];
    this.price = price;
}

Car.prototype.changeColor = function (newColor)
{
    this.currentColor = this.color[newColor];
}

// Car Object Array
let carObject = 
[
    {name: "Damas", price: {1: 3000, 2: 5000, 3: 7000}, color: {black: "black", white: "white", grey: "grey", blue: "blue", red: "red"}},
    {name: "Nexia", price: {1: 4000, 2: 6000, 3: 8000}, color: {black: "black", white: "white", grey: "grey", blue: "blue", red: "red"}},
    {name: "Jentra", price: {1: 10000, 2: 12000, 3: 14000}, color: {black: "black", white: "white", grey: "grey", blue: "blue", red: "red"}},
    {name: "Malibu", price: {1: 15000, 2: 17000, 3: 19000}, color: {black: "black", white: "white", grey: "grey", blue: "blue", red: "red"}},
    {name: "Prado", price: {1: 20000, 2: 22000, 3: 24000}, color: {black: "black", white: "white", grey: "grey", blue: "blue", red: "red"}} 
];

// Create Select Options
function createSelectOptions(selectElement, options) 
{
    options.forEach(option => 
    {
        let optionElement = createEl("option");
        optionElement.value = option.value;
        optionElement.text = option.text;
        selectElement.append(optionElement);
    });
}

function formChangeColor (car)
{
    let options = Object.keys(car.color).map(key =>
    {
        return {value: key, text: `${car.color[key]}`}
    });
    let changeColorSelect = createEl("select");
    changeColorSelect.name = "changeColorSelect";
    createSelectOptions(changeColorSelect, options);
    body.append(changeColorSelect);

    changeColorSelect.addEventListener("change", () => 
    {
        car.changeColor(changeColorSelect.value);
        carInfo.textContent = `You ordered a ${car.currentColor} ${car.name} for ${car.price}.`;
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

        let priceSelect = createEl("select");
        priceSelect.name = "carPrice";
        createSelectOptions(priceSelect, options);
        let btnOrder = createEl("button");
        btnOrder.textContent = "Order";
        
        let priceForm = createEl("form");
        priceForm.append(priceSelect, btnOrder);
        body.append(priceForm);
    
        priceForm.addEventListener("submit", function (event) 
        {
            event.preventDefault();
            const carPrice = priceForm.carPrice.value;
            const orderedCar = new Car(carName, selectedCar.color, selectedCar.price[carPrice]);

            carInfo = createEl("p");
            carInfo.textContent = `You ordered a ${orderedCar.currentColor} ${orderedCar.name} for ${orderedCar.price}.`;
            body.append(carInfo);
            formChangeColor(orderedCar);
        });
    });
});