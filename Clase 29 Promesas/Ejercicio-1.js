let promesa1 = new Promise (
    (resolve, reject) => {
        console.log('Pendiente promesa 1... 2 segundos');
        setTimeout(() => {
            if(true){
                resolve('todo ok promesa 1');
            }
            else {
                reject('error promesa 1');
            }
        }, 2000);
    });

promesa1
    .then(res => console.log(res))
    .catch(error => console.log(error));

