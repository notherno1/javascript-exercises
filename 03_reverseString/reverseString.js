const reverseString = function(originalString) {
    
    // let splitString = originalString.split('');
    // let reversedString = [];
    // let lengthString = originalString.length;
    // let i = 0;

    // for(i=0; i <lengthString; i++) {
    //     reversedString[i] = originalString[lengthString-1-i];
    // }

    // return reversedString.join('');

    return originalString.split("").reverse().join("");
};



// Do not edit below this line
module.exports = reverseString;
