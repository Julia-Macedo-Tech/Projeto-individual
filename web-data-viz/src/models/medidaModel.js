var database = require("../database/config");

function buscarUltimasMedidas(id_usuario, limite_linhas) {

    var instrucaoSql = `SELECT 
        pontuacao_matematica as pontuacao_matematica, 
        pontuacao_serie as pontuacao_serie,
                        cadastrado_em,
                        DATE_FORMAT(cadastrado_em,'%H:%i:%s') as cadastrado_em
                    FROM quiz
                    WHERE fk_usuario = ${id_usuario}
                    ORDER BY id_quiz DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id_usuario) {

    var instrucaoSql = `SELECT 
        pontuacao_matematica as pontuacao_matematica, 
        pontuacao_serie as pontuacao_serie,
                        DATE_FORMAT(cadastrado_em,'%H:%i:%s') as cadastrado_em, 
                        fk_usuario 
                        FROM quiz WHERE fk_usuario = ${id_usuario} 
                    ORDER BY id_quiz DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
