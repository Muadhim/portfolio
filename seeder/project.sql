-- public.project definition

-- Drop table

-- DROP TABLE public.project;

CREATE TABLE public.project (
	id int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	created_at timestamptz NOT NULL DEFAULT now(),
	title text NULL,
	"desc" text NULL,
	link text NULL,
	image text NULL,
	"type" text NULL,
	CONSTRAINT project_pkey PRIMARY KEY (id)
);