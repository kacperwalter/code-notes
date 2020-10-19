<?php

$title = "Nasza pierwsza strona";
$header = "Kalkulator";

$sum = 0;


//GET zbiera zmienne superglobalnie(jawnie) - z linku URL
//do zmiennych przed pobraniem nalezy dolaczyc wartosc domyslna
$x = isset($_GET['x'])? (float)$_GET['x'] : 0.0; //zadaje pytanie czy ustawiona jest ta wartość, jezeli tak to przyjmij ta wartosc, jezeli nie, to przyjmij tą wartosc (0)
$y = isset($_GET['y'])? (float)$_GET['y'] : 0.0;

if(($x || $x === 0.0) &&($y || $y === 0.0) && is_numeric($x) && is_numeric($y)){
        $sum = $x + $y;
    }

include_once 'home.php';