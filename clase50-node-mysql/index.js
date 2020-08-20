const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;
const Sequelize = require('sequelize');

const db = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
    .then( () => console.log('Conexión DB SQL exitosa'))
    .catch( (err) => console.log(err));

app.use(bodyParser.json());

app.get('/bandas', (req, res) => {

    db.query(`
        SELECT * FROM bandas`,
        {raw: true})
        .then( resp => {
            const [resultado] = resp;
            res.send(resultado);
        })
});

app.post('/canciones', (req, res) => {

    const {nombre, duracion, album, banda, fechaP} = req.body;

    db.query(`
    INSERT INTO canciones (nombre, duracion, album, banda, fecha_publicacion)
                    VALUES (?, ?, ?, ?, ?)`,
    {replacements: [nombre, duracion, album, banda, fechaP]})
        .then( resp => {
            res.status(201).send('Canción agregada');
        })
        .catch( err => console.log(err));
});

app.get('/canciones', (req, res) => {

    let {term} = req.query;
    if(!term) term ='';

    db.query(`
        SELECT * FROM canciones
        WHERE nombre LIKE "${term}%"`)
        .then( resp => {
            const [resultado] = resp;
            res.send(resultado);
        })

});

app.put('/canciones/:id', (req, res) => {

    const {id} = req.params;
    
    const {nombre, duracion, album, banda, fechaP} = req.body;

    db.query(`
    UPDATE canciones SET nombre = "${nombre}",
    duracion = ${duracion},
    album = ${album},
    banda = ${banda},
    fecha_publicacion = "${fechaP}"
    WHERE id = ${id}`
    )
        .then( resp => {
            res.status(201).send('Canción editada correctamente');
        })
        .catch( err => console.log(err));

});

app.delete('/canciones/:id', (req, res) => {

    const {id} = req.params;
    db.query(`
    DELETE FROM canciones WHERE id=${id}`)
    .then( respuesta => {
        res.send(respuesta);
    })
    .catch(err => console.log(err));
});

app.delete('/bandas/:id', (req, res) => {

    const {id} = req.params;
    db.query(`
    DELETE FROM bandas WHERE id=${id}`)
    .then( respuesta => {
        res.send(respuesta);
    })
    .catch(err => console.log(err));
});



app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
});