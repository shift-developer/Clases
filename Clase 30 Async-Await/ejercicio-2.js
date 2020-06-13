const nombres = [];
const lista = document.querySelector('.lista');

let getNombres = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const usuarios = await fetch(url)
    const usuariosJSON = await usuarios.json();
    return usuariosJSON;
}

getNombres().then((res) => {
    for (let user of res) {
        let nombre = user.name;
        let nuevoNodo = document.createElement('li');
        let textNodo = document.createTextNode(nombre);
        nuevoNodo.appendChild(textNodo);
        lista.appendChild(nuevoNodo);
    }
    
})
