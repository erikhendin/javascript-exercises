const reverseString = function(strToReverse) {
    if (strToReverse){
    return strToReverse.split("").reverse().join("");
    } else {
        return "";
    }

};

/*
1. split to split words into an array
2. reverse to reverse the letters of the array 
3. join to concatenate into a string we'll return to the user
 * 
 */


// Do not edit below this line
module.exports = reverseString;


