```sql
-- CREATE DATABASE lesson_03;

CREATE TABLE farmer
(
id serial PRIMARY KEY,
name VARCHAR(30),
age SMALLINT,
height SMALLINT,
number_of_children SMALLINT,
country VARCHAR(30)
);

INSERT INTO
farmer (name, age, height, number_of_children, country)
VALUES
('Johanes', 47, 180, 5, 'Germany'),
('Pierre', 40, 175, 2, 'France'),
('Gerard', 60, 184, 4, 'Germany'),
('Juan', 35, 164, 1, 'Ecuador'),
('Marek', 30, 186, 0, 'Poland'),
('Ivan', 50, 190, NULL, NULL);

-- 1. Работа с командами PostgreSQL

SELECT * FROM farmer WHERE age != 60;

-- LIKE и ILIKE - выборка по условию

-- Все пользователи имя которых начинается на j без учета регистра
SELECT * FROM farmer WHERE name ILIKE('j%');

SELECT * FROM farmer WHERE name LIKE('%are%');

SELECT * FROM farmer WHERE country = 'Germany' AND age = 47;

-- 1 способ
-- SELECT * FROM farmer WHERE country != 'Germany' AND country != 'Poland';

-- 2 способ
SELECT * FROM farmer WHERE country NOT IN ('Germany', 'Poland');

-- BETWEEN - указывается диапазон
SELECT * FROM farmer WHERE height BETWEEN 170 AND 185;

SELECT * FROM farmer WHERE number_of_children = 0 OR number_of_children IS NULL;

-- AVG(столбец по которому нудно считать) - выводит среднее арифмитическое
SELECT AVG(number_of_children) FROM farmer;
SELECT AVG(age) FROM farmer;

-- MAX(столбец по которому нужно считать) - максимально большое значение среди всех значений в переданном столбце
SELECT MAX(age) FROM farmer;
-- MIN(столбец по которому нужно считать) - минимальное значение среди всех значений в переданном столбце
SELECT country, MIN(age) FROM farmer WHERE country IS NOT NULL AND country = 'Germany' GROUP BY country;

-- COUNT(id) - общее кол-во записей

SELECT COUNT(id) FROM farmer WHERE country = 'Germany';
SELECT country, COUNT(id) FROM farmer GROUP BY country HAVING COUNT(id) >=2;


---------------------------------------------СОЗДАНИЕ ТАБЛИЦ С ОГРАНИЧЕНИЯМИ-------------------------------------------------------
CREATE TABLE clothes
(
id serial PRIMARY KEY,
 title VARCHAR(40),
  -- CHECK(передаем условие по ограничению)
  -- CONSTRANT после этой команды пишем кастомное сообщение об ошибке
 price INT CONSTRAINT price_error_should_not_be_less_than_0 CHECK(price > 0)
);

INSERT INTO clothes
(title, price)
VALUES
('jeans', 20),
('outerwear', -20);

CREATE TABLE dresses
(
	id serial PRIMARY KEY,
  title VARCHAR(40) CONSTRAINT dress_name_should_be_unique UNIQUE,
  price INT CONSTRAINT price_error_should_not_be_less_than_0 CHECK(price > 0),
  discounted_price INT CONSTRAINT discounted_price_error_should_not_be_less_than_0 CHECK(discounted_price > 0),
  CONSTRAINT price_should_not_be_less_than_discounted_price CHECK(price > discounted_price)
)

INSERT INTO dresses
(title,price, discounted_price)
VALUES
('dress1', 3, 2),
('dress2', 3, 2);

CREATE TABLE truck
(
id serial PRIMARY KEY,
brand VARCHAR(30),
farmer_id int REFERENCES farmer(id) ON DELETE CASCADE
);

INSERT INTO truck
(brand, farmer_id)
VALUES
('Space X', 6),
('MAZ', 4);

DELETE FROM farmer WHERE id = 6;

```
