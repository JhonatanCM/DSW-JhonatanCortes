// Obteniendo el valor de la URL -----------------------------------
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
// -----------------------------------------------------------------


// Mostrar contador si hay parametro id ----------------------------
const tiene_parametro = urlSearchParams.has("id");

if(tiene_parametro){
  document.getElementById("divcont").style.display = "block";
}
// -----------------------------------------------------------------


// Contador --------------------------------------------------------
window.onload = actualizarReloj;

var contador = 10;

function actualizarReloj() {
  document.getElementById('countdown').innerHTML = contador;
  if(contador==0){
    document.getElementById("btn_acort").href = links[id];
  }else{
    contador-=1;
    setTimeout("actualizarReloj()",1000);
  }
}
// -----------------------------------------------------------------

 
// Enlaces ---------------------------------------------------------  
const links = [
"https://www.google.com/1",   // #0 //
"https://www.google.com/2",   // #1 //
"https://www.google.com/3"    // #2 //
];
// -----------------------------------------------------------------