const repeatString = function(strToRepeat, numTimes) {
    let myOutput=strToRepeat;
    //convert to integer
    numTimes = parseInt(numTimes);
    // if number is 0 make output blank
    if (numTimes===0){
        myOutput="";
    // if number is negative then return error
    } else if (numTimes <0){
        myOutput="ERROR";
    } else {
        // for each increment of the number times add to the string. 
        for (let i=1;i<numTimes;i++){
            myOutput += strToRepeat;
        } 
    }

    // if string is blank then output should be blank
    if (strToRepeat=""){
        myOutput="";
    }
        console.log(myOutput);
return myOutput;
};

// Do not edit below this line
module.exports = repeatString;
