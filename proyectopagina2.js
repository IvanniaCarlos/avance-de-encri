document.getElementById("copy").addEventListener("click", function() {
    // Seleccionar el texto del textarea
    var textarea = document.getElementById("msgResult");
    textarea.select();
    
    // Copiar el texto al portapapeles
    document.execCommand('copy');
    
    // Desseleccionar el texto
    textarea.setSelectionRange(0, 0);

    // Mostrar un mensaje o realizar alguna acción adicional
    alert("Texto copiado al portapapeles: " + textarea.value);
});
 
document.getElementById("btn-cifrar").addEventListener("click",fuction ()) ; {
    let textoOriginal = document.getElementById("texto-original").value ; 
    let textoCifrado  = "" ; 
    let offset        =parseInt(document.getElementById("offset").value);
    for (let c of textoOriginal){
        //  MAYUSCULA
        if (c == c.toUpperCase() ) {
        //  CODIGO
          let codigo = c.charCodeAt(0);
        //  posicion en el abecesario
          codigo-=65 ;
        //  DESPLAZAMIENTO
          codigo = (codigo + offset) % 26;
        //  REGRESAMOS A SU POSICION ORIGINAL
          codigo +=65
        //  AGREGAMOS EL CARACTER DE LA CADENA 
          textoCifrado += String.fromCharCode(codigo);
        //  MINUSCULA
        }   else if (c == c.toLowerCase()) {

        //  NUMERO
        }   else if (c =="") {
            textoCifrado +=
        }
    }
} 


