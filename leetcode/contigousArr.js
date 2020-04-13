/*
Leetcode
Contiguous Array
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
 */

// solution was working, but then got convoluted while trying to solve edge cases
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxLength = function (nums) {
//   if (nums.length < 2) return 0;
//
//   let matchCount = 0;
//   // let oneCount = 0;
//   let zeroHere = 0;
//   let oneHere = 0;
//   let maxHere = 0;
//   let maxCurr = 0;
//   let startIdx = 0;
//   let endIdx;
//   let idxCount = 0;
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) zeroHere += 1;
//     if (nums[i] === 1) oneHere += 1;
//     //if counts are equal
//     if (zeroHere === oneHere) {
//       matchCount += 1;
//       // oneCount += 1;
//       endIdx = i;
//       idxCount = endIdx - startIdx;
//       console.log("idxCount: ", idxCount);
//       // console.log("min here: ", Math.min(zeroHere, oneHere));
//       maxHere = Math.max(Math.min(zeroHere, oneHere) * 2, idxCount);
//       maxCurr = Math.max(maxCurr, maxHere);
//       // startIdx = startIdx || i;
//       // idxCount = i + 1;
//     }
//     // if counts are off
//     if (
//       (nums[i] === 0 && zeroHere > matchCount + 1) ||
//       (nums[i] === 1 && oneHere > matchCount + 1)
//     ) {
//       // maxCurr = matchCount * 2;
//       maxHere = 0;
//       startIdx = i;
//       matchCount = 0;
//       // oneCount = 0;
//     }
//   }
//   // console.log(startIdx);
//   console.log("idxCount: ", idxCount);
//   console.log("zeroHere: ", zeroHere);
//   console.log("oneHere: ", oneHere);
//   console.log("matchCount: ", matchCount);
//   // console.log("oneCount: ", oneCount);
//   console.log("maxHere: ", maxHere);
//   console.log("maxCurr: ", maxCurr);
//   // console.log(idxCount);
//   return maxCurr;
// };

// trying to rebuild a better solution with help from geeksforgeeks and https://leetcode.com/articles/contiguous-array/
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let max = 0;
  let store = { "0": -1 };
  let sum = 0;

  if (nums.length < 2) return 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;
    console.log("sum: ", sum);
    if (store[sum] !== undefined) {
      max = Math.max(max, i - store[sum]);
    } else {
      store[sum] = i;
    }
    console.log("store[sum]: ", store[sum]);
    console.log("i: ", i);
    console.log("max: ", max);
    console.log("store: ", store);
  }
  return max;
};
// console.log("final result: ", findMaxLength([0, 1]));
// console.log("final result: ", findMaxLength([1, 0]));
// console.log("final result: ", findMaxLength([0, 0, 1]));
// console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0]));
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));
