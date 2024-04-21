const leapYears = function(year) {
    let isLeapYear = false;
    if (typeof year != 'number') {
        return 'ERROR';
    } else {
        if (year < 100) {
            if (year%4 === 0) {
                isLeapYear = true;
            }
        } else if (year >= 100 && year < 400) {
            if (year%4 === 0 && year %100 != 0) {
                isLeapYear = true;
            }
        } else {
            if (year%100 === 0 && year%400 === 0) {
                isLeapYear = true;
            } else if (year%4 === 0 && year %100 != 0) {
                isLeapYear = true;
            }
        }
        
    }
    return isLeapYear;
   // return `${year} is a leap year`;    
    
};

// Do not edit below this line
module.exports = leapYears;
