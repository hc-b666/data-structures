// Prime Number
// 5 = true
// 4 = false

function primeNumber(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(primeNumber(2)) // true
console.log(primeNumber(1)) // false
console.log(primeNumber(5)) // true
console.log(primeNumber(21)); // false

// Big-O Notation = O(n)

function optimizedPrimeNumber(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(optimizedPrimeNumber(2)) // true
console.log(optimizedPrimeNumber(1)) // false
console.log(optimizedPrimeNumber(5)) // true
console.log(optimizedPrimeNumber(21)); // false

// Big-O Notation = O(sqrt(n))
