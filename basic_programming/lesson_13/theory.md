# Lesson 13

## Введение в Методы в Java

Методы в Java являются одним из фундаментальных инструментов в программировании, позволяющих структурировать и
организовывать код.

### Определение Метода

> - **Что такое Метод:** В Java метод представляет собой блок кода, который выполняет определенную задачу. Он
    определяется в классе и может быть вызван многократно, как внутри класса, так и из других классов.
> - **Структура Метода:** Метод состоит из имени, списка параметров, тела метода и возвращаемого типа (или `void`, если
    метод ничего не возвращает).

### Зачем Нужны Методы

1. **Упрощение Кода:**
    - Методы позволяют разбивать сложные задачи на более мелкие и управляемые части, упрощая тем самым код.

2. **Повторное Использование:**
    - Один и тот же метод может быть вызван несколько раз с разными данными, что способствует повторному использованию
      кода и снижению избыточности.

3. **Улучшение Читаемости:**
    - Хорошо структурированные методы с понятными именами улучшают читаемость кода, делая его более понятным и удобным
      для восприятия.

### Пример Простого Метода

```java
public void add(int a,int b){
        System.out.println(a+b);
        }
```

В этом примере `add` - это метод, который принимает два параметра `a` и `b` и возвращает их сумму. Такой метод может быть
вызван многократно с разными значениями для `a` и `b`.

> <details style="margin-left: 20px;">
> <summary><strong><em> Пример, уже регенный вами в дз: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> Было:
> ```java
> public class TemperatureConverter {
>   public static void main(String[] args) {
>       double celsius = 100;
>       double fahrenheit = 212;
>
>       double celsiusToFahrenheit = (celsius * 9 / 5) + 32;
>       double fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
>       System.out.println(celsius + " °C = " + celsiusToFahrenheit + " °F");
>       System.out.println(fahrenheit + " °F = " + fahrenheitToCelsius + " °C");
>   }
> }
> ```
>
>  Стало:
> 
> ```java
>
> public class TemperatureConverter {
>
>     public static void main(String[] args) {
>         double celsius = 100;
>         double fahrenheit = 212;
>
>         System.out.println(celsius + " °C = " + celsiusToFahrenheit(celsius) + " °F");
>         System.out.println(fahrenheit + " °F = " + fahrenheitToCelsius(fahrenheit) + " °C");
>     }
>
>     // Конвертирует температуру из Цельсия в Фаренгейты
>     public static void celsiusToFahrenheit(double celsius) {
>         System.out.println(celsius + " °C = " + ((celsius * 9 / 5) + 32)  + " °F");
>     }
>
>     // Конвертирует температуру из Фаренгейтов в Цельсии
>     public static void fahrenheitToCelsius(double fahrenheit) {
>         System.out.println(fahrenheit + " °F = " +  (fahrenheit - 32) * 5 / 9  + " °C" );
>     }
> }
> ```
> </details>

> <details style="margin-left: 20px;">
> <summary><strong><em> Бытовая Аналогия для Методов в Java: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
> 
> ## Аналогия 1
> 
> Методы в программировании можно сравнить с рецептами в кулинарии.
> 
> ### Сходство с Кулинарным Рецептом
> 
> > - **Четкие Инструкции:** Так же, как кулинарный рецепт содержит четкие инструкции о том, как приготовить блюдо, метод в программировании содержит инструкции для выполнения определенной задачи.
> > - **Повторное Использование:** Как рецепт может использоваться для приготовления блюда многократно, так и метод может быть вызван многократно в программе.
> > - **Передача Ингредиентов (Параметров):** В рецепте ингредиенты адаптируются в зависимости от желаемого количества блюда, аналогично параметрам, передаваемым в метод.
> > - **Результат (Возвращаемое Значение):** Как результатом следования рецепта является готовое блюдо, так результатом выполнения метода может быть возвращаемое значение.
>
> ##  Аналогия 2
>
> Методы в программировании можно сравнить с машиностроительным конвейером.
>
> ### Сходство с Конвейером
>
> > - **Повторяемые Действия:** Так же, как конвейер выполняет одинаковые действия для создания продукта, методы в программировании представляют собой набор инструкций, которые выполняются для достижения определенной задачи.
> > - **Эффективность и Стандартизация:** Конвейер обеспечивает эффективное и стандартное производство, аналогично методам, обеспечивающим стандартный подход к решению задач и повышающим эффективность кода.
> > - **Передача Материалов (Параметров):** Как на конвейер подаются различные материалы для обработки, так в методы передаются параметры, которые затем обрабатываются инструкциями метода.
> > - **Гибкость в Производстве:** Так же, как конвейер может адаптироваться для создания различных продуктов, методы могут быть универсальными и адаптироваться к различным задачам, благодаря передаче разных параметров.
>
> Эта аналогия помогает понять, как методы обеспечивают стандартизированный и эффективный способ решения задач в программировании, аналогично работе конвейера в производстве.
> </details>

> <details style="margin-left: 20px;">
> <summary><strong><em> Пример декомпозиции кода: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> ```java
> public class MainExample {
>     public static void main(String[] args) {
>         // Первое действие
>         for (int i = 0; i < 5; i++) {
>             System.out.println("Повторение: " + i);
>         }
>
>         // Второе действие
>         for (int i = 0; i < 5; i++) {
>             System.out.println("Повторение: " + i);
>         }
>
>         // Третье действие
>         for (int i = 0; i < 5; i++) {
>             System.out.println("Повторение: " + i);
>         }
>     }
> }
> 
> ```
>
> ```java
> public class MethodExample {
>     public static void main(String[] args) {
>         printRepetitions();
>         printRepetitions();
>         printRepetitions();
>     }
>
>     public static void printRepetitions() {
>         for (int i = 0; i < 5; i++) {
>             System.out.println("Повторение: " + i);
>         }
>     }
> }
>
> ```
> </details>

## Основы Методов в Java 

### Синтаксис Объявления Метода

> - **Модификаторы Доступа:** Определяют область видимости метода, например, `public`, `private`, `protected`.
> - **Тип Возвращаемого Значения:** Указывает на тип данных, который метод возвращает. Если метод ничего не возвращает, используется ключевое слово `void`.
> - **Имя Метода:** Следует правилам именования в Java и должно отражать действие, выполняемое методом.
> - **Параметры:** Список входных параметров метода, заключенных в скобки. Метод может не иметь параметров.

### Примеры Простых Методов

```java
public int add(int a,int b){
        System.out.println(a+b);
        }

public void printMessage() {
    System.out.println("Это простой метод");
}
```

Первый метод `add` печатает сумму двух чисел, второй метод `printMessage` печатает сообщение и не возвращает значение.

### Понятие Сигнатуры Метода
 - **Сигнатура Метода:** Уникальная комбинация имени метода и списка его параметров. Не включает возвращаемый тип и модификаторы доступа.
 - **Значение:** Сигнатура используется для определения уникальности методов в классе, особенно при перегрузке методов.

### Возвращаемые Значения и Void Методы
 - **Возвращаемые Значения:** Методы могут возвращать данные любого типа, определенного в их сигнатуре.
 - **Void Методы:** Методы с ключевым словом `void` не возвращают значения. Используются для выполнения действий, 
например, печати сообщения.

> <details style="margin-left: 20px;">
> <summary><strong><em> Бытовая Аналогия: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> ## Бытовая Аналогия 1. 
>
> ### Методы, Возвращающие Значение
>
> > - **Похоже на Покупку в Магазине:** Метод, возвращающий значение, можно сравнить с походом в магазин. Когда вы идете в магазин за конкретным товаром, вы ожидаете вернуться с этим товаром. Так же и метод возвращает результат (товар) после выполнения своих действий (похода в магазин).
>
> ### Void Методы
>
> > - **Похоже на Выполнение Упражнений:** Void метод можно сравнить с выполнением упражнений. Когда вы делаете упражнения, вы не ожидаете получить что-то в руки после их выполнения. Вместо этого, цель упражнений - изменить состояние вашего тела (улучшить здоровье, физическую форму). Аналогично, `void` методы выполняют действия, но не возвращают результат.
>
> Эти аналогии помогают понять разницу между методами, возвращающими значение, и `void` методами: первые возвращают результат, в то время как последние выполняют действия без возвращения конкретного значения.
> 
> ## Бытовая Аналогия 2.
>
> Методы в программировании можно сравнить с различными типами помощников: домашними помощниками и курьерами.
>
> ### Void Методы как Домашние Помощники
>
> > - **Выполнение Работы Без Конкретного "Продукта":** Void методы можно сравнить с домашними помощниками или ассистентами. Такой помощник выполняет работу (например, уборку, готовку), но не приносит вам конкретный физический объект в результате своей работы. Это подобно `void` методам, которые выполняют задачи, но не возвращают никакого значения.
>
> ### Методы с Возвращаемым Значением как Курьеры
>
> > - **Приносят Конкретные "Вещи":** Методы, возвращающие значение, можно сравнить с курьерами или сотрудниками, которые приносят вам что-то конкретное (например, пакет или отчет). Как курьер приносит заказанный товар, так и метод возвращает конкретное значение, результат своей работы.
>
> Эта аналогия помогает понять различие между `void` методами, выполняющими действия без возвращения результата, и методами с возвращаемым значением, предоставляющими конкретный результат их работы.
> </details>

> <details style="margin-left: 20px;">
> <summary><strong><em> Пример кода: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> ```java
> public class ArrayOperations {
>
>     public static void main(String[] args) {
>         int[] numbers = {1, 2, 3, 4, 5};
>
>         // Вызов void метода
>         printSum(numbers);
>
>         // Вызов не-void метода и вывод результата
>         int sum = calculateSum(numbers);
>         System.out.println("Сумма (возвращаемое значение): " + sum);
>     }
>
>     // Void метод для печати суммы элементов массива
>     public static void printSum(int[] array) {
>         int sum = 0;
>         for (int num : array) {
>             sum += num;
>         }
>         System.out.println("Сумма (void метод): " + sum);
>     }
>
>     // Метод, возвращающий сумму элементов массива
>     public static int calculateSum(int[] array) {
>         int sum = 0;
>         for (int num : array) {
>             sum += num;
>         }
>         return sum;
>     }
> }
>
> ```
> </details>

### Передача Аргументов в Методы
 - **Значение По Значению:** В Java все примитивные типы передаются по значению. Это означает, что копия значения передается в метод.
 - **Значение По Ссылке:** Объекты передаются по ссылке, что позволяет методам влиять на состояние переданных объектов.

> <details style="margin-left: 20px;">
> <summary><strong><em> Пример кода: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> ```java
> public class ArrayModificationExample {
>
>     public static void main(String[] args) {
>         int[] numbers = {1, 2, 3, 4, 5};
>
>         System.out.println("Массив до изменения: " + java.util.Arrays.toString(numbers));
>
>         // Вызов метода, изменяющего массив
>         modifyArray(numbers);
>
>         System.out.println("Массив после изменения: " + java.util.Arrays.toString(numbers));
>     }
>
>     // Void метод, который изменяет массив
>     public static void modifyArray(int[] array) {
>         // Пример изменения: увеличиваем каждый элемент массива на 10
>         for (int i = 0; i < array.length; i++) {
>             array[i] += 10;
>         }
>    }
> }
>
> ```
> </details>

> <details style="margin-left: 20px;">
> <summary><strong><em> Бытовая Аналогия: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> ## Аналогия 1. 
>
> Аргументы, передаваемые в методы, можно сравнить с ингредиентами рецепта или материалами для ремонта.
>
> ### Ингредиенты Рецепта как Примитивные Типы (Передача по Значению)
> > - **Одноразовое Использование:** Представьте, что вы передаете кулинару ингредиенты для приготовления блюда. Как
      только ингредиенты добавлены в блюдо, они не могут быть возвращены в исходном виде. Это похоже на передачу
      примитивных типов данных в метод: копия значения передается, и изменения не затрагивают исходный аргумент.
