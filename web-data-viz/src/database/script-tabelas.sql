-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database big_bang;
use big_bang;

create table usuario (
id_usuario int primary key auto_increment,
nome varchar(100) unique not null,
senha varchar(100) not null);

insert into usuario(nome, senha) value
("julia sa", "julia2122");

create table quiz (
id_quiz int primary key auto_increment,
pontuacao_matematica int not null,
pontuacao_serie int not null,
fk_usuario int, 
foreign key(fk_usuario) references usuario(id_usuario));

INSERT INTO quiz (pontuacao_matematica, pontuacao_serie, fk_usuario) VALUES 
(5, 10, 1),
(7, 10, 1),
(9, 8, 1),
(6, 5, 1),
(10, 9, 1);