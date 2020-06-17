const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const loginButton = document.getElementById('login');

const nombre2 = document.getElementById('nombre2');
const apellido2 = document.getElementById('apellido2');
const nacimiento2 = document.getElementById('nacimiento2');
const dni = document.getElementById('dni');
const hobbies = document.getElementById('hobbies');
const guardarDatos = document.getElementById('guardar')

function login() {
    localStorage.setItem("usuario", usuario.value);
    localStorage.setItem("password", password.value);
    window.location.replace("home.html");
}

function cerrarSesion() {
    alert('Ha cerrado la sesión');
    localStorage.removeItem("usuario");
    localStorage.removeItem("password");
    window.location.replace("index.html");

}

function guardarForm(){
    const datosUsuario = {
        nombre: nombre2.value,
        apellido: apellido2.value,
        nacimiento: nacimiento2.value,
        dni: dni.value,
        hobbies: hobbies.value
    };
    const datosJson = JSON.stringify(datosUsuario);
    localStorage.setItem("datos", datosJson);
    console.log(JSON.parse(localStorage.getItem("datos")))
}