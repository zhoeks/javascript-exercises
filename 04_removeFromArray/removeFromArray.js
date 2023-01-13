const removeFromArray = function() {
    //split arguments into array to return and arguments to remove
    let array = arguments[0];
    let args = [...arguments].splice(1);
    let indexToRemove = [];
    for (let i = 0; i < args.length; i++) {
        indexToRemove.push(array.indexOf(args[i]))
    }
    
    console.log(indexToRemove);
};

// Do not edit below this line
module.exports = removeFromArray;
