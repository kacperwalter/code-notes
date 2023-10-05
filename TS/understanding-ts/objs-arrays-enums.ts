// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string] // tuple (immutable)
// } = {
// // const person = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// enum is a custom type 0, 1, 2
enum Role { ADMIN, READ_ONLY, AUTHOR = 4 }

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

console.log(Role.AUTHOR)

let favoriteActivities: string[]

console.log(person.name)
const add = (n1: number, n2: number) => {
  return n1 + n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)
console.log(result)
