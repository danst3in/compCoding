/*
LeetCode - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
*/

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function (nums, k) {
//   k = k % nums.length;
//   nums.push(...nums.splice(0, nums.length - k));

//   return nums;
// };

// /**
//  // Cyclic Replacement Solution
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function (nums, k) {
//   k = k % nums.length;
//   let countIdx = 0;
//   for (let startIdx = 0; countIdx < nums.length; startIdx++) {
//     // define current idx
//     let currentIdx = startIdx;
//     // define previous element
//     let prev = nums[startIdx];
//     do {
//       // define next idx
//       let nextIdx = (currentIdx + k) % nums.length;
//       // store nextIdx element in temp
//       let temp = nums[nextIdx];
//       // set next elem equal to previous elem
//       nums[nextIdx] = prev;
//       // set prev elem equal to temp (former 'nextIdx' elem)
//       prev = temp;
//       // update currentIdx idx to nextIdx idx
//       currentIdx = nextIdx;
//       // increment counter for each pass
//       countIdx++;
//     } while (startIdx != currentIdx); // avoid moving the same item twice in one pass
//   }
//   // console.log(nums);

//   return nums;
// };

/**
 * Reverse Solution
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const reverse = (nums, start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      [start, end] = [start + 1, end - 1];
    }
  };
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

console.log(rotate([-1, -100, 3, 99], 2));
