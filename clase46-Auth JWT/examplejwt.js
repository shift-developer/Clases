const jwt = require('jsonwebtoken');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const firma = "firmasecreta";

server.use(bodyParser.json());

const validarUsuarioPassword = (user, pass) => {
    const usuario = "juan";
    const password = "juanpassword";
    if(user === usuario && pass === password) {
        return true;
    }
    else {
        return false;
    }
}

const autenticarUsuario = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verificarToken = jwt.verify(token, firma);

        if(verificarToken) {
            req.usuario = verificarToken;
            return next();
        }
    } catch(err) {
        res.json({error: 'Error al validar usuario'})
    }
}

server.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    const isLogged = validarUsuarioPassword(usuario, password);

    if(isLogged) {
        const token = jwt.sign({usuario}, firma);
        res.json({token});
    } else {
        res.json({error: "usuario incorrecto"});
    }

});

server.post('/seguro', autenticarUsuario, (req, res, next) => {
    res.send(`Esta es una página autenticada. Hola ${req.usuario.usuario}`)
})

server.listen( 3000, () => {
    console.log('Servidor iniciado');
})

