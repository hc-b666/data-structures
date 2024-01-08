// Homework
// Exercise 1 - Function registration

let registration = function (name, email, password) 
{
    if (!name) 
    {
        return 'Please enter your name';
    }
    else if (!email || !email.includes('@') || !email.includes('.')) 
    {
        return 'Please enter a valid email';
    }
    else if (!password || password.length < 8) 
    {
        return 'Please enter a password of at least 8 characters';
    }
    else 
    {
        return `Hello, ${name}! Thanks for registering with the email ${email}!`;
    }
}

console.log(registration("Bobur", "bobur0218.prvt@gmai.com", "bobur0218cs" ));



// Exercise 2 - Shopping Function
let foodCosts =
{
    lavash:  28000,
    hamburger: 25000,
    clubsandwich: 36000,
} 

let deliveryCost = 5000;

let oqtepaLavash = (name, location, money, food) => 
{
    if (food) 
    {
        food = food.toLowerCase();
    }

    if (!name)
    {
        return 'Please enter your name!';
    }
    else if (!location) 
    {
        return 'Please enter your location!';
    }
    else if (!money || money < 30000) 
    {
        return 'Enter amount of money you have. It should be more than 20000';
    }
    else if (!foodCosts[food]) 
    {
        return 'Choose a food that is on menu!';
    }
    else 
    {
        let totalCost = foodCosts[food] + deliveryCost;
        if (money >= totalCost) 
        {
            money = money - totalCost;
            return `You successfully ordered your ${food}. ${food.charAt(0).toUpperCase() + food.slice(1)} is ${foodCosts[food]} and delivery cost is ${deliveryCost} and now you have ${money}!`;
        }
        else 
        {
            return `You could not buy ${food}, because you do not have enough money.`;
        }
    }
}

console.log(oqtepaLavash("Bobur", "Chilanzar 20", 45000, "hamburger"));

