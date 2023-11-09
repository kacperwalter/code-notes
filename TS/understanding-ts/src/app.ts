interface Greetable {
  name: string

  greet(phrase: string): void
}

class Person implements Greetable {
  name: string

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase)
  }
}

let user1: Greetable
user1 = new Person('Kacper')
console.log(user1)
