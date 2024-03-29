// type alias
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

// thats the way to handle union types (I am not acctualy a big fam of it) and also how to handle literal types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}
const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-text')
console.log(combinedStringAges)
