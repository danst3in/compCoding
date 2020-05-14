// Unique In Order
// https://www.codewars.com/kata/unique-in-order/train/javascript
// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each
// other and preserving the original order of elements.
//
// uniqueInOrder :: [String||Numbers] → [String||Numbers]
// uniqueInOrder is a functon that accepts an array of strings or numbers and
// returns an Array of the same type that has been sorted to push repeating values
// to the end of the array

// define the function uniqueInOrder
const uniqueInOrder = (input) => {
  // check type of input. if not an array, convert to array
  // console.log(typeof(input));
  let inputArray = [];
  if (!Array.isArray(input)) {
  inputArray = Array.from(input) ;
  // console.log(typeof(inputArray));
  } else {
    inputArray = input ;
    }
  // use reduce to iterate through inputArray
  const resultArr = inputArray.reduce((acc,currVal) => {
    // conditional statement to sort values
    // if the value has not been seen before, push to acc
    if (acc[acc.length-1] !== currVal) {
      acc.push(currVal) ;
    }
    //return acc
    return acc;
  }, []);
  // console.log(`resultArr: ${resultArr}`)
  return resultArr;
} ;

// test cases
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

/*
// uniqueInOrder :: [String||Numbers] → [String||Numbers]
// uniqueInOrder is a functon that accepts an array of strings or numbers and
// returns an Array of the same type that has been sorted to push repeating values
// to the end of the array

// define the function uniqueInOrder
const uniqueInOrder = (input) => {
  // check type of input. if not an array, convert to array
  // console.log(typeof(input));
  let inputArray = [];
  if (!Array.isArray(input)) {
  inputArray = Array.from(input) ;
  // console.log(typeof(inputArray));
  } else {
    inputArray = input ;
    }
  //define array to hold duplicate values
  // const dupeArray = [] ;
  // use reduce to iterate through inputArray
  const resultArr = inputArray.reduce((acc,currVal, i) => {
    // conditional statement to sort values
    // if the value has not been seen before, push to acc
    if (!acc.includes(currVal) || acc[acc.length-1] !== currVal) {
      acc.push(currVal) ;
    }
    // else if (!dupeArray.includes(currVal) && acc[acc.length-1] !== currVal) {
    //   // if the value has been seen before next to the same value, push to dupeArray
    //   dupeArray.push(currVal) ;
    // }
    // conditional statement to decide if it is time to concat the arrays on
    // final iteration
    // if (i === inputArray.length-1) {
    //   acc = acc.concat(dupeArray);
    // }
    // return acc
    // console.log(`acc: ${acc}`);
    // console.log(`dupe: ${dupeArray}`);
    return acc;
  }, []);
  console.log(`resultArr: ${resultArr}`)
  return resultArr;
} ;
*/
