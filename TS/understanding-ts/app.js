// union type - for combining types
var combine = function (input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') { // we have to work with the strict type of input
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
console.log(combinedAges);
