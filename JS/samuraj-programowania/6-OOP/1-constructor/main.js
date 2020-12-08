const Car = function(name) {
    this.name = name;
}

const maluch = new Car('maluch');
const polonez = new Car('polonez');
// 1. nowy pusty obiekt
// 2. wiązanie z utworzonym obiektem
// 3. powstaje włościwość __proto__ dzięki czemu nasze egzemplarze dziedziczą protoyp
// 4. wywołanie funkcji i przypisanie do zmiennej

maluch.name = "zabytek";

// przykładowy obiekt
const Human = function(name, legs, hands, eyeColor) {
    this.name = name;
    this.legs = legs;
    this.hands = hands;
    this.eyeColor = eyeColor;

    this.printName = function() {
        console.log(`Ma na imię ${this.name}`);
    }

    this.howManyLegs = function() {
        if (this.legs == 1) {
            console.log(`Ma ${this.legs} nogę`);
        } else {
            console.log(`Ma ${this.legs} nóg`);
        }
    }

    this.screamXTimes = function(times) {
        for (let i = 0; i <= times; i++) {
            console.log(`${i} ${this.name}`);
        }
    }
}

const zosiaczul = new Human('Zosia', 2, 2, 'brązowy');