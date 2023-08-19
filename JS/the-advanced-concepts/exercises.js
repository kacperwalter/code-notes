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

// digitalRoot(16)

const likes = names => {
  names = names || [];
  switch(names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
// console.log(likes(['Peter']));
// likes(['Jacob', 'Alex'])
// likes(['Max', 'John', 'Mark'])
// likes(['Alex', 'Jacob', 'Mark', 'Max'])
// likes(['Alex', 'Jacob', 'Mark', 'Max', 'Max', 'Max', 'Max'])


function high(string){
  const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((letter) => String.fromCharCode(letter));
  let highestWord = '';
  let currentBiggestScore = 0;

  string.split(' ').forEach(word => {
    let currentWordScore = 0;

    [...word].forEach(letter => {
      currentWordScore = currentWordScore + alphabet.indexOf(letter.toUpperCase()) + 1
      if (currentWordScore > currentBiggestScore) {
        currentBiggestScore = currentWordScore
        highestWord = word
      };
    })
  })

  return highestWord
}

// const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((letter) => String.fromCharCode(letter));

// console.log(alphabet);
// console.log(alphabet.find(element => element === "C"));
// console.log(alphabet.indexOf('A') + 1 );

// high('man i need a taxi up to ubud');
// high('man');
// console.log(high('take me to semynak'))

// function dec2bin(dec) {
//   return (dec >>> 0).toString(2);
// }

// console.log(dec2bin(1234))



// const countBits = number => {
//   // console.log((number >>> 0).toString(2).split(''));
//   // const test = (number >>> 0).toString(2).split('').reduce((sum, currentValue) => sum + parseInt(currentValue), 0);
//   return (number >>> 0).toString(2).split('').reduce((sum, currentValue) => sum + parseInt(currentValue), 0)
// }


// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
// nie przechodzi w testach bo w assertach za duze liczby których JS nie ogarnia 
// const countBits = number => (number >>> 0).toString(2).split('').reduce((sum, currentValue) => sum + parseInt(currentValue), 0);


// const countBits = number => {
//   // console.log(number.toString(2));
//   return number.toString(2).split('').reduce((sum, currentValue) => sum + parseInt(currentValue), 0)
// }
  
const countBits = number => number.toString(2).split('').reduce((sum, currentValue) => sum + parseInt(currentValue), 0);


// console.log(countBits(6275708300))
// countBits(6275708300);



const rot13 = message => {
  const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((letter) => String.fromCharCode(letter));
  console.log(message.split(''));
}

// rot13('test');


// function alphabetPosition([...text]) {
//   const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((letter) => String.fromCharCode(letter));
//   // console.log(text);
//   // console.log(text.filter(letter => letter !== ' '))
//   console.log(text.filter(letter => letter !== ' ').map(letter => alphabet.indexOf(letter.toUpperCase()) + 1))
//   // console.log(text.map(letter => alphabet.indexOf(letter.toUpperCase() + 1)))
//   return text; 
// }

const alphabetPosition = ([...text]) => {
  const ALPHABET = Array.from(Array(26)).map((e, i) => i + 65).map((letter) => String.fromCharCode(letter));

  return text
    .filter(letter => letter !== ' ')
    .map(letter => ALPHABET.indexOf(letter.toUpperCase()) + 1)
    .filter(letter => letter !== 0)
    .join(' ');
}


// console.log(alphabetPosition('09o+?g&'));

// function isValidIP(str) {
//   IP = str.split('.')
  
//   if (IP.length === 4) { // TODO oneline if
//     IP.forEach(element => {
//       if (element.match(/[a-z]/i) === null) { // TODO oneline if
//         if ((element.length === 2 || element.length === 3) && element.substring(0, 1) === '0') console.log('false'); // numbers like '01.02.03.04'
//         if (element > 255) return;
//       }
//     })
//   }
//   return false;
// }

// function isValidIP(str) {
//   IP = str.split('.')
  
//   if (IP.length === 4) {
//     IP.forEach(element => {
//       if (element.match(/[a-z]/i) != null) return;
//       if ((element.length === 2 || element.length === 3) && element.substring(0, 1) === '0') return;
//       if (element > 255) return;
//     })
//     return true;
//   }

//   return false;
// }

const isValidIP = str => {
  IP = str.split('.')
  
  if (IP.length === 4) {
    for (const element of IP) {
      if (element.match(/[a-z]/i) != null) return false;
      if ((element.length === 2 || element.length === 3) && element[0] === '0') return false;
      if (element < 0 || element > 255) return false;
    }
    return true;
  }

  return false;
}

console.log(isValidIP(" 1.2.3.4"))
// console.log(isValidIP("0.0.0.253"))
// isValidIP("0.0.0.0")
// isValidIP('01.02.03.04')
// isValidIP('abc.def.ghi.jkl')
// isValidIP('12.34.56')
