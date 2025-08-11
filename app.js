// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de variables

let amigos = []; //lista para almacenar los nombres

//Funciones
function agregarAmigo() {
     //capturamos el valor ingresado en el input
    let nombreDelAmigo = document.getElementById('amigo').value;
    
    //Validar que el campo no este vacío
    if(nombreDelAmigo === ''){
        //mensaje de alerta
        alert('Por favor, inserte un nombre');
    }else{
        //si no esta vacío agrega el nombre a la lista (actualizar la lista)
        amigos.push(nombreDelAmigo);
        //Limpiamos la entrada
        limpiarEntrada(); 
        //Actualizamos la lista de amigos en la pantalla
        actualizarLista(); 
    }
}

function actualizarLista() {
    //seleccionamos la lista donde mostraremos los amigos
    let lista = document.querySelector('#listaAmigos'); 
    // Limpiamos la lista antes de actualizar para evitar duplicados
    lista.innerHTML = "";
    
    //recorremos la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        //creamos un nuevo elemento li
        let nuevoElemento = document.createElement('li');
        //asignamos a este elemento el nombre del amigo
        nuevoElemento.innerHTML = amigos[i];
        //agregamos el elemento con su nombre a la lista general
        lista.appendChild(nuevoElemento);
    }
}


function limpiarEntrada() {
    document.querySelector('#amigo').value = '';
}


