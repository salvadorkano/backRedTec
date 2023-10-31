const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const queryData = req.query;
  console.log({ queryData });

  res.json({
    msg: "get API - controlador",
    ...queryData,
  });
};

const usuarioPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - usuarioPost",
  });
};

module.exports = {
    usuariosGet,
    usuarioPost
}