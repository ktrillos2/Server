const { Schema, model } = require("mongoose");

const pedidoSchema = Schema({
	userid: {
		type: Schema.Types.ObjectId,
		ref: "Usuarios",
		required: true,
	},
	cantidad: {
		type: Number,
		required: [true, "cantidad es obligatorio"],
	},
	precio_unitario: {
		type: Number,
		required: true,
	},
	nombre_producto: {
		type: String,
		required: true,
	},
});

module.exports = model("Pedido", pedidoSchema);
