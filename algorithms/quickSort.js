// February 20, 2024
// Quicksort - Divide and Conquer Algorithm

// Quicksort is a sorting algorithm that uses recursion to sort an array. 
// It is a divide and conquer algorithm. 
// The algorithm selects a pivot element from the array and partitions the other elements into two sub-arrays 
// according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

// Euclid's algorithm is an example of a recursive algorithm.

// Quicksort with Recursion
function quicksort (arr)
{
    if (arr.length <= 1) return arr;
    else
    {
        let pivot = arr[0];
        let less = [];
        let greater = [];
        for (let i = 1; i < arr.length; i++)
        {
            if (arr[i] <= pivot) less.push(arr[i]);
            else greater.push(arr[i]);
        }
        return quicksort(less).concat(pivot, quicksort(greater));
    }
}
console.log(quicksort( [ 2, 5, 1, 4, 3] )); // [1, 2, 3, 4, 5]

// Binary Search with Recursion
function binarySearch (arr, x, start = 0, end = arr.length - 1)
{
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;
    
    if (arr[mid] > x) return binarySearch(arr, x, start, mid - 1);

    return binarySearch(arr, x, mid + 1, end);
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2