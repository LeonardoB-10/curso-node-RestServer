const { response, request } = require("express");

const usuariosGet = (req =request , res = response ) => {
    const {q,nombre = "Sin nombre",apikey} = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey

  });
};

const usuariosPost = (req, res) => {
    //const {nombre, edad} = req.body;

  const {nombre, edad} = req.body;

  res.json({
    msg: "post API",
    nombre,
    edad
  });
};

const usuariosPut = (req, res) => {

  const {id} = req.params;
  res.json({
    msg: "put API",
    id
  });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: "patch API",
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete API",
    });
};

module.exports = {usuariosDelete, usuariosGet, usuariosPost, usuariosPut, usuariosPatch };
