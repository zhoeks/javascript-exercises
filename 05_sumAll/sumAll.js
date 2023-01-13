const sumAll = function() {
    let numberCheck = [...arguments].every(function (test) {
        return test >= 0
    })
    let sortedArray = [Math.min(...arguments), Math.max(...arguments)];
    let returnValue = 0;

    if (numberCheck) {
    for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
        returnValue += i;
    } 
} else {
    return "ERROR";
}
      
    return returnValue;
};

// Do not edit below this line
module.exports = sumAll;
