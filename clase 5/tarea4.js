let $nodelist = document.querySelectorAll("li")
let listanumeros = []
let $cajaPromedio = document.querySelector("#caja-promedio")
let $cajaMinimo = document.querySelector("#caja-minimo")
let $cajaMaximo = document.querySelector("#caja-maximo")
let $cajaMasRepetido = document.querySelector("#caja-mas-repetido")

for (let i = 0; i < $nodelist.length; i++) {
    listanumeros.push(Number($nodelist[i].innerText))

}
console.log(listanumeros)


$cajaPromedio.textContent = `El promedio es ${promedio(listanumeros)}`

$cajaMinimo.textContent = `El numero mas chico es ${numeroMinimo(listanumeros)}`

$cajaMaximo.textContent = `El numero mas grande es ${numeroMaximo(listanumeros)}`

$cajaMasRepetido.textContent = `El numero mas repetido es ${masRepetido(listanumeros)}`

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
//1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
//2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
//3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
//4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function promedio(lista) {
    let calculoPromedio = 0

    lista.forEach(element => {
        calculoPromedio += element
    });

    return calculoPromedio / listanumeros.length
}
function numeroMinimo(lista) {
    let min = lista[0]
    lista.forEach(element => {
        if (element < min) {
            min = element
        }
    });
    return min
}

function numeroMaximo(lista) {
    let max = lista[0]
    lista.forEach(element => {
        if (element > max) {
            max = element
        }
    });
    return max
}

function apariciones(lista, numero) {
    let contador = 0
    lista.forEach(element => {
        if (element === numero) {
            contador += 1
        }
    });

    return contador
}

function masRepetido(lista) {
    let numMasRepetido = lista[0]
    let repeticiones = apariciones(lista, lista[0])

    lista.forEach(element => {
        let repeticionesElement = apariciones(lista, element)

        if (repeticionesElement > repeticiones) {
            numMasRepetido = element
            repeticiones = repeticionesElement
        }
    });
    return numMasRepetido
}