//====COMANDOS-SQL==============================

//DEFINICION DE DATOS (Create, alter, drop)=====

//======Create - Nos permite crear nuevas tablas======

/*
CREATE TABLE nombre_de_la_tabla (
    nombre_columna_1 TIPO_DE_DATO [PROPIEDADES OPCIONALES],
    nombre_columna_2 TIPO_DE_DATO,
    nombre_columna_3 TIPO_DE_DATO,
    PRIMARY KEY (nombre_columna)
)

CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    apellido VARCHAR(60),
    nombre VARCHAR(60) NOT NULL,
    dni INT UNSIGNED NOT NULL
)

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (60) UNIQUE NOT NULL,
    nombre VARCHAR (60) NOT NULL,
    apellido VARCHAR (60),
    edad INT UNSIGNED NOT NULL,
    fecha_alta DATE
)

Los tipos de dato más comunes son:
INT: Valores enteros hasta 4294967295.
DOUBLE: Números con coma.
VARCHAR(n): Textos de longitud corta. Se indica entre paréntesis la cantidad de caracteres.
TEXT: Textos de longitud larga.
DATE: Fechas en el formato YYYY-MM-DD.

Dentro de propiedades opcionales podemos usar las siguientes palabras clave para definir algunas validaciones:
PRIMARY KEY: nos permite indicar que la columna es la clave primaria de la tabla.
AUTO_INCREMENT: definimos que esta columna debe incrementarse automáticamente con cada nuevo registro.
UNIQUE: si la columna es única no pueden existir dos valores repetidos en distintos registros.
UNSIGNED: indica que el contenido de la columna no puede tomar valores negativos.
NOT NULL: Define que esta columna no puede quedar vacía y siempre tiene que recibir un valor.
*/


//====Alter - Nos permite modificar la estructura de una tabla======

/*
Agregar una columna--------

ALTER TABLE nombre_tabla
ADD nombre_columna TIPO_DE_DATO


Modificar una columna--------

ALTER TABLE nombre_tabla
MODIFY COLUMN nombre_columna NUEVO_TIPO_DE_DATO;
*/


//====Drop - Eliminar una tabla================================

/*
DROP nombre_tabla
*/


//MANIPULACION DE DATOS(select, insert, update, delete)============

//====Select - consultar y traer información de nuestras tablas======

/*
SELECT * FROM nombre_tabla

Podemos reemplazar el * por el nombre de las columnas que necesitamos para tener una respuesta más chica. Por ejemplo si necesitáramos sólo una lista de los mails de los usuarios registrados en nuestro sitio junto con su nombre podríamos hacer lo siguiente:

SELECT email, nombre FROM usuarios

--WHERE--
También podemos filtrar los registros según el contenido haciendo uso de la palabra WHERE. Vamos a poder utilizar varios operadores básicos como el =, !=, <, >, <= o >=. Otro operador disponible es el LIKE que devuelve verdadero si el campo que estamos evaluando contiene un string. Por último podemos encadenar filtros con operaciones lógicas como AND y OR. Con los siguientes ejemplos debería quedar mucho más claro:

SELECT * FROM usuarios WHERE id = 5

Obtener los usuarios con mail de gmail:
SELECT * FROM usuarios WHERE email LIKE '%@gmail.com'


--JOIN--
Supongamos dos tablas, una de alumnos y otra de casas de Hogwarts. Los alumnos están asignados a una única casa, por eso su tabla contiene una columna llamada casa_id que contiene el id de la casa a la que está asignado.


Para obtener un listado de todos los alumnos y la casa a la que están asignados podemos hacer lo siguiente:

SELECT * FROM alumnos
JOIN casas_hogwarts
    ON alumnos.casa_id = casas_hogwarts.id


Si quisiéramos una lista de los nombres de los alumnos que pertenecen a Ravenclaw podemos realizar la siguiente consulta:

SELECT alumnos.nombre, casa_hogwarts.nombre FROM alumnos
JOIN casas_hogwarts
    ON alumnos.casa_id = casas_hogwarts.id
WHERE casas_hogwarts.nombre = 'Ravenclaw'

*/



//====Insert - insertar nuevos registros en una tabla==================

/*
Si vamos a indicar todos los campos del registro, es importante respetar el orden de los valores ya que deben coincidir con los de la tabla.

INSERT INTO nombre_tabla VALUES (valor_columna_1, valor_columna_2, …, valor_columna_n)


Si sólo vamos a ingresar algunas columnas requeridas o para que se completen con su valor por defecto al crear la tabla, podemos definir que columnas queremos insertar agregando:

INSERT INTO nombre_tabla (nombre_columna_1, nombre_columna 3) VALUES (valor_columna_1, valor_columna_3)


En este caso podemos poner cualquier nombre de columna en cualquier orden, pero los valores a insertar deben estar ordenados de la misma manera.

INSERT INTO alumnos (email, nombre, edad) VALUES ('matias.bontempo@gmail.com', 'Matías', '27')
*/


//===Update - actualizar uno o varios registros=========================

/*
Podemos usar la cláusula WHERE para indicar qué registros se deben actualizar. Si no estuviera definida se van a actualizar todos los registros. Utilizamos el SET para definir los campos que queremos actualizar separados por coma.

Eliminar el email y la edad de todos los alumnos
UPDATE alumnos
SET email = NULL, edad = NULL


Actualizar la edad del alumno con id 1
UPDATE alumnos
SET edad = 28
WHERE id = 1


Setear como inactivos todos los usuarios sin una dirección de email definida
UPDATE usuarios
SET activo = false
WHERE email = NULL
*/

//====Delete - eliminar registros de una tabla

/*
Es MUY importante tener cuidado al ejecutarlo, ya que si no indicamos una condición con el WHERE y no hay backups puede que perdamos todo 😧

DELETE FROM nombre_tabla

DELETE FROM usuarios
WHERE activo = false

*/