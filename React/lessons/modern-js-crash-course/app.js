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
    console.log(1);
}

// its preffered way - it behaves mor predictably with closures
const Y = () => {
    // 'this' is NOT the caller of Y

    // Its the same 'this' found in Y scope
}

// single argument one line arrow function
const square = a => a * a;


// OBJECT LITERALS 
const mystery = 'answer';

const obj1 = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,
};

// https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/
// wild thing in JS
// console.log(obj1.mystery); // what will be the output?
// console.log(obj1.answer); // what will be the output?


// DESTRUCTURING and REST/SPREAD
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// with desctucturing we can write 3 lines above in one line like this
const { PI, E, SQRT2 } = Math;

// this is useful when we ned to use a few properties out of a bigger object, for example:
// const { Component, Fragment, useState } = require('react');

// next example of destructuring that will be used a lot with props desctructuring
const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({radius}, {precision = 2}) => {
    return (PI * radius * radius).toFixed(precision)
};

// console.log(circleArea(circle, 2));

// double ,, means that we skip one position
const [first, second,, forth] = [10, 20, 30, 40];

// this means that we want destructure it to variable named frst and the rest arguments into an array called restOfItems
const [frst, ...restOfItems] = [50, 60, 70, 80];

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

// this spreads just firstName and lastName into a person object
const {temp1, temp2, ...person} = data;

// console.log(person);


// MODERN WAY TO HANDLE PROMISES


// instead of then we use await
const fetchData = async () => {
    const resp = await fetch('https://api.github.com');
    const data = await resp.json();
    console.log(data);
}
