const {Router} = require('express');
const { usuariosGet,usuariosPost,usuariosPut,usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const reuter = Router();

reuter.get('/', usuariosGet);


reuter.put('/:id', usuariosPut);

reuter.post('/', usuariosPost);


reuter.delete('/',usuariosDelete);


reuter.patch('/', usuariosPatch);



module.exports = reuter;