const nums = [3, 2, 5, 4, 5, 6, 1]; // 7

function numConverter(arr: number[], target: number): number[][] {
  let sum = new Map();
  let array: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    let remainder = target - arr[i];

    if (sum.has(remainder)) {
      array = [...array, [sum.get(remainder), arr[i]]];
    }

    sum.set(arr[i], arr[i]);
  }

  return array;
}

console.log(numConverter(nums, 7));
