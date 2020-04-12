/*
Leetcode
Backspace String Compare
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function (S, T) {
//   // compare final strings
//   // remove previous char for each #
//   let str1 = S.split("").reduce((acc, curr, i) => {
//     if (curr === "#") {
//       acc = acc.slice(0, -1);
//       return acc;
//     } else if (curr !== "#") {
//       acc += curr;
//     }
//     return acc;
//   }, "");
//   console.log(str1);
//   let str2 = T.split("").reduce((acc, curr, i) => {
//     if (curr === "#") {
//       acc = acc.slice(0, -1);
//       return acc;
//     } else if (curr !== "#") {
//       acc += curr;
//     }
//     return acc;
//   }, "");
//   console.log(str2);
//   return str1 === str2;
// };

// refactored with 2 pointer solution
var backspaceCompare = function (S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  // iterate through the strings in reverse
  // store number of times the backspace key was pressed consecutively
  let sDel = 0;
  let tDel = 0;

  // characters remain in the strings
  while (i >= 0 || j >= 0) {
    //iterate through S
    while (i >= 0) {
      // console.log(S[i]);
      // console.log("sDel: ", sDel);
      // console.log("i: ", i);
      if (S[i] === "#") {
        sDel++;
        i--;
      } else if (sDel > 0) {
        sDel--;
        i--;
      } else break;
    }
    //iterate through T
    while (j >= 0) {
      // console.log(T[j]);
      // console.log("tDel: ", tDel);
      // console.log("j: ", j);
      if (T[j] === "#") {
        tDel++;
        j--;
      } else if (tDel > 0) {
        tDel--;
        j--;
      } else break;
    }

    // if characters don't match
    console.log(
      "S.charAt(i) , T.charAt(j) , (i,j): ",
      S.charAt(i),
      T.charAt(j),
      `(${i}, ${j})`
    );
    if (i >= 0 && j >= 0 && S.charAt(i) !== T.charAt(j)) return false;
    // if comparing against nothing
    if (i >= 0 !== j >= 0) return false;

    //decrement
    i--;
    j--;
    console.log("after decrement - i,j: ", i, j);
  }
  console.log("i,j: ", i, j);
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));

console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));
