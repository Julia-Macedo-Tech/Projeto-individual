var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar(id_usuario) {
  var instrucaoSql = `select vencedor, DATE_FORMAT(cadastrado_em, '%d/%m/%Y') as data, TIME(cadastrado_em) as hora from jogo
where fk_usuario = ${id_usuario};`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(partida, vencedor, id_usuario) {
  var instrucaoSql = `insert into jogo values 
(null, ${partida}, 
CASE 
when ${vencedor} = 1 then "Máquina"
else "Você"
end, 
now(), ${id_usuario});`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
