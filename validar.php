<?php
$myfile = fopen("base.txt", "w") or die("¡No se puede abrir el archivo!");
$txt = $_REQUEST["enlace"];
fwrite($myfile, $txt);
fwrite($myfile, "\n");
echo "Enlace agregado con éxito.";
fclose($myfile);
?>