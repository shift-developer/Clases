/* 
Vamos a entender cómo recibir el contenido del cuerpo en una petición o request. 
Por ejemplo, si tenemos un formulario de contacto, 
deberíamos tener endpoint /contacto, que a través de un POST, 
recibe el contenido del formulario que completó el cliente.

Este contenido podría ser un objeto JSON con el contenido 
del formulario, por ejemplo:

{
    "nombre": "Sergio",
    "email": "sergio@dominio.com"
}

Para poder parsear (analizar el contenido del body) , 
es necesario procesar el contenido del body. 
La forma más sencilla de hacerlo en Express es agregando 
una librería como middleware que se va a encargar de parsearlo y 
dejar el contenido del body en req.body.

La libreria que debemos utilizar es body-parser.

La librería body-parser permite parsear contenido JSON o de texto, 
pero no permite recibir archivos, por ejemplo si un usuario 
quiere subir una imagen.

Para recibir contenido multi parte deben utilizar otra librería 
como middleware, ejemplo multer.
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Agregamos el midleware para hacer parsing del contenido JSON del body de la petición

app.use(bodyParser.json());

//Endpoint para probar
//Este endpoint va a retornar la llamada con el contenido del body

app.post('/contacto', (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
    console.log(`Server iniciado en http://127.0.0.1:3000`);
});