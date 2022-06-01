// global envoirement and the global object

// the base execution context is the global execution context
// GLOBAL - thing that's accessible from every part of the code


// variable envoirements (scope)
// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar)
// a();


// THE SCOPE CHAIN
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// PRIMITIVE TYPES - single value/smth that is not an object
// undefined
// null
// boolean
// number (its Float, only avaliable numeric type in JS)
// string
// symbol

// OPERATORS - take two parameters and return one result
// 2 + 1 -> plus is an operator


// OPERATORS PRECEDENCE AND ASSOCIATIVITY - co i w której kolejności będzie wykonywane (głównie odnosi się do operators)