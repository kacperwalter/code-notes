function add3(n1, n2) {
    return n1 + n2;
}
// type void if function doesn't return anything
function printResult(num) {
    console.log('Result: ' + num);
}
// function type (declaring what function gets and what it returns)
var combineValues;
combineValues = add3;
console.log(combineValues(8, 8));
// callback functions type
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
