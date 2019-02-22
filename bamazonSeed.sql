DROP DATABASE bamazon;
CREATE DATABASE bamazon;

-- Create a MySQL Database called `bamazon`.
USE bamazon;

-- Then create a Table inside of that database called `products`.
CREATE TABLE products (
  -- item_id (unique id for each product)
  item_id integer(11) auto_increment,
  -- product_name (Name of product)
  product_name varchar(50) not null,
  -- department_name
  department_name varchar(50) not null,
  -- price (cost to customer)
  price integer(10) not null,
  -- stock_quantity (how much of the product is available in stores)
  stock_quantity integer(10) not null,
  PRIMARY KEY (item_id)
);

  -- Populate this database with 10 different products.
  INSERT INTO products (product_name,department_name,price,stock_quantity)
  VALUES ("Toshiba Fire TV Edition","Electronics",99,35),
         ("Ultrasonic Humidifier","Home",30,15),
         ("4K Action Camera","Cameras",40,75),
         ("24 Color Modelling Clay","Arts and Crafts",16,100),
         ("Google Home","Electronics",60,50),
         ("Ace of Base","Music",20,1000),
         ("Magnetic Alphabet","Learning and Education",9,7),
         ("Bulk Paper Towels","Home",30,100),
         ("Salad Dressing Shaker Bottle","Kitchen",100,100),
         ("Batteries","Electronics",13,490)


