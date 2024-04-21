const fibonacci = function(num) {
    let n1 = 1, n2 = 1, nextTerm, array = [];
    let number = +num;
    if (number === 0) {
        return 0
    } else if (number < 0) {
        return 'OOPS';
    } else if (number === 1 || number === 2) {
        return 1
    } else {
        array.push(n1, n2);
        for (let i = 1; i <= number - 2; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
            array.push(n1, n2);
        }
        let last = array[array.length - 1];
        return last;
    }
};

// Do not edit below this line
module.exports = fibonacci;
