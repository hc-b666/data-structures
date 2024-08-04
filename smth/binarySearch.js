// 30 january 2024

// Binary Search - log time 
// (log, base = 2) -> (log16 === 4), (log4 === 2), (log(4billion) === 32)

function binarySearch (arr, item)
{
    let low = 0;
    let high = (arr.length) - 1;

    while (low <= high)
    {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        
        if (guess === item) return console.log(mid);
        else if (guess > item) high = mid - 1;
        else low = mid + 1;
    }
    return console.log("Not Found!");
}

let numberList = [1, 3, 5, 7, 9]; 

binarySearch(numberList, 9);

