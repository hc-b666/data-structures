function pivotIndex(nums: number[]): number {
  let left: number = 0;
  let right: number = sum(nums);

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (left === right) return i;
    else left += nums[i];
  }

  return -1;
}

function sum(nums: number[]): number {
  let s: number = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }
  return s;
}
