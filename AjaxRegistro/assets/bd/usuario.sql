drop database if exists bduser;

create database if not exists bduser;
use bduser;

create table register(
	id int auto_increment, 
	name varchar(50),
	password varchar(30),
	primary key (id)
);

insert register values 
	(null, 'Juan David', 'juan1'),
	(null, 'John Tapias', 'john1');