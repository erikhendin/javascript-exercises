    // parameters: strOriginal -original string we pass, the numShift will be number of characters to shift/move
const caesar = function(strOriginal, numShift) {

    // this array will contain "encrypted" cipher characters
    let arrCipher = [];

    // loop through characters in string
    for(let i=0;i<strOriginal.length;i++) {

        // regex - check if each character is non-alpha chacter (this would include spaces, but not a-z or A-Z)
        if(!(/[a-zA-Z]/.test(strOriginal[i]))){
            // if not an alphabetic character, leave as is and add it to arrCipher
            arrCipher[i]=strOriginal[i];
            // continue through for loop 
            continue;
        }

        // get the character code of the alpha character and add the "numShift" parameter passed to the function
        let charCodeSum = strOriginal.charCodeAt(i) + numShift;

        // character codes a-z is 97-122 and caps A-Z is 65-90 

        // we need to handle when the "shift" goes "past" the alphabet letters
        // if the letter is lower case 
        if (strOriginal[i] == strOriginal[i].toLowerCase()) {
            // then it will be between 97-122
        // charCodeSum is the character code for the letter + numShift (letter shift)
        // if the shift number + char code is greater than 97-122 
            if(charCodeSum>122)  {   
                while(charCodeSum>122){ // while over a-z range, subtract 26 and that should put you in alphabet range  
                    charCodeSum-=26; // // if not, the while loop will keep subtracting 26
                            // example if you have z (122) + n=2 then you have 124
                            // 124-26 = 98 = b (z shift 2 = b)
                }
            } else {  
                while(charCodeSum<97){ // same as above in reverse - if letter code is below range
                    charCodeSum+=26;   // then add 26 - i.e. say letter is(97) and shift n=-2
                            // 95 + 26 = 121 = y ( a shift -2 = y)
                }
            }
        } else { // Same thing/same logic for Capital letters A=65 and Z=90
            if(charCodeSum>90) { // if the sum of char code plus the num shift is over 90
                while(charCodeSum>90){
                    charCodeSum-=26;  // subtract 26 - this will put you back in alpha range
                }                     // if letter is y(89) and shift is 2
                                      // 91 - 26 = 65 |  65=A (so shift of 2 from y is a )
            } else {
                while(charCodeSum<65){
                    charCodeSum+=26;
                }
            }
        }
    arrCipher[i]=String.fromCharCode(n);    
    }
console.log(arrCipher.join(''));
return arrCipher.join('');
};

// Do not edit below this line
module.exports = caesar;
