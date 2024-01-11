// Sorts from Lowest to Highest
function insertionSort(A) 
{
    for (let j = 1; j < A.length; j++)
    {
        let key = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] > key) 
        {
            A[i + 1] = A[i];
            i--;
        }
        A[i + 1] = key;
    }
    return A;
}

// Sorts from Highest to Lowest
function insertionSortDescending(A) 
{
    for (let j = 1; j < A.length; j++)
    {
        let key = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] < key) 
        {
            A[i + 1] = A[i];
            i--;
        }
        A[i + 1] = key;
    }
    return A;
}

A = [5, 2, 4, 6, 1, 3];

insertionSort(A);

console.log(A);
