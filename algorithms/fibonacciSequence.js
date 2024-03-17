// Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

function fibonacci(n) {
    const fibArr = [0, 1]; // Executes once
    for (let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1]; // n-times
    }
    return fibArr;
}

console.log(fibonacci(20));

// Big(O) = O(n) 
// Time Complexity is dependant to input size 
