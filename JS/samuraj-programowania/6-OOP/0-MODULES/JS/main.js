import { double, name } from './utlils.js';

// we can also import it as aliases using "as" keyword
import { surname, square as compontentsSquare } from './components.js';

// we can import big file with multiple compontents with stuff below
import * as Dog from './dogStuff.js';

// import/export default
import { default as displayNumbers } from './exportDefault.js';

console.log(double(5), name);

console.log(surname, compontentsSquare(2));

console.log(Dog.dogName, Dog.sayDogName(Dog.dogName));

console.log(displayNumbers(5))