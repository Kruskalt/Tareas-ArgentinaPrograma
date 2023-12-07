/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
 para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor 
salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



let contador = 0

function ocultarBotonCalcular(cantidadIntegrantes) {
    if (cantidadIntegrantes != 0) {
        document.querySelector("#calcular").className = ""
    } else {
        document.querySelector("#calcular").className = "oculto"
    }
}

function agregarIntegrante() {
    const div = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input")
    div.className = 'integrante'
    label.textContent = "salario del familiar"
    div.append(label, input)
    input.name = `salario${contador}`
    contador++


    document.querySelector("form").appendChild(div)

    ocultarBotonCalcular(document.querySelectorAll(".integrante").length)

}

function quitarIntegrante() {
    const integrantes = document.querySelectorAll(".integrante")
    if (integrantes.length > 0) {
        const ultimo = integrantes[integrantes.length - 1]
        document.querySelector("form").removeChild(ultimo)
        contador--
    }

    ocultarBotonCalcular(document.querySelectorAll(".integrante").length)

}

function salarioMensualPromedio() {
    const integrantes = document.querySelectorAll(".integrante input")
    acumulador = 0

    integrantes.forEach(element => {

        acumulador = acumulador + Number(element.value) / 12

    });

    return acumulador / integrantes.length



}

function salarioAnualPromedio() {
    const integrantes = document.querySelectorAll(".integrante input")
    acumulador = 0

    integrantes.forEach(element => {
        acumulador = acumulador + Number(element.value)

    });

    return acumulador / integrantes.length



}

function mayorSalario() {
    const integrantes = document.querySelectorAll(".integrante input")
    max = Number(integrantes[0].value)

    integrantes.forEach(element => {
        if (Number(element.value) > max) {
            max = Number(element.value)
        }
    });
    return max

}

function menorSalario() {
    const integrantes = document.querySelectorAll(".integrante input")
    min = Number(integrantes[0].value)

    integrantes.forEach(element => {
        if (Number(element.value) < min) {
            min = Number(element.value)
        }
    });
    return min

}

document.querySelector("#agregar").onclick = function (e) {
    agregarIntegrante()
    return false
}

document.querySelector("#quitar").onclick = function (e) {
    quitarIntegrante()
    return false
}


function validarSalarioAnual(salario) {
    const contieneSoloNumeros = /^[0-9/.]+$/i.test(salario);

    if (salario === "") {
        return "Te falta ingresa el salario de un familiar"
    } else if (!contieneSoloNumeros) {
        return "El formato solo acepta numeros"
    }
    return ""
}


function validarFormulario(event) {
    const $form = document.querySelector("form")
    const integrantes = document.querySelectorAll(".integrante input")

    let errores = {

    }

    for (let i = 0; i < integrantes.length; i++) {
        const llave = `salario${i}`
        console.log(integrantes[i].value)
        errores[`${llave}`] = validarSalarioAnual(integrantes[i].value)

    }

    const esExito = manejarErrores(errores)===0



    if (esExito) {
        document.querySelector("#mensualPromedio").innerText="salario mensual promedio "+salarioMensualPromedio()
        document.querySelector("#anualPromedio").innerText="salario anual promedio "+salarioAnualPromedio()
        document.querySelector("#mayorSalario").innerText="mayor salario "+mayorSalario()
        document.querySelector("#menorSalario").innerText="menor salario "+menorSalario()
        
        document.querySelector("#casoExitoso").className=""
        $form.className="oculto"

    }

    event.preventDefault();

}

function manejarErrores(errores) {
    eliminarMensajesError()
    const keys = Object.keys(errores)
    const $form = document.querySelector("form")

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

