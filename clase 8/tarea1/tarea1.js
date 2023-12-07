/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonEnviar = document.querySelector("#enviarCantidad")



let contador = 0

//capturar evento de cantidad de familiares ingresados
$botonEnviar.onclick = function (e) {
    borrarAnteriores()

    const $cantidad = document.querySelector("#cantFamiliares").value
    console.log($cantidad)

    crearIntegrantes($cantidad)
    //hasta este punto se agregan los inputs donde el usuario podra ingresar las edades


    mostrarBotonCalcular($cantidad)
    mostrarBotonReset($cantidad)

    botonConfirmar($cantidad)

    e.preventDefault()

}
function crearIntegrantes(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        const div = document.createElement("div")
        const label = document.createElement("label")
        const input = document.createElement("input")

        div.className = 'integrante'
        label.innerText = `familiar ${i}`
        input.name = `edad${contador}`

        contador++

        div.append(label, input)


        $form.appendChild(div)




    }
}

function mostrarBotonCalcular(cantidadIntegrantes) {
    if (cantidadIntegrantes != 0) {
        document.querySelector("#calcular").className = ""
    } else {
        document.querySelector("#calcular").className = "oculto"
    }
}
function mostrarBotonReset(cantidadIntegrantes) {
    if (cantidadIntegrantes != 0) {
        document.querySelector("#reset").className = ""
    } else {
        document.querySelector("#reset").className = "oculto"
    }
}
function ocultarBotonConfirmar() {
    document.querySelector("#enviarCantidad").className="oculto"
}
function mostrarBotonConfirmar() {
    document.querySelector("#enviarCantidad").className=""
}
function botonConfirmar(cantidadIntegrantes) {
    if (cantidadIntegrantes>0) {
        ocultarBotonConfirmar()
    }else{
        mostrarBotonConfirmar()
    }
}





function borrarAnteriores() {
    const $integrantes = document.querySelectorAll(".integrante")
    for (let i = 0; i < $integrantes.length; i++) {

        document.querySelector("form").removeChild($integrantes[i])


    }
    contador = 0


}



document.querySelector("#reset").onclick = function (e) {
    borrarAnteriores()
    const $cantidad = document.querySelectorAll(".integrante").length
    

    mostrarBotonCalcular($cantidad)
    mostrarBotonReset($cantidad)
    mostrarBotonConfirmar()
    $form.cantidad.value=""

    return false
}



function promedioFamiliar() {

    const $integrantes = document.querySelectorAll(".integrante input")
    acumulador = 0
    for (let i = 0; i < $integrantes.length; i++) {
        const edadFamiliar = Number($integrantes[i].value)
        acumulador += edadFamiliar

    }
    return acumulador / $integrantes.length
}


function familiarMasChico() {

    const $integrantes = document.querySelectorAll(".integrante input")
    min = $integrantes[0].value
    for (let i = 0; i < $integrantes.length; i++) {
        const edadFamiliar = Number($integrantes[i].value)
        if (edadFamiliar < min) {
            min = edadFamiliar
        }

    }
    return min
}



function familiarMasGrande() {

    const $integrantes = document.querySelectorAll(".integrante input")
    max = $integrantes[0].value
    for (let i = 0; i < $integrantes.length; i++) {
        const edadFamiliar = Number($integrantes[i].value)
        if (edadFamiliar > max) {
            max = edadFamiliar
        }

    }
    return max
}


function validarEdad(edad) {
    const contieneSoloNumeros = /^[0-9]+$/i.test(edad);

    if (edad=== "") {
        return "Te falta ingresar la edad de un familiar"
    } else if (!contieneSoloNumeros) {
        return "El formato solo acepta numeros y que sean enteros"
    }
    return ""
}

function validarcantidadFamiliares(cantidad) {
    if (cantidad==="") {
        return "Te falta ingresar la cantidad de familiares"
    }
    return ""
}


function validarFormulario(event) {

    const integrantes = document.querySelectorAll(".integrante input")
    const cantidad= $form.cantidad.value
    

    const errorCantidad=validarcantidadFamiliares(cantidad)
    
    let errores = {

    }
    errores.cantidad=errorCantidad

    for (let i = 0; i < integrantes.length; i++) {
        const llave = `edad${i}`
        console.log(integrantes[i].value)
        errores[`${llave}`] = validarEdad(integrantes[i].value)

    }

    const esExito = manejarErrores(errores) === 0



    if (esExito) {
        document.querySelector("#edadPromedio").innerText = "Edad promedio " + promedioFamiliar()
        document.querySelector("#masChico").innerText = "El mas joven tiene " + familiarMasChico()
        document.querySelector("#masGrande").innerText = "El mas viejo tiene " + familiarMasGrande()


        document.querySelector("#casoExitoso").className = ""
        $form.className = "oculto"

    }

    event.preventDefault();

}

function manejarErrores(errores) {
    eliminarMensajesError()
    const keys = Object.keys(errores)


    const $errors = document.querySelector("#errores")

    let cantidadErrores = 0

    keys.forEach(function (key) {
        const error = errores[key]

        if (error) {
            $form[key].className = "error"
            const $error = document.createElement("li")

            $error.innerText = error
            $errors.appendChild($error)
            cantidadErrores++

        } else {
            $form[key].className = ""

        }
    })

    return cantidadErrores
}

function eliminarMensajesError(event) {
    const $errors = document.querySelector("#errores")
    while ($errors.firstChild) {
        $errors.removeChild($errors.firstChild)
    }

}


const $form = document.querySelector("form")
$form.onsubmit = validarFormulario