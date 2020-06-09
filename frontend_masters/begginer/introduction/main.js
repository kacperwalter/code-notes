const i = 5;

const andrzej = (number) => {
    return number;
}

console.log(andrzej(i));

const mariusz = () => {
    for(let i=1; i=i+1; i++){
        console.log(i);
    }
}


let iterating = 0;

const iterateLoop = () => {
    for(let i = 0; i <= 10; i++){
        iterating++;
        console.log(iterating);
    }
}

// .format in python but in JS
const firstName = 'Kacper';
const lastName = 'Walter';

// using backticks its a "template string"
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;
console.log(sentenceWithTemplate);
 
// booleans are lowercase
const lightIsOn = true;


// if syntax 
const skyIsBlue = true;

const ifSyntax = (skyIsBlue) => {
    if (skyIsBlue) {
        console.log("The sky is blue!");
      } else {
        console.log("The sky is … not blue?");
      }
}

// types equality 
const typesEquality = () => {
    if (2 + 2 === 4) {
        console.log(
          "Oh thank god, the fundamental principles of mathematics still hold true."
        );
      } else {
        console.log("Uh, panic?");
      }
}

// functions syntax
function templateStringFunc(name, secondName, age) {
    return `Hello ${name} ${secondName}, you are ${age} years old.`;
}

function addTwo(number) {
    return number + 2;
}

// "builtins" https://btholt.github.io/intro-to-web-dev-v2/functions-and-scope#builtins

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

const sentence = 'AndRzEJ LuBI JeSc PieRogi';

const toLower = (sentenceToLower) => {
    return sentence.toLowerCase();
}

// console.log(toLower(sentence));

const roundNumber = (number) => {
    rounded = Math.round(number);
    return rounded;
}

// console.log(roundNumber(5.1));


// OBJECTS

const person = {
    name: 'Kacper Walter',
    city: 'Poznan',
    state: 'Greater Poland',
    wantPizza: true,
    numbersOfPizzaWanted: 256,
    anotherObjectInObject: {
        someValue: 'andrzejek',
        someOtherValue: '123'
    },
};

// console.log(person.name);
// console.log(person.anotherObjectInObject.someValue)


// object methods

const dog = {
    name: 'Bajtek',
    warcz() {
        return ('grrrr');
    }
};

// console.log(dog.warcz());


// context

const me = {
    name: {
        first: 'Kacper',
        second: 'Walter',
    },
    location: {
        street: 'fake',
        city: 'Koscian',
        state: 'Greater Poland'
    },
    getAdress() {
        return `${this.name.first} ${this.name.second} lives in ${this.location.city} on ${this.location.street} street`
    }
};

// console.log(me.getAdress());


// ARRAYS

const twoDays = [
    'Monday',
    'Tuesday'
];

const getThingFromArray = (array, index) => {
    return array[index];
}

console.log(getThingFromArray(twoDays, 1));

// BUILTINS
// length
// console.log(twoDays.length);
// join
// console.log(twoDays.join(' | '));

const arrayToAppend = [1, 2, 3, 4, 5]
// adding elements at the end (append in python)
const addElementAtEnd = (array, elementToAdd) => {
    return array.push(elementToAdd);
}

addElementAtEnd(arrayToAppend, 6);
console.log(arrayToAppend);

// foreach - do smth on every loop for every for example item on a list   

const cities = [
    'Warsaw',
    'Seattle',
    'Poznan',
    'New York',
    'Amsterdam'
];

cities.forEach(function(city) {
    console.log(city);
});



// DOM - document object model
// https://btholt.github.io/intro-to-web-dev-v2/dom

// query selector
const elementsToChange = document.querySelectorAll('.js-target');
  
for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
};

// eventlisteners
const buttonToListen = document.querySelector('.event-button');
buttonToListen.addEventListener('click', function(){
    alert("You clicked this button")
});

// live input display
const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener("keyup", function() {
    paragraph.innerText = input.value;
}); 

// change
const inputChange = document.querySelector('.color-input');
const paragraphChange = document.querySelector('.color-box');

inputChange.addEventListener('change', function() {
    paragraphChange.style.backgroundColor = inputChange.value;
});


//  EVENT DELEGATION
// one event listener for few elements

document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
    console.log(event);
    console.log(event.target);
});
