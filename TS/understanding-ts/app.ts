// union type - for combining types

const combine = (input1: number | string, input2: number | string) => {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') { // we have to work with the strict type of input
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26)
console.log(combinedAges)