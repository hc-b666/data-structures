// Homework
// Exercise 1 - Function registration

// let registration = function (name, email, password) 
// {
//     if (!name) 
//     {
//         return 'Please enter your name';
//     }
//     else if (!email || !email.includes('@') || !email.includes('.')) 
//     {
//         return 'Please enter a valid email';
//     }
//     else if (!password || password.length < 8) 
//     {
//         return 'Please enter a password of at least 8 characters';
//     }
//     else 
//     {
//         return `Hello, ${name}! Thanks for registering with the email ${email}!`;
//     }
// }

// console.log(registration("Bobur", "bobur0218.prvt@gmai.com", "bobur0218cs" ));



// Exercise 2 - Shopping Function
let foodCosts =
{
    lavash:  28000,
    hamburger: 25000,
    clubsandwich: 36000,
    pizza: 75000,
    cheeseburger: 28000,
    doner: 20000,  
} 

let deliveryCost = 5000;



// Asking & Validating user inputs
let userName = prompt("What's your name? ");
while (!userName) 
{
    userName = prompt('Please enter your name!?');
}

let userLocation = prompt("What's your location? ");
while (!userLocation)
{
    userLocation = prompt('Please enter your location!?');
}

let userFoodChoice = prompt("Which food did you choose from the menu?\n MENU\n 1. Lavash: 28000\n 2. Hamburger: 25000\n 3. Clubsandwich: 36000\n 4. Pizza: 75000\n 5. Cheeseburger: 28000\n 6. Doner: 20000\n Delivery Cost: 5000");
userFoodChoice = userFoodChoice.toLowerCase();
while (!foodCosts[userFoodChoice])
{
    userFoodChoice = prompt("Choose a food that is on menu!\n MENU\n 1. Lavash: 28000\n 2. Hamburger: 25000\n 3. Clubsandwich: 36000\n 4. Pizza: 75000\n 5. Cheeseburger: 28000\n 6. Doner: 20000\n Delivery Cost: 5000");
}

let userMoney = prompt("Enter your money ");
userMoney = Number(userMoney);
while (!userMoney || userMoney < (foodCosts[userFoodChoice] + deliveryCost)) 
{
    userMoney = prompt("Enter your money ");
}



// Function Calculation
let oqtepaLavash = (userMoney, userFoodChoice) =>
{
    let totalMoneyLeft = userMoney - deliveryCost - foodCosts[userFoodChoice]; 

    return totalMoneyLeft;
} 

let result = oqtepaLavash(userMoney, userFoodChoice);

alert(`You successfully ordered your ${userFoodChoice.toUpperCase()}. The amount of money you have left ${result}.`);

