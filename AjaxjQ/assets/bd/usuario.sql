drop database if exists bduser;

create database if not exists bduser;
use bduser;

create table user(
	id_user int auto_increment,
	name varchar(25),
	primary key (id_user)
);

insert user values 
	(null, 'Juan David'),
	(null, 'John Tapias'),
	(null, 'Alejandro Yalí'),
	(null, 'Felipe Henao');