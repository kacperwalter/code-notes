const log = data => console.log(data);

const numbers = [1, 2, 3, 4, 5, 6]; 

// map is used to do the transformations on arrays
const doubledNumbers = numbers.map(n => n * 2);
// log(doubledNumbers);

// filter is used to filter values on array
const filteredNumbers = numbers.filter(n => n % 2 == 0);
// log(filteredNumbers);

// reduce
const reducedNumbers = numbers.reduce((accumulator, current) => accumulator + current);
// log(reducedNumbers);

// callbacks
// callback is a function that is passed into another function and then that function in executed at some point
const callbackExample = (name, callback) => log(callback(name));
// callbackExample("Kacper Walter", (name) => `Hello ${name}`);

// named imports
// import * as Mathematics from './Math.js'; // import everything
// log(Mathematics.add(1, 2));

import { add, divide } from './Math.js'; // import just things that are needed
// log(add(2, 5));


// default exports / imports - allows us to export single value 
import Animal from './Animal.js';
const animal = new Animal();
// log(animal.getClassType());


// arrays spread operator - allows to expand expression where arguments values variables are expected 
const arrayOne = ['Marian', 'Anna', 'Alex'];
const arrayTwo = ['Kacper', 'Krzysztof', 'Kamil'];

const concatArray = [...arrayOne, ...arrayTwo];
concatArray.forEach(name => log(name));

const name = 'Marian';
const nameToArray = [...name];

const addNumbers = (n1, n2, n3) => n1 + n2 + n3;
const numbers2 = [1, 5, 9];
const addition = addNumbers(...numbers2);

// objects sprad operator
const adress = {
  city: 'LA',
  country: 'USA',
  postCode: 'LA44'
}
const fullName = {
  firstName: 'Andy',
  lastName: 'Jones'
}

const adreessAndName = {...adress, ...fullName};
// log(adreessAndName);
log(JSON.stringify(adreessAndName, null, 2));