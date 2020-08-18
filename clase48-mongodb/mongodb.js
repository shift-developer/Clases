// Instalamos mongoose con npm

const mongoose = require('mongoose');
mongoose.connect('mongodb:/localhost:27017/mi_base');

//MODELOS----------------------------------------------------
const Usuarios = mongoose.model('Usuarios', {
    nombre: String,
    apellido: String,
    edad: Number
});

/* 
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String
  }
})

// example use

var Thing = mongoose.model('Thing', schema);

var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = Buffer.alloc(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.map = new Map([['key', 'value']]);
m.save(callback);
*/

//CREAR DOCUMENTO---------------------------------------
let mis_datos = {nombre: 'Martin', apellid: 'Suarez', edad: 18};
const objeto_usuario = new Usuarios(mis_datos);
objeto_usuario.save();

/*
    {
        _id: 5asd5a4sd5a4s6d4ad58fasd,
        nombre: 'Martin',
        apellido: 'Suarez',
        edad: 18,
        __v: 0
    }
*/


//LEER DOCUMENTOS----------------------------------------------
Usuarios.find().then(resultados => {
    //array de objetos
    console.log(resultados);
})

Usuarios.find({nombre: 'Martin'}).then(resultados => {
    //array de objetos
    console.log(resultados);
})

Usuarios.find({"nombre" : new RegExp('Mart', 'i')}).then(resultados => {
    //array de objetos
    console.log(resultados);
})


//ACTUALIZAR DOCUMENTO---------------------------------------
Usuarios.findOne({nombre: 'Martin'}).then(resultados => {
    resultados.nombre = 'Dafne';
    resultados.edad = 23;
    resultados.save();
});

Usuarios.updateOne({nombre: 'Martin'}, {nombre: 'Dafne', edad: 23}, (err,res) => {
    console.log(res);
});


//ELIMINAR DOCUMENTO
Usuarios.deleteOne({"nombre" : new RegExp('Mart', 'i')}, (err, res) => {
    console.log(res);
});




