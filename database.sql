CREATE TABLE "listings" (
"id" serial primary key,
"cost" integer,
"sqft" integer,
"type" varchar(120),
"city" varchar(120),
"image_path" varchar(120)
);