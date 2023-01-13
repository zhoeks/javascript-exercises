const leapYears = function(number) {
  return number % 400 === 0 ? true : number % 100 === 0 ? false : number % 4 === 0 ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
