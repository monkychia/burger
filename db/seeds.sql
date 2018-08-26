USE `burgers_db`;

INSERT INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Ham Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Veggie Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Tuna Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Cheese Burger", true);

SELECT * FROM `burgers`;