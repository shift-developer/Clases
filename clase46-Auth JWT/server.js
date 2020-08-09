/* 
#1 CREAR UNA API
Crear una API que contenga un método para
agregar usuarios.
Cada usuario debe tener la siguiente información:
- ID
- Nombre
- Apellido
- Email
- Contraseña
Almacenar cada usuario en un array.


#2  EDITAR LA INFORMACION 
Crear un nuevo método que permita editar
la información previamente almacenada.
Encontrar el usuario a editar a través de su
email.

#3 AGREGAR UNA NUEVA PROPIEDAD
Generar un nuevo método que permita agregar una
nueva propiedad a nuestro usuarios.
La nueva propiedad es:
es_admin (true / false)
Si la propiedad no existe para un usuario, crearla.
Si la propiedad existe para un usuario, editarla.

#4 LOG IN
Generar un nuevo método que permita loguear un
usuario validando su contraseña.
Crear el JWT.

#5 ACCESO ESPECIFICO
Generar un último método que liste todos los
usuarios que hay en nuestro array.
Solo usuarios administradores pueden acceder a
este método.

*/

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const firma = 'firmaSecreta**';
const app = express();

const data = [
    {
        nombre: 'Juan',
        apellido: 'Gonzalez',
        email: 'juan@gmail.com',
        password: '123456',
        id: 1,
        es_admin: true
    },
    {
        nombre: 'Jose',
        apellido: 'Perez',
        email: 'jose@gmail.com',
        password: '123456',
        id: 2,
        es_admin: true
    },
    {
        nombre: 'Lucia',
        apellido: 'Wos',
        email: 'lucia@gmail.com',
        password: '123456',
        id: 3,
        es_admin: false
    }
];

const validarBodyUsuario = (req, res, next) => {
    
    const { nombre, apellido, email, password } = req.body;

    if ( nombre && apellido && email && password ) next();

    res.status(400).json({error: 'Faltan datos de usuario'});

}

const elUsuarioYaExiste = (req, res, next) => {

    const { email } = req.body;

    const validacion = data.find( a => a.email === email );

    if ( !validacion ) next();

    res.status(400).json({error: 'El email ya está registrado'});

}

const elMailExiste = (req, res, next) => {
    
    const { mail } = req.query;

    const validacion = data.find( a => a.email === mail );

    if ( validacion ) next();

    res.status(404).json({error: 'El mail no existe'});

}

const validarLogin = (email, pass) => {

    const validacion = data.find( user => user.email === email && user.password === pass );

    if( validacion ) {
        return true;
    } else {
        return false;
    }
}

const autenticarUsuario = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verificarToken = jwt.verify(token, firma);

        if(verificarToken) {
            req.usuario = verificarToken;
            return next()
        }
    } 
    catch (err) {
        res.status(401).json({error: 'Error al validar usuario'})
    }
}

const validarAdmin = (req, res, next) => {

    const email = req.usuario.email;

    const validacion = data.find( user => user.email === email && user.es_admin === true);

    if(validacion) next();

    res.status(403).send('No estas autorizado para esta petición');

}


app.use(bodyParser.json());

app.get('/usuarios', autenticarUsuario, validarAdmin, (req, res) => {
    res.json(data);
})

app.post('/usuarios', validarBodyUsuario, elUsuarioYaExiste, (req, res) => {
    const { nombre, apellido, email, password } = req.body;

    const id = data.length + 1;

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        id: id,
        es_admin: false
    }

    data.push(usuario);

    res.status(201).send(`Usuario agregado exitosamente`);
});

app.put('/usuarios', autenticarUsuario, validarBodyUsuario, (req, res) => {
    const mail  = req.usuario.email;
    const { nombre, apellido, email, password } = req.body;

    const idx = data.findIndex( usuario => usuario.email === mail)
    
    data[idx].nombre = nombre;
    data[idx].apellido = apellido;
    data[idx].email = email;
    data[idx].password = password;

    res.json(`El usuario se editó exitósamente.`);
});

app.put('/usuarios/admin', autenticarUsuario, elMailExiste, validarAdmin, (req, res) => {

    let { admin, mail } = req.query;

    const idx = data.findIndex( usuario => usuario.email === mail);

    if ( admin === 'true') {
        admin = true;
        data[idx].es_admin = admin;
    } else if ( admin === 'false') {
        admin = false;
        data[idx].es_admin = admin;
    }

    res.send('Cambios guardados con éxito');

})

app.post('/usuarios/login', (req, res) => {

    const { email, password } = req.body;

    const isLogged = validarLogin(email, password);

    if(isLogged) {
        const token = jwt.sign( {email}, firma );
        res.json(token);
    } else {
        res.status(401).json({error: 'El usuario o password no es válido'})
    }
    
});

app.delete('/usuarios', autenticarUsuario, elMailExiste, validarAdmin, (req, res)=> {

    const {mail} = req.query;

    const idx = data.findIndex( usuario => usuario.email === mail);

    data.splice(idx, 1);
    res.status(204).send('Eliminado exitósamente');

});




app.listen( 3000, () => {
    console.log('Servidor iniciado');
});

