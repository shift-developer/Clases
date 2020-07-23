const moment = require("moment");
const coolImages = require('cool-images');
const fs = require('fs');

let hoy = new Date();
let fecha = new moment(hoy, 'DD/MM/YYYY');
let formateada = fecha.format('MM/DD/YY');

console.log(formateada); //07/23/20

//ejercicio 1
//console.log(coolImages.one()); //https://unsplash.it/500/300?image=719

let arrUrlImages = coolImages.many();

/* arrUrlImages.forEach(element => {
    console.log(element);
}); */

//ejercicio 2
let fechaActual = moment().format('YYYY/MM/DD HH:mm:ss');
console.log(fechaActual);

fs.appendFile('log.txt', '\n' + fechaActual + '\n', (error)=> {
    if (error) throw Error;
    console.log('Exito');
});

setTimeout( () => {
    arrUrlImages.forEach(element => {
        fs.appendFile('./log.txt', element + '\n', (error) =>  {if (error) throw Error});
    });

    fs.readFile('log.txt', 'utf-8', (err, data) => {
        console.log(data);
    });
}, 0);

