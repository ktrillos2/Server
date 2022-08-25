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
    password: {
        
        type: String,
        required: [true, 'password es obligatorio'],
    },
    img: {

        type: String,
    },
    rol: {
        
        type: String,
        required: true,
        emun:['Admin_Rol','User_Rol']
    },
    estado: {
        
        type: Boolean,
        default: true,
    },
    google: {
        
        type: Boolean,
        default: false,
    }
});

usuarioSchema.methods.toJSON = function () {
    const { __v, password, ...usuario } = this.toObject();
    return usuario
}

module.exports = model('Usuarios', usuarioSchema)

