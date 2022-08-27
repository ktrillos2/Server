const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { esRolValido, existeEmail, existeUsuarioId } = require("../helpers/db-validators");
const router = Router();
const {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
} = require("../controllers/usuarios");

router.get("/", usuariosGet);

router.put("/:id", [
	check("id", "el id no es valido").isMongoId().custom(existeUsuarioId),
	check('rol').custom(esRolValido),
	validarCampos
], usuariosPut);

router.post("/", [
	check("password", "el password debe de ser mas de 6 letras").isLength({ min: 6 }),
	check("nombre", "el nombre es obligatorio").not().isEmpty(),
	check("correo").custom(existeEmail),
	// check("correo", "el correo no es valido").isEmail(),
	check('rol').custom(esRolValido),
	validarCampos
], usuariosPost
);

router.delete("/:id", [
	check("id", "el id no es valido").isMongoId().custom(existeUsuarioId),
	validarCampos
], usuariosDelete);

module.exports = router;
