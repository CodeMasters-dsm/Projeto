create table if not exists users (
	id_us integer not null,
	name_us VARCHAR(100),
	mail_us VARCHAR(100),
	password_us VARCHAR(100),
	primary key (id_us)
);