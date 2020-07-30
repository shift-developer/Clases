/*
Durante el desarrollo de nuestros servicios, es importante 
pensar en los casos en donde el cliente o el servidor tiene 
algún problema. Al diseñar una API, debemos considerar qué 
ocurre si el cliente no envía toda la información requerida, 
o que ocurre si hubo algún problema en el servidor, quizás una 
variable no definida o problemas con la conexión a la base de datos.

Un error común podría ser el de un recurso no encontrado, 
comúnmente conocido cuando el servidor retorna el código 404. 
Para retornar al usuario esta respuesta en express se utiliza el res.status(404), 
el cual va a retornar dentro de los headers el código de estado 404. 
También podría enviar info a continuar del código de estado, por ejemplo

res.status(404).send('Articulo no encontrado');
*/
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const articulos = [
    {
        id: 1,
        titulo: 'Lorem ipsum',
    }, {
        id: 2,
        titulo: 'Donce multijul',
    },
]

app.get('/articulo/:id', (req, res) => {
    const articulo = articulos.find(item => item.id === req.params.id);
    if (!articulo) {
        return res.status(404).send('Articulo no encontrado');
    }
    res.send(articulo);
});

//Es en este ejemplo agregamos un condicional 
//para que en el caso de que si el formulario de contacto 
//enviado por el usuario está incompleto, el servidor retorna error 400.

app.post('/contacto', (req, res) => {
    const {
        nombre,
        email
    } = req.body;

    if (!nombre || !email) {
        res.status(400);
        res.json({error: 'Faltan datos obligatorios'});
                return;
    }
//continua ejecución del codigo

});

/* 
 Como último ejemplo, vamos a ver cómo utilizar un middleware para poder manejar
 los errores genéricos de express. En este caso, el midleware debería estar definido 
 al final de nuestras rutas de express para asegurar que sea el último 
 en ser ejecutado. A diferencia de los middlewares que vimos anteriormente, 
 este tiene 4 parámetros en vez de 3.
*/

app.use(function(err, req, res, next) {
    if(!err) return next();
    console.log('Error, algo salió mal', err);
    res.status(500).send('Error');
});

