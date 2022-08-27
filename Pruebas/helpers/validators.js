const Usuario = require("../models/usuario");

const existeCorreo = async (correo) => {
    const email = await Usuario.findOne({ correo })
    
    if (email) {
        
        throw new Error(`el correo: ${correo} ya existe`)
    }
    
}
const existeUser = async (_id) => {
    const email = await Usuario.findOne({  })
    
    if (email) {
        
        throw new Error(`el correo: ${correo} ya existe`)
    }
    
}


module.exports={
    existeCorreo
}