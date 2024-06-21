// 30.01.2024

// Sorts from lowest to highest
function selectionSortLH (arr)
{
    const n = arr.length;

    for (let i = 0; i < n - 1; i++)
    {
        let minIndex = i;

        for (let j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Sorts from highest to lowest
function selectionSortHL (arr)
{
    const n = arr.length;

    for (let i = 0; i < n - 1; i++)
    {
        let minIndex = i;

        for (let j = i + 1; j < n; j++)
        {
            if (arr[j] > arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let numberList = [5, 3, 6, 2, 10];

console.log(selectionSortLH(numberList));
console.log(selectionSortHL(numberList));