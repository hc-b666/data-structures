// Exercise 1 

// let usersArray = 
// [
//     {usersName: "Bobur", usersAge: 18,},
//     {usersName: "Azizbek", usersAge: 22,},
//     {usersName: "Dilnoza", usersAge: 41,},
//     // {usersName: "Muhammadxon", usersAge: 17,},
//     // {usersName: "Islombek", usersAge: 24,},
//     // {usersName: "Saidasror", usersAge: 19,}, 
// ]

// if (usersArray.length < 4) 
// {
//     usersArray.unshift({usersName: "Bobomurod", usersAge: 43,});
//     usersArray.push({usersName: "Aziza", usersAge: 13,});
//     console.log(usersArray);
// } 
// else if (usersArray.length > 4) 
// {
//     usersArray.shift();
//     usersArray.pop();
//     console.log(usersArray);
// }
// else 
// {
//     console.log(usersArray);
// }



// Exercise 2

// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let firstNumberOfArray = numbersArray[0];
// let lastNumberOfArray = numbersArray[numbersArray.length - 1];

// console.log(numbersArray);

// if (firstNumberOfArray < lastNumberOfArray) 
// {
//     numbersArray.pop();
//     console.log(numbersArray);
// }
// else if (firstNumberOfArray > lastNumberOfArray)
// {
//     numbersArray.shift();
//     console.log(numbersArray);
// }
// else 
// {
//     console.log("First and Last Numbers are equal");
// }



// Exercise 3 

let randomNumbersArray = [4, 2, 7, 90, 4, 3, 6, 1, 0, 7, 10, 33, -4, -7, 45, 2, 0, -14];
let numbers3Array = [];

// Numbers divisible by 3
for (let i = 0; i < randomNumbersArray.length; i++) 
{
    randomNumbersArray[i] % 3 === 0 && numbers3Array.push(randomNumbersArray[i]);
}

// console.log(numbers3Array);


// Sorting Even / Odd
let evenNumbersArray = [];
let oddNumbersArray = [];

for (let randomNumber of randomNumbersArray) 
{
    randomNumber % 2 === 0 ? evenNumbersArray.push(randomNumber) : oddNumbersArray.push(randomNumber);
}

// console.log(evenNumbersArray, oddNumbersArray);

// Sum of Array
let sum = 0;

for (let randomNumber of randomNumbersArray)
{
    sum += randomNumber;
}

// console.log(sum);


// Reversed Array
let reversedRandomNumbersArray = [];

for (let i = randomNumbersArray.length - 1; i >= 0; i--) 
{
    reversedRandomNumbersArray.push(randomNumbersArray[i]);
}

// console.log(`Reversed Array ${reversedRandomNumbersArray.join(", ")}`);


// Max / Min of Array

let min = randomNumbersArray[0];
let max = 0;

for (let randomNumber of randomNumbersArray) 
{
    max = randomNumber > max ? randomNumber : max;
    min = randomNumber <= min ? randomNumber : min;
}

console.log(`Min: ${min}, Max: ${max}\n`);