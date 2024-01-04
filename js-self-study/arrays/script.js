// Arrays
// Arrays are used to store multiple values in a single variable.
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);


// Accessing Array Elements
// You access an array element by referring to the index number.
console.log(fruits[0]);
console.log(fruits[4]); // Because the index starts from 0, not 1


// Changing an Array Element
// You can change an array element by directly changing its value.
fruits[0] = "Kiwi";
console.log(fruits[0]);


// Arrays Methods
fruits.push("Lemon"); // add new element to the end of an array
console.log(fruits);

fruits.pop(); // remove the last element of an array
console.log(fruits);

fruits.unshift("Grapes"); // add new element to the beginning of an array 
console.log(fruits);

fruits.shift(); // remove the first element of an array
console.log(fruits);

fruits.sort(); // sort an array in ascending order

fruits.reverse(); // reverse the order of the elements in an array


// Arrays Length
console.log(fruits.length);

let index = fruits.indexOf("Orange"); // find the index of an array element
console.log(index);

index = fruits.indexOf("Lemon"); // if the element does not exist, it returns -1
console.log(index);


// Looping Array Elements
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Looping Array Elements in Reverse Order
for (i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}


console.log("\n");


// Enhanced for Loop
for (let fruit of fruits) { 
    console.log(fruit);
}



