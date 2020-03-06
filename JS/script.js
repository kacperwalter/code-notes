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

// tworzenie nowego obiektu
let osoba = {
    imie: 'kacper', 
    nazwisko: 'walter',
    wiek: 22,
    szkoly: { //obiekt w obiekcie 
        podstawowa: 'nr 3',
        liceum: 'nr 2'
    }
};

// odwoływanie sie do zmiennej w obiekcie
osoba.wiek = 23;
let imieObiekt = osoba.wiek;
let szkolyObiekt = osoba.szkoly.liceum; // odwolywanie sie do obiektu w obiekcie



// LOOPS syntax

for (let i = 0; i < 5; i++) {
    // console.log(i);
}

//iteracja prze keys
for (x in osoba) {
    // console.log(x);
}

// iteracja przez values
for (x in osoba) {
    // console.log(osoba[x]);
}

let z = 0;
while (z < 5) {
    // console.log(z);
    z++;
}





// FUNKCJE

function nazwaFunkcji() {
    console.log("wywolanie funkcji");
}

function dodawanie(a, b) {
    return a + b;
}

// funkcja anonimowa
let dodaj = function(x, y) {
    return x + y;
}




// PĘTLE NA TABLICACH

let osoby = [
    {imie:'Johnny', nazwisko:'Deep',  wiek:55},
    {imie:'Brad', nazwisko:'Pitt',  wiek:55},
    {imie:'Tom', nazwisko:'Hanks',  wiek:62},
]

for (let i = 0; i < osoby.length; i++) {
    // console.log(i, osoby[i].imie);
}

osoby.forEach(function(osoba){
    // console.log(osoba.imie);
})


// MAP, FILTER, REDUCE

let wynik1 = osoby.filter(function(osoba){
    return osoba.wiek > 50; // zwroci tylko jesli (true) osoba mawiecej niz 50 lat
})

let wynik2 = osoby.map(function(osoba){
    return osoba.wiek < 50; // filtrowanie tego co chcemy przekazac, a nie to co chcemy przekazac
})


// przydatne do obliczania wszystkich wartosci
let wynik3 = osoby.reduce(function(total, osoba){
    return total + osoba.wiek; 
}, 0);



// OBSŁUGA BŁĘDÓW

try {
    // wywali is not a function
    let error1 = osoby.reduced(function(total, osoba){
        return total + osoba.wiek; 
    }, 0);
} catch (err){
    // console.log(err);
}


// DOM
const div1 = document.getElementById('przykladoweID');
// console.log(div1);
const class1 = document.getElementsByClassName('przykladoweClass');
// console.log(class1);

// sprawdzanie czy zmienna jest tablica
const isArray1 = Array.isArray(class1);
// tworzenie tablicy z klas
const isArray2 = Array.from(class1);
// console.log(isArray2);

const linki = document.getElementsByTagName('a');
// console.log(Array.isArray(linki)); //false
const linkiArray = Array.from(linki);
// console.log(Array.isArray(linkiArray)); // true




//  QUERY SELECTOR - działa jak w CSS (mozna ściślej zaznaczac elementy)
const header1 = document.querySelector("#naszHeader");
const header = document.querySelectorAll('#naszHeader div.number');
const header2 = document.querySelectorAll("#naszHeader"); // do zaznacznia wszystkich query querySelectorAll

// console.log(header);


const headerArray = Array.from(header);
// console.log(headerArray);

for (let i = 0; i < headerArray.length; i++) {
    // console.log(i, headerArray[i]);
}



// ZAWARTOŚĆ ELEMENTÓW
