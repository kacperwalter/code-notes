Array.prototype.returnThisArrow = () => this;
Array.prototype.returnThisAnonymous = function () { return this };

console.log([1, 2, 3].returnThisArrow())


// get in regular object 
const person = {
  firstName: "John",
  lastName: "Doe",
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); // "John Doe"
// 📌 Dlaczego to jest getter?
// ✔ Nie wywołujesz fullName(), tylko używasz person.fullName.
// ✔ Getter automatycznie zwraca wartość bez () – działa jak właściwość, a nie funkcja. --- PROPERTY 


// Gettery w Object.defineProperty()
Object.defineProperty(Array.prototype, "firstMember", {
  get: function() {
    return this[0];
  }
});

const numbers = [10, 20, 30];
console.log(numbers.firstMember); // 10
// ✔ firstMember nie jest metodą (arr.firstMember()) tylko właściwością (arr.firstMember).
// ✔ Nie zużywa pamięci, bo wartość jest obliczana dopiero, gdy ktoś o nią zapyta.
// ✔ Nie można przekazać argumentów, bo get to nie funkcja.


// 3️⃣ Po co używać getterów zamiast metod?

// ✅ Gdy chcesz, żeby właściwość była dynamiczna i nie musiała być przechowywana w pamięci.
// ✅ Gdy chcesz wygodniejszą składnię (obj.prop zamiast obj.prop()).
// ✅ Gdy chcesz ukryć logikę obliczeń i sprawić, by obiekt zachowywał się bardziej jak natywny typ danych.