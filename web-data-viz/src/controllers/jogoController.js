var jogoModel = require("../models/jogoModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  jogoModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  var id_usuario = req.params.id_usuario;
  
      jogoModel.listar(id_usuario).then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(function (erro) {
          console.log(erro);
          console.log("Houve um erro ao buscar as ultimas partidas.", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  jogoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var partida = req.body.partidaServer;
  var vencedor = req.body.vencedorServer;
  var id_usuario = req.body.id_usuarioServer;

  jogoModel.cadastrar(partida, vencedor, id_usuario)
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

  // jogoModel.buscarPorCnpj(cnpj).then((resultado) => {
  //   if (resultado.length > 0) {
  //     res
  //       .status(401)
  //       .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
  //   } else {
  //     jogoModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
  //       res.status(201).json(resultado);
  //     });
  //   }
  // });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
