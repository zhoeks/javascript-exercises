const sumAll = function() {
    //Confirm all elements are positive integers
    let numberCheck = [...arguments].every(function (test) {
        return test >= 0 && typeof test == 'number';
    })
    //sort array min to max
    let sortedArray = [Math.min(...arguments), Math.max(...arguments)];
    let returnValue = 0;
    //iterate through sorted array adding each iteration to the total
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
