const { response, request } = require("express");
const Pedido = require("../models/pedido");
const Usuario = require("../models/usuario");

const usuarioGet = async (req = request, res = response) => {
	const total = await Usuario.count();
	const usuarios = await Usuario.find();

	res.json({
		total,
		usuarios,
	});
};
const usuarioPut = async (req = request, res = response) => {
	const { id, ...Datos } = req.body;

	await Usuario.findByIdAndUpdate(id, Datos);

	res.json({
		Usuario_Actualizado: id,
		Datos,
	});
};
const usuarioPost = async (req = request, res = response) => {
	const { nombre, apellido, sexo, correo } = req.body;
	//creamos el usuario
	const usuario = new Usuario({ nombre, apellido, correo, sexo });

	//guardar en la base de datos
	await usuario.save();

	res.json({
		usuario,
	});
};
const usuarioDelete = async (req = request, res = response) => {
	const { id } = req.body;
	const user = await Usuario.findByIdAndDelete(id);

	res.json({
		Usuario_Removido: user,
	});
};
const pedidosGet = async (req = request, res = response) => {
	const user = await Usuario.findOne({ correo: req.body.correo });
	const pedidos = await Pedido.find({ userid: user._id });
	const Pedidos_Obtenidos = pedidos.map((item) => {
		nuevo = { ...item._doc };
		nuevo.total = item.cantidad * item.precio_unitario;
		return nuevo;
	});
	res.json({
		Pedidos_Obtenidos,
	});
};
const pedidosPost = async (req = request, res = response) => {
	try {
		const { userid, cantidad, precio_unitario, nombre_producto } = req.body;
		//creamos el pedido
		const pedido = new Pedido({
			userid,
			cantidad,
			precio_unitario,
			nombre_producto,
		});

		//guardar en la base de datos
		await pedido.save();

		res.json({
			pedido,
		});
	} catch (error) {
		console.log(error.message);
		return error;
	}
};
const pedidosDelete = async (req = request, res = response) => {
	const pedido = await Pedido.findOneAndDelete({ id: req.body._id });

	res.json({
		Pedido_Removido: pedido,
	});
};
const pedidoPut = async (req = request, res = response) => {
	const { id, userid, ...Datos } = req.body;

	await Pedido.findByIdAndUpdate(id, Datos);

	res.json({
		Pedido_Actualizado: id,
		Datos,
	});
};

module.exports = {
	usuarioDelete,
	usuarioGet,
	usuarioPut,
	usuarioPost,
	pedidosGet,
	pedidosPost,
	pedidosDelete,
	pedidoPut,
};
