setTimeout( () => {
    let promesa2 = new Promise(
        (resolve, reject) => {
            console.log('Pendiente promesa 2... 1 segundo')
            setTimeout(() => {
                reject('error promesa 2');
            },1000);
        });
    
    promesa2
        .then(res => console.log(res))
        .catch(err => console.log(err));
}, 3000);