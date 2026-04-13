const boton = document.getElementById("btn");
const caja = document.getElementById("caja");

//Funcion para cambio de color aleatorio
function RandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//Evento para cambio de color aleatorio al hacer click
boton.addEventListener("click", () =>{
    const cambioColor = RandomColor();

    caja.style.backgroundColor = cambioColor;

    console.log("Color cambiado correctamente");
})