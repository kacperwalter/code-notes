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
