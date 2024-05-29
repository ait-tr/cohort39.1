## Диаграммы с занятия - [ссылка](https://drawsql.app/teams/gleb-team-1/diagrams/vet-clinic)

```sql
-- Создаем БД
CREATE DATABASE lesson_02;

-- Создаем 2 таблицы verification и users
CREATE TABLE verification
(
	id serial PRIMARY KEY,
  phone varchar(30)
);

CREATE TABLE users
(
id serial PRIMARY KEY,
  first_name varchar(30),
  last_name varchar(40),
  login varchar(40),
  password varchar(30),
  -- verification_id - является внешним ключем связывающим таблицы users и verification
  verification_id int REFERENCES verification (id)
);

-- Заполнение таблиц
INSERT INTO
verification (phone)
VALUES
('+49123123123'),
('+49234234234'),
('+49345345345'),
('+49456456456'),
('+49567567567');

INSERT INTO
users (first_name,last_name, login, password, verification_id)
VALUES
('John', 'Smith', 'login1@vetclinic.com', 'qwe123', 2),
('John', 'Johnson', 'login2@vetclinic.com', 'qwe1234', 3),
('Jack', 'Vorobey', 'login3@vetclinic.com', 'qwe125', 1),
('Mike', 'Madson', 'login4@vetclinic.com', 'qwe123123', 5),
('Tatsiana', 'Ivanova', 'login5@vetclinic.com', 'qwe123123123', 4);


-- Команда, которая выведет в консоль данные из 2 таблиц: first_name, last_name и phone
-- В JOIN условие пиештся через ON, в котором мы связываем id в verification с verification_id в users
SELECT
users.first_name,
users.last_name,
verification.phone
FROM
verification
JOIN
users
ON
verification.id = users.verification_id
WHERE users.first_name = 'John';
```
