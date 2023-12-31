CREATE TABLE IF NOT EXISTS "workspaces" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid NOT NULL,
	"title" text NOT NULL,
	"icon_id" text,
	"content" text,
	"in_trash" text,
	"logo" text,
	"banner_url" text,
	"created_at" timestamp with time zone
);
