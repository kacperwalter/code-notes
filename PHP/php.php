 <?php
    
//RODZAJE ZMIENNYCH
$text = "Hello World";
$number = 90;
$float = 90.1;
$bool = true; //wyświetla 1 lub 0
$array = [1,2,3];
$null = null; //pusta wartość

//NAZEWNICTWO ZMIENNYCH (DOPUSZCZALNE WERSJE)
$nazwaZmiennej = 1;
$_nazwaZmiennej = 1; //tak te mozna je nazywać

//ZASIEG ZMIENNYCH
$zmiennaGlobalna = 90;
//zeby wykorzystać zmienną globalną we funkcji, nalezy dodac parametr "global"
function test(){
    global $zmiennaGlobalna;
    $zmiennaGlobalna = 100; //jesli tutaj zmienimy wartosc zmiennej to dziala tak, jakbysmy zmieniali jej wartosc na poziomie globalnym
    echo "Zmienna lokalna: " . $zmiennaGlobalna;
}

function test2(){
    global $zmiennaGlobalna;
    echo "Zmienna lokalna: " . $GLOBALS['zmiennaGlobalna']; //za pomocą tej tablicy zmienna globalna sie nie zmienia
}

//OPERACJE NA ZMIENNYCH
$text1 = 'Hello';
$text2 = ' World';

// echo $text.$text2; //konkatenacja
// echo $text1." ".$text2;

//przypisywanie wartości do nowych zmiennych
// $helloWorld = $text1." ".$text2;

// $a = 10;
// $b = 3;
// $c = $a+$b;

// echo "Wynik dodawania: $c";
// echo 'Wynik dodawania: %c';
//jeśli uzyjemy apostrofu zamiast cudzyslowia, to zmienna wyswietli sie jako tekst. Apostrofu uzywamy do wyswietlania po prostu tesktu/
//jesli chcemy uzywac apostrofu zamiast cudzysłownia i chcemy dodac zmienna, to robimy to w ten sposob:
// echo 'Wynik dodawania: '.$c;



#FUNKCJE

function test3(){
    echo "testowa funkcja";
}
// test3();

function test4($a){
    echo $a;
}
// test4("Twoj stary");

//funkcja z parametrem domyslnym, jesli nic nie zostaloby przekazane
function domyslnyParametr($b = "nic"){
    echo $b;
}


#OPERATORY

//arytmetyczne

// $a = 9;
// $b = 4;

// $c = $a + $b;
// $d = $a % $b;

// var_dump($c,$d);


//przypisania
//tak samo jak w python
// $a = 2;
// $a += 2;

// $a = "jakiś ciąg znaków";
// $a .= " inny ciąg znaków"; //dodawanie ciągów znaków .=
// jeśli uzyjemy tego operatora na liczbach to zwroci stringi

// var_dump($a);


//porownania

// $a = 5;
// $b = 5;

// var_dump($a == $b);

//porownanie z uwzglednieniem typu
// var_dump($a === $b);

// var_dump($a != $b); 


#inkrementacja/dekrementacja

// $a = 4;

// var_dump(++$a); //preinkrementacja
// var_dump($a++); //postinkrementacja

// var_dump(--$a); //predekrementacja
// var_dump($a--); //postdekrementacja

#logiczne
// $a = TRUE;
// $b = TRUE;

// var_dump($a && $b); //opieator and (i)
// var_dump($a AND $b); //dziala tak samo xd

// var_dump($a || $b); //operator or (lub)
// var_dump($a OR $b);

// var_dump(!$a); //operar not (negujemy wartośc i otrzymujemy przyciwieństwo)

// var_dump($a XOR $b); //xor (exclusive or) tylko w przypadku gdy jedna wartosc wynosi true, a druga false to zwroci true (jesli 2 operandy będą true to zwroci false)




#TABLICE

$tablica = array(
    'kot' => 'a',
    'fretka' => 'c',
    'pies' => 'b'
);

$tablica2 = [
    'kot' => 'a',
    'fretka' => 'c',
    'pies' => 'b'
];

$tablicaZagniezdzona = [
    'kot' => 'a',
    'fretka' => 'c',
    'pies' => [
        'łapy' => 4,
        'ogon' => 1,
    ]
];

$tablicaZagniezdzona2 = [
    'samochód' => [
        'koła' => 4,
        'szyby' => 2,
    ],
    'motocykl' => [
        'koła' => 2,
        'szyby' => 0,
    ],
];


//dodawanie tablicy - trzeba dodac [] na koncu nazwy zmiennej, co znaczy "utwórz nowy element na końcu tablicy"
// $tablica[] = 'd';

//jesli chcemy dodac element w danym indeksie, to nalezy wartosc liczbowa lub tekstowa dodac pomiedzy []
// $tablica['papuga'] = 'falista';

//dodawanie za pomoca metody array_push (nie daje mozliwosci przekazania indexu, ale daje mozliwosc dodawania wielu elementow za jednym razem)
// array_push($tablica, 'd');


//USUWANIE elementow z tablicy
// unset($tablica['fretka']); //usuwa element z danego indexu

// array_pop($tablica); //usuwanie ostatniego elementu tablicy (zwraca ten element jak w python) dlatego mozemy przypisac ta funkcje do nowej zmiennej, w ktorej zapiszemy usuniety element
// $b = array_pop($tablica);


//POBIERANIE elementów z tablicy
$nowaZmienna = $tablica['kot'];

//jesli chcemy pobrac z tablicy zagniezdzonej
$nowaZmienna2 = $tablicaZagniezdzona['pies']['łapy'];

//ponieranie dynamiczne

$nowaZmienna3 = 'motocykl';
// $nowaZmienna4 = $tablicaZagniezdzona2[$nowaZmienna3]['koła']; //wywali bład jeśli takiej wartości nie ma, więc mozemy to zrobic tak:
if(isset($tablicaZagniezdzona2[$nowaZmienna3])){
    $nowaZmienna4 = $tablicaZagniezdzona2[$nowaZmienna3]['koła'];
} else {
    $nowaZmienna = NULL;
};




//ŁĄCZENIE, zamieniane stringów na tablice

// $a = "jakaś wartość tekstowa";

//łączenie stringa w tablice
// $b = explode(' ',$a); // x-po jakim znaku chcemy rozdzielac, y-skad chcemy rozdzielac

//zamienianie tablicy na stringa
// $c = implode(' ', $b); //x-jaki znak ma łączyć tablice, y-skąd ma łączyć

//z dokumentacji
//array_diff porownuje i wybiera roznice pomiedzy tablicami
//array_intersect - zwraca część wspólną dwóch tablic
//array_merge - łączy pierwszą i drugą tablice w jedną całość




//ITEROWANIE  po elementach
// $a = [
//     'kot',
//     'pies',
//     'rybka',
// ];

//& - wskaźnik do miejsca w pamięci
function upper(&$value){
    $value = strtoupper($value); //zamiana na duze litery
};

function upper2(&$value){
    return strtoupper($value); //zamiana na duze litery
};

// array_walk($a, 'upper');
// $b = array_map('upper2', $a);//daje mozliwosc zwrotu wartosci, jesli w funkcji uzyjemy return (nie modyfikuje oryginalnej tablicy, tylko zwraca wartosci)
// var_dump($a); 






//KONWERSJA TYPOW
// $a = 3;
// $b = "text ";

// var_dump($a + $b); //3, bo konwertuje text na liczbe (w tym przypadku konwersja daje 0)

// $c = "31text";
// var_dump($a + $c); //w tym przypadku zamieni text na liczbe, ktora znajdzie w stringu i zwroci 34


// $a = ['kot'];
// $b = "text";

// var_dump($a + $b); //wywali błąd

