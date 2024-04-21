const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let total = array.reduce((num, current) => num + current, 0);
  return total;
};

const multiply = function(array) {
  let total = array.reduce((num, current) => num * current, 1);
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let sum = num;
  if (num === 0 || num === 1) {
    sum = 1;
  } else {
    while (num > 1) {
      num --
      sum *= num; 
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
