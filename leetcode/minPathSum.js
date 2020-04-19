/*
leetcode
Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let min = Infinity;
  const traverse = (row, col, sum);
  //if row index within >0 and < grid.length
  //if col index within >0 and < grid[row].length
  // check to see if current value is whitin the matrix size
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
    return; // end the traversal after seeing all in a row or all in a column or all in the whole matrix

  //iterate through row
  //iterate through column
  // store currentmin index to compare to current index from each path
};
