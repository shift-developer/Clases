const mongoose = require('mongoose');

const Inmueble = mongoose.model(
    'Inmueble',
    {
        operacion: String,
        tipo: String,
        direccion: String,
        fotos: [String],
        ambientes: Number,
        metrosCuadrados: Number,
        descripcion: String,
        datosPropietario: []
    }
);

module.exports = Inmueble;