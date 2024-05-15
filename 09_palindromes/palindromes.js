const palindromes = function (word) {
    const letters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let rawChars=word.toLowerCase().split('').filter(letter => letters.includes(letter));

    return rawChars.join('') === rawChars.reverse().join('')

};


// Do not edit below this line
module.exports = palindromes;
