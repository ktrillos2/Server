const { response, request } = require("express");
const bcryptjs = require('bcryptjs');


const Usuario = require("../models/usuario");


const usuariosGet = (req = request, res = response) => {

	const { q, nombre, edad } = req.query

	res.json({
		msg: "get API - controlador",
		q,
		nombre,
		edad
	});
};

const usuariosPut = async (req, res = response) => {

	const { id } = req.params;

	const { password, google, correo, ...restoInfo } = req.body;

	// TODO validar contra base de datos
	if (password) {
		// Encriptar la contraseña
		const salt = bcryptjs.genSaltSync(10);
		restoInfo.password = bcryptjs.hashSync(password, salt);
	}

	const usuario = await Usuario.findByIdAndUpdate(id, restoInfo)
	res.json({
		msg: "put API",
		usuario
	});
};

const usuariosPost = async (req, res = response) => {




	const { nombre, correo, password, rol } = req.body;
	const usuario = new Usuario({ nombre, correo, password, rol });

	// Encriptar la contraseña
	const salt = bcryptjs.genSaltSync(10);
	usuario.password = bcryptjs.hashSync(password, salt);

	// Guardar en base de datos

	await usuario.save();

	res.json({
		usuario
	});
};

const usuariosDelete = (req, res = response) => {
	res.json({
		msg: "delete API",
	});
};

module.exports = {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
};
