import {cloneArray} from './cloneArray.js'

test("Properly clones array", () => {
  const array = [1, 2, 3]
  // expect(cloneArray(array)).toBe(array) // wouldnt work
  expect(cloneArray(array)).toEqual(array) 
  expect(cloneArray(array)).not.toBe(array) // also we are making sure that created array isn't the same ass passed
})