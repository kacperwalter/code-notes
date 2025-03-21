 // Some data we can work with
 const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)
// console.log(filteredInventors)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFirstLast = inventors.map(({ first, last }) => ({ first, last }))
// console.log(inventorsFirstLast)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => (a.year - b.year))
// console.log(sortedInventors)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const allInventorsLife = inventors.reduce((all, curr) => all + curr.year, 0)
// console.log(allInventorsLife)

// 5. Sort the inventors by years lived
const sortByLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
// console.log(sortByLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedAlphabetically = inventors.sort((a, b) => a.first < b.first ? -1 : 1)
// console.log(sortedAlphabetically)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// const dataSorted = data.reduce((acc, curr) => , {...(new Set(data).map(key => ...{key : 0}))})
const dataSorted = data.reduce((acc, curr) => { return { ...acc, [curr] :  acc[curr] ? acc[curr] + 1 : 1}}, { } )
// console.log(dataSorted)

// Masz tablicę zamówień z e-commerce, gdzie każda pozycja reprezentuje pojedyncze zamówienie klienta. Twoim zadaniem jest obliczenie łącznej wartości sprzedaży dla każdego produktu.
const orders = [
  { product: 'Laptop', price: 3000, quantity: 2 },
  { product: 'Mouse', price: 100, quantity: 5 },
  { product: 'Keyboard', price: 200, quantity: 3 },
  { product: 'Monitor', price: 1200, quantity: 2 },
  { product: 'Mouse', price: 100, quantity: 2 },
  { product: 'Laptop', price: 3000, quantity: 1 },
  { product: 'Monitor', price: 1200, quantity: 1 },
];

// const productQuantity = orders.reduce((acc, curr) => { return { ...acc, [curr.product] : [curr.price * curr.quantity]} }, {})
// const productQuantity = orders.reduce((acc, curr) => {
//   acc[curr.product] =  (acc[curr.product] || 0) + (curr.price * curr.quantity);
//   return acc;
// }, {})
// console.log(productQuantity)

const peopleToCount = [
  { name: 'John', gender: 'male' },
  { name: 'Sara', gender: 'female' },
  { name: 'Tom', gender: 'male' },
  { name: 'Anna', gender: 'female' },
  { name: 'James', gender: 'male' },
];

const genderCount = peopleToCount.reduce((acc, curr) => {
  acc[curr.gender] = (acc[curr.gender] || 0) + 1; 
  return acc
}, {})

// console.log(genderCount);

// Masz tablicę produktów z ich kategoriami. Policz, ile produktów należy do każdej kategorii.
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' },
  { name: 'Jeans', category: 'Clothing' },
  { name: 'Tablet', category: 'Electronics' },
  { name: 'Socks', category: 'Clothing' },
];

const productCategories = products.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + 1;  
  return acc
}, {})

// console.log(productCategories)

// Masz tablicę wydatków i chcesz policzyć, ile wydałeś na każdą kategorię.

const expenses = [
  { category: 'Food', amount: 30 },
  { category: 'Transport', amount: 15 },
  { category: 'Food', amount: 25 },
  { category: 'Entertainment', amount: 50 },
  { category: 'Transport', amount: 10 },
  { category: 'Food', amount: 20 },
];

const categoryCount = expenses.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + curr.amount; 
  return acc;
}, {})

// console.log(categoryCount);

const someSentence = "hello world";

const letterCount = [...someSentence.replaceAll(" ", "")].reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc
}, {})

// console.log(letterCount);



// Masz tablicę ocen studentów i chcesz obliczyć średnią ocenę dla każdej osoby.
const grades = [
  { student: 'Alice', grade: 85 },
  { student: 'Bob', grade: 92 },
  { student: 'Alice', grade: 78 },
  { student: 'Bob', grade: 88 },
  { student: 'Alice', grade: 91 },
];

const studentStats = grades.reduce((acc, curr) => {
  if (!acc[curr.student]) {
    acc[curr.student] = { total: 0, count: 0 }
  }

  acc[curr.student].total += curr.grade
  acc[curr.student].count += 1;

  return acc
}, {})

// console.log(studentGrades)



// Masz tablicę koszyka z zakupami. Każdy produkt może się powtarzać, a my chcemy uzyskać łączną liczbę sztuk i wartość dla każdego produktu.

const cart = [
  { product: 'Laptop', price: 3000, quantity: 1 },
  { product: 'Mouse', price: 100, quantity: 2 },
  { product: 'Keyboard', price: 200, quantity: 1 },
  { product: 'Laptop', price: 3000, quantity: 1 },
  { product: 'Mouse', price: 100, quantity: 1 },
  { product: 'Monitor', price: 1200, quantity: 2 },
]

// Oczekiwany wynik

// {
//   Laptop: { quantity: 2, total: 6000 },
//   Mouse: { quantity: 3, total: 300 },
//   Keyboard: { quantity: 1, total: 200 },
//   Monitor: { quantity: 2, total: 2400 }
// }

const cartProducts = cart.reduce((acc, curr) => {
  if (!acc[curr.product]) {
    acc[curr.product] = { quantity: 0, total: 0 }
  }

  acc[curr.product].quantity += curr.quantity
  acc[curr.product].total += curr.price * curr.quantity;

  return acc
}, {})

// console.log(cartProducts)

