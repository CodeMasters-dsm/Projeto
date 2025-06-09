create table if not exists room_has_course (
	ro_id integer not null,
	co_id integer not null,
	begin_rc TIME,
	end_rc TIME,
	day_of_week_rc VARCHAR(20),
	foreign key (ro_id) references room (id_ro),
	foreign key (co_id) references course (id_co)
);
