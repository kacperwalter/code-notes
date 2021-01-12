class FamilyTest {
    constructor(name) {
      this.name = name;
    }
    addMember() {
      
    }
  }
  
const nowakowie = new FamilyTest();
  
  class Family {
    constructor(members, ...names) {
      this.members = members;
      this.names = names;
    }
    addMember(newMember) {
      this.names.push(newMember);
      this.members++;
    }
    static makeFamily(...members) {
      return members;
    }
}
  
  const kowalscy = new Family(3, "Jan", "Ewa", "Adam", "Andrzej");
  
//   console.log(kowalscy);
  
//   kowalscy.addMember("andrzej");
  
//   console.log(kowalscy);
  
//   console.log(Family.makeFamily("Jan", "Ewa"));



// INHERITANCE - extends and super 
// Klasy nadrzędna (superclass) - ta, z której jest dziediczone
// Klasy podrzędne (subclass) - te, które dziedziczą

// Klasa podrzędna tworzy nowy prototyp w opraciu o klasę nadrzędną - powwstaje łańcuch prototypów (klasa dziedzicząca ma dostęp do prototypów klasy wyższej)

// extends - wskazanie klasy po której nowa klasa powinna dziedziczyć
// super - rozszerzania konstruktora nowej klasy o konstruktor klasy z której dziedziczy

class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    breathe() {
        console.log("Zwierze oddycha");
    }  
}

const zwierze = new Animal(12);

console.log(zwierze.__proto__ == Animal.prototype);

class Mammal extends Animal {
    constructor(age, hair, name) {
        super(age, name);
        // metoda super wywołuje poniższy kod (dziedziczy prototypy klasy nadrzędniej)
        // constructor(age) {
        //     this.age = age;
        // }
        this.hair = hair;
    }
    drinkMilk() {
        console.log("ssaki piją mleko");
    }
}

const ssak = new Mammal(3, 'blond', 'andrzej'); // łańcuch prototypów - prototypem nadrzędnym jest klasa Animal, a w klasie Animal jest prototyp breathe()

class Human extends Mammal {
    constructor(age, name, hair, language) {
        super(age, name, hair);
        this.language = language;
    }
    speak() {
        console.log('Człowiek mówi');
    }
}

const czlowiek = new Human(34, "Jarek", 'brazowe', 'polszowy');



