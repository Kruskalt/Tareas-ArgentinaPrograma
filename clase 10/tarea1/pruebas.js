function probarValidarEdad() {
    console.assert(validarEdad("")==="Te falta ingresar la edad de un familiar",
    "ValidarEdad no valida que la edad sea vacio");

    console.assert(validarEdad("dasdsad")==="El formato solo acepta numeros y que sean enteros",
    "ValidarEdad no valida que el formato sea de numeros enteros solamente")

    console.assert(validarEdad("132")==="","deberia aceptar numeros")
}