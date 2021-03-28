CREATE TABLE `clients` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `department` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `description` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `IMAGE` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `purchases` (
  `id` int NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `products` int NOT NULL,
  `clients` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clients` (`clients`),
  KEY `products` (`products`),
  CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`clients`) REFERENCES `clients` (`id`),
  CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CH


CREATE TABLE `purchases` (
  `id` int NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `products` int NOT NULL,
  `clients` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clients` (`clients`),
  KEY `products` (`products`),
  CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`clients`) REFERENCES `clients` (`id`),
  CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
