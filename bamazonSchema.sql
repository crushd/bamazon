-- Create a MySQL Database called `bamazon`.
DROP DATABASE bamazon;
CREATE DATABASE bamazon;

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