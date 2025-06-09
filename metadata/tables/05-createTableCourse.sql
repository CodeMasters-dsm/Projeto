create table if not exists course (
	id_co integer not null,
	pr_id integer not null,
	de_id integer not null,
	name_co VARCHAR(100),
	semester_co integer not null,
	primary key (id_co),
	foreign key (pr_id) references professor (id_pr),
    foreign key (de_id) references degree (id_de)
);