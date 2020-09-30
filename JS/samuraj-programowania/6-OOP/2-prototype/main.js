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