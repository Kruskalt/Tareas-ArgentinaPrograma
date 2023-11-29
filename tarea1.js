const $botonCalcular= document.querySelector('#calcular')

//agrande un pooco los inputs
$botonCalcular.style.fontSize= "40px"
document.querySelector("#salarioAnual").style.fontSize ="40px"
document.querySelector("#salario-mensual").style.fontSize ="40px"



$botonCalcular.onclick = function (e) {
    const sueldoAnualUsuario= Number(document.querySelector("#salarioAnual").value)
    let sueldoMensual =  sueldoAnualUsuario/12
    console.log(sueldoMensual)
    document.querySelector("#salario-mensual").value = sueldoMensual
    return false
}
