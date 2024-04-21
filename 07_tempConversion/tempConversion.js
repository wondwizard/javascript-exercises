const convertToCelsius = function(temp) {
  celsius = (temp - 32)/1.8;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  faren = (temp * 1.8) + 32;
  return +faren.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
