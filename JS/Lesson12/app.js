"use strict";
// array methods
// length push pop shift unshift forEach map 

// indexOf is a method that returns the index of the first occurence of the element in the array (number)
// if the element is not found, it returns -1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 9];
console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(10)); // -1

// lastIndexOf is the same but it returns the index of the last occurence of the element in the array (number)
console.log(arr.lastIndexOf(1)); // 8

// at is a method that returns the element at the given index (number)
// at -1 returns the last element
console.log(arr.at(1)); // 2
console.log(arr.at(-1)); // 9
console.log(arr.at(-2)); // 1


// includes is a method that returns true if the array contains the given element (boolean)
console.log(arr.includes(1)); // true
console.log(arr.includes(10)); // false

// flat is a method that returns a new array with all sub-array elements concatenated into it recursively up to the specified depth (number)
// if no depth is specified, it defaults to 1
let arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(1)); // [1, 2, 3, 4, [5, 6]]

// toString is a method that returns a string representing the specified array and its elements (string)
console.log(arr2.toString()); // 1,2,3,4,5,6

// fill is a method that fills all the elements of an array from a start index to an end index with a static value (number)
// if no end index is specified, it defaults to the end of the array
// new Array() creates an empty array with the given length (number)
let arr3 = new Array(5);
console.log(arr3); // [empty × 5]
console.log(arr3.fill(3, 2, 4)); // [empty × 2, 3, 3, empty × 1]
console.log(arr3.fill(1)); // [1, 1, 1, 1, 1]
console.log(arr3.fill(2, 3)); // [1, 1, 1, 2, 2]

// concat is a method that returns a new array comprised of this array joined with other array(s) and/or value(s) (array)
// it can add itself
console.log(arr3.concat(arr3)); // [1, 1, 1, 2, 2, 1, 1, 1, 2, 2]
// it can add other arrays
console.log(arr3.concat(arr2)); // [1, 1, 1, 2, 2, 1, 2, [3, 4, [5, 6]]]

// reverse is a method that reverses an array in place (array)
console.log(arr3.reverse()); // [2, 2, 1, 1, 1]
console.log(arr3) // [2, 2, 1, 1, 1]

// join is a method that joins all elements of an array into a string (string)
console.log(arr3.join()); // 2,2,1,1,1
console.log(arr3.join('')); // 22111
console.log(arr3.join('-')); // 2-2-1-1-1
console.log(arr3) // [2, 2, 1, 1, 1]

// slice is a method that returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) (array)
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.slice(1, 3)); // [2, 3]
console.log(arr4.slice(1)); // [2, 3, 4, 5]
console.log(arr4.slice(-2)); // [4, 5]
console.log(arr4.slice(-2, -1)); // [4] 
console.log(arr4) // [1, 2, 3, 4, 5]

// splice is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (array)
let arr5 = arr4.splice(1, 2)
console.log(arr5); // [2, 3]
console.log(arr4); // [1, 4, 5]

let arr6 = [1, 2, 3, 4, 5, 6];
let arr7 = arr6.splice(2, 0, 400)
console.log(arr7);
console.log(arr6);       



// mutable vs immutable
// mutable methods push pop shift unsift splice reverse fill
// immutable methods indexOf lastIndexOf at includes flat toString concat join slice map forEach




// Exercise 1
let arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let userInput = document.getElementById('userInput');
let btnBuy = document.getElementById("btnBuy");

btnBuy.addEventListener('click', function () 
{
    let userFruit = userInput.value;

    if (arrayFruits.includes(userFruit))
    {
        let fruitIndex = arrayFruits.indexOf(userFruit) + 1;

        let element = document.createElement("h1");
        element.textContent = `${userFruit} ${fruitIndex} qatorda`;
        document.body.append(element);
    }
    else 
    {
        let element = document.createElement("h1");
        element.textContent = `${userFruit} yoq`;
        document.body.append(element);
    }
});


// Exercise 2
let body = document.body;
let userNumber = document.getElementById('userNumber');
let btnShow = document.getElementById("btnShow");

btnShow.addEventListener('click', function () 
{
    let userNum = +userNumber.value;
    
    let newNumberArray = new Array(userNum);
    newNumberArray.fill("*");

    let element = document.createElement("p");
    element.style.fontSize = "36px";
    element.textContent = newNumberArray.join("");

    document.body.append(element);
});
