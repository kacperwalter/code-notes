const button = document.querySelector("button")! as HTMLButtonElement
// !as HTMLInputElement  ->  we are shure that we will get that element
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

// types must be numbers
function add(num1: number, num2:number) {
  return num1 + num2
}

button.addEventListener("click", function() {
  // + means that we change type to number
  console.log(add(+input1.value, +input2.value))
})

const someElements = [1, 2, 3]
const filteredElements = someElements.filter(element => element === 3)