// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

// solution(num):: Number --> Number
// solution is a function that accepts one parameter, which is a number
// this number is the upper bound to search for numbers that are multiples of 3 or 5

const solution = (num) => {
  // define object to keep tally to avoid duplicates per Note
  let tallyCheck = {};
  // define array including all numbers from 1 to num
  const numArray = [];
  for (let i = 1; i < num; i++) {
    numArray[i] = +i;
  }
  // create reduce statement to iterate and sum
  const finalResult = numArray.reduce((acc, currentVal,i) => {
    // check if value has been iterated before
    tallyCheck[currentVal] = (tallyCheck[currentVal] || 0) + 1 ;
    // create condition to react to duplicates
    if(tallyCheck[currentVal] <= 1) {
      // create condition to check for multiples of 3 or 5
      if (currentVal % 3 === 0 || currentVal % 5 === 0) {
        return acc += currentVal;
      };
      return acc;
    }
    return acc;
  },0)
  // return result
  return finalResult;
};

console.log(solution(10))
