setTimeout( () => {
let promesaRace1 = new Promise(
    (resolve, reject) => {
        let random = Math.random()*1000;
        setTimeout( () => {
            resolve('Ganó la carrera la promesaRace1. Tiempo: ' + random + 'ms');
        }, random);
    }
);

let promesaRace2 = new Promise(
    (resolve, reject) => {
        let random = Math.random()*1000;
        setTimeout( () => {
            resolve('Ganó la carrera la promesaRace2. Tiempo: ' + random + 'ms');
        }, random);
    }
);

Promise.race([promesaRace1, promesaRace2])
    .then(res => console.log(res));
}, 7000);

