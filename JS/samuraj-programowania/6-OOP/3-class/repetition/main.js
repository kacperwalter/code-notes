class Human {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    displayName() {
        return this.name;
    }
    addAge(years) {
        this.age + years;
    }
} 

const zosia = new Human('zosia', 'jackowiak', 20);

// console.log(zosia.displayName());
zosia.addAge(2);
console.log(zosia.age);