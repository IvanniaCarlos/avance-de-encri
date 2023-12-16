//const mensaje = document.getElementById('mensaje');: Se obtiene una referencia al elemento del textarea con el id 'mensaje'.
const mensaje = document.getElementById('mensaje');

//const contador = document.getElementById('contador');: Se obtiene una referencia al elemento del contador con el id 'contador'.
const contador = document.getElementById('contador');

//mensaje.addEventListener('input', function(e) {: Se agrega un evento de escucha de entrada ('input') al elemento 'mensaje'. Este evento se dispara cada vez que el contenido del textarea cambia.
mensaje.addEventListener('input', function(e) {
    /*
const target = e.target;: Se obtiene el elemento que desencadenó el evento, que en este caso es el textarea.
const longitudMax = target.getAttribute('maxlength');: Se obtiene la longitud máxima permitida del atributo 'maxlength' del textarea.
const longitudAct = target.value.length;: Se obtiene la longitud actual del contenido del textarea.
contador.innerHTML = ${longitudAct}/${longitudMax};: Se actualiza el contenido del elemento contador con la longitud actual y máxima, mostrando la relación actual de caracteres utilizados y el límite máximo permitido.
    */
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
})