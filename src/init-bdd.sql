CREATE TABLE "role" (
id SERIAL PRIMARY KEY,
role VARCHAR(20) NOT NULL
);


CREATE TABLE "user" ( 
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
firstname VARCHAR(255) NOT NULL,
pseudo VARCHAR(255) NOT NULL,
mail VARCHAR(255) NOT NULL UNIQUE,
phone CHAR(10) NULL,
password CHAR(60) NOT NULL,
date_in DATE,
date_out DATE,
role_id INT NOT NULL,
CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE picture (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
type VARCHAR(10) NOT NULL,
path VARCHAR(255) NOT NULL
);

CREATE TABLE store (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
phone VARCHAR(255) NOT NULL,
number VARCHAR(255),
street VARCHAR(255),
city VARCHAR(150),
zip CHAR(5),
web VARCHAR(255),
map VARCHAR(255),
description VARCHAR(255) NULL,
user_id INT NOT null, 
picture_id INT null, 
CONSTRAINT fk_store_user FOREIGN KEY (user_id) REFERENCES "user"(id),
CONSTRAINT fk_store_picture FOREIGN KEY (picture_id) REFERENCES picture(id)
);

CREATE TABLE comment (
id SERIAL PRIMARY KEY,
user_id INT NOT null, 
store_id INT NOT null, 
note INT null,
CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES "user"(id),
CONSTRAINT fk_comment_store FOREIGN KEY (store_id) REFERENCES store(id)
);


CREATE TABLE category (
id SERIAL PRIMARY KEY,
category VARCHAR(150) NOT NULL
);


CREATE TABLE appartenance (
store_id INT NOT null, 
category_id INT NOT null, 
CONSTRAINT fk_appartenance_store FOREIGN KEY (store_id) REFERENCES store(id),
CONSTRAINT fk_appartenance_category FOREIGN KEY (category_id) REFERENCES category(id)
);