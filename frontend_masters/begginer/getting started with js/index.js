const people = ['Marek', 'Kacper', 'Zosia', 'Patryk'];

const isEnrolled = (person) => {
  if (people.includes(person)) {
    return true;
  } else {
    return false;
  }
}

const iterator1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const iterator2 = (arr) => {
  for (let person of arr) {
    console.log(person);
  }
 }
typeof people;
console.log(typeof people.length)

// NOTES
/*
# primitive types:
- undefinied
- string
- number 
- bool
- object
- symbol (new)
- null /
- function /
- array /

# NaN - indicates that we have invalid numeric operation
let text = 'some kind of text';
const textDivide = text / 2;
console.log(textDivide); // gives NaN

# Converting types
let convert = "21";
Number(convert); // makes number from string


# anonymous and named functions

/ anonymous function expression
var name = function() {
  //
}

/ named function expression
var name = function name () {
  // 
}


# this & prototypes

*/
