const { Router } = require("express");
const { check } = require("express-validator");
const { existeCorreo } = require("../helpers/validators");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();
const {
	usuarioGet,
	usuarioPut,
	usuarioPost,
	usuarioDelete,
    productosPost,
} = require("../controllers/usuarios");

router.get("/", usuarioGet);
router.put("/", usuarioPut);
router.post("/usuario",[
    check("correo").custom(existeCorreo),
    check('sexo').isIn('hombre','mujer'),
    validarCampos
], usuarioPost);
router.post("/pedido", [
    
],productosPost);
router.delete("/", usuarioDelete);

module.exports = router;
