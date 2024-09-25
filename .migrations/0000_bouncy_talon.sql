CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"username" text NOT NULL,
	"password" text,
	"created_at" timestamp,
	CONSTRAINT "username_unique" UNIQUE("username")
);
