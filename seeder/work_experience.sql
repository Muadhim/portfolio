-- public.work_experience definition

-- Drop table

-- DROP TABLE public.work_experience;

CREATE TABLE public.work_experience (
	id int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	created_at timestamptz NOT NULL DEFAULT now(),
	image text NULL,
	title text NULL,
	"desc" text NULL,
	CONSTRAINT work_experiance_pkey PRIMARY KEY (id)
);