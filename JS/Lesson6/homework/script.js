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

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let firstNumberOfArray = numbersArray[0];
let lastNumberOfArray = numbersArray[numbersArray.length - 1];

console.log(numbersArray);

if (firstNumberOfArray < lastNumberOfArray) 
{
    numbersArray.pop();
    console.log(numbersArray);
}
else if (firstNumberOfArray > lastNumberOfArray)
{
    numbersArray.shift();
    console.log(numbersArray);
}
else 
{
    console.log("First and Last Numbers are equal");
}


