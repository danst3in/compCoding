// leetcode
/*
Group Anagrams
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// try by creating an object using sorted strings as keys
var groupAnagrams = function (strs) {
  let anaObj = {};
  let finalResult = [];

  // anaObj[sortedStr] = anaObj[sortedStr] || [];

  strs.forEach((str) => {
    //convert each string to a sorted version of itself
    let sortedStr = str.split("").sort().join("").toString();
    //create key in object equal named the sorted string and equal to empty array
    // or if it already exists leave it be
    anaObj[sortedStr] = anaObj[sortedStr] || [];
    //push string to the array on key where it matches the sorted string
    anaObj[sortedStr].push(str);
  });

  Object.keys(anaObj).forEach((key) => {
    // push each array to result array
    finalResult.push(anaObj[key]);
  });
  return finalResult;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// var groupAnagrams = function(strs) {
//   let storeIDx = 0;
//   let storageObj = {};
//   let bool;
//
//   // assign first key val pair
//   storageObj[storeIDx] = [strs[0]];
//
//   // loop through the strings
//   for (let i = 0; i < strs.length; i++) {
//     bool = true;
//     // loop through each char of array[i]
//     for (let j = 0; j < strs[i].length; j++) {
//       // loop through each object key
//       for (var variable of iterable) {
//
//       }
//       for (let [key,val] in storageObj) {
//         if (storageObj.hasOwnProperty(key)) {
//
//         }
//       }
//       if (bool) {
//
//       }
//
//       strs[i][j]
//     }
//     storeIDx++
//   }
//   // check current object storage for array of current value
//   // add current value to object storage array if it doesn't exist?, otherwise note that storage[key]
//   // compare current val to storageObj keys and if they contain the same letters, add to the array there
//   // if they include the same letters add them to object storage array
//
//
// };

// try with recursive reduce
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
// strs.reduce((acc, cur) => {}, true);
//   const helperFunc=(strArr)=>{
//     let finalResult = strArr.reduce((strAcc,strCurr, i) =>{
//       // check length of string 1 vs string 2
//       if (strAcc.length===strCurr.length) {
//         //check char of current word/str
//         return strAcc.split('').filter((char) => strCurr.includes(char))
//
//           return strAcc
//         },)
//       }
//
//     })
//
//   }
//
// };
