console.log('Hola mundo');

const fs = require('fs');
const lib = require('./libreria');

const total = lib.suma(5, 4);

console.log('Resultado de la suma: ' + total)

const arrayHobbies = ['futbol', 'tenis', 'drones']

arrayHobbies.forEach(element => {
    console.log(element);
});

let msg = 'Hola texto';
let alerta = 'Archivo creado';

fs.writeFile('texto.txt', msg, ()=> {console.log(alerta)});

fs.readFile('./texto.txt', 'UTF-8', (err, data)=> {console.log(data)});

const calculator = require('./calculator');
let mult = calculator.mult(7, 4);
let resta = calculator.resta(10, 4);
let div = calculator.dividir(15, 3);

let string = `7 X 4 = ${mult}
10 - 4 = ${resta}
15 / 3 = ${div}`

fs.appendFile('./log.txt', string, (err)=> console.log(err));
fs.readFile('./log.txt', 'UTF-8', (err, data)=> {console.log(data)});
