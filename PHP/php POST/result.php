<?php

$x = isset($_POST['x']) ? (float)$_POST['x'] : 0.0; 
$y = isset($_POST['y']) ? (float)$_POST['y'] : 0.0;

if(
    ($x || $x === 0.0) &&
    ($y || $y === 0.0) &&
    is_numeric($x) && 
    is_numeric($y)){
        $sum = $x + $y;
}
echo $sum;