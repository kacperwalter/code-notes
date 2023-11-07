interface Person {
  name: string
  age: number

  greet(phrase: string): void
}

let user1: Person

user1 = {
  name: 'andrzej',
  age: 12,

  greet(phrase) {
    console.log(phrase + this.name)
  },
}
