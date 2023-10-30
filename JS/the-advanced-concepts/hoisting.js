// exercise 1 - hoisting
// hoisting happens in every execution context
// hoisting is the process of putting all the variable declarations and function declarations into memory during the compile phase and assign undefined to all variables
a();

function a() {
  console.log("hi");
}

// in this case, first function a() will be hoisted to the top of the file and overwrite the second function a()
function a() {
  console.log("bye");
}

// exercise 2 
var favouriteFood = "grapes";

var foodThoughts = function () {
  // hoisting happens in every execution context (and thats why favouriteFood is undefined - because new var declaration was hoisted inside the function when new execution context was created)
  console.log("Original favourite food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("New favourite food: " + favouriteFood);
}

foodThoughts();

// exercise 3

function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() { // will run this function because it was hoisted to the top of the execution context
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());