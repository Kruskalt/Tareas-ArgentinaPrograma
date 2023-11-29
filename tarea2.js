const $botonEnviar = document.querySelector("#boton-enviar")


$botonEnviar.onclick = function (e) {
    const datosUsuario = document.querySelectorAll(".dato")
    console.log(datosUsuario)

    for (let i = 0; i < datosUsuario.length; i++) {
        console.log(datosUsuario[i].value)
        document.querySelector("#informacion-completa").value += datosUsuario[i].value
    }

    const primerNombre = document.querySelector("#primerNombre").value
    const segundoNombre = document.querySelector("#segundoNombre").value

    document.querySelector("h1").innerText = "Bienvenido "+primerNombre + " " + segundoNombre

    return false

}