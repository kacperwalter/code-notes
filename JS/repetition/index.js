const log = (data) => console.log(data);

const numbers = [1, 2, 3, 4, 5, 6];

// map is used to do the transformations on arrays
const doubledNumbers = numbers.map(n => n * 2);
log(doubledNumbers);

// filter is used to filter values on array
const filteredNumbers = numbers.filter(n => n % 2 == 0);
log(filteredNumbers);

// reduce
const reducedNumbers = numbers.reduce((accumulator, current) => accumulator + current);
log(reducedNumbers);