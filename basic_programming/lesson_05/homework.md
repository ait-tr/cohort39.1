## Домашнее Задание по Java

### Задача

Ваша задача - дополнить предоставленный код таким образом, чтобы он считывал число, введенное пользователем, и выводил
его представление в различных системах счисления (двоичная, восьмеричная, шестнадцатеричная).

Для корректного решения данного домашнего задания воспользуйтей методами `toHexString()`, `toOctalString()` и 
`toBinaryString()` класса `Integer`. Для этого проведите **самостоятельный** поиск информации и примеры использования.
Ваш код не должен выводить в консоль ничего, кроме просьбы ввести число и самих чисел в различном их представлении.

### Исходный Код

```java
public class Homework {
    public static void main(String[] args) {
        // создайте сканнер, который будет просить пользователя ввести число типа int, 
        // запишите это число в переменную num
        
        int num = 0; // замените 0 на сканнер, считывающий число

        
        numberToHexString(num);
        numberToOctaString(num);
        numberToBinaryString(num);
    }
    
    // в данном задании вы должны получить число и распечать строку, которая представляет его шестнадцатиричное представление:
    private static void numberToHexString(int num) {
        // напишите ваш код ниже:
        
    }

    // в данном задании вы должны получить число и распечать строку, которая представляет его восьмеричное представление:
    private static void numberToOctaString(int num) {
        // напишите ваш код ниже:

    }

    // в данном задании вы должны получить число и распечать строку, которая представляет его двоичное представление:
    private static void numberToBinaryString(int num) {
        // напишите ваш код ниже:

    }
}
```