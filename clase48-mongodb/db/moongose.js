const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/inmuebles', 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then( () => console.log('Conectado a la db de inmuebles'))
    .catch( (err) => console.log(err));
