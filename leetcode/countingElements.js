/*
Counting Elements
Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.



Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
Example 2:

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
Example 3:

Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
Example 4:

Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.


Constraints:

1 <= arr.length <= 1000
0 <= arr[i] <= 1000
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
// working version with O(n^2)
// var countElements = function (arr) {
//   let finalResult = [];
//   arr.forEach((num) => {
//     if (arr.includes(num + 1)) {
//       finalResult.push(num);
//     }
//   });
//   // console.log("finalResult: ", finalResult);
//   return finalResult.length;
// };
// console.log(countElements([1, 3, 2, 3, 5, 0]));

// working version with O(2n)
var countElements = function (arr) {
  let finalResult = 0;
  let storage = {};

  arr.forEach((num) => {
    storage[num] = storage[num] || 1;
  });
  // console.log(storage);
  arr.forEach((num) => {
    if (storage[num + 1]) {
      finalResult++;
    }
  });
  // console.log("finalResult: ", finalResult);
  return finalResult;
};
console.log(countElements([1, 3, 2, 3, 5, 0]));
