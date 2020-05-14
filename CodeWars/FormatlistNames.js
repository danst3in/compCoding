// Format List Names

// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for
// the last two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''

// list :: [{key: string},...] --> String
// define a function list that takes as a parameter an array containing objects
// the array can be empty or contain objects with a name key and a value.
// Return the values as a single comma seperated string. If there are more than
// two key/value pairs the final two should be returned seperated by "&"

// const list = (names) => {
//   let finalStr = ''
//   if (names.length === 0) {
//     return finalStr ;
//   } else if (names.length === 1) {
//     return `${names[0]['name']}` ;
//     } else if (names.length === 2) {
//       return `${names[0]['name']} & ${names[1]['name']}` ;
//     } else if (names.length > 2) {
//       for (let i = 0; i < names.length - 2; i++) {
//         // console.log(`in the loop: `) ;
//         finalStr += `${names[i]['name']}, ` ;
//       }
//       // console.log(`after the loop: ${finalStr}`) ;
//       return finalStr += `${names[names.length - 2]['name']} & ${names[names.length - 1]['name']}` ;
//     }
// } ;

// try to refactor with reduce
const list = (names) => {
  // reduce array to a single value, the final string
  const finalResult = names.reduce((acc, currentValue, i, currArr) => {
    // conditional for array length 1
    if (i === 0) {
      return acc = currentValue['name'];
    }
    // conditional for array length 2 or last two values in the set
    if (i === currArr.length - 1) {
      return acc += ` & ${currentValue['name']}` ;
    } else {
      // conditional for all values inbetween first and last value
      return acc += `, ${currentValue['name']}` ;
    }
  }, '') ;
  // return result
  return finalResult ;
} ;

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])) ;
// returns 'Bart, Lisa & Maggie'

console.log(list([{name: 'Bart'}, {name: 'Lisa'}])) ;
// returns 'Bart & Lisa'

console.log(list([{name: 'Bart'}])) ;
// returns 'Bart'

console.log(list([])) ;
// returns ''
