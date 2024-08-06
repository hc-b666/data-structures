// Factorial of a Number 
// !4 = 1 * 2 * 3 * 4 = 24

function factorial(n) {
    // let fact = 1;
    // for (let i = 2; i <= n; i++) {
    //     fact *= i;
    // }
    // return fact;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(7)); // 5040

// Big-O Notation = O(n)
