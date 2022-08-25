

const {model, Schema } = require('mongoose')

const RoleSchema = Schema({

    rol: {
        type: String,
        required:[true,'el rol es obligatorio']
    }
});

module.exports = model('Role',RoleSchema)