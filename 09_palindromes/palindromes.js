const palindromes = function (strPal) {
        // convert to lowercase and remove spaces
        strPal=strPal.toLowerCase().replace(/\s/g, '');
        // remove punctuation from string
        strPal=strPal.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        // create array to hold reverse order of string
        let strReverse=[];
    
        // loop through strPal in reverse and add characters to strReverse array
        for(let i=strPal.length-1;i>=0;i--){
            strReverse.push(strPal[i]);
        }
        // convert to string and trim("split") out the commas
        strReverse = strReverse.toString().split(",").join(""); 
     
        console.log("strPal: " + strPal);    
        console.log("strReverse: " + strReverse);
        // compare strings to determine if a palindrome.
        if (strPal == strReverse ) { 
            console.log("palindrome: yes");
            return true;
        } else {
            console.log("palindrome: no");    
            return false;
        }
    };
    

// Do not edit below this line
module.exports = palindromes;
