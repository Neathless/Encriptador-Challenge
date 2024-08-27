var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var imagenMunieco = document.querySelector(".contenedor-imagen");
var contenedorMensaje = document.querySelector(".contenedor-mensaje");
var textoResultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarElementos();
    var textoIngresado = recuperarTexto();
    textoResultado.textContent = encriptarTexto(textoIngresado);
}

function desencriptar(){
    ocultarElementos();
    var textoIngresado = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(textoIngresado);
}

function recuperarTexto(){
    var areaTexto = document.querySelector(".area-texto");
    return areaTexto.value;
}

function ocultarElementos(){
    imagenMunieco.classList.add("ocultar");
    contenedorMensaje.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "a";
            i += 1;
        }
        else if(texto[i] == "e"){
            textoFinal += "e";
            i += 4;
        }
        else if(texto[i] == "i"){
            textoFinal += "i";
            i += 3;
        }
        else if(texto[i] == "o"){
            textoFinal += "o";
            i += 3;
        }
        else if(texto[i] == "u"){
            textoFinal += "u";
            i += 3;
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

const botonCopiar = document.querySelector(".btn-copiar"); 
botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles"); 
});
