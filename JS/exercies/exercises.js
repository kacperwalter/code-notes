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
  switch (names.length) {
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


function high(string) {
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

// console.log(isValidIP(" 1.2.3.4"))
// console.log(isValidIP("0.0.0.253"))
// isValidIP("0.0.0.0")
// isValidIP('01.02.03.04')
// isValidIP('abc.def.ghi.jkl')
// isValidIP('12.34.56')

const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1]

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// function getRating(watchList) {
//   const result = watchList.map(element => parseFloat(element["imdbRating"])).reduce((sum, current) => sum + current, 0) / watchList.length;
//   return result
// }

const getRating = (watchList) => watchList
  .filter(film => film.Director === "Christopher Nolan")
  .map(element => Number(element["imdbRating"])).reduce((sum, current) => sum + current, 0)
  / watchList.filter(film => film.Director === "Christopher Nolan").length

// console.log(getRating(watchList));
// getRating(watchList)



const squareList = arr => arr
  .filter(element => Number.isInteger(element) && element >= 0)
  .map(element => element * element)

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);


function repeatStringNumTimes(str, num) {
  let someString = ''
  for (let i = 0; i < num; i++) {
    someString = someString + str;
  }
  return someString;
}

// console.log(repeatStringNumTimes("abc", 2))


const truncateString = (str, num) => str.length > num ? `${[...str].slice(0, num).join('')}...` : str;

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// function findElement(arr, func) {
//   return arr.filter(element => func(element))[0]
// }

const findElement = (arr, func) => arr.filter(element => func(element))[0];

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
// console.log(findElement([1, 2, 3, 4, 8], num => console.log(num  % 2 === 0)))