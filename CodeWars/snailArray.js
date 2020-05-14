// Snail Array
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
/*
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

// snail:: [[Numbers],[Numbers]] --> [Numbers]
//  define a function snail, which takes an n x n dimensional array as a parameter
//  and returns a single array with all elements organized according to clockwise
//  order
//  The order to push/map to new array would be of pattern:
//  subarray[0](all or 0 to subarray.length-1), subarray[1][-1], subarray[array.length-1] (reverse all or subarray.length-1 to 0)
const snail = (squareArray) => {
  let finalResult = [];
  let emptySet = [[]];
  // counter variable to catch/avoid recursive errors
  // let counter = 0
  // define snailLaunch function to take advantage of closure and protect variables
  const snailLaunch = (newArray) => {
    // deep copy incoming array to avoid mutating original
    let matrix = (newArray) ? Array.from(JSON.parse(JSON.stringify(newArray))) : Array.from(JSON.parse(JSON.stringify(squareArray)));
    let mLength = matrix.length;
    let subLength = (matrix[0]) ? matrix[0].length : 0;
    // counter++;
    // check if snail sort is complete or if initial value was empty set
    if ((matrix === emptySet) || (subLength === 0)) {
      return finalResult;
    }
    // moving clockwise accross the top of the full array and down the right side
    for (let i = 0; i < mLength; i++) {
      for (let j = 0; j < mLength; j++) {
        i === 0 ? finalResult.push(matrix[i][j]) : ((i < mLength - 1) && (j === mLength - 1)) ? finalResult.push(matrix[i][j]) : true;
      }
    }
    // moving clockwise across the bottom of the full array and up the left side
    for (let i = mLength - 1; i > 0; i--) {
      for (let j = mLength - 1; j > -1; j--) {
        i === mLength - 1 ? finalResult.push(matrix[i][j]) : ((j === 0) && (i < mLength - 1)) ? finalResult.push(matrix[i][j]) : true;
      }
    }
    // eliminate the "non-corner" values from the sides of the full array
    for (let i = 1; i < mLength - 1; i++) {
      matrix[i].splice(-1, 1);
      matrix[i].splice(0, 1);
    }
    // eliminate the bottom and top of the array to avoid duplicate work during recursion
    matrix.splice(-1, 1);
    matrix.splice(0, 1);
    // update mLength
    mLength = matrix.length;

    // if (counter === 7){
    //   return finalResult;
    // }
    // check for completion, return result or recurse
    if (mLength === 0) {
      return finalResult;
    } else {
      let recMatrix = Array.from(JSON.parse(JSON.stringify(matrix)))
      return snailLaunch(recMatrix);
    }
  };
  // return snailLaunch function
  return snailLaunch(squareArray);
};

// console.log(snail([[]]))//, []);
// console.log(snail([[1]]))//, [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //, [1, 2, 3, 6, 9, 8, 7, 4, 5];
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])) //, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);


/*for (let i = 0; i < mLength; i++) {
  for (let j = 0; j < subLength; j++) {
    if (mLength === 1) {
      for (let n = 1; n < subLength - 1; n++) {
        finalResult.push(matrix[0][n]);
      }
      return finalResult;
    } else if (i === 0) {
      finalResult.push(matrix[i][j]);
    } else if ((i > 0) && (i !== mLength - 1)&& (mLength > 1)) {
      finalResult.push(matrix[i][subLength - 1]);
      j = subLength;
    } else if (i === mLength - 1) {
      for (let k = subLength - 1; k > -1; k--) {
        finalResult.push(matrix[i][k]);
      }
      for (let m = mLength - 2 ; m > 0 ; m--) {
        finalResult.push(matrix[m][0]);
      }
      matrix.splice(0,1)
      matrix.splice(-1,1);
      mLength = matrix.length;
    }
  }
}*/







/*
for (let i = 0; i <= mLength; i++) {
  for (let j = 0; j < subLength; j++) {
    if (i === mLength){
      for (let m = 0; m < mLength; m++){
        finalResult.push(matrix[m][subLength - 1]);
      }
    } else if ((i !== 0) && (i !== mLength - 1)) {
      finalResult.push(matrix[i][subLength -1]);
      j = subLength;
    } else if (i === 0) {
      finalResult.push(matrix[i][j]);
    } else if (i === mLength - 1) {
      for (let k = subLength -1; k > -1; k--) {
        finalResult.push(matrix[i][k]);
      };
      // matrix.splice(-1,1);
      j = subLength;
    }
  }
  // matrix.splice(0,1);
  // mLength = matrix.length;
}
return finalResult;
}
*/
/*
let finalResult = matrix.reduce((acc, currSubArray,index) => {
  // reduce sub-arrays
  let subResult = currSubArray.reduce((acum, currSubValue, subIndex) => {
    if (index === 0 && subIndex !== subLength -1) {
      return acum.push(currSubValue);
    } else if (index === 0 && subIndex === subLength -1) {
      acum.push(currSubValue);
      currSubArray.splice(0,subLength);
      return;
    } else if (index === mLength - 1) {
      for (let i = subLength - 1; i > 0; i--) {
        acum.push(currSubArray[i])
      }
      currSubArray.splice(0,subLength);
      return acum;
    } else {
      currSubArray.splice(0,1);
      return acum.push(currSubValue);
    }
  }, [])
  return acc.push(subResult);
}, []);
return finalResult;
}
*/
