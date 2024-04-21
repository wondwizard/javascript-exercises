const palindromes = function (string) {
    const no = /[\W_]/g;
    
    let array = string.toLowerCase().split('');
    let newString = array.join('').replace(no,'');

    let reverseArray = array.reverse();
    let reverseString = reverseArray.join('').replace(no,'');
    
    if (newString === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
