// var -> scoped in a function
// let -> scoped in a block
// const -> scoped in a block

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
// console.log(i);
}

sayHello();


const person = {
  name: "Mosh",
  // walk: function() {},
  walk() {
    console.log(this); // value of this is determined of how function is called
  },
  talk() {}, // we can write it like this
}

person.walk(); // if we call a function as a method in an object, this will always return the reference of that object 
// const walk = person.walk;
// walk() // if we call a function as a standalone object or outside object this will return global object (window)

// binding this -> no metter how we call walk() function it should always return the person object
const walk = person.walk.bind(person);
walk();

person.talk();
person['name'] = 'John';


// arrow functions

// old js 
// const square = function(number) {
//   return number * number;
// }

const square = number => number * number;

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
]

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
})

const activeJobsNew = jobs.filter(job => job.isActive);