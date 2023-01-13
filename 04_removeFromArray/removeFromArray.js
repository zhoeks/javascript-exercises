const removeFromArray = function() {
    let array = arguments[0];
    let args = [...arguments].splice(1);
    console.log(args)
};

// Do not edit below this line
module.exports = removeFromArray;
