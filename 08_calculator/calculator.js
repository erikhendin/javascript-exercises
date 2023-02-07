const add = function(num1, num2) {
  // check if each argument passed is a number
  if (typeof num1 != "number" || typeof num2 != "number"){
    return "ERROR - you can only add numbers with this function";
  } else {
    // add numbers together and return them
    return num1+num2;
  }
};

const subtract = function(num1, num2) {
  // check if each argument passed is a number
  if (typeof num1 != "number" || typeof num2 != "number"){
    return "ERROR - you can only add numbers with this function";
  } else {
    // subtract one number from the other and return result
    return num1-num2;
  }
};

const sum = function(myArray) {
	let mySum=0;
  // check if an array is being passed, check if an empty array (length=0)
  if (Array.isArray(myArray) && myArray.length != 0){
    // loop through array and get sum - adding position i value of array to mySum 
    for (let i=0; i<myArray.length;i++){
      mySum += myArray[i];
    }
  } 
  // if the array was empty mySum will remain at 0
  return mySum;
}


const multiply = function(myArray) {
  let myResult=1;
  // check if an array is being passed
  if (Array.isArray(myArray)){ 
    // loop through array and multiply position i value of array to myResult
    for (let i=0; i<myArray.length;i++){
      myResult *= myArray[i];
    }
  } 
  return myResult;
};

const power = function(num1,num2) {
  // check if each item is a number
  if (typeof num1 != "number" || typeof num2 != "number"){
    return "ERROR - you can only use numbers with this function";
  } else {
    // return the value of num1 to the power of num2
    return Math.pow(num1,num2);
  }
};

const factorial = function(num) {
  let myResult=1;
  // number must be positive to do factorial
  if(num < 0){
    return "number has to be positive."
    // factorial of 0 and 1 are 1
  } else if (num === 0 | num === 1){
    return myResult;
  } else if (num>1){
    // loop through numbers from n-1 (i.e. if 4 1,2,3,4) and multiply by each
    // i.e. 4*3*2*1
    for (let i=num; i>=1;i--){
      myResult = myResult * i;
    }
    return myResult;
  } 
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
