// union type - for combining types

// 3rd parameter is  a literal type
const combine = (input1: number | string, input2: number | string, resultType: string) => {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') { // we have to work with the strict type of input
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)