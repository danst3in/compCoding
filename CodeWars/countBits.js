// Count Bits

// Write a function that takes an integer as input, and returns the number of
// bits that are equal to one in the binary representation of that number. You
// can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// countBits :: Number → [String]→ Number
// define a function countBits that accepts one parameter of type integer
// and counts the number of bits equal to 1 in the binary representation of the number

// define function countBits that takes positive integer parameter
// const countBits = (num) => {
//   // convert number to string binary and then to array
//   let binaryStringArr = num.toString(2).split(``) ;
//   // iterate through binary string array and sum values equal to 1
//   let finalSum = 0;
//   for (let el of binaryStringArr) {
//     finalSum += +el;
//   }
//   // console.log(finalSum);
//   // console.log(binaryStringArr);
//   // return the count as the final result
//   return finalSum ;
// } ;
//
// console.log(countBits(1234));

// refactored solution using original idea of using array length after I
// realized it wasn't working in first solution because i needed to use join("")
// after I used split("0")
const countBits = (num) => {
  // convert number to string binary and then to array by splitting on "0"
  // join array on "" to have an array of only 1's
  // return the array.length as the final result
  return num.toString(2).split(`0`).join(``).length ;
} ;

console.log(countBits(1234));
