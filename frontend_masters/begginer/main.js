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

console.log(me.getAdress());