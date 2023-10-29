// exercise 1 - hoisting
a();

function a() {
  console.log("hi");
}

// in this case, first function a() will be hoisted to the top of the file and overwrite the second function a()
function a() {
  console.log("bye");
}