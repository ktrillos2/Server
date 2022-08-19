const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {

    const { q, nombre, edad} = req.query

	res.json({
		msg: "get API - controlador",
		q,
		nombre,
		edad
	});
};

const usuariosPut = (req, res = response) => {

    const id  = req.params.id;
    
	res.json({
        msg: "put API",
        id
	});
};

const usuariosPost = (req, res = response) => {

    const body = req.body;

	res.status(201).json({
        msg: "post API",
        body
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
