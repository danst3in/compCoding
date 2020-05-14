// define function that accepts one param (arrayOfNumbers)
const wheatFromChaff = (values) => {
    // creating positive and negative arrays to hold numbers for later
  	let posArray = [];
  	let negArray = [];

  	// populating negArray with all negative values from values array
    for (let i = 0; i < values.length; i++){
      if (values[i] < 0){
        negArray.push(values[i]);
      }
    }

    // iterate through original array
    let finArray = values.reduce(function(acc, currentVal, index){
      //console.log(`posArray= ${posArray}, negArray= ${negArray}`)
      //console.log(acc, posArray);

    // if you come upon a negative value
      if (currentVal < 0){
       	//console.log(`currentval and indexof neg:`, currentVal, negArray.indexOf(currentVal));

        //check if value exists in negArray,
        if (negArray.indexOf(currentVal) !== -1) {
        //if neg number exists in negArray, push current value
        acc.push(currentVal);
        // remove currentVal from negArray
        negArray.shift() ;
        }
        else {
          // if number doesn't exist in negArray (because it has already been processed)
        // push most recent positive value
        acc.push(posArray[posArray.length - 1]) ;
        // remove most recent positive value from positive array
        posArray.pop(posArray.length - 1) ;
        }
      }
    // if you come upon a positive value
      else {
        // if negArray is not empty
        if (negArray.length > 0){
        // push the last negative value
        	acc.push(negArray[negArray.length-1]);
          // remove last negative value from negArray
        	negArray.pop();
          //push current value to posArray
          posArray.push(currentVal);
        } else {
          // if negArray is empty
          // push current value
          acc.push(currentVal);
        }

          }
    //return to acc
      return acc;
    },[])

    
    //return the new array
    return finArray;
}
