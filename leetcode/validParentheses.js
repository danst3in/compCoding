/*
leetcode
Valid Parentheses


Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // create dictionary object to refer to correct matching pairs
  const matches = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // create a stack to manage brackets that have been seen
  const stack = [];

  // iterate through each char of string
  for (char of s) {
    //    add left brackets to the stack
    if (matches.hasOwnProperty(char)) {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // if right bracket, check if stack.pop() value is matching bracket
      if (matches[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // returns true if stack is empty (!0 === true) and all pairs have been popped off
  return !stack.length;
};
