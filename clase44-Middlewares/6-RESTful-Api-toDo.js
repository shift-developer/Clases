/* 
El objetivo de esta actividad es crear una API RESTful, 
donde debes crear los endpoints necesarios para interactuar con 
el recurso de ítems en una api de listado de quehaceres o 'ToDo list'.

Esta API va a tener un solo recurso, llamado items, 
que tienen la siguiente estructura.

{
    "id": 1,
    "title": "Hacer Actividad API REST",
    "completed": false
}

A través de los endpoints de /items de GET y POST debes interactuar
con el estado almacenado en un array en el servidor. 

Adicionalmente es necesario soportar una ruta como /items/:id  
con los métodos PUT Y DELETE para modificar un item creado.

*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const items = [
    {
        "id": 1,
        "title": "Hacer Actividad API REST",
        "completed": false
    },
    {
        "id": 2,
        "title": "Hacer Actividad presentacion",
        "completed": false
    }
];


//PATH ITEMS
app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const { title } = req.body;

    if ( !title ) {
        res.status(400);
        res.json({error: 'Faltan datos obligatorios'});
                return;
    }

    let id = items.length + 1;

    let item = {
                "id": id,
                "title": title,
                "completed": false
                }

    items.push(item);
    res.json(item);

});

//PATH ITEMS/:ID
app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    let result = items.find((elem) => elem.id == id);

    if( !result) {
        res.status(404);
        res.json({error: 'No existe el ID'});
        return;
    }

    res.json(result);
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    if ( !title && !completed ) {
        res.status(400);
        res.json({error: 'Faltan datos obligatorios'});
                return;
    }

    let result = items.filter( (element) => {
        if(element.id == id) {
            if (title && completed) {
                element.title = title;
                element.completed = completed;
                res.json({id: element.id, title: title, completed: completed});
            } else if (title){
                element.title = title;
                res.json({id: element.id, title: title, completed: element.completed});
            } else if (completed){
                element.completed = completed;
                res.json({id: element.id, title: element.title, completed: completed});
            }
            
        }
        return element.id == id;
    });

    if (result.length == 0) {
        res.status(404);
        res.json({error: 'No existe el ID'});
    }

});


app.delete('/items/:id', (req, res) => {
    const { id } = req.params;

    let result = items.filter( (element, idx) => {
        if(element.id == id) {
            res.json(items[idx]);
            items.splice(idx, 1);
            return element.id == id;
        }
    });

    if (result.length == 0) {
        res.status(404);
        res.json({error: 'No existe el ID'});
    }

});

app.listen(3000, () => {
    console.log('Servidor Iniciado');
});