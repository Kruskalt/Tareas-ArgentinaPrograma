/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */


const $formulario= document.querySelector("form")
const $ciudades = document.querySelectorAll("option")


function validarCiudad(ciudad) {   
    if (ciudad==="") {
        return 'No seleccionaste ninguna ciudad'
    }
    if (!(estaEnLaLista(ciudad))) {
        return 'La ciudad no se encuentra en la lista de ciudades disponibles'
    }
    
    return ''
}
function estaEnLaLista(candidato) {
   
    for (let i = 0; i < $ciudades.length; i++) {
        if (candidato===$ciudades[i].value) {
            
            return true
        }
        
    }
    return false
        
    
}


function validarDescripcionRegalo(descripcion) {
    const CARACTERESMAXIMOS=30
    if (descripcion==="") {
        return 'No le dijiste a santa que te gustaria recibir'
    }
    if (descripcion.length > CARACTERESMAXIMOS) {
        return 'Estas pidiento muchos regalos, Santa tiene que regalarle a los demas niños tambien'
    }
    return ''

    
}


