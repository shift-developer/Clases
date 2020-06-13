let promesa3 = new Promise(
    (resolve, reject) => {
        let random = Math.ceil(Math.random()*100);
        if(random % 2 == 0){
            resolve('Todo ok Promesa 3. El número par es: ' + random);
        }
        else {
            reject('Error Promesa 3. El número impar es: ' + random);
        }
    }
)
promesa3
    .then((res) => console.log(res))
    .catch((err) => console.log(err));