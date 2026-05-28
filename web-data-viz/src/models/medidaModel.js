var database = require("../database/config");

function buscarUltimasMedidas(id_usuario, limite_linhas) {

    var instrucaoSql = `SELECT 
        pontuacao_matematica as pontuacao_matematica, 
        pontuacao_serie as pontuacao_serie,
        tipo,
        (SELECT count(*) FROM quiz WHERE fk_usuario = 1) as total_tentativas,
                        DATE_FORMAT(cadastrado_em, '%d/%m/%Y %H:%i:%s') as cadastrado_em
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
        tipo,
        (SELECT count(*) FROM quiz WHERE fk_usuario = 1) as total_tentativas,
                        DATE_FORMAT(cadastrado_em, '%d/%m/%Y %H:%i:%s') as cadastrado_em,
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
