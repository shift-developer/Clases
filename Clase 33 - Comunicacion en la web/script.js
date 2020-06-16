const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nacimiento = document.getElementById('nacimiento');
const button = document.getElementsByTagName('button');

function tomarDatos() {
    let persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        nacimiento: nacimiento.value
    }
    console.log(persona);
    const personaJSON = JSON.stringify(persona);
    console.log(personaJSON);
}

button[0].addEventListener('click', tomarDatos);