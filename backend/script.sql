CREATE DATABASE IF NOT EXISTS api_produto;
USE api_produto;

CREATE TABLE produto(
  pro_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  pro_descricao VARCHAR(50) NULL,
  pro_preco DECIMAL (12,2) NOT NULL DEFAULT 0.00,
  pro_validade DATE NOT NULL
);

INSERT INTO `produto` (`pro_id`, `pro_descricao`, `pro_preco`, `pro_validade`) VALUES
(1, 'Batata', '2.39', '2021-06-28'),
(2, 'Cebola', '1.19', '2021-07-15'),
(3, 'Arroz', '21.75', '2021-09-11'),
(4, 'Feijão', '8.29', '2021-10-14'),
(5, 'Abacate', '9.68', '2021-12-24'),
(6, 'Cenoura', '2.15', '2021-05-24'),
(7, 'Tomate', '3.98', '2021-05-01');

CREATE TABLE users(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(90) NOT NULL,
  senha VARCHAR(90) NOT NULL
)

INSER INTO `users` (`usuario`, `senha`) VALUES
(1, 'marcelo', '123')