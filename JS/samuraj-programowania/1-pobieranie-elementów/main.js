/* CZYM JEST DOM */

//  -- reprezentacja dokumentu HTML w przeglądarce.
//  -- elementy strony (tag,tekst, atrybut) są węzłami, które mogą być pobrane, modyfifowane. Mozna też usuwać węzły i tworzyć nowe.
//  -- Struktura DOM przypomina drzewo. Na szczycie (na początku) jest obiekt document.
//  -- DOM nie jest częścią JS, ale JS umożliwia pracę z DOM


/* POBIERANIE ELEMENTÓW ZE STRONY */

// właściowości obiektu document
document.documentElement // dostęp do węzła html
document.body // dostęp do węzła body
document.images  //dostęp do obiektu (HTMLCollection -obiekt tablicopodobny) zawierającego wszystkie img w dokumencie (jeśli ich nie ma to obiekt jest pusty). Obiekt ten przypomina tablicę ponieważ ma length i do poszczególnych elementów można się dostać za pomocą notacje tablicy). 

// Taki obiekt łatwo przerobić na tablicę na dwa sposoby:
const imgs = Array.from(document.images);
const imgs2 = [...document.images];



// Metody pobierające JEDEN element

document.querySelector("li:nth-child(3)"); //jak selektor CSS
const firstElement = document.getElementById('car'); //Jako argument przy wywołaniu metody podajemy identyfikator


// Obie metody zwracają pierwszy znaleziony element lub null jeśli nie znalazły żadnego.


// Metody pobierające WSZYSTKIE pasujace elementy

document.querySelectorAll("* ul>li>a"); //NodeList - lista węzłów (obiekt tablicopodobny, oprócz właściwości length i mozliwości pracy z nim na notacji tablicy czyli np.[1], ma też kilka metod tablicy, ale tylko nieliczne)
document.getElementsByTagName('li'); //HTMLCollection (obiekt tablicopodobny)
document.getElementsByClassName("even"); //HTMLCollection (obiekt tablicopodobny)

// Zwracają listę pasujacych elementów w formie tablicopodobnego obiektu (NodeList/listy węzłów w przypadku querySelectorAll i HTMLCollection/kolekcji html w przypadku dwóch pozostałych). Jeśli nie znajdują żadnego pasującego elementu to zwracany obiekt jest pusty.
// Ten pierwszy sposób współcześne zdaje się być czesciej używany, bardziej też przypomina tablicę (ma część jej metod)

// Pamiętajmy jednak, że taki pseudotablice możemy łatwo zmienic na tablicę np.

const liList = document.querySelectorAll('li'); //pobranie elementów (NodeList)

const liArray = [...liList]; //parametr rest do przerobienia na tablicę
const liArray2 = Array.from(liList); //metoda do przerobienia na tablicę


// POBIERANIE ATRYBUTÓW I ZAWARTOŚCI Z ELEMENTÓW

const h2 = document.querySelector('h2');
// console.log(h2.getAttribute('class'));
// console.log(h2.getAttribute('data-color'));
// console.log(h2.getAttribute('id')); //Jeśli nie ma danego atrybutu, to zwracany jest null. Jeśli jest zwraca całą zawartość atrybutu

const h2Class = document.querySelector('h2').getAttribute('class');

const h2Text = h2.textContent; //zawartość tekstowa
const h2HTML = h2.innerHTML; //tekst wraz ze znacznikami html któe są wewnatrz danego elementu

// classList
//Obiekt classList przechowuje wszytskie klasy danego elelement (jeśli nie ma to jest to pusty obiekt)
// console.log(h2.classList);

// Przykładowa metoda contains dla obiektu ClassList
h2.classList.contains("title"); // Metoda contains sprawdza czy element posiada daną klasę. Jeśli ma zwracane jest true, jeśli nie zwraca false




