'use strict'; 
(function() {

  // display('Hello World!!');

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
z

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
    isNotAdult() { return this.age <= 18 },
  };

})();