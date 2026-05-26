var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    jogoController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    jogoController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  jogoController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  jogoController.listar(req, res);
});

module.exports = router;