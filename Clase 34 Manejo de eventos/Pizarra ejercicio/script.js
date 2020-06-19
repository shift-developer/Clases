function generarCuadricula(nroCuadros) {
    const container = document.querySelector('.container');
    for(let i = 0; i < nroCuadros; i++) {
        let div = document.createElement('div');
        div.className = 'cuadro';
        container.appendChild(div);
        div.onmouseover = () => {
            if(mouseClicked){
            div.style.backgroundColor = 'red';
            }
        }
        container.onmousedown = () => {
            mouseClicked = true;
        }
        container.onmouseup = () => {
            mouseClicked = false;
        }
    }
}

generarCuadricula(400);

