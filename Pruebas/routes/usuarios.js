const { Router } = require("express");
const { check } = require("express-validator");
const { existeCorreo, existeUser, cantidadMayor, valorString, validarCorreo, validarIDpedido } = require("../helpers/validators");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();
const {
	usuarioGet,
	usuarioPut,
	usuarioPost,
	usuarioDelete,
    pedidosGet,
    pedidosPost,
    pedidosDelete,
    
} = require("../controllers/usuarios");

router.get("/getUsuarios", usuarioGet);
router.get("/getPedidos", [
    check("correo", "el correo es obligatorio").notEmpty().custom(validarCorreo),
    validarCampos
], pedidosGet);
router.post("/usuario", [
    check("nombre","el nombre es obligatorio").notEmpty().custom(valorString),
    check("apellido","el apellido es obligatorio").notEmpty().custom(valorString),
    check("correo","el correo es obligatorio").notEmpty().custom(existeCorreo),
    check("sexo","el sexo es obligatorio").notEmpty().isIn('hombre','Hombre','Mujer','mujer').custom(valorString),
    validarCampos
], usuarioPost);
router.post("/pedido", [
    check("userid","el id es obligatorio").notEmpty().custom(existeUser),
    check("cantidad","la cantidad es obligatoria").notEmpty().custom(cantidadMayor),
    check("precio_unitario","el precio_unitario es obligatorio").notEmpty().custom(cantidadMayor),
    check("nombre_producto","el nombre_producto es obligatorio").notEmpty().custom(valorString),
    validarCampos
],pedidosPost);
router.delete("/deleteUsuario", [
    check("id", "el id es obligatorio").notEmpty().custom(existeUser),
    validarCampos
], usuarioDelete);
router.delete("/deletePedido", [
    check("id", "el id es obligatorio").notEmpty().custom(validarIDpedido),
    validarCampos
], pedidosDelete);
router.put("/putUsuario", [
    check("id", "el id es obligatorio").notEmpty().custom(existeUser),
    validarCampos
], usuarioPut);
router.put("/putPedido", usuarioPut);


module.exports = router;
