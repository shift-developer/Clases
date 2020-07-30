/* 
Ejercicio 1---------
RUTA POST /CONTACTO

Agregar un middleware que verifique nombre, apellido y email 
contengan algún valor.

Devolver status code 400 si algun dato es invalido.

Agregar un middleware que valide que el contacto no exista en 
el array de contactos. 
Devolver 409 si ya existe

Ejercicio 2---------
RUTA GET /CONTACTOS

Agregar un middleware que verifique que exista un query string version

Query string version deve ser un valor mayor a 5
de lo contrario devolver un status code 422.


Ejercicio 3---------

Agregar manejo de errores
Agregar un middleware para validar los errores genéricos
El status code a retornar es 500, el mensaje de error debe ser
"Se ha producido un error inesperado"

Generar un log para mostrar por consola el error original.

*/


const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

let datos = [];

const validarRequest = (req, res, next) => {
    const {nombre, apellido, email} = req.body;

    if (nombre && apellido && email) next(); //(!name || !email)
    res.status(400);
    res.json({error: 'Faltan datos necesarios'})
} 

const validarExistencia = (req, res, next) => {
    const {nombre, apellido} = req.body; 

    let result = datos.find( (a) => a.nombre == nombre && a.apellido == apellido);

    if (!result) next();
    res.status(409);
    res.json({error: 'El contacto ya existe'});
}

const validarQuery = (req, res, next) => {
    const { version } = req.query;

    if(version) next();
    res.status(400);
    res.json({error: 'Falta query'})
}

const validarVersionNumber = (req, res, next) => {
    const { version } = req.query;

    if (version > 5) next();
    res.status(422);
    res.json({error: 'La versión es obsoleta, ingrese una superior a 5'});
}

server.get('/contactos', validarQuery, validarVersionNumber, (req, res) => {
    res.json(datos);
});

server.post('/contacto', validarRequest, validarExistencia, (req, res) => {
    const element = req.body;

    datos.push(element);
    res.json(`El contacto ${element.nombre} ${element.apellido} se agregó exitosamente`);
});

server.use( (err, req, res, next) => {
    if(!err) return next();
    console.log('Se ha producido un error inesperado', err);
    res.status(500).send('Se ha producido un error inesperado');
})

server.listen(3000, ()=> {
    console.log('Servidor iniciado');
});