// Smallest Subarray with a given sum (easy)
/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

const smallest_subarray_with_given_sum = function (s, arr) {
  // TODO: Write your code here

  // initializes var to hold sum info
  let currSum = 0;

  // initializes vars to hold length info
  let minLen = Infinity;
  let currLen = 0;

  for (let i = 0, j = 0; j < arr.length; j++) {
    currSum += arr[j]; // update sum
    while (currSum >= s) {
      currLen = j - i + 1; // update length
      if (currLen < minLen) minLen = currLen;
      currSum -= arr[i];
      i++;
    }
  }

  if (minLen === Infinity) return 0;
  return minLen;
};

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])); // should be 2
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])); // should be 1
console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])); // should be 3
