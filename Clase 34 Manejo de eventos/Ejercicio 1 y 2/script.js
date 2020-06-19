const boton = document.querySelector('#boton');
const text = document.querySelector('#texto');

boton.addEventListener('mousedown', (event) => {
    let nombreBoton = event.button;
    let click;
    switch(nombreBoton) {
        case 0:
            click = 'Click izq'
            break;
        case 1:
            click = 'Click medio'
            break;
        case 2:
            click = 'Click der'
            break;
    }
    console.log('Me clickearon con ' + click);
});

text.addEventListener('keypress', (event) => {
    console.log(event.key);
});



