## Задание 1

Вы работаете в фирме по изготовлению и установке заборов.
В вашей компании есть возможность заказать заборы на участки круглой, прямоугольной и многоугольной формы. 
Разработайте программу, в которой можно будет посчитать цену забора на участок.
Програма должна спрашивать форму участка, размеры участка в метрах и цену за метр забора.

Для выполнения задания создать абстрактный класс Shape, в нем описать абстрактный метод getPerimeter

Создать классы Прямоугольник, Круг и Правильный многоугольник, которые наследуют этот класс.

Справка: Правильный многоугольник - такая фигура, у которой неопределенное
количество сторон, но все эти стороны равны между собой, и сложены таким образом, что все углы
в многоугольнике равны.

В Main написать саму программу, которая при запуске спрашивает все что нужно, создает нужный объект и считает
периметр участка. Расчёт цены должен также происходить в Main.
Введение формы участка реализовать одним из двух способов:
1 Считывать название формы как строку
2 Вывести в консоль пронумерованный список доступных форм, и считывать номер формы (на подобии меню)

## Задание 2 (продолжение)

Ваша компания по какой-то причине захотела, чтобы в программе можно было изменить размер участка, периметр
которого вы считаете, после факта подсчета, и потом пересчитать еще раз.

Скопировать код из предыдущего задания.
Разработать интерфейс Resizable, который опишет метод resize(double coefficient).
Изменить класс Shape так, чтобы он реализовывал этот интерфейс.
Реализовать добавленный интерфейсом метод в неабстрактных классах-наследниках класса Shape.
Этот метод должен пропорционально увеличивать размер фигуры.
Например, если этот метод вызвать на прямоугольнике со сторонами 4 и 5, передав 2, стороны должны стать 8 и 10

В основной программе, после расчета цены забора, спросить, хочет ли пользователь пропорционально изменить размер участка,
и если да, предоставить возможность ввести коэффициент и пересчитать сумму.

## Задание 3

Взять пример 1 из классной работы и создать новый класс который будет реализовывать оба интерфейса.
Продемонстрировать работу класса в main
