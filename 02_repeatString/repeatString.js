const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let word = '';
    for (num; num>0; num--) {
        word += string
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
