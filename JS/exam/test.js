// 11 - math.random method
let randomNumber = Math.floor(Math.random() * (50 - 10)) + 10;
console.log(randomNumber);



// 12 - sort method
let numbers = [24, 56, 8, 10, 4, 18];
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

let fruits = ["phone", "apple", "watch", "banana", "pencil"];
let sortedFruits = fruits.sort();
console.log(sortedFruits);



// 13 - filter method
let nums = [10, 78, 9, 3, 35, 44, 7, 100];
let sortedNums = nums.filter(num => num > 20);
console.log(sortedNums);



// 14 - find method
let users = 
[
    {name: "Islom", age: 21, id: 1},
    {name: "Ali", age: 15, id: 2},
    {name: "Muslim", age: 28, id: 3}
];
let muslim = users.find(user => user.name === "Muslim");
console.log(muslim);



// 15 - hoisting
console.log(a); // undefined
// console.log(b); // test.js:39 Uncaught ReferenceError: Cannot access 'b' before initialization at test.js:39:13
// console.log(c); // test.js:40 Uncaught ReferenceError: Cannot access 'c' before initialization at test.js:40:13
var a = 1; 
let b = 2; 
const c = 3;



//  16 - object
let coder = { name: "Azim", age: 21};
coder.city = "Tashkent";
console.log(coder);
if (coder.age > 18) console.log(`${coder.name} can get passport`);
else console.log(`${coder.name} cannot get passport`);



// 17 - greatest num
function findGreastestNumber (a, b, c)
{
    let max;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    return max;
}
console.log(findGreastestNumber(12, 20, 9));
console.log(findGreastestNumber(15, 10, 70));
console.log(findGreastestNumber(150, 10, 70));



// 18 - dom
const fruitInput = document.getElementById("fruitInput");
const btnAdd = document.getElementById("btnAdd");
const container = document.getElementById("container"); 

let fruitArr = [];

window.addEventListener("DOMContentLoaded", function ()
{
    btnAdd.addEventListener("click", function ()
    {
        container.innerHTML = ``;
        let inputValue = fruitInput.value;
        fruitArr.push(inputValue);

        fruitArr.map(fruit => 
        {
            let list = document.createElement("li");
            list.textContent = fruit;
            container.append(list);
        });
        fruitInput.value = ``;
    });
});



// 19 - fruits container display
const fruitsContainer = document.getElementById("fruits-container");
let fruitsArray = 
[
    {title: "apple", price: 12, id: 1},
    {title: "banana", price: 20, id: 2},
    {title: "cherry", price: 14, id: 3},
    {title: "orange", price: 8, id: 4},
];
fruitsArray.map(fruit => 
{
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h1");
    title.textContent = fruit.title;
    let price = document.createElement("p");
    price.textContent = `price: ${fruit.price}`;
    card.append(title, price);
    fruitsContainer.append(card);
});




// 20 - arrow function sum
let sumOfNumbers = (a = 0, b = 0) =>
{
    return a + b;
}
console.log(sumOfNumbers(10, 45));



// 21 - style
const colorInput = document.getElementById("colorInput");
const fsInput = document.getElementById("fsInput");
const btnChange = document.getElementById("btnChange");
const h1 = document.getElementById("h1");

btnChange.addEventListener("click", function ()
{
    let colorValue = colorInput.value;
    colorValue = colorValue.trim().toLowerCase();

    let fsValue = Number(fsInput.value);

    h1.style.color = `${colorValue}`;
    h1.style.fontSize = `${fsValue}px`;
});



// 22 - 
const textInput = document.getElementById("textInput");
const btnReverse = document.getElementById("btnReverse");
const reverse = document.querySelector(".reverse");

btnReverse.addEventListener("click", function ()
{
    reverse.innerHTML = ``;
    let textValue = textInput.value;
    textValue = textValue.trim().toLowerCase();
    textValue = textValue.split("").reverse().join("");
    let reversedText = document.createElement("h1");
    reversedText.textContent = textValue;
    reverse.append(reversedText);
});