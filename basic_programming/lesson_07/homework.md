## Домашнее Задание: Программа Решений для Выходного Дня

### Задача 1: Планирование Активностей на Выходной
Вы пишете программу для автоматического планирования активностей на выходной день. Программа должна задать пользователю серию вопросов и на основе его ответов предложить план на день.

#### Инструкции:
1. Используйте `Scanner` для считывания ответов пользователя из консоли.
2. Задайте пользователю следующие вопросы:
    - "Хорошая ли сегодня погода? (да/нет)"
    - "Хотите ли вы провести время на природе? (да/нет)"
    - "Интересуетесь ли вы спортом? (да/нет)"
3. Используйте последовательность операторов `if` для определения активности:
    - Если погода хорошая и пользователь хочет провести время на природе, предложите пикник.
    - Если погода плохая, но пользователь интересуется спортом, предложите посетить спортивный зал.
    - Если погода плохая и пользователь не интересуется спортом, предложите поход в кино.
4. Выведите предложенный план в консоль.

#### Пример Вывода Программы:
>Введите 'да' или 'нет' на следующие вопросы.  
>Хорошая ли сегодня погода? `да`  
>Хотите ли вы провести время на природе? `да`  
>Интересуетесь ли вы спортом? `нет`  
>На основе ваших ответов мы рекомендуем вам устроить пикник!  


### Задача 2: Классификация Треугольника По Сторонам

Напишите программу, которая определяет тип треугольника на основе длин его сторон. Программа должна сначала проверить,
может ли треугольник существовать с заданными длинами сторон, и затем классифицировать его как равносторонний,
равнобедренный или разносторонний.

#### Условия Существования Треугольника:
Треугольник может существовать, если сумма длин любых двух сторон больше длины третьей стороны.

#### Инструкции:
1. Используйте `Scanner` для считывания длин сторон треугольника из консоли.
2. Проверьте условия существования треугольника (стороны больше 0, сумма двух сторон всегда превышает размер третьей).
3. Если треугольник существует, определите его тип:
    - **Равносторонний:** Все три стороны равны.
    - **Равнобедренный:** Ровно две стороны равны.
    - **Разносторонний:** Все стороны различны.
4. Выведите в консоль тип треугольника или сообщение о том, что такой треугольник существовать не может.
5. Если треугольник не может существовать, то ваше приложение должно лишь дать знать об этом. Любой другой
(дополнительный) вывод в консоль приравнивается к неправильному решению (используйте вложенные блоки)

#### Пример Ввода и Вывода Программы:
>Введите длины сторон треугольника. 
> Введите длину стороны A: `5` 
> Введите длину стороны B: `5` 
> Введите длину стороны C: `5` 
> Треугольник с введенными сторонами является равносторонним.

>Введите длины сторон треугольника.
> Введите длину стороны A: `5`
> Введите длину стороны B: `5`
> Введите длину стороны C: `35`
> Треугольник с введенными сторонами не может существовать.

