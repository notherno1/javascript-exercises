const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number' 
    || firstNumber < 0 || secondNumber < 0 )
        return "ERROR";
    
    let maxNum = Math.max(firstNumber,secondNumber);
    let minNum = Math.min(firstNumber,secondNumber);
    let i = 0;
    let sum = 0;

    for(i=0;i<maxNum-minNum+1;i++) {
        sum+=minNum+i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