> ### Материалы для Ремонта как Объекты (Передача по Ссылке)
> > - **Изменение Состояния:** Теперь представьте, что вы даете ремонтнику инструменты для работы. Ремонтник использует
      эти инструменты, возможно, изнашивая их или меняя их состояние. Это похоже на передачу объектов в методы в
      программировании. Передается ссылка на объект, и любые изменения в методе отражаются на самом объекте.
> 
> Эта аналогия помогает понять разницу между передачей аргументов по значению и по ссылке в программировании: в первом
> случае передается копия значения (как ингредиенты), во втором - доступ к самому объекту (как инструменты).
>
> ## Аналогия 2. 
> Аргументы в методах можно сравнить с заказом в ресторане или с документами, предоставляемыми для обработки.
>
> ### Заказ в Ресторане как Примитивные Типы (Передача по Значению)
> > - **Индивидуальное Исполнение:** Представьте, что вы делаете заказ в ресторане, например, стейк средней прожарки.
      Заказ - это ваше значение, которое передается повару (методу). Повар готовит стейк согласно заказу, но сам заказ
      не изменяется. Это похоже на передачу примитивных типов данных в метод: метод получает значение (заказ), но
      оригинальный заказ остаётся неизменным.
>
> ### Документы для Обработки как Объекты (Передача по Ссылке)
>  - **Изменение Содержимого:** Теперь представьте, что вы предоставляете бухгалтеру пачку документов для отчетности.
      Бухгалтер (метод) работает с этими документами, изменяя их содержимое или дополняя. После обработки содержимое
      документов изменилось. Это аналогия передачи объектов в методы программирования: метод работает непосредственно с
      объектом (документами), изменяя его состояние.
>
> Эта аналогия помогает понять разницу между передачей аргументов по значению и по ссылке: в первом случае метод
> работает с копией данных (заказ в ресторане), во втором - непосредственно с объектом (документы для обработки).
>
> </details>

> <details style="margin-left: 20px;">
> <summary><strong><em> Пример декомпозиции: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>
>
> Было:
>  ```java
> public class MainClass {
>     public static void main(String[] args) {
>         // Вывод приветствия
>         System.out.println("Привет, мир!");
>
>         // Печать числа 5 в квадрате
>         int number = 5;
>         int square = number * number;
>         System.out.println("Квадрат числа " + number + " равен " + square);
>
>         // Перевод строки в верхний регистр
>         String str = "Привет!";
>         String upperStr = str.toUpperCase();
>         System.out.println(upperStr);
>     }
> }
> ```
>
>  Стало:
>
>  ```java
> public class MainClass {
>
>     public static void main(String[] args) {
>         printGreeting();
>         printSquare(5);
>         printUpperCase("Привет!");
>     }
>
>     // Метод без аргументов
>    public static void printGreeting() {
>         System.out.println("Привет, мир!");
>     }
>
>    // Метод с аргументами
>     public static void printSquare(int number) {
>         int square = number * number;
>         System.out.println("Квадрат числа " + number + " равен " + square);
>     }
>
>     // Метод с аргументами
>     public static void printUpperCase(String str) {
>         String upperStr = str.toUpperCase();
>         System.out.println(upperStr);
>     }
> }
>  ```
> </details>

В Java аргументы методов являются ключевым компонентом для передачи данных в методы и взаимодействия с ними. Понимание, как работают аргументы, важно для эффективного использования методов.

#### Использование Аргументов в Методе

 - **Передача Аргументов:** При вызове метода, аргументы передаются методу в том порядке, в котором они указаны в определении метода.
 - **Внутри Метода:** Аргументы используются в методе как локальные переменные. Их можно читать и (если они не являются примитивными типами или не объявлены как `final`) изменять.

