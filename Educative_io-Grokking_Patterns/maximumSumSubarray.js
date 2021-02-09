// Maximum Sum Subarray of Size K (easy)
// Given an array of positive numbers and a positive number ‘k,’
//  find the maximum sum of any contiguous subarray of size ‘k’.

/*
  EX 1
  Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

  Ex 2
  Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
  
 */

//   First Attempt
const max_sub_array_of_size_k = function (k, arr) {
  // TODO: Write your code here
  let sum = 0; // track the current sum
  let maxSum = -Infinity;
  let currNums = []; // track numbers currently being added
  let numTracker = {}; // track the numbers added to create the sum {sum: [added nums]} //!Assuming duplicates possible or zeroes in arr

  for (let i = 0, j = 0; j < arr.length - 1; j++) {
    // pointers i = start, j = end

    sum += arr[j]; // add next number to sum
    currNums.push(arr[j]); // add current number to be tracked

    if (j >= k - 1) {
      if (sum >= maxSum) {
        maxSum = sum; // update maxSum
        numTracker[maxSum] = numTracker[maxSum] || []; // initialize object if necessary
        // console.log("numTracker[maxSum]", numTracker[maxSum]);
        numTracker[maxSum].push([...currNums]); // add currNums at the maxSum index in numTracker
      }
      // console.log(
      //   "maxSum, currNums, arr[i], numTracker: ",
      //   maxSum,
      //   ",",
      //   currNums,
      //   ",",
      //   arr[i],
      //   ",",
      //   numTracker
      // );
      sum -= arr[i]; // subtract exiting value from sum
      console.log("sum after subtraction: ", sum);
      currNums.shift(); // remove exiting value from currNums array
      i++; // increment start of window
    }
  }

  if (numTracker[maxSum].length > 1) {
    return numTracker[maxSum];
  }
  return numTracker[maxSum][0];
};
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));
