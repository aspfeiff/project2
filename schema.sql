DROP DATABASE IF EXISTS food_db;

CREATE DATABASE food_db;

USE food_db;

DROP TABLE stock;

CREATE TABLE stock(
	id INT NOT NULL auto_increment,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL DEFAULT "food",
    pantry BOOLEAN NOT NULL DEFAULT 0,
    spice BOOLEAN NOT NULL DEFAULT 0,
    fridge BOOLEAN NOT NULL DEFAULT 0,
    include BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

SELECT * FROM stock;
