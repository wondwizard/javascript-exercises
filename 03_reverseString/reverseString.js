const reverseString = function(string) {
    let stringArray = string.split('');
    let reverseStringArray = stringArray.reverse();
    reversedString = reverseStringArray.toString();
    return reversedString.replaceAll(',', '');    

};

// Do not edit below this line
module.exports = reverseString;
