/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonEnviar= document.querySelector("#enviarCantidad")


let listaInputs= []

//capturar evento de cantidad de familiares ingresados
$botonEnviar.onclick = function (e) {
    borrarAnteriores()
    
    const $cantidad= document.querySelector("#cantFamiliares")
    const $nodoPagina = document.querySelector("form")
    
    for (let i = 0; i < $cantidad.value; i++) {
        const div= document.createElement("div")
        const label = document.createElement("label")
        const input = document.createElement("input")

        label.innerText=`familiar ${i}` 
        input.id= `i${i}`
        div.id= `j${i}`

        div.append(label,input)

        
        $nodoPagina.appendChild(div)
      
        listaInputs.push(input)
        
    }
    //hasta este punto se agregan los inputs donde el usuario podra ingresar las edades
    
    if (listaInputs.length>0) {
        document.querySelector("#calcular").disabled=false
    }
    

    return false

}





function borrarAnteriores() {
    
    for (let i = 0; i < listaInputs.length; i++) {
        const element = document.querySelector(`#j${i}`);
        document.querySelector("form").removeChild(element)
        

    }
    listaInputs=[]
    
}


document.querySelector("#calcular").onclick = function (e) {
    document.querySelector("#resultado").textContent=""

    familiarMasGrande()
    familiarMasChico()
    promedioFamiliar()

    return false
}

//evento reset donde se encarga de borrar los divs que contienen el label y el input de cada familiar
document.querySelector("#reset").onclick = function (e) {

    if (listaInputs.length!=0) {
        console.log(listaInputs)

        for (let i = 0; i < listaInputs.length; i++) {
            const element = document.querySelector(`#j${i}`);
            document.querySelector("form").removeChild(element)
    
        }
    
        listaInputs=[]
    
        document.querySelector("#resultado").textContent=""
    }
    
    

    
    
    return false
}





//FUNCIONES AUXILIARES


function promedioFamiliar() {
    

    acumulador=0
    for (let i = 0; i < listaInputs.length; i++) {
        const edadFamiliar= Number(listaInputs[i].value)
        acumulador+=edadFamiliar
        
    }
    document.querySelector("#resultado").textContent += ` el promedio de edad familiar es  ${acumulador/listaInputs.length}` 
}


function familiarMasChico() {
    

    min=listaInputs[0].value
    for (let i = 0; i < listaInputs.length; i++) {
        const edadFamiliar= Number(listaInputs[i].value)
        if (edadFamiliar<min) {
            min=edadFamiliar
        }
        
    }
    document.querySelector("#resultado").textContent += ` el familiar mas chico tiene ${min}` 
}



function familiarMasGrande() {
    

    max=listaInputs[0].value
    for (let i = 0; i < listaInputs.length; i++) {
        const edadFamiliar= Number(listaInputs[i].value)
        if (edadFamiliar>max) {
            max=edadFamiliar
        }
        
    }
    document.querySelector("#resultado").textContent += `el familiar mas grande tiene ${max}` 
}