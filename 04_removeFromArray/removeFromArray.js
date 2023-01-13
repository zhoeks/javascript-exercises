const removeFromArray = function() {
    //split arguments into array to return and arguments to remove
    let array = arguments[0];
    let args = [...arguments].splice(1);
    let returnArray = array.filter( (element) => !args.includes(element) );

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
