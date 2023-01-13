const leapYears = function() {
    arguments % 400 === 0 ? true : arguments % 100 === 0 ? false : arguments % 4 === 0 ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
