// variables and block scopes
{{{{{}}}}} // nested block scopes

{
    // block scope
    // var is variable declaration thats is avalible in global scope
    var test = 1;
    {
        // nested block scope
        // let, const - using let and const pretening to send variables into global scope
        let test2 = 1;
    }
    const test3 = 2; // avalible only in that scope
}

for (var i = 1; i <= 10; i++) {
    // block scope
    // if we declare var in there - its accesible in the global scope
}

for (let i = 1; i <= 10; i++) {
    // proper way - using let as a variable declaration
}

function sum(a, b) { 
    // function scope
    // its "okay" to use var for variables - we cant acces the variable that we defined in a function scope
    var result = a + b;
    return result;
}

// objects and arrays are mutable even when declared as a const 
const test4 = [1, 2, 3];
test4[0] = 21;


// ARROW FUNCTIONS
const X = function() {
    //'this' here is a caller of X
}

// its preffered way - it behaves mor predictably with closures
const Y = () => {
    // 'this' is NOT the caller of Y

    // Its the same 'this' found in Y scope
}