// February 20, 2024
// Recursion is a technique in which a function calls itself to solve a problem.

// Recursion and Call Stack Function to calculate factorial of a number 
function factorial (x)
{
    if (x === 0 || x === 1) return 1;
    else return x * factorial (x - 1);
}

console.log(factorial(3)); // 6