const sumAll = function(...arguments) {
    let sortedArray = [Math.min(...arguments), Math.max(...arguments)];
    let returnValue = 0;
    for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
        returnValue += i;
    }
    
    return returnValue;
};

// Do not edit below this line
module.exports = sumAll;
