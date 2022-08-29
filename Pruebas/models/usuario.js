const { Schema, model } = require('mongoose')

const usuarioSchema = Schema({
    
    nombre: {
        type: String,
        required:[true,'el nombre es obligatorio']
    },
    correo: {
        
        type: String,
        required: [true, 'correo es obligatorio'],
        unique: true
    },
    apellido: {
        
        type: String,
        required: [true, 'password es obligatorio'],
    },
    sexo: {
        
        type: String,
        enum:['hombre','mujer'],
        required: true,
    },
});

module.exports = model('Usuarios', usuarioSchema)

