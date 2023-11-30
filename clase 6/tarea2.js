/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
 para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor 
salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



let listaDivs = []

function agregarIntegrante() {
    const div = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input")

    label.textContent = "salario del familiar"
    div.append(label, input)

    listaDivs.push(div)

    document.querySelector("body").appendChild(div)

}

function quitarIntegrante() {
    if (listaDivs.length > 0) {
        let ultimodiv = listaDivs[listaDivs.length - 1]
        document.querySelector("body").removeChild(ultimodiv)
        listaDivs.pop()
    }

}

function salarioMensualPromedio() {
    acumulador=0
    if (listaDivs.length > 0) {
        listaDivs.forEach(element => {
            if ( element.childNodes[1].value != "") {
                acumulador =acumulador+ Number(element.childNodes[1].value / 12)
            }
        });
       
        return acumulador/listaDivs.length
    }
    return -1

}

function salarioAnualPromedio() {
    acumulador=0
    if (listaDivs.length > 0) {
        listaDivs.forEach(element => {
            if ( element.childNodes[1].value != "") {
                acumulador = acumulador+Number(element.childNodes[1].value)
            }
        });
       
        return acumulador/listaDivs.length
    }
    return -1

}

function mayorSalario() {
    if (listaDivs.length > 0) {
        max = Number(listaDivs[0].childNodes[1].value)

        listaDivs.forEach(element => {
            if (Number(element.childNodes[1].value) > max && element.childNodes[1].value != "") {
                max = Number(element.childNodes[1].value)
            }
        });
        if (max==="") {
            return -1
        }
        return max
    }
    return -1

}

function menorSalario() {
    if (listaDivs.length > 0) {
        min = Number(listaDivs[0].childNodes[1].value)

        listaDivs.forEach(element => {
            if (Number(element.childNodes[1].value) < min && Number(element.childNodes[1].value) != "") {
                min = Number(element.childNodes[1].value)
            }
        });
        if (min==="") {
            return -1
        }
        return min
    }
    
    
    return -1

}

document.querySelector("#agregar").onclick = function (e) {
    agregarIntegrante()

    console.log(listaDivs)

    mayorSalario()
    return false
}

document.querySelector("#quitar").onclick = function (e) {

    quitarIntegrante()


    return false
}

document.querySelector("#calcular").onclick = function (e) {
    let $resultado = document.querySelector("#resultado")
    $resultado.textContent = ""
    if (mayorSalario() != -1 && menorSalario()!=-1) {
        $resultado.textContent += `el salario mas grande es ${mayorSalario()}, el salario mas chico es ${menorSalario()}, el salario anual promedio es ${salarioAnualPromedio()}, el salario mensual promedio es ${salarioMensualPromedio()}`
    } else {
        $resultado.textContent += `no ingresaste salarios validos`
    }



    return false
}







