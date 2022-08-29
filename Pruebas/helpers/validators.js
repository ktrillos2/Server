const { findOne } = require("../models/usuario");
const Usuario = require("../models/usuario");
const Pedido = require("../models/pedido");

const existeCorreo = async (correo) => {
	try {
		const email = await Usuario.findOne({ correo });

		if (email) {
			throw new Error(`el correo: ${correo} ya existe`);
		}
	} catch (error) {
		throw new Error(error);
	}
};
const existeUser = async (id) => {
	try {
		const existeId = await Usuario.findById(id);

		if (!existeId) {
			throw new Error(`el id: ${id} no existe`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
const existeUserPedido = async (id) => {
	try {
		const existeId = await Pedido.findById(id);
		if (!existeId) {
			throw new Error(`el id: ${id} no existe`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
const cantidadMayor = async (cantidad) => {
	try {
		if (cantidad <= 0) {
			throw new Error(`la cantidad: ${cantidad}, debe ser mayor a 0`);
		} else if (typeof cantidad !== "number") {
			throw new Error(`el valor: ${cantidad}, no puede ser un string`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

const valorString = async (nombre) => {
	try {
		if (typeof nombre !== "string" && nombre) {
			throw new Error(`el valor:${nombre}, debe ser un string`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

const validarCorreo = async (correo) => {
	try {
		const email = await Usuario.findOne({ correo });

		if (!email) {
			throw new Error(`El correo ${correo}, no existe`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

const validarIDpedido = async (id) => {
	try {
		const userId = await Pedido.findById(id);

		if (!userId) {
			throw new Error(`El id ${id}, no existe`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = {
	existeUser,
	existeCorreo,
	existeUserPedido,
	cantidadMayor,
	valorString,
	validarCorreo,
	validarIDpedido,
};
