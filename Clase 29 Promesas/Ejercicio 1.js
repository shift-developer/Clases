let promesa1 = new Promise (
    (resolve,reject) => {
        console.log('Pendiente...');
        setTimeout(() => {
            if(true){
                resolve('todo ok');
            }
            else {
                reject('error');
            }
        }, 2000);
    });

promesa1
    .then(res => console.log(res))
    .catch(error => console.log(error));

    