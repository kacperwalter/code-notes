const products = [
  { name: "Laptop", pricePLN: 4500 },
  { name: "Smartphone", pricePLN: 3000 },
  { name: "Tablet", pricePLN: 1500 }
]

const productsInEur = products.map(product => ({ name: product.name, priceEUR: product.pricePLN * 0.24}))

const numbers = [12, 7, 22, 43, 8, 99, 54, 71]

const users = [
  { firstName: "Jan", lastName: "Kowalski" },
  { firstName: "Anna", lastName: "Nowak" },
  { firstName: "Piotr", lastName: "Zieliński" }
]

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`)
// console.log(fullNames)

const productsChangedNames = products.map(product => ({ name: product.name, price: product.pricePLN }))
// console.log(productsChangedNames)


// ile razy każdy element występuje w tablicy
// out: { apple: 3, banana: 2, orange: 1 }
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const fruitCount = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})

// console.log(fruitCount)


// Teraz policzymy, ile razy występują słowa o konkretnej długości. - turn it into smaller pieces - firstly we have to count the length of current word
// { 3: 3, 4: 2, 8: 1 }

const words = ['dog', 'cat', 'elephant', 'tiger', 'lion', 'ant'] 

const wordLengthCount = words.reduce((acc, curr) =>{
  const length = curr.length
  acc[length] = (acc[length] || 0) + 1
  return acc
}, {})


// console.log(wordLengthCount)


// Masz tablicę słów i chcesz policzyć, ile słów zaczyna się na każdą literę.
const wordsFirstLetter = ['apple', 'banana', 'apricot', 'blueberry', 'avocado', 'blackberry', 'cherry'];

const firstLetterCount = wordsFirstLetter.reduce((acc, curr) => {
  acc[curr[0]] = (acc[curr[0]] || 0) + 1
  return acc
}, {});

// console.log(firstLetterCount);

// Oczekiwany wynik:
// { a: 3, b: 3, c: 1 }



// Masz tablicę obiektów, gdzie każda osoba ma imię i wiek. Twoim zadaniem jest pogrupowanie osób w przedziały wiekowe.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 45 },
  { name: 'Frank', age: 67 }
];

// console.log(people[0].name)

const ageGroups = people.reduce((acc, curr) => {
  if (curr.age < 18) acc['children'].push(curr.name)
  if (curr.age > 18 && curr.age < 59) acc['adults'].push(curr.name)
  if (curr.age > 59) acc['seniors'].push(curr.name)
  return acc
}, { children: [], adults: [], seniors: [] });

const ageGroupsOptmizied = people.reduce((acc, curr) => {
  const group = curr.age < 18 ? 'children' : curr.age < 60 ? 'adults' : 'seniors';

  acc[group].push(curr.name);

  return acc;
}, { children: [], adults: [], seniors: [] });

// console.log(ageGroups);

// Oczekiwany wynik:
// {
//   children: ['Bob', 'David'],
//   adults: ['Alice', 'Charlie', 'Eve'],
//   seniors: ['Frank']
// }

const testScores = [
  { subject: 'Math', score: 85 },
  { subject: 'English', score: 78 },
  { subject: 'Math', score: 92 },
  { subject: 'History', score: 74 },
  { subject: 'English', score: 81 },
  { subject: 'History', score: 89 }
];

const totalScores = testScores.reduce((acc, curr) => {
  acc[curr.subject] = (acc[curr.subject] || 0) + curr.score
  return acc
}, {});

// console.log(totalScores);

// Oczekiwany wynik:
// { Math: 177, English: 159, History: 163 


// Masz tablicę imion i chcesz pogrupować je według pierwszej litery, ale zamiast liczyć, przechowywać je w tablicach.

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Amy', 'Brian', 'Catherine'];

const groupedNames = names.reduce((acc, curr) => {
  // acc[curr[0]] = (acc[curr[0]] ? acc[curr[0]].push(curr) : [])
  if (!acc[curr[0]]) {
    acc[curr[0]] = []
  }

  acc[curr[0]].push(curr)
  return acc
}, {});

// console.log(groupedNames);

// Oczekiwany wynik:
// { A: ['Alice', 'Amy'], B: ['Bob', 'Brian'], C: ['Charlie', 'Catherine'], D: ['David'] }



const someNames = ['Alice', 'Bob', 'Charlie', 'David', 'Amy', 'Brian', 'Catherine'];

const groupedByLength = someNames.reduce((acc, curr) => {
  if (!acc[curr.length]) {
    acc[curr.length] = []
  }

  acc[curr.length].push(curr)

  return acc
}, {});

// console.log(groupedByLength);

// ALWAYS WHEN WE WANT TO CREATE SUCH THING, WE HAVE TO CHECK IF THERE IS ELEMENT WITH THAT, AND IF NOT INITIALIZE THE EMPTY ARRAY
// {
//   3: ['Bob'],
//   4: ['Amy'],
//   5: ['Alice', 'David', 'Brian'],
//   7: ['Charlie'],
//   9: ['C
// }