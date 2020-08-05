// NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ

// Metoda addEventListener - możemy wywołać ją na dowolnym elemencie DOM oraz na window (reprezentacja okna przeglądarki).

//PRZYKŁAD
// - jako pierwszy argument podajemy nazwę zdarzenie w tym przypadku podwójne kliknięcie czyli "dblclick".
// jako drugi argument podajemy funkcję (callback), która ma być wywołana w moemencie wystapienie zdarzenia (za każdym razem gdy wystąpi) 
window.addEventListener("dblclick", function() {
 console.log("podwójne kliknięcie");
});

// PRZYKŁAD - możemy podać funkcję strzałkową
// document.body.addEventListener("click", () => console.log("kliknięcie"))


// PRZYKŁAD - mozemy też podać nazwę funkcji, która została stworzona poza metodą addEventListener
// const showScroll = () => {
//  console.log("skrol");
// }

function showScroll() {
 console.log("skrol");
}

window.addEventListener("scroll", showScroll);




// PRZYKŁAD - metodę możemy przypisać bezposrednio do pobieranego elementu
// document.querySelector('h1').addEventListener('mousemove', function() {
//  this.textContent += "+";
//  console.log("ruch myszką po h1");
// })



// PRZYKŁAD
const h1 = document.querySelector('h1');

const addText = function() {
 this.textContent += " :) "; //dodanie znaków (stringa) do istniejacej zawartości tekstowej
 h1.classList.toggle("red"); //dodanie/zabranie klasy z elementu (dodaje jak nie ma, zabiera jak jest)
}

h1.addEventListener('click', addText);


// PRZYKŁAD - nastawienie nasłuchiwania, czyli uruchomienie metody addEventListener na każdym elemencie. Pamietajmy że nie można beżposrednio na pobranym obiekcie, tylko na każdym jego elemencie osobno

const addClassRed = function() {
 console.log("klik li");
}

const items = document.querySelectorAll("li");
// zapis items.addEventListener() nie zadziała, bo nie możemy ustawić nasłuchiwanie na tablicy tylko na pobranych elementach. Jak to zrobić, widać ponizej (można też użyć pętli)

//Metoda forEach sprawia, ze podana jako argument funkcja, jest wykonywana na każdym elemencie tablicy (na każdym li) Przy czym przekazujemy do środka ten element nadając mu nazwę (w tym wypadku item) Przy wywołaniu funkcji na kzdym elemencie w tym item będzie znajdowało się kolejne il (czyli kolejna pozycja z tablicy)
items.forEach((item) => item.addEventListener("click", addClassRed))


// TWORZENIE I DODAWANIE ELEMENTÓW DO STRONY

const divElement = document.createElement('div');
divElement.textContent = "Ostatni DIV";
divElement.style.backgroundColor = "red";
document.body.appendChild(divElement);


