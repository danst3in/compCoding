/*
Leetcode

Valid Parenthesis String
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
 */

/**
 * @param {string} s
 * @return {boolean}
 */

// try again using similar solution to recent problems of +1, -1 positive vs negative outcome moving forward and moving backward
//
// moving left to right if count of ')' is greater than count of '(' + count of  '*' return false
var checkValidString = function (s) {
  let score = 0;

  for (let i = 0; i < s.length; i++) {
    // console.log("left to right score: ", score);
    if (s[i] === "(" || s[i] === "*") {
      score++;
    } else {
      score--;
    }
    if (score < 0) return false;
  }
  score = 0;
  // moving right to left if count of '(' is greater than count of ')' + count of  '*' return false
  for (let i = s.length - 1; i >= 0; i--) {
    // console.log("right to left score: ", score);
    if (s[i] === ")" || s[i] === "*") {
      score++;
    } else {
      score--;
    }
    if (score < 0) return false;
  }
  return true;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
console.log(checkValidString("(*()"));
console.log(checkValidString("(((******)))"));
console.log(checkValidString("(((******))"));
console.log(
  checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*")
);

// var checkValidString = function (s) {
//   let matches = {
//     "(": ")",
//     "*": "*",
//   };
//
//   // create a stack to keep track of parens, braces, or brackets
//   const stack = [];
//   let stars = 0;
//   // iterate over the input
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     // check if character is in matches
//     if (matches.hasOwnProperty(char)) {
//       //push to stack
//       stack.push(char);
//       if (char === "*") {
//         stars++;
//       }
//     } else if (char === ")") {
//       // if character is a closing of a pair, pop off the stack and check if it matches with the correct pair
//       let tempPop = stack.pop();
//       if (tempPop === "*") {
//         stars--;
//       }
//       if (
//         stack.length === 0 ||
//         (matches[tempPop] !== char && matches[tempPop] !== "*")
//       ) {
//         // if the pair is incorrect return false
//         return false;
//       }
//       // else if (matches[tempPop] !== char && stars > 1) {
//       //   // if the pair is incorrect and an asterisk is available
//       //   // decrement star count and put popped item back on stack
//       //   stack.push(tempPop);
//       //   stars--;
//       // }
//     }
// //   }
//
//   console.log("stack: ", stack, stack.length);
//   console.log("stars: ", stars);
//   // if (stack.length <= stars) {
//   //   return true;
//   // }
//   // returns true if stack is empty (!0 === true) and all pairs have been popped off
//   return !stack.length;
// };
