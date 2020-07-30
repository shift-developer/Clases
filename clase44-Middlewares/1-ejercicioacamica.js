const express = require('express');
const app = express();

function logRequest ( req, res, next) {
    
    console.log(
        `Midleware logRequest: A las ${new Date()} usuario accedio a ${req.path}`
    );

    next();
}

app.use(logRequest); //se ejecuta como middleware de todos los path

function interceptar ( res, res, next) {
    res.send('You shall not pass!!!!'); //no tiene el next() por ende nunca se accede a la ruta
}

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/gandalf', interceptar, (req, res) => {
    res.send('Gandalf');
});

app.listen(3000, () => {
    console.log('Servidor iniciado');
});