// Calculating with Functions
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
//
/*
const resolve = (...args) => {
  // console.log(`inside resolve: x${args[0][0]}, y${args[0][1][0]}, z${args[0][1][1]}`);
  if (args[0][1][1] === 'add') {
    return plus(args[0], args[1]) ;
  } else if (args[0][1][1] === 'sub') {
          return minus(args[0], args[1]) ;
        } else if (args[0][1][1] === 'mult') {
                // console.log(`inside resolve times if: ${args}`);
                return times(args[0], args[1]) ;
              } else {
                      return dividedBy(args[0], args[1]) ;
                    }
} ;
const zero = (...args) => {
  // console.log(`inside 0: ${args}`);
  if (args.length === 0) {
    return 0;
} else if (args.length > 0) {
        return resolve([0, args[0], args[1]]);
      }
}
const one = (...args) => {
  // console.log(`inside 1: ${args}`);
  if (args.length === 0) {
    return 1;
} else if (args.length > 0) {
        return resolve([1, args[0], args[1]]);
      }
}
const two = (...args) => {
  // console.log(`inside 2: ${args}`);
  if (args.length === 0) {
    return 2;
} else if (args.length > 0) {
        return resolve([2, args[0], args[1]]);
      }
}
const three = (...args) => {
  // console.log(`inside 3: ${args}`);
  if (args.length === 0) {
    return 3;
} else if (args.length > 0) {
        return resolve([3, args[0], args[1]]);
        }
}
const four = (...args) => {
  // console.log(`inside 4: ${args}`);
  if (args.length === 0) {
    return 4;
} else if (args.length > 0) {
        return resolve([4, args[0], args[1]]);
      }
}
const five = (...args) => {
  // console.log(`inside 5: ${args}`);
  if (args.length === 0) {
    return 5;
} else if (args.length > 0) {
        return resolve([5, args[0], args[1]]);
      }
}
const six = (...args) => {
  // console.log(`inside 6: ${args}`);
  if (args.length === 0) {
    return 6;
} else if (args.length > 0) {
        return resolve([6, args[0], args[1]]);
      }
}
const seven = (...args) => {
  // console.log(`inside 7: ${args}`);
  if (args.length === 0) {
    return 7;
} else if (args.length > 0) {
        return resolve([7, args[0], args[1]]);
      }
}
const eight = (...args) => {
  // console.log(`inside 8: ${args}`);
  if (args.length === 0) {
    return 8;
} else if (args.length > 0) {
        return resolve([8, args[0], args[1]]);
      }
}
const nine = (...args) => {
  // console.log(`inside 9: ${args}`);
  if (args.length === 0) {
    return 9;
} else if (args.length > 0) {
        return resolve([9, args[0], args[1]]);
      }
}

const plus = (...args) => {
  // console.log(`inside plus: ${args}`);
  if (args.length === 1) {
    return [args[0], 'add'] ;
    } else if (args.length === 2) {
        return args[0][0] + args[0][1][0] ;
      }
}
const minus = (...args) => {
  // console.log(`inside minus: ${args}`);
  if (args.length === 1) {
    return [args[0], 'sub'] ;
    } else if (args.length === 2) {
        return args[0][0] - args[0][1][0] ;
      }
}
const times = (...args) => {
  // console.log(`inside times: ${args}`);
  if (args.length === 1) {
    return [args[0], 'mult'] ;
    } else if (args.length === 2) {
        // console.log(`inside times again: ${args}`);
        return args[0][0] * args[0][1][0] ;
      }
}
const dividedBy = (...args) => {
  // console.log(`inside dividedBy: ${args}`);
  if (args.length === 1) {
    return [args[0], 'divv'] ;
    } else if (args.length === 2) {
        // console.log(`${args[0][0]} / ${args[0][1][0]}`)
        return Math.floor(args[0][0] / args[0][1][0]) ;
      }
}
*/

//Refactor after analyzing solutions on CodeWars

// create function to test for digit or operator
// determinator:: (Function) || (Number) --> Function(Number) || Number

const determinator = (digit) => {
  // console.log(`digit: ${digit}`);
  return (operator) => {
    // return digit if passed argument is a number --> it is the first time running
    // return operator(digit) if passed argument is a function --> it is the second time running
    // return operator ? (console.log(digit),operator(digit)) : digit; // replaces next line for testing
    return operator ? operator(digit) : digit;
  }
}

// integers are represented by invocations of determinator() with their numeric
// value passed as an argument
let zero = determinator(0);
let one = determinator(1);
let two = determinator(2);
let three = determinator(3);
let four = determinator(4);
let five = determinator(5);
let six = determinator(6);
let seven = determinator(7);
let eight = determinator(8);
let nine = determinator(9);

function plus(r) {
  return (l) => {
    return l + r;
  };
}
function minus(r) {
  return (l) => {
    return l - r;
  };
}
function times(r) {
  return (l) => {
    return l * r;
  };
}
function dividedBy(r) {
  return (l) => {
    return l / r;
  };
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
