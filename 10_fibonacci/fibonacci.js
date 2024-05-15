const fibonacci = function(number) {
    if(number<0) return "OOPS";
    if(parseInt(number) === 0) return 0;
    if(parseInt(number) === 1 || parseInt(number) === 2) return 1;

    let nminus1 = 1,
        n = 1,
        newn = 0;

    for (let i = 3; i <= parseInt(number);i++) {
        newn = nminus1 + n;
        nminus1 = n;
        n = newn;
    }

    return n;

};

// Do not edit below this line
module.exports = fibonacci;
