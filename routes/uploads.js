const { Router } = require("express");
const { check } = require("express-validator");
const { cargarArchivo, actualizarImagen, mostrarImagen, actualizarImgCloudinary } = require("../controllers/uploads");
const { coleccionesPermitidas } = require("../helpers/db-validators");
const { validarArchivo } = require("../middlewares/validar-ARCHIVO.JS");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.post("/", validarArchivo,cargarArchivo);

router.put('/:coleccion/:id', [
    validarArchivo,
    check('id', 'No es un ID valido').isMongoId(),
    // -> Validar que la colección sea válida (usuarios o productos) y que el id sea válido (que exista en la base de datos) y que el id sea válido (que exista en la base de datos) 
    check('coleccion').custom(c => coleccionesPermitidas(c, ['usuarios', 'productos'])),
    validarCampos
], actualizarImgCloudinary);
//actualizarImagen);


router.get('/:coleccion/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    // -> Validar que la colección sea válida (usuarios o productos) y que el id sea válido (que exista en la base de datos) y que el id sea válido (que exista en la base de datos)
    check('coleccion').custom(c => coleccionesPermitidas(c, ['usuarios', 'productos'])),
    validarCampos
], mostrarImagen);






module.exports = router;