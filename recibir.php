<?php
$myfile = fopen("base.txt", "a") or die("¡No se puede abrir el archivo!");
fwrite($myfile, $enlace);
fclose($myfile);
?>