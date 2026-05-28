var quizModel = require("../models/quizModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function cadastrar(req, res) {
  var certasSerie = req.body.certasSerieServer;
  var certasMatematica = req.body.certasMatematicaServer;
  let id_usuario = req.body.id_usuarioServer;
  let tipo = req.body.tipoServer;

  if (certasSerie == undefined) {
    res.status(400).send("nome está undefined!");
  } else if (certasMatematica == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    quizModel.cadastrar(certasMatematica, certasSerie, tipo, id_usuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}