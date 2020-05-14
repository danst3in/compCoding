// Binary Addition
// Implement a function that adds two numbers together and returns their sum in
// binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// addBinary :: (Number, Number) → (Binary) → (String)
// define function addBinary that has two parameters
const addBinary = (a , b) => {
  //function adds to numbers to get result sum
  let finalSum = a + b ;
  // convert the sum to a binary string representation of the sum
  // return the binary string
  return finalSum.toString(2);
};

console.log(addBinary(4, 3));
