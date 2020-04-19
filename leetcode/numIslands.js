/*
Leetcode

Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

// // solution using DFS and modifying original matrix
// var numIslands = function (grid) {
//   let islands = 0;
//   // create helper function to call recursively to check north, south, east, west of each matrix point
//   const traverse = (row, col) => {
//     // check to see if current value is whitin the matrix size
//     if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
//       return; // end the traversal after seeing all in a row or all in a column or all in the whole matrix
//     // check if the current index is water or land
//     if (grid[row][col] !== '1') return; //return if water is found
//     // Mark current node as visited - modify original matrix!!
//     grid[row][col] = '0';
//     // this wil turn any adjacent 1's to zero's until they hit a zero(water). same as converting any large island to a smaller island with more water around it.
//
//     // check if the neighboring indices are water
//     // check "up"
//     traverse(row - 1, col); // up a row
//     // check "down"
//     traverse(row + 1, col); // down a row
//     // check "right"
//     traverse(row, col + 1); // right a row
//     // check "left"
//     traverse(row, col - 1); // left a row
//   };
//
//   for (let row = 0; row < grid.length; row++) {
//     // iterate through each row
//     for (let col = 0; col < grid[row].length; col++) {
//       //iterate through each column
//       if (grid[row][col] === '1') {
//         // if value is '1', add an island to the count and mark and traverse from there
//         islands++;
//         traverse(row, col);
//       }
//     }
//   }
//   return islands;
// };

// solution using DFS and adding booleans
var numIslands = function (grid) {
  let islands = 0;
  // initialize an array to pass into the helper function or create as default parameter with default val of [] on parent function (numIslands)
  let visits = {};
  // create helper function to call recursively to check north, south, east, west of each matrix point
  // add third param 2Dboolean array [row][col]:boolean to track if the index has been visited before without modifying original matrix
  const traverse = (row, col, visited) => {
    // check to see if current value is whitin the matrix size
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
      return; // end the traversal after seeing all in a row or all in a column or all in the whole matrix
    // try to initialize the object
    visited[row][col] = visited[row][col] || false;
    // check if the current index is water or land
    if (visited[row][col] === true) return; //return if index already visited!

    // Mark current node as visited - Does not modify original matrix!!
    visited[row][col] = true;
    // this will mark the location as visited, which must be checked when looping through the matrix

    // check if the current index is water or land
    if (grid[row][col] !== "1") return; //return if water is found

    // check if the neighboring indices are water and if they have been visited
    // check "up"
    traverse(row - 1, col, visited); // up a row
    // check "down"
    traverse(row + 1, col, visited); // down a row
    // check "right"
    traverse(row, col + 1, visited); // right a row
    // check "left"
    traverse(row, col - 1, visited); // left a row
  };

  for (let row = 0; row < grid.length; row++) {
    // iterate through each row
    for (let col = 0; col < grid[row].length; col++) {
      //iterate through each column
      // if the index hasn't been visited and the index is land grid[row][col] = '1'
      // // try to initialize the object
      // visits = {[row],[col] }
      //
      // try to initialize the object
      // visits[row][col] = visits[row][col] || false;

      if (!visits[row][col] && grid[row][col] === "1") {
        // if value is '1', add an island to the count and mark visited and traverse from there
        islands++;
        traverse(row, col, visits);
      }
    }
  }
  return islands;
};
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
