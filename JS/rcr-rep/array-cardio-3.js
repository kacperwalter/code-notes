const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const groupedNumbers = numbers.reduce((acc, curr) => {
  curr % 2 ? acc['odd'].push(curr) : acc['even'].push(curr)
  return acc
}, { even: [], odd: [] });

console.log(groupedNumbers);