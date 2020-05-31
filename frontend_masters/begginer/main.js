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

typesEquality();