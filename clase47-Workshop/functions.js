const functions = {

    Producto: function(marca, modelo, precio, motor, combustible,
                        kilometros, year, urlPhoto, idVendedor ) {
        this.idVendedor = idVendedor;
        this.id = new Date().getTime();                 
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.motor = motor;
        this.tipoCombustible = combustible;
        this.kilometros = kilometros;
        this.year = year;
        this.urlPhoto = urlPhoto;         
    },

    Usuario: function(email, password, nombre, apellido, fechaDeNac,
                        urlPhoto, nroTelefono, localidad ) {
        this.id = new Date().getTime();
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNac = new Date(...fechaDeNac);
        this.urlPhoto = urlPhoto;
        this.nroTelefono = nroTelefono;
        this.localidad = localidad;
        this.user = "vendedor";
        this.productos = [];
    },

    validarLogin(email, pass, data) {

        const validacion = data.find( user => user.email === email && user.password === pass );
    
        if( validacion ) {
            return true;
        } else {
            return false;
        }
    },

    getId(email, data) {
        
        const {id} = data.find( user => user.email === email);

        return id;
    }

};

module.exports = functions;