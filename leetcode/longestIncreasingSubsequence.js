/*
Leetcode - https://leetcode.com/problems/longest-increasing-subsequence/
300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return 1;
//   const lengths = new Array(nums.length).fill(1);

//   let current = nums[0];
//   let seeker = nums[1];

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i] && lengths[j] > lengths[i] - 1) {
//         lengths[i] = lengths[j] + 1;
//       }
//     }
//   }
//   return Math.max(...lengths);
// };

/**
 // Binary dp attempt solution
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const binarySearchPosition = (data, target, end) => {
    let start = 0;
    while (start <= end) {
      // mid is index responsible for comparison
      let mid = start + Math.floor((end - start) / 2);
      if (target === data[mid]) return mid;
      else if (target < data[mid]) end = mid - 1;
      // if target is less than midpoint index value it will be added at existing location
      else start = mid + 1;
      // if target is greater than midpoint index value , increment start to look at new index after midpoint (next pile), it will be added at current mid + 1 (next to be screened)
    }
    return start;
  };

  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let data = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < nums.length; i++) {
    let pos = binarySearchPosition(data, nums[i], i);
    data[pos] = nums[i];
  }

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i] !== Number.MAX_SAFE_INTEGER) return i + 1;
  }

  return 0;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
