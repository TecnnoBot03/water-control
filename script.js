const mandar = document.getElementById("supermit");
const main = document.getElementById("container")
const habitacion = document.getElementById("habitacion");
const salidas = document.getElementById("numSalidas");
const info = document.getElementById("info");
const infoContainer = document. getElementById("infoContainer");
const infoLabel = document. getElementById("infoLabel");

info.classList = "hide";

let agua = 20;

let xd;

let habitaciones;

habitaciones = 0;

let valorTotal;

let valorFijoAcueduto = 15197;
let valorFijoAlcantarillado = 7223;
let consumoPorUnidadAcueducto = 2987;
let consumoPorUnidadAlcantarillado = 3255; 

let valorFijoMensual = valorFijoAcueduto + valorFijoAlcantarillado;
let valorPorUnidad = consumoPorUnidadAcueducto + consumoPorUnidadAlcantarillado;
let consumoActual = (agua / 1000) * valorPorUnidad;

function createRoom(xd) {
    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    main.append(newDiv);

    var newLabel1 = document.createElement("label");
    newLabel1.textContent = habitacion.value;
    var currentLabel = document.getElementById("label1");
    document.body.insertBefore(newLabel1, currentLabel);
    newDiv.append(newLabel1);

    var newLabel = document.createElement("label");
    newLabel.textContent = `-Esta habitacion tiene ${salidas.value} salidas de agua, que en total gastan ${salidas.value*agua}L de agua, la habitacion tiene un costo de ${salidas.value*consumoActual}`;
    var currentLabel = document.getElementById("label1");
    document.body.insertBefore(newLabel, currentLabel);
    newDiv.append(newLabel);

    for (i=0; i<salidas.value; i++) {
        var newLabel2 = document.createElement("label");
        newLabel2.textContent = `-Salida ${i+1} tiene un valor actual de: ${consumoActual}`;
        var currentLabel = document.getElementById("label1");
        document.body.insertBefore(newLabel2, currentLabel);
        newDiv.append(newLabel2);
        newLabel2.classList = `labels`;
    }

    newDiv.classList = `habitacionCreada`;
    newLabel.classList = `labels`;
    newLabel1.classList = `labels`;
    
    habitaciones = Number(Number(habitaciones) + Number(salidas.value));
    
}




mandar.addEventListener("click", ()=>{
    createRoom();
    console.log(habitaciones);
    console.log(habitacion.value);
    habitacion.value = "";
    salidas.value = "";
    info.classList = "on";
    infoLabel.innerText = `El costo total de la casa es de:     ${habitaciones*(agua/1000)*valorPorUnidad + valorFijoMensual}`

})
