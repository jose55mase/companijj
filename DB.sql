CREATE TABLE clients (
  id BIGINT NOT NULL,
  name varchar(100) DEFAULT NULL,
  last_name varchar(100) DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  user_name varchar(100) DEFAULT NULL,
  user_password varchar(100) DEFAULT NULL,
  phone varchar(100) DEFAULT NULL,
  city varchar(100) DEFAULT NULL,
  department varchar(100) DEFAULT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE products (
  id BIGINT NOT NULL,
  name varchar(100) DEFAULT NULL,
  price int DEFAULT NULL,
  category varchar(100) DEFAULT NULL,
  description varchar(5000)  DEFAULT NULL,
  IMAGE varchar(7000) DEFAULT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE `purchases` (
  id int NOT NULL,
  date timestamp NULL DEFAULT NULL,
  products BIGINT NOT NULL,
  clients BIGINT NOT NULL,
  PRIMARY KEY (id),
  KEY clients (clients),
  KEY products (products),
  CONSTRAINT purchases_ibfk_1 FOREIGN KEY (clients) REFERENCES clients (id),
  CONSTRAINT purchases_ibfk_2 FOREIGN KEY (products) REFERENCES products (id)
)
