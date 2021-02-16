'use strict'; 
(function() {

  // display('Hell World!!');

  // object literal - the simplest way to create an object
  let person = {
    firstName: 'Jim',
    lastName:'Cooper',
    isNotAdult: function() { return this.age <= 18 },
  };

  // dynamic adding properties to objects
  person.age = 29;

  // adding functions dynamically
  person.isAdult = function() { return this.age >= 18 }

  // display(person.isAdult());

  // object literal poroperty shorthand
  function registerUser(fName, lName) {
    let person2 = {
      fName,
      lName,
    }
  }

  // method shorthand
  let person3 = {
    firstName: 'Jim',
    lastName:'Cooper',
    age: 19,
    isNotAdult() { return this.age <= 18 },
  };

  // to discover all properties and methods in object
  // Object.keys()

  function forThroughOject(object) {
    // loop over every property and method in object
    for (let propertyName in object) {
      display(propertyName);
    }
  }

  forThroughOject(person3);

  // Object.is(arg1, arg2) - returns bool depending on the result - commonly used for comparing non primitive types


  // copy or merge the properties from one object to another object
  // Object.assign();

  // copy the properties from person1 to person2
  Object.assign(person3, person);

  let assignTest1 = {
    testName: 'Kacper',
  }

  let assignTest2 = {
    testVar: 123,
    isTested() {
      if (this.testVar < 20) {
        return true;
      } else {
        return false;
      }
    }
  }

  Object.assign(assignTest1, assignTest2);
  display(assignTest1.isTested());

  let healthStats = {
    height: 20,
    weight: 120,
  }

  let animal1 = {
    type: 'cat',
  }

  // practical example of merge => making new object from existing object (does not mutate objects that we are operating)
  function mergeHealthStats(person, healthStats) {
    return Object.assign({}, person, healthStats);
  }

  let mergedStats = mergeHealthStats(animal1, healthStats);


  // CONSTRUCTOR

  // the simpliest way to make object
  function Person4() {
    this.firstName = 'Jim';
    this.lastName = 'Cooper';
  }

  let person4 = new Person4();

  function Person5(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  let person5 = new Person5('andrzej', 'duda');


  // requesting object property with bracket notation
  display(person5['firstName']);

  // property descriptor
  display(Object.getOwnPropertyDescriptor(person5, 'firstName'));


})();