#### Примеры Методов с Аргументами
 - **Метод с Одним Аргументом:**
   ```java
   public void printMessage(String message) {
       System.out.println(message);
   }
   ```

  Метод принимает один аргумент `message` и выводит его.


 - **Метод с Несколькими Аргументами Разного Типа:**
   ```java
   public void printDetails(String name, int age) {
      System.out.println("Name: " + name + ", Age: " + age);
   }
   ```
  Метод принимает два аргумента: строку `name` и целое число `age`.


#### Методы с Несколькими Аргументами Одного Типа

- **Пример с Тремя Аргументами Одного Типа:**
  ```java
   public void printCoordinates(int x, int y, int z) {
       System.out.println("Координаты: X=" + x + ", Y=" + y + ", Z=" + z);
   }
   ```
   В этом примере метод `printCoordinates` принимает три целочисленных аргумента. Каждый аргумент представляет собой координату в трехмерном пространстве. Метод затем выводит эти координаты.

 - **Работа с Аргументами:**
   - Каждый аргумент внутри метода используется как отдельная переменная.
   - Метод может выполнять различные операции с этими аргументами, например, вычислять их сумму или среднее значение.

#### Важные Моменты

 - **Ясность Именования:** При работе с несколькими аргументами одного типа важно давать им понятные и описательные имена, чтобы код был читаемым.
 - **Порядок Аргументов:** Порядок, в котором аргументы перечислены в определении метода, имеет значение. При вызове метода аргументы должны быть переданы в том же порядке.

<details style="margin-left: 20px;">
<summary><strong><em> Пример использования нескольких аргументов: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>

```java
public class DistanceCalculator {

    public static void main(String[] args) {
        // кооржинаты точки 1
        double[] point1 = {1.0, 2.0, 3.0};
        // кооржинаты точки 1
        double[] point2 = {4.0, 5.0, 6.0};

        calculateDistance(point1, point2);
    }

    // Метод для вычисления расстояния между двумя точками в 3D пространстве
    public static void calculateDistance(double[] point1, double[] point2) {
        if (point1.length != 3 || point2.length != 3) {
            System.err.println("Каждая точка должна иметь три координаты.");
            // останавливаем выполнение метода
            return;
        }

        double distance =  Math.sqrt(Math.pow(point2[0] - point1[0], 2) +
                         Math.pow(point2[1] - point1[1], 2) +
                         Math.pow(point2[2] - point1[2], 2));
        System.out.println("Расстояние между точками: " + distance);
    }
}

```
</details>

#### Заключение

Понимание работы аргументов в методах позволяет более гибко управлять данными в программе. Методы с разными аргументами увеличивают многозадачность и универсальность кода, обеспечивая возможность его повторного использования в различных контекстах.




## Параметры и Перегрузка Методов в Java 

### Работа с Параметрами

**Обязательные и Необязательные Аргументы:** В Java все параметры, указанные в определении метода, являются
обязательными. Для реализации необязательных параметров используются перегруженные методы или методы с переменным числом
аргументов (varargs).

### Перегрузка Методов

 - **Определение:** Перегрузка методов (Method Overloading) в Java - это возможность создавать несколько методов с одинаковым именем, но с разными параметрами (разное количество или типы параметров).
 - **Примеры:**
>   ```java
>   public void print(String message) { /*...*/ }
>   public void print(String message, int times) { /*...*/ }
>   ```
> 
Оба метода называются `print`, но имеют разные параметры. 
**Правила:**
 - Перегруженные методы должны отличаться количеством или типом параметров.
 - Недопустимо иметь перегруженные методы, отличающиеся только возвращаемым типом.

### Важность Перегрузки Методов

 - **Гибкость:** Перегрузка методов позволяет использовать одно и то же имя метода для различных вариаций его выполнения, что упрощает чтение и понимание кода.
 - **Удобство:** Улучшает пользовательский опыт при работе с классами и объектами, предоставляя разные способы для достижения одной цели.
 - **Читаемость и Организация Кода:** Помогает организовать код более логично, группируя похожие действия под одним именем метода.
