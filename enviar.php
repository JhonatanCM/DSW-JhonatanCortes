<?php
$myfile = fopen("base.txt", "a") or die("¡No se puede abrir el archivo!");
$txt = "Jhonatan\n";
fwrite($myfile, $txt);
fclose($myfile);
?>