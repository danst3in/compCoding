// Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer
// has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good"
// control string would be aaabbbbhaijjjm meaning that the printer used three times
// color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad"
// control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
// You have to write a function printer_error which given a string will output the
// error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.

// example output
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

// printerError :: [String] → 'Number/Number'
// printerError is a function that accepts a string with an output of a string
// containing a number ratio

// reduce(() => {},)  // basic syntax for es6 reduce
//
// declare and initialize an array to hold the characters of the input string
// error_printer :: [String] → 'Number/Number'
// error_printer is a function that accepts a string with an output of a string
// containing a number ratio

// reduce(() => {},)  // basic syntax for es6 reduce
//
// declare and initialize an array to hold the characters of the input string
let arrayString = [];
// declare and define a function that will track the error rate 'x/y'
// x = # of errors, y = length of string

const printerError = (string) => {
  let erorrNum = 0;
  const outputLength = string.length;
  arrayString = string.split('');
  // console.log(arrayString);
    const resultString = arrayString.reduce((acc, currChar) => {
    if (currChar > 'm') {
      // increase count of errors
      ++erorrNum;
      // return acc = `${erorrNum}/${outputLength}`;
    }
    return acc = `${erorrNum}/${outputLength}`;
  },'');
  return resultString;
}

// example output
// const s ="aaabbbbhaijjjm"
// console.log(printerError(s)) // => "0/14"
//
const s = "aaaxbbbbyyhwawiwjjjwwm"
console.log(printerError(s)) // => "8/22"


// attempt to refactor at O(n) complexity using an object for direct lookup
// // printerError :: [String] → {String:Number} → 'Number/Number'
// printerError is a function that accepts a string with an output of a string
// containing a number ratio
