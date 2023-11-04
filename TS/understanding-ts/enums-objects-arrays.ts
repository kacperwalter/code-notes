// enum is a custom type 0, 1, 2
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// enum with custom values (when we start with 5, the next value will be 6, 7, etc.)
enum UserLevel {
  BASIC = 5,
  PREMIUM,
  ULTIMATE,
}

enum ApiKeys {
  GOOGLE = 'GOOGLE_API_KEY',
  FACEBOOK = 'FACEBOOK_API_KEY',
}

const person: {
  name: string
  age: number
  hobbies: string[]
  isLogged: [boolean, string] // tuple (immutable)
  role: number
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  isLogged: [true, 'current time'],
  role: Role.AUTHOR,
}

// array with strings
let favoriteActivities: string[]

// arrray with any type eleements
let anyTypeArray: any[]

// this shows better IDE support
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
