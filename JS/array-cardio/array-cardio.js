const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = [
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric'
]

const bornIn1500 = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600)
// console.log(bornIn1500)

const fullNames = inventors.map(inventor => `${inventor.first}, ${inventor.last}`)
// console.log(fullNames)

const ordered = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1
  } else {
    return -1
  }
})
// console.log(ordered)

const allInventorsAge = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0) // 0 is init value
// console.log(allInventorsAge)

const sortByYearsLived = inventors.sort((a, b) => {
  const lastPerson = a.passed - a.year
  const nextPerson = b.passed - b.year
  return lastPerson > nextPerson ? -1 : 1
})

// console.log(sortByYearsLived)

const sortByLastName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ')
  const [bLast, bFirst] = nextOne.split(', ')
  return aLast > bLast ? 1 : -1
})

// console.log(sortByLastName)

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0
  }
  obj[item]++
  return obj
}, {})

console.log(transportation)
// { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }