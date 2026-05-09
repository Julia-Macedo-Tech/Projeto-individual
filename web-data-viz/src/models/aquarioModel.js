var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {

  var instrucaoSql = `SELECT * FROM quiz a WHERE fk_usuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario) {
  
  var instrucaoSql = `INSERT INTO (fk_usuario) aquario VALUES (${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
