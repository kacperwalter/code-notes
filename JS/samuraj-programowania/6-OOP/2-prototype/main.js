const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
}
// __proto__ odnosi się właśnie do tego prototypu
Person.prototype.addChildren = function(name) {
    this.children.push(name);
}

Person.prototype.gender = 'female';

const arek = new Person('arek', 20);
const monika = new Person('monika', 30);

monika.addChildren('basia');


function Player() {
    
}

class User {

}

Player.prototype.age = 25;

const janek = new Player();
const marta = new User();

// dodatawanie elementów do prototypu
function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizenship = function(citizenship) {
    //     this.citizenship = citizenship;
    //     console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`);
    // } 
}

// lepiej robić prototypy osobno - wtedy pamięć nie jest zawalana przy każdym instancjalizacji klasy, a tylko wtddy kiedy wywołamy metodę
Citizen.prototype.changeCitizenship = function(citizenship) {
    this.citizenship = citizenship;
    console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`);
} 

const zenek = new Citizen('polsza', 'polskie');
zenek.changeCitizenship("Włoskie");

// Rozszerzanie prototypu także wbudowanych konstruktorów
const arr = [5, 6, 7, 8];
Array.prototype.delete = function(index) {
    return this.splice(index, 1);
}

// PROTOTYPE CHAIN

arr.__proto__; //prototyp konstruktora

arr.__proto__.__proto__; // prototyp Object

arr.__proto__.__proto__.__proto__ // null

Object.prototype.age = 20;

// czy dany element jest egemptlarzem konstruktora - instanceof
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Citizen); // false
console.log(zenek instanceof Citizen); // true
console.log(zenek instanceof Function); // false

// Object.getPrototypeOf  - zwraca prototyp konstuktora na podstawie któego została utworzona instancja
console.log(Object.getPrototypeOf(arr));

console.log(arr.__proto__.constructor);
console.log(arr.__proto__.delete);