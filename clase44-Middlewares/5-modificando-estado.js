const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('menu');
});

let platos = [];

app.get('/platos', (req, res) => {
    res.json(platos);
});

app.post('/platos', (req, res) => {
    platos.push(req.body);
    console.log('Plato agregado al array');
        res.json(req.body);
});

app.listen(3000, () => {
    console.log('Servidor Iniciado');
});