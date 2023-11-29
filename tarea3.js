
const $botonCalcular= document.querySelector("#calcular")
const $botonAñadir = document.querySelector("#añadir")

let listaHoras=[]
let listaMinutos=[]
let listaSegundos=[]

$botonAñadir.onclick = function (e) {
    const horas= Number(document.querySelector("#horas").value) 
    const minutos= Number(document.querySelector("#minutos").value)
    const segundos =  Number(document.querySelector("#segundos").value)
    
    listaHoras.push(horas)
    listaMinutos.push(minutos)
    listaSegundos.push(segundos)

    document.querySelector("#horas").value=""
    document.querySelector("#minutos").value=""
    document.querySelector("#segundos").value=""


    
    return false
    
}

$botonCalcular.onclick = function (e) { 
    
    let $resultado= document.querySelector("#resultado")
    let horasTotales=0
    let minutosTotales=0
    let segundosTotales=0
    
    for (let i = 0; i < listaHoras.length; i++) {
        horasTotales+=listaHoras[i]
        
    }
    for (let i = 0; i < listaMinutos.length; i++) {
        minutosTotales+=listaMinutos[i]
        
    }
    for (let i = 0; i < listaSegundos.length; i++) {
        segundosTotales+=listaSegundos[i]
        
    }

    $resultado.innerHTML= `horas totales= ${horasTotales}  minutos totales= ${minutosTotales}
     segundos totales=  ${segundosTotales}`

    return false

}