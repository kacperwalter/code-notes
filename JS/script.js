console.log("elo skurwysyny");

// ZMIENNE
// camel case <= konwencja
var mojaZmienna1 = 1;
let mojaZmienna2 = 1;
const mojaStala = 1;

// zmienia int na string xd
let a = 3;
let b = "2";
let c = a+b;

a++; // inkrementacja dziala normalnie
a--; // dekrementacja tez

 a += 1; // dziala jak w python




//  CONDITIONALS syntax

if (a == b) {
    console.log('true');
} else if (a == 2) {
    console.log('true');
} else {
    console.log('false');
}

// operatory
// !== nie jest rowne
// === porownanie wartosci i typu



// ARRAYS

let array1 = [1,2,3,4,5,6];
let array2 = new Array(1,2,3,4,5,6); // tak tez mozna zapisywac

// console.log(array1[0]); // standardowo

// podstawowe metody wykonywane na arrays
// array1.toString(); //tablica do stringa
// array2.join('+'); // laczenie ze soba wszystkich elementow za pomoca znaku podanego w argumencie
array1.pop(); // usuwanie ostatniego elementu (zwraca element)
array1.shift(); // usuwanie pierwszego elementu (zwraca element)
array1.unshift('1'); // dodaje element na poczatku
array1.push(2); // dodaje element na koncu
array1.splice(1, 2); // usuwanie x=od ktorego elementu y=ile elemenetow z=mozna dodac nowe elementy (sprawdzic w dokumentacji jak bedzie potrzebne)
array1.slice(1,2); // zwracanie elementow, ale bez ich usuwania z oryginalu
let dlugosc = array1.length; //liczba elementow w tablicy




// OBIEKTY