//konwertowanie typów w sposób jawny
// $a = ['kot'];
// var_dump((string)$a); //podajemy typ zmiennej, który chcemy otrzymać

// $b = 'kot';
// var_dump((array)$b);

// $c = '31kot';
// var_dump((int)$c); //znajdujac 31 w stringu, zamieni na int(31)





#INSTRUKCJE STERUJĄCE


//if

// $a = 11;
// $b = 12;

// if($a > 10){
//     echo "wartość zmiennej a jest większa od 10";
// } elseif ($a == 10){
//         echo "wartość zmiennej a jest równa 10";
// } else{
//         echo "wartość zmiennej a jest mniejsza od 10";
//     }

// if($a > 10 && $b > $a){
//     echo "A jest wieksze od 10 i b jest wieksze od a";
// } else {
//     echo "Wszystko OK";
// }




//switch

// $a = 'kot';


//po spełneniu warunku instrukcja break przerywa dzialanie switcha
// switch($a){
//     case 'kot':
//     var_dump("A jest kotem");
//     break;
//     case 'pies':
//     var_dump("A jest psem");
//     break;
//     default: //domyślne zachowanie jesli nie spelni zadnego warunku (default zawsze na samym końcu)
//     var_dump("Nie znam tego zwierzaka");
// }

//jesli chcemy wykonac to samo dla dwoch warunkow w instrukcji switch:
// switch($a){
//     case 'kot':
//     case 'pies':
//     var_dump('Jest to kot albo pies');
//     break;
//     default:
//     var_dump("Nie znam tego zwierzaka");
// }

// $b = 10;
// switch(TRUE){
//     case $b > 10:
//         var_dump('A jest wieksze od 10');
//         break;
//     case $b == 10:
//         var_dump("B jest równe 10");
//         break;
//     case $b < 10:
//         var_dump("B jest mniejsze od 10");
//         break;
//     default:
//         var_dump("Podaj liczbę");
// }




// for

// $b = 15;

// for($a = 0; $a < 10 && $b <30; $a++){
//     $b += 2;
//     var_dump($a, $b);
// }

// $b = [
//     'kot',
//     'pies',
//     'wydra',
// ];

// for($a = 0; $a < count($b); $a++){
//     var_dump($b[$a]);
// }




// WHILE

// $a = 0;

// while($a < 10){
//     var_dump($a);
//     $a++;
// }





# FOREACH - do przechodzenia po kolejnych elementach tablic. !!nie musimy wiedzieć ile jest elementów w tablicy - pętla foreach sama to sprawdza

// $a = [
//     'kot' => 3,
//     'pies' => 5,
//     'wydra' => 7,
// ];

// foreach($a as $pet){
//     var_dump($pet);
// }

// foreach($a as $index => $pet){
//     var_dump($index, $pet);
// }









# OBIEKTY

// class NewClass{
//     public $attribute = 10;

//     public function method(){
//         return "value";
//     }
// }

// $c = new newClass();
// $c->attribute = 20;

class Wheel{
    public $height;
    public $size;
    public $car;

    public function setCar(Car $car){
        $this->car = $car;
    }

    public function burst(){

    }
}

class Car{
    public $color;
    public $doors;
    public $wheels = [];
    public $running = false;
    public $broken = false;
    
    public function addWheel(Wheel $wheel){
        $wheel->setCar($this);
        array_push($this->wheels, $wheel);
    }

    public function turnOn(){
        $this->running = true;
    }

    public function turnOff(){
        $this->running = false;
    }
}

$car = new Car();
$car->color = 'red';
$car->doors = 5;

$wheel = new Wheel();
$wheel->size = 17;
$wheel->height = 70;

$wheel2 = clone($wheel); //zapisujemy kopie obiektu

$car->addWheel($wheel);
$car->addWheel($wheel2);
$car->addWheel(clone($wheel));
$wheel->size = 20;
var_dump($car);
