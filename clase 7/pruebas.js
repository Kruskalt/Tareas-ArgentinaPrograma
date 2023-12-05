/*function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();
*/


function probarValidarCiudad() {
    console.assert(validarCiudad("")==="No seleccionaste ninguna ciudad", 
    "validar ciudad no valida que la ciudad no sea vacia");

    console.assert(validarCiudad("Madrid")==="La ciudad no se encuentra en la lista de ciudades disponibles",
    "validar ciudad no valida que la ciudad no este entre las disponibles")
}

probarValidarCiudad()


function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("")==="No le dijiste a santa que te gustaria recibir", 
    "validar descripcion del regalo no valida que la descripcion sea vacia");

    console.assert(probarValidarDescripcionRegalo("sadasdadadasdsadasdasdsadasdasdasdasdasdadasdadasdasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdas")==="Estas pidiento muchos regalos, Santa tiene que regalarle a los demas niños tambien",
    "validar descripcionRegalo no valida que la descripcion supere el maximo de caracteres")
}