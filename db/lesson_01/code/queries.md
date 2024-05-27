```sql
-- Создаем пользователя
CREATE USER user_name WITH PASSWORD 'password';

-- Создаем базу данных
CREATE DATABASE lesson_01 OWNER glebzaveryaev;

-- Даем права доступа пользователю
GRANT ALL PRIVILEGES ON DATABASE lesson_01 TO glebzaveryaev;

-- Удаление БД
DROP DATABASE lesson_01;

-- Создание таблиц

CREATE TABLE students (
	id serial PRIMARY KEY,
  first_name varchar(30),
  last_name varchar(30),
  age smallint,
  course char(20)
);

-- Удаление таблиц
DROP TABLE students;

-- Добавление строк в таблицу
INSERT INTO students
(first_name, last_name, age, course)
VALUES
('John', 'Johnson', 30, 'QA'),
('Ray', 'Osbourne', 45, 'Frontend'),
('Max', 'Hitch', 24, 'UI/UX');

-- Получение всех данных из таблицы
SELECT * FROM students;

-- Получение конкретных данных из таблицы
SELECT first_name, age FROM students;

-- Получение данных по условию
SELECT * FROM students WHERE course = 'QA';

-- Сортировка данных в таблице по age
SELECT * FROM students ORDER BY age;

-- Обновление данных п условию
UPDATE students SET course = 'QA' WHERE age < 31;

-- Удаление данных из таблицы по условию
DELETE FROM students WHERE course = 'Frontend';
```