/* INMUEBLES
Arma un modelo de base de datos que permita
administrar los inmuebles que tiene una
inmobiliaria para ofrecer a sus clientes.
*/

const express = require('express');
require('./db/moongose');
const Inmueble = require('./models/inmueble');

const app = express();
const port = 3000;

// ===== MIDDLEWARES ============================
app.use(express.json());


// ===== RUTAS ==================================

//Post - Create
app.post('/inmuebles', (req, res) => {

    const { operacion, tipo, direccion,fotos, ambientes, 
        metrosCuadrados,descripcion, datosPropietario } = req.body;

    const inmueble = new Inmueble({operacion, tipo, direccion, fotos, ambientes,
                            metrosCuadrados, descripcion, datosPropietario});

    inmueble.save()
        .then( (inmueble) => res.status(201).send(inmueble))
        .catch( (err) => res.status(400).send(err));
});

//Read All - Buscar todos
app.get('/inmuebles', (req, res) => {
    Inmueble.find({})
        .then( inmuebles => res.send(inmuebles))
        .catch( err => res.status(400).send(err));
});

app.get('/inmuebles/:id', (req, res) => {
    const {id} = req.params;
    Inmueble.findOne({_id: id})
        .then( inmueble => res.send(inmueble))
        .catch( err => res.status(400).send(err));
});


app.listen( port, () => {
    console.log('Servidor iniciado!')
});

