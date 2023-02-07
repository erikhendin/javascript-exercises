const sumAll = function(firstNum, lastNum) {
// if the first number is larger than the second, reverse the two so code works either way
  if(firstNum>lastNum){
    let temp=firstNum;
    firstNum=lastNum;
    lastNum=temp;
  }
  if(Math.sign(firstNum)===-1 || Math.sign(lastNum===-1) || typeof firstNum != "number" || typeof lastNum != "number"){
    return "ERROR";
  } else{
    // hold the sum in a separate variable
    let sum=0;
    // loop through the numbers and hold the total in sum variable
        for (let i=firstNum;i<=lastNum;i++){
        sum+=i;
        }
        // return the sum - the total of the number "range" added up
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
