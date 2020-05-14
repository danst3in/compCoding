// Find the Odd Int
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// findOdd :: [Numbers] --> Number
// define findOdd, a function that accepts one parameter that is an array of numbers

const findOdd = (numArray) => {
  // create object to hold the integer, it's tally, and if it is odd/even
  const counts = {} ;
  let finalResult = 0;
  numArray.forEach((el, i, array) => {
    // analyze the contents of the numArray, and count the number of times each
    // integer appears.
    counts[el] = (counts[el] || 0) + 1 ;
  });
  // console.log(counts);
  // iterate through object and return finalResult if not even
  for (let num in counts) {
    if (counts[num] % 2 !== 0) {
      finalResult = +num ;
    };
  }
  return finalResult;
} ;

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) ;
