const { response, request } = require("express");
const Pedido = require("../models/pedido");
const Usuario = require("../models/usuario");

const usuarioGet = async (req = request, res = response) => {

    res.send("funciona")
}
const usuarioPut = async (req = request, res = response) => {

    res.send("funciona")
}
const usuarioPost = async (req = request, res = response) => {
    const { nombre, apellido, sexo, correo } = req.body;
    //creamos el usuario
    const usuario = new Usuario({ nombre, apellido, correo,sexo });

    //guardar en la base de datos
    await usuario.save();

    res.json({
        usuario
    })

}
const productosPost = async (req = request, res = response) => {

    try {
        const { userid, cantidad, precio_unitario, nombre_producto } = req.body;
    //creamos el pedido
    const pedido = new Pedido({ userid, cantidad, precio_unitario, nombre_producto });

    //guardar en la base de datos
    await pedido.save();

    res.json({
        pedido
    })
    } catch (error) {
        console.log(error.message);
        return error
    }

}
const usuarioDelete = async (req = request, res = response) => {

    res.send("funciona")
}

module.exports = {
    usuarioDelete,
    usuarioGet,
    usuarioPut,
    usuarioPost,
    productosPost
}