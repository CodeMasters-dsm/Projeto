create table if not exists room (
	id_ro integer not null,
	number_ro integer not null,
	level_ro integer not null,
	description_ro VARCHAR(255),
	primary key (id_ro)
);