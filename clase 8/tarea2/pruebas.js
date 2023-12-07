
function probarValidarSalarioAnual() {
    console.assert(validarSalarioAnual("")==="Te falta ingresa el salario de un familiar",
    "ValidarSalarioAnual no valida que el salario sea vacio");

    console.assert(validarSalarioAnual("dasdsad")==="El formato solo acepta numeros",
    "ValidarSalarioAnual no valida que el salario solo tenga numeros")

    console.assert(validarSalarioAnual("132")==="","deberia aceptar numeros")
}