var button = document.querySelector("button");
// !as HTMLInputElement  ->  we are shure that we will get that element
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// types must be numbers
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // + means that we change type to number
    console.log(add(+input1.value, +input2.value));
});
var someElements = [1, 2, 3];
var filteredElements = someElements.filter(function (element) { return element === 3; });
