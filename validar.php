<?php
$myfile = fopen("base.txt", "w") or die("¡No se puede abrir el archivo!");
$txt = $_POST["enlace\n"];
fwrite($myfile, $txt);
fclose($myfile);
?>