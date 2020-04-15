/*
Leetcode
Perform String Shifts
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift).
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.



Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation:
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
Example 2:

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"


Constraints:

1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100
 */

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

var stringShift = function (s, shift) {
  // iterate through the matrix tuples
  let newStr = s.split("");
  let score = {};

  shift.forEach(([dir, count]) => {
    if (dir === 0) {
      score.final = (score.final || 0) + count;
    }
    if (dir === 1) {
      score.final = (score.final || 0) - count;
    }
  });

  // score.final = score.left - score.right;

  console.log("score.final: ", score.final);

  if (score.final > newStr.length) {
    score.final =
      score.final - Math.floor(score.final / newStr.length) * newStr.length;
  } else if (-1 * score.final > newStr.length) {
    score.final =
      score.final - Math.floor(score.final / newStr.length) * newStr.length;
  }
  console.log("revised score.final: ", score.final);
  // for (let i = 0; i < Math.abs(score.final); i++) {
  if (score.final < 0) {
    // if  negative move right to left-  1, pop end to unshift to beginning
    let pack = newStr.splice(score.final).reverse();
    console.log("right pack: ", pack);
    pack.forEach((char) => {
      newStr.unshift(char);
      console.log(newStr);
    });
  } else {
    // if positive move left to right- 0, shift beginning to push to end for shift[i][1]iterations
    let pack = newStr.splice(0, score.final);
    console.log("left pack: ", pack);
    pack.forEach((char) => {
      newStr.push(char);
      console.log(newStr);
    });
  }
  // }
  // map to new string based on condition
  return newStr.join("");
};

console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
); // --- expecting "efgabcd"

console.log(
  stringShift("xqgwkiqpif", [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6],
  ])
); // --- expecting "qpifxqgwki"
//  // this solution fails last test and exceeds output limit
// var stringShift = function (s, shift) {
//   // iterate through the matrix tuples
//   let newStr = s.split("");
//
//   shift.forEach(([dir, count]) => {
//     if (dir === 0) {
//       // if 0, shift beginning to push to end for shift[i][1]iterations
//       let pack = newStr.splice(0, count);
//       pack.forEach((char) => {
//         newStr.push(char);
//         console.log(newStr);
//       });
//     }
//     if (dir === 1) {
//       // if 1, pop end to unshift to beginning
//       let pack = newStr.splice(-count).reverse();
//       pack.forEach((char) => {
//         newStr.unshift(char);
//         console.log(newStr);
//       });
//     }
//   });
//
//   // map to new string based on condition
//   return newStr.join("");
//
// };
