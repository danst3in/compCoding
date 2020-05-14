/* 
leetcode

Missing Number

Given an array containing n distinct numbers 
taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. 
Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  (n * n) + n / 2 to sum triangular series

var missingNumber = function (nums) {
  const n = nums.length;
  let sum = (n * (n - 1)) / 2;
  let altSum = 0;
  nums.forEach((num) => (altSum += num));

  return sum - altSum + n;
};
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0]));
