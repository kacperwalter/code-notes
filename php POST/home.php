<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> <?=$title?> </title>
</head>
<body>
    <h1> <?=$header?> </h1>
    
    <form action="result.php" method="post">
        <input type="text" name="x" title="pierwsza liczba" value="<?=$x?>" >
        <input type="text" name="y" title="druga liczba" value="<?=$y?>">
        <input type="submit">
    </form>

    Sum: <?=$sum?>

</body>
</html>