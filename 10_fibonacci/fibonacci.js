
// fibonacci! 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233,377,610,987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229
const fibonacci = function(fibCount) {
  //convert to Integer
  fibCount = parseInt(fibCount);
    // No negative numbers allowed
    if(fibCount < 0) return "OOPS";
    //if 0 then return 0
    if(fibCount === 0) return 0;  
        // the following variables will be used to arrive the desired number from the fibonacci sequence
    let fib1=0; // this var starts at zero; will have new value for each loop (See "nv" below)
    let fib2=1; // this var starts at one 
    let valueSwitcher=0;          // i.e. 3=2+1

    // loop until the "fibCount" number parameter (passed in the function)
    for (let i=1; i<fibCount; i++){
      valueSwitcher = fib2; // valueSwitcher is a temp variable used to shift values
  // Fibonacci: the current number = previous number and the previous number before that(3=2+1 etd).
      fib2 = fib1 + fib2; // fib2 is the new number for the next iteration of the loop
      fib1 = valueSwitcher; // "nv" for next iteration of the loop
                            // these two variables, fib1 and fib2
        console.log("i: " + i);
        console.log("fib1: " + fib1);
        console.log("fib2: " + fib2);
        console.log("valueSwitcher: " + valueSwitcher);
    }
    console.log(fib2);
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
