const Sequelize = require('sequelize');

//CREAR ARCHIVO DE CONEXION
const sequelize = new Sequelize('mysql://root:password@localhost:3306/database');
//dialecto://user:pass@host:port/database

//otra forma de hacerlo:
const sequelize2 = new Sequelize('Clase48', 'root', '', {host: 'localhost',
dialect: 'mysql'});

sequelize.authenticate().then(async () => {
    const query = 'SELECT * FROM usuarios';
    const [resultados] = await sequelize.query(query, {  raw: true} );
})

await sequelize.query(`
    CREATE TABLE usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR (60) UNIQUE NOT NULL,
        nombre VARCHAR (60) NOT NULL,
        edad INT UNSIGNED NOT NULL,
    )`,
    { raw: true },
);
console.log('Tabla creada.');

await sequelize.query(`
    INSERT INTO usuarios (email, nombre, edad)
    VALUES (
        ${faker.name.findName()},
        ${faker.internet.email()},
        ${Math.floor((Math.random() * 100))}
    )`,
    { raw: true },
);
console.log('Registro insertado.');

const resultado = await sequelize.query(
    `SELECT * FROM usuarios`,
    { raw: true },
);
console.log(resultado[0]);