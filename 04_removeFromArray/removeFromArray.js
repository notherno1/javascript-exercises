const removeFromArray = function(originalArray, ...theArgs ) {
    return originalArray.filter((ogItem) => !theArgs.includes(ogItem))
};

// Do not edit below this line
module.exports = removeFromArray;
