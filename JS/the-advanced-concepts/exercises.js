const list = new Array(60000).join("1.1").split(".");
let index = 0;

function removeItemsFromList() {
  var item = list.pop();
  console.log(index);
  index++;

  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
}

// removeItemsFromList();

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  numbers.forEach((number) => (format = format.replace("x", number)));
  return format;
}
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// even better solution but not mine
// function createPhoneNumber(numbers){
//   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
// }

function getCount([...str]) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str.forEach((char) => vowels.includes(char) && count++);
  return count;
}

// console.log(getCount('kacper walter'))

function getMiddle(string) {
  return string.length % 2 === 0
    ? string.substring(
        Math.floor(string.length / 2 - 1),
        Math.floor(string.length / 2 - 1)
      ) + 2
    : string.substring(string.length / 2, string.length / 2 + 1);
}

// console.log(getMiddle("teste"));

function findShort(string) {
  return Math.min(...string.split(' ').map(el => el.length));
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// function isIsogram(string){
//   return new Set(string.toLowerCase()).size === string.length
// }

const isIsogram = (string) => new Set(string.toLowerCase()).size === string.length;

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("Dermatoglyphics"))

function isValidWalk(walk) {
  //insert brilliant code here
  return walk.length === 10
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

function accum([...string]) {
	string.map((el, index) => {
    console.log(el.repeat(index + 1));
}); 
}

// accum("ZpglnRxqenU")

function reverseString(str) {
  return [...str].reverse().join('');
}

// console.log(reverseString("hello"))

// function factorialize(num) {
//   let result=1;
//   for (let i=1; i<=num; i++) {
//     result = result * i;
//   }
//   return result;
// }

const factorialize = (num) => num === 0 ? 1 : num * factorialize(num - 1);

// console.log(factorialize(5))

function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(e => e.length));
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog")
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
// findLongestWordLength("The quick brown fox jumped over the lazy dog")

function largestOfFour(arr) {
  let largest = []
  arr.forEach(e => largest.push(Math.max(...e)))
  return largest
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

// console.log(confirmEnding("Bastian", "n"));

function repeatStringNumTimes([...str], num) {
  console.log(str)
  return str;
}

// repeatStringNumTimes("abc", 3)
// console.log(repeatStringNumTimes("abc", 3));

// function descendingOrder(n){
//   return n.toString().split('').sort().reverse().join('')
// }

const descendingOrder = (number) => parseInt(number.toString().split('').sort().reverse().join(''));

// console.log(descendingOrder(0))


const filter_list = (list) => list.filter(element => Number.isInteger(element));

// console.log(filter_list([1,2,'a','b']));

// function validatePIN(pin) {
//   // const regex = 
//   const matches = (/^[0-9]{4}$/.exec(pin) || /^[0-9]{6}$/.exec(pin)) && true
//   console.log(matches);
// }

const validatePIN = pin => /^[0-9]{4}$/.exec(pin) || /^[0-9]{6}$/.exec(pin) && true

// console.log(validatePIN('123456'))

// function arrayDiff(arr1, arr2) {
//   const newArray = arr1.filter(element => !arr2.includes(element))
//   console.log(newArray)
// }

const arrayDiff = (arr1, arr2) => arr1.filter(element => !arr2.includes(element))

// console.log(arrayDiff([1,2],[1]))
// console.log(arrayDiff([1,2,2,2,3],[2]))

function digitalRoot(n) {
  let sum = 0;
  const numberToArray = n.toString().split('');
  console.log(numberToArray);
  numberToArray.forEach(element => sum + parseInt(element));
  numberToArray.forEach(element => console.log(element));
  console.log(sum);
}

digitalRoot(16)