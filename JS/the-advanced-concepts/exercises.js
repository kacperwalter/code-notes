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
  return Math.min();
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog")
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))