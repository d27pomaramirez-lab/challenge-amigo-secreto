// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de variables

let amigos = []; //lista para almacenar los nombres

//Funciones
function agregarAmigo() {
    let nombreDelAmigo = document.getElementById('amigo').value; //capturamos el valor ingresado en el input
    
    //Validar que el campo no este vacío
    if(nombreDelAmigo === ''){
        //mensaje de alerta
        alert('Por favor, inserte un nombre');
    }else{
        //si no esta vacío agrega el nombre a la lista (actualizar la lista)
        amigos.push(nombreDelAmigo);
        limpiarEntrada(); //Limpiamos la entrada
        //console.log(amigos);
    }
}

function limpiarEntrada() {
    document.querySelector('#amigo').value = '';
}