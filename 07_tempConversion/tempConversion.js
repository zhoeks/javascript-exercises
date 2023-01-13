const convertToCelsius = function(num) {
  return Number(((num - 32) * .5555556).toFixed(1));
};

const convertToFahrenheit = function(num) {
  return Number((num * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
