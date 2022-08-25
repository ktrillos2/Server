const Role = require("../models/rol");
const Usuario = require("../models/usuario");
const { response, request } = require("express");

const esRolValido = async (rol = "") => {
	const existeRol = await Role.findOne({ rol });
	if (!existeRol) {
		throw new Error(`el rol ${rol} no esta registrado en la base de datos`);
	}
};
const existeEmail = async(correo)=> {
    
    
    const email=await Usuario.findOne({ correo });

    if (email) {
        throw new Error(`el correo ${correo} ya existe`);
    }

}


module.exports = {
    esRolValido,
    existeEmail,
};
