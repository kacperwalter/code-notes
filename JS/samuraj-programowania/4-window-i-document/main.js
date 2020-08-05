//DOM - obiektowy model dokumentu - model bieżącej strony internetowej, której głównym elementem jest document.

// window - obiekt globalny dla środowiska uruchomieniowego jakim jest przeglądarka. Zawiera mnóstwo metod i własciwości do wykorzystania. Window reprezentuje okno przeglądarki (otwartą kartę)

// console.log(window)
// console.log(window.document)
// console.log(document) //to samo co wyżej, ale nie musimy podawać w zapisie window, bo document i tak zostanie rozpoznany.

// tak naprawdę mamy
// window.console.log("w konsoli")

// Przykładowe metody dla document już poznaliśmy (np. querySelector, createElement) 
// Przykładowe właściości:
document.title;
document.domain;
document.body;

// Przykładowe właściwości i metody window

window.innerHeight; //wysokość okna (inneWidth - szerokość)
window.scrollY; //wartość skrola

// window.alert("popup wyskakuje");
// Nie piszemy najczęsciej window.alert() tylko alert()

// funkcja setTimeout
// Oczywiscie nie musimy pisać window na początku, ale tu by pokazać, że funckja setTimout jest metodą obiektu window.

// PRZYKŁAD 1
// window.setTimeout(() => {
//  alert("Już 5 sekund tu jesteś!")
// }, 5000)

// PRZYKŁAD 2
// const showTime = function() {
//  time += 5;
//  console.log(`Już ${time} sekund tu jesteś`);
//  setTimeout(showTime, 5000);
// }


// let time = 0;

// setTimeout(showTime, 5000)


// funkcja setInterval
// PRZYKŁAD

// let timer = 0;

// setInterval(() => console.log(++timer), 1000)