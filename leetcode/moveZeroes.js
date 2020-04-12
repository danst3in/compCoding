// Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Example:
//
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
//
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let length = nums.length;
//     for (let i = 0; i<nums.length; i++) {
//       let swap;
//       if (nums[i] === 0) {
//         swap = nums.splice(i, 1);
//         nums.push(swap);
//         i--;
//       }
//     }
//     return nums;
// };
// on leetcode above solution scored 94% speed but only 17% memory

// function moveZeroes(nums) {
//   var idx = 0; // placeholder index value
//   for (var i = 0; i < nums.length; i++) {
//     // if current index is non-zero
//     if (nums[i] !== 0) {
//       //set array at index placeholder equal to array at current index from for loop
//       nums[idx] = nums[i];
//       // array [i] remains the same if place holder index and for loop index are equal
//       // if placeholder index is behind for loop index, set array at for loop index equal to 0
//       nums[i] = idx === i ? nums[i] : 0;
//       //  if array[i] is not equal to zero, increment the placeholder index so that it will check the next value
//       idx++;
//     }
//     // console.log(nums[idx]);
//     // console.log(nums[i], i);
//     // console.log(nums)
//   }
//   // return nums
// }
// this was a more efficient solution in the leetcode discussion
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// another solution iterating from back
// var moveZeroes = function(nums) {
//
//     for (let i = nums.length-1; i>=0; i--) {
//       if (nums[i] === 0) {
//         nums.splice(i, 1);
//         nums.push(0);
//       }
//     }
//     return nums;
// };

// trying to write the optimal version again myself to better understand
var moveZeroes = function (nums) {
  // i is the current pointer and j is the slow pointer
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //swap values
      nums[j] = nums[i];
      // if counters are the same, no change (first run only?)
      // else switch to 0
      nums[i] = j === i ? nums[i] : 0;
      // increment second pointer
      j++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
