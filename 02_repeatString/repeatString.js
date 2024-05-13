const repeatString = function(message, repeats) {
    
    if (repeats < 0) {
        return "ERROR"
    }
    
    let finalMessage = '';
    let i = 0;

    for (i = 0; i < repeats; i++) {
        finalMessage+=message;
    }
    return finalMessage
};

// Do not edit below this line
module.exports = repeatString;
