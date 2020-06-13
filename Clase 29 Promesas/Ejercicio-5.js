setTimeout( () => {
    let input = parseFloat(prompt('Ingrese un número mayor a 0'));
    function factorial(num){
        let product;
        for (product = 1; num > 0; num--) { 
            product *= num; 
        };
        return product;
    }

    let sumarlo = new Promise((resolve, reject) => {
            resolve('Suma: ' + (input + input));
        });
        let cuadrado = new Promise((resolve, reject) => {
            resolve('Cuadrado: ' + (input*input));
        });
        let raizcuadrada = new Promise((resolve, reject) => {
            resolve('Raiz cuadrada: ' + Math.sqrt(input));
        });
        let factorizar = new Promise((resolve, reject) => {
            resolve('Factorial: ' + factorial(input));
        })

    sumarlo
        .then(res => {
            console.log(res);
            return cuadrado;
        })
        .then(res => {
            console.log(res);
            return raizcuadrada;
        })
        .then(res => {
            console.log(res);
            return factorizar;
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));

    setTimeout(() => Promise.all([sumarlo, cuadrado, raizcuadrada, factorizar])
        .then(res => console.log(res))
        .catch(err => console.log(err)), 2000);
    
}, 9000);

