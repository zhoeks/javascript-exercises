const sumAll = function(num1, num2) {
    let returnValue = 0;
    if (num1 > num2) {
        for (let i = num1; i <= num2; i++) {
            returnValue += i;
        }
    } else if (num1 < num2) {
        for (let i = num2; i <= num1; i++) {
            returnValue += i;
        }
    }
    console.log(returnValue)
};

// Do not edit below this line
module.exports = sumAll;
