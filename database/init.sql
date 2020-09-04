-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "account_type"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL
);

CREATE TABLE "users"
(
    "id" SERIAL PRIMARY KEY,
    "password" VARCHAR (1000) NOT NULL,
    "account_type_id" INT REFERENCES "account_type",
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "email" VARCHAR(80),
    "telephone" VARCHAR(80)
);

CREATE TABLE "programs"
(
    "id" SERIAL PRIMARY KEY,
    "title" varchar(100) NOT NULL,
    "image" varchar(150)
);

CREATE TABLE "schools"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150),
    "address" VARCHAR(80),
    "city" VARCHAR(80),
    "state" VARCHAR(20),
    "zip" int
);

CREATE TABLE "learning_material"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" int REFERENCES "users",
    "program_id" int REFERENCES "programs",
    "title" varchar(100) NOT NULL,
    "image" varchar(150),
    "content" text
);

CREATE TABLE "images"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" int REFERENCES "users",
    "program_id" int REFERENCES "programs",
    "image_url" varchar(150),
    "upload_date" DATE
);


CREATE TABLE "scheduled_classes"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" int REFERENCES "users",
    "program_id" int REFERENCES "programs",
    "school_id" int REFERENCES "schools",
    "size" int,
    "image_id" int REFERENCES "images",
    "completion_date" DATE
);



