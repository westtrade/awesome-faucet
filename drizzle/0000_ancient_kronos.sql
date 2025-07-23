CREATE TABLE "faucet_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"url" varchar(512) NOT NULL,
	"daily_limit" varchar(128),
	"claim_interval_minutes" integer,
	"supported_cryptos" text NOT NULL,
	"reviewed" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "faucets" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"url" varchar(512) NOT NULL,
	"daily_limit" varchar(128),
	"claim_interval_minutes" integer,
	"supported_cryptos" text NOT NULL,
	"is_active" integer DEFAULT 1,
	"rating" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"age" integer
);
