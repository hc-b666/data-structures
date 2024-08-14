### Find Pivot Index

#### Topics:
<ul>
  <li>Array</li>
  <li>Prefix Sum</li>
</ul>

#### Difficulty:
Easy

#### Problem:

Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return the **leftmost pivot index**. If no such index exists, return `-1`.

#### Example 1:
```shell
Input: nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 is equal to the sum of numbers to the right of index 3.
```

#### Example 2:
```shell
Input: nums = [1, 2, 3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

#### Constraints:
<ul>
  <li>1 <= nums.length <= 10^4</li>
  <li>-1000 <= nums[i] <= 1000</li>
</ul>
