DROP DATABASE IF EXISTS food_db;

CREATE DATABASE food_db;

USE food_db;


CREATE TABLE stock(
	id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    pantry BOOLEAN NOT NULL DEFAULT 0,
    spice BOOLEAN NOT NULL DEFAULT 0,
    fridge BOOLEAN NOT NULL DEFAULT 0,
    include BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO stock(item_name, category, pantry, spice, fridge, include)
VALUES ("Eggs", "dairy", 0, 0, 1, 0);

INSERT INTO stock(item_name, category, pantry, spice, fridge, include)
VALUES ("Rice", "grain",  1, 0, 0, 0);

INSERT INTO stock(item_name, category, pantry, spice, fridge, include)
VALUES ("Paprika", "Spice",  0, 1, 0, 0);

SELECT * FROM stock;
