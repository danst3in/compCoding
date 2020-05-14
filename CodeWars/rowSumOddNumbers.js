// Sum of Odd Numbers
// Given the triangle of consecutive odd numbers:
//               1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// Calculate the row sums of this triangle from the row index
// (starting at index 1) e.g.: see tests below code


// rowSumOddNumbers :: (Number) → (Number)
// the function rowSumOddNumbers accepts a number as a parameter
// the sum of the corresponding row of the odd number triangle will be printed


const rowSumOddNumbers = (n) => {
  // each row of odd numbers contains the row length equal to the row number
  // for example row 2 contains 2 numbers, row 3 contains 3 numbers and so on
  // if n represents the row number, the first number in each row is equal to
  // n*n - (n-1) for n>1
  let rowStart = 0;
  let finalSum = 0;
  if (n===1) {
    return 1;
  } else {
    rowStart = n * n - (n - 1) ;
    // console.log(`rowstart: ${rowStart}`);
    for (let i = 0; i < n; i++){
      finalSum += rowStart + 2*i ;
      // console.log(`i: ${i}`);
      // console.log(`sum: ${finalSum}`);
    }
    return finalSum;
  }
}

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8
// console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
