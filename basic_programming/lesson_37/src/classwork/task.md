## Задача: Система Фильтрации Пользователей

### Сценарий

Вы работаете над backend частью веб-приложения для управления персоналом в компании. Ваша задача — разработать систему
фильтрации списка сотрудников по различным критериям, таким как возраст, должность и зарплата. Это поможет HR и
менеджерам быстро находить сотрудников для назначения на проекты, повышений или обучения.

### Задача

Необходимо реализовать класс `Employee` с полями:

- Имя (String)
- Возраст (int)
- Должность (String)
- Зарплата (double)

А также класс `EmployeeFilter` для фильтрации списка сотрудников с использованием функциональных интерфейсов
Java (`Predicate<T>`, `Function<T, R>`, `Consumer<T>`).

### Требования

1. **Фильтрация по возрасту:** Метод принимает список сотрудников и возраст, возвращая список сотрудников старше
   указанного возраста.
2. **Фильтрация по должности:** Метод принимает список сотрудников и должность, возвращая список сотрудников данной
   должности.
3. **Преобразование в список имен:** Метод принимает список сотрудников, преобразуя его в список имен сотрудников.
4. **Вывод информации о сотрудниках:** Метод принимает список сотрудников и выводит информацию о каждом сотруднике.

### Пример использования

Используя реализованные методы, вы сможете фильтровать и обрабатывать список сотрудников по различным требованиям,
например, находить всех сотрудников старше 30 лет или всех сотрудников на должности "Менеджер проекта".

Эта задача даст вам возможность попрактиковаться в использовании функциональных интерфейсов и лямбда-выражений в Java, а
также показать, как их можно применять для решения реальных задач.
