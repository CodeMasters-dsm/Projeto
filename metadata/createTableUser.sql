// Importa o pacote pg e desestrutura a propriedade Pool
const {Pool} = require("pg");
const dotenv = require("dotenv");
dotenv.config();

// Configura o pool de conexão, passando um objeto de configuração 
// contendo as informações necessárias para se conectar ao BD do PostgreSQL
const pool = new Pool({
  user: process.env.BDUSUARIO,
  host: process.env.BDHOST,
  database: process.env.BDNOME,
  password: process.env.BDSENHA,
  port: process.env.BDPORTA
});

// Exporta a variável pool
module.exports = { pool };

create table if not exists users (
	id_us integer not null,
	name_us VARCHAR(100),
	mail_us VARCHAR(100),
	password_us VARCHAR(100),
	primary key (id_us)
);

create table if not exists degree (
	id_de integer not null,
	name_de VARCHAR(50),
	period_de VARCHAR(20),
	primary key (id_de)
);

create table if not exists professor (
	id_pr integer not null,
	name_pr VARCHAR(100),
	primary key (id_pr)
);

create table if not exists room (
	id_ro integer not null,
	number_ro integer not null,
	level_ro integer not null,
	description_ro VARCHAR(255),
	primary key (id_ro)
);

create table if not exists course (
	id_co integer,
	pr_id integer,
	name_co VARCHAR(50),
	semester_co integer not null,
	primary key (id_co),
	foreign key (pr_id) references professor (id_pr)
);

create table if not exists room_has_course (
	ro_id integer,
	co_id integer,
	begin_rc TIME,
	end_rc TIME,
	day_of_week_rc VARCHAR(20),
	foreign key (ro_id) references room (id_ro),
	foreign key (co_id) references course (id_co)
);
