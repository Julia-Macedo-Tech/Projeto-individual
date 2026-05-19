var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {

  var instrucaoSql = `SELECT * FROM quiz a WHERE fk_usuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(certasMatematica, certasSerie, id_usuario) {
  
  var instrucaoSql = `INSERT INTO quiz (pontuacao_matematica, pontuacao_serie, fk_usuario) VALUES (${certasMatematica}, ${certasSerie}, ${id_usuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
