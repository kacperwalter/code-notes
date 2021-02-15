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


})();
