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

// BlockAdBlock ----------------------------------------------------
let fakeAd = document.createElement("div");
  fakeAd.className = 
  "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
      
  fakeAd.style.height = "1px"
    
  document.body.appendChild(fakeAd)
    
  let x_width = fakeAd.offsetHeight;
  let msg = document.getElementById("msg")
    
      
    if(x_width){
      document.getElementById("alertblock").style.display = "none";
    }else{
      document.getElementById("divcont").style.display = "none";
      document.write('<div id="alertblock" style="background: #f436591c;width: 100%;height: auto;padding: 15px 20px 15px 20px;border-radius: 5px;"><p style="text-align: justify;">Sabemos que los anuncios no son muy agradables, pero es la manera de mantener este tipo de sitios funcionando. Por favor desactiva tu <span style="color: #ff0000;"><strong>AdBlock</strong></span> y recarga esta p&aacute;gina.</p></div>');
    }
 // -----------------------------------------------------------------