// Remove the Minimum
// Given an array of integers, remove the smallest value. Do not mutate the
// original array/list. If there are multiple elements with the same value, remove
// the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// removeSmallest :: [Numbers] → [Numbers]
// define a function that takes an array as a parameter and returns a similar
// array with the smallest value removed.

// refactored attempt
const removeSmallest = (numbers) => {
  let minNum = Math.min(...numbers) ;
  if (numbers === []) {
    return [] ;
  }
  return numbers.filter((el, i) => {
    return i !== numbers.indexOf(minNum);  
  });
} ;

// First attempt without knowing of/using "indexof"
// const removeSmallest = (numbers) => {
//   let resultArr = [];
//   let indexArr = [];
//   let minNum = Math.min(...numbers) ;
//   // let minArray = [];
//   if (numbers === []) {
//     return resultArr ;
//   }
//   numbers.forEach((el, i) => {
//     if (el === minNum) {
//       indexArr.push(i) ;
//     }
//     resultArr.push(el) ;
//     // console.log(el);
//     // console.log(numbers[el]);
//     // console.log(resultArr);
//   });
//   resultArr.splice(indexArr[0], 1) ;
//   return resultArr;
// } ;

  // minArray.push(Math.min(...numbers));

//   let finalResult = numbers.reduce((acc, currentValue) => {
//     if (currentValue !== Math.min(...numbers) || (minArray.includes(currentValue) && !acc.includes(currentValue))) {
//       acc.push(currentValue) ;
//       return acc ;
//     }
//     return acc ;
//   }, []);
//   return finalResult;
// }


// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])) // = [2,2,2,1]
