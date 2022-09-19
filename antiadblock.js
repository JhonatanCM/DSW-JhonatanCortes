let fakeAd = document.createElement("div");
  fakeAd.className = 
  "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
      
  fakeAd.style.height = "1px"
    
  document.body.appendChild(fakeAd)
    
  let x_width = fakeAd.offsetHeight;
  let msg = document.getElementById("msg")
    
      
    if(x_width){
      document.write('<style> .popup{ background-color: #ffffff; width: 400px; max-width: 50%; padding: 20px 30px; position: absolute; transform: translate(-50%,-50%); left: 50%; top: 50%; border-radius: 8px; font-family: "Poppins",sans-serif; text-align: center; } .popup button{ display: block; margin:  0 0 20px auto; background-color: transparent; font-size: 30px; color: #c5c5c5; border: none; outline: none; cursor: pointer; } .popup p{ font-size: 14px; text-align: justify; margin: 20px 0; line-height: 25px; } #refresh{ display: block; width: 150px; position: relative; margin: 10px auto; text-align: center; background-color: #0f72e5; color: #ffffff; text-decoration: none; padding: 5px 0; cursor: pointer; } .backg { background: #00000042; width: 100%; height: 100%; } </style> <div class="backg"><div class="popup"><svg enable-background="new 0 0 64 64" style=" width: 100px; " version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"> <g fill="#1D1D1B"> <path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z"/> <circle cx="20.518" cy="21.361" r="4.338"/> <circle cx="43.48" cy="21.361" r="4.338"/> <path d="m32 36.643c-9.732 0-14.355 6.859-15.441 10.484-0.316 1.055 0.281 2.16 1.334 2.48 0.193 0.061 0.389 0.088 0.582 0.088 0.854 0 1.646-0.553 1.912-1.41 0.098-0.312 2.488-7.643 11.613-7.643 9.107 0 11.504 7.299 11.611 7.641 0.262 0.861 1.055 1.418 1.914 1.418 0.189 0 0.383-0.027 0.572-0.084 1.059-0.316 1.66-1.432 1.344-2.488-1.084-3.627-5.707-10.486-15.441-10.486z"/> </g> </svg> <h2>UPS!</h2> <p style="text-align: justify;">Sabemos que los anuncios no son muy agradables, pero es la manera de mantener este tipo de sitios funcionando. Por favor desactiva tu <span style="color: #ff0000;"><strong>AdBlock</strong></span> y haz clic en recargar.</p> <a id="refresh">Recargar</a> </div></div>');
    }



let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})