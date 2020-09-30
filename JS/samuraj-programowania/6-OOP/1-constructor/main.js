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