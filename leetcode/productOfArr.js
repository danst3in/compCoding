/*
leetcode
Product of Array Except Self
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// this solution is o(n^2) time and time limit was exceeded
// var productExceptSelf = function (nums) {
//   let store = {};
//   let resultArr = [];
//   // iterate through the array
//   // store [i] and values in object
//   nums.forEach((val, i) => {
//     store[i] = val;
//     // console.log("val: ", val);
//   });
//   // console.log("store: ", store);
//   // iterate through object and multiply all values with different key [i]
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let [key, val] of Object.entries(store)) {
//       // if (store.hasOwnProperty(key)) {
//       if (+key !== i) {
//         product *= val;
//         // console.log("store inside entries: ", store);
//         // console.log("key:val ", `${key}:${val}`);
//         // console.log("product: ", product);
//         // }
//       }
//     }
//     resultArr.push(product);
//     // console.log("resultArr: ", resultArr);
//   }
//   return resultArr;
// };

// // try to create O(n) time solution
// var productExceptSelf = function (nums) {
//   let prefixArr = Array(nums.length).fill(0);
//   prefixArr[0] = 1;
//   let suffixArr = Array(nums.length).fill(0);
//   suffixArr[suffixArr.length - 1] = 1;
//   let resultArr = [];
//
//   // iterate through the array
//   // multiply nums[i-1] * prefix[i-1] start at i=1
//   // set that product to be new value for current position
//   for (let i = 1; i < nums.length; i++) {
//     prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
//   }
//
//   // iterate through the array in reverse direction
//   // multiply nums[i+1] * suffix[i+1] start at i=length-2
//   // set that product to be new value for current position
//   for (let j = nums.length - 2; j >= 0; j--) {
//     suffixArr[j] = suffixArr[j + 1] * nums[j + 1];
//   }
//
//   // iterate through object and multiply all values with same key [i]
//   for (let i = 0; i < nums.length; i++) {
//     resultArr[i] = prefixArr[i] * suffixArr[i];
//   }
//
//   // console.log("resultArr: ", resultArr);
//
//   return resultArr;
// };
//

// try to create O(n) time solution and O(1)space
var productExceptSelf = function (nums) {
  let bool = true;
  nums.forEach((num) => {
    if (num !== 0) {
      bool = false;
    }
  });
  if (bool) return nums;

  let resultArr = Array(nums.length).fill(0);
  resultArr[0] = 1;
  let temp = 1;

  // iterate through the array
  // multiply nums[i-1] * prefix[i-1] start at i=1
  // set that product to be new value for current position
  for (let i = 0; i < nums.length; i++) {
    resultArr[i] = temp;
    // update temp to be product of current product and current array[i]
    temp = temp * nums[i];
    // console.log("resultArr,temp, i: ", resultArr, temp, i);
  }
  //initialize temp to 1 again before iteration from right side
  temp = 1;

  // iterate through the array in reverse direction
  // multiply nums[i+1] * temp start at i=length-1
  // set that product to be new value for temp to be current position on next iteration
  for (let j = nums.length - 1; j >= 0; j--) {
    resultArr[j] *= temp;
    // update temp to be product of current product and current array[i]
    temp = temp * nums[j];
    // console.log("resultArr, temp, j: ", resultArr, temp, j);
  }
  //
  // // iterate through object and multiply all values with same key [i]
  // for (let i = 0; i < nums.length; i++) {
  //   resultArr[i] = prefixArr[i] * suffixArr[i];
  // }

  // console.log("resultArr: ", resultArr);

  return resultArr;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([9, 0, -2]));
