// Input - Display
const textarea = document.getElementById('textarea');
const resultadoDisplay = document.getElementById("resultado")
const resultado = document.querySelector('.mostrarResultado');
// Buttons
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector('.btnCopy');
// alert
const imgAlerta = document.querySelector('.alerta');

// Input - Textarea (Capturing events)
textarea.addEventListener('keypress', function(event) {
  const key = event.key;
  if (!/[a-z,ñ, ]/.test(key)) {
    event.preventDefault();    
    imgAlerta.src = "img/alert_.svg";    
    } else {
      imgAlerta.src = "img/alert.svg";
    }
});
textarea.addEventListener('input', function() {
  var screenWidth = window.offsetWidth; 
  if (this.value.length > 0)  {    
    document.querySelector(".mostrarResultado").textContent= null;
    btnCopiar.style.display="block"; 
  } else {
    btnCopiar.style.display="none";
  }
});

// Reset Button
resetButton.addEventListener("click", function() {
  textarea.value = "";
  resultadoDisplay.textContent = "";
});

// Encriptar - Encrypter 'Handler'
(() => {
  btnEncriptar.addEventListener('click', encriptarM);
})()
function encriptarM() {    
  let texto = document.querySelector("#textarea").value;    
  let textoEncriptado = texto.replace(/e/mg, 'enter');

  textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
  textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
  textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
  textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');

  document.querySelector(".mostrarResultado").textContent = textoEncriptado ;     
  document.querySelector(".btnCopiar").value = '';  
}

// Desencriptar - Desencripter 'Handler'
(() => {
  btnDesencriptar.addEventListener('click', desencriptarM);
})()
function desencriptarM() {      
  let texto = document.querySelector("#textarea").value;
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');

    document.querySelector(".mostrarResultado").textContent = textoEncriptado ;
  document.querySelector("#textarea").value = '';
  btnCopiar.style.display="block";
}

// Copy clipboard Method
(()=> {
  btnCopiar.addEventListener('click', copiarM);
})()
function copiarM() { 
  textarea.focus();
    navigator.clipboard.writeText(document.querySelector(".mostrarResultado").textContent);
    console.log('texto en portapapaeles');
}