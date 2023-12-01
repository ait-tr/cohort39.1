# Lesson 06

# Тип данных Boolean

## Введение в Логические Операции и Тип Boolean в Java

### Краткий Обзор Темы и Её Важности в Программировании

Логические операции являются фундаментальной частью программирования. Они используются для создания условий и принятия
решений в коде, что является основой для управления потоком выполнения программ. Понимание и правильное использование
логических операций критически важно для разработки эффективных и надежных программ.

### Тип Boolean

#### Объяснение Типа Данных Boolean

- Тип данных `boolean` в Java представляет одно из двух возможных значений: `true` или `false`.
- Этот тип данных часто используется для управления условными выражениями и циклами.

#### Примеры Объявления и Использования Переменных Boolean

- `boolean isJavaFun = true;`
- `boolean isFishTasty = false;`

### Логические Высказывания

#### Определение Логического Высказывания

- Логическое высказывание — это выражение, результатом которого является значение типа `boolean`.
- Примеры логических высказываний включают сравнения, такие как `x > y`, `x == y` и `x != y`.

#### Примеры Простых Логических Высказываний

```java
int x=5;
        boolean result=x>3; // true
        boolean anotherResult=x==10; // false
```

Логические высказывания и операции с типом `boolean` являются ключевыми компонентами для создания интерактивных и
отзывчивых программ, обеспечивающих ветвление и повторение на основе определенных условий.

### Операторы Сравнения в Java

Операторы сравнения играют ключевую роль в программировании, позволяя сравнивать различные значения и переменные. Они
используются для формирования логических выражений, которые возвращают значение типа `boolean`.

### Обзор Операторов Сравнения

В Java есть несколько основных операторов сравнения:

- `==` (равно): Проверяет, равны ли два значения.
- `!=` (не равно): Проверяет, не равны ли два значения.
- `>` (больше): Проверяет, больше ли одно значение другого.
- `<` (меньше): Проверяет, меньше ли одно значение другого.
- `>=` (больше или равно): Проверяет, больше ли одно значение другого или равно ему.
- `<=` (меньше или равно): Проверяет, меньше ли одно значение другого или равно ему.

### Примеры Использования Каждого Оператора

- **Равно (`==`):**

```java
  int x=5;
        int y=5;
        boolean isEqual=x==y; // true
```

**Не равно (!=):**

```java
int a=5;
        int b=3;
        boolean isNotEqual=a!=b; // true
```

**Больше (>):**

```java
int ageJohn=30;
        int ageAnna=25;
        boolean isJohnOlder=ageJohn>ageAnna; // true
```

**Меньше (<):**

```java
double price1=19.99;
        double price2=29.99;
        boolean isCheaper=price1<price2; // true
```

**Больше или равно (>=):**

```java
int score=75;
        int passingScore=75;
        boolean isPass=score>=passingScore; // true
```

**Меньше или равно (<=):**

```java
    int temperature=32;
        int freezingPoint=32;
        boolean isFreezing=temperature<=freezingPoint; // true
```

Использование этих операторов позволяет создавать условные конструкции и управлять логикой программы на основе сравнения
значений.

## Логические Операции в Java

Логические операторы используются для формирования сложных логических выражений, которые возвращают значение
типа `boolean`. Они играют важную роль в создании условий и управлении потоком выполнения программы.

### Обзор Логических Операторов

- `&&` (И): Оператор "и" возвращает `true`, если оба операнда истинны.
- `||` (ИЛИ): Оператор "или" возвращает `true`, если хотя бы один из операндов истинен.
- `!` (НЕ): Унарный оператор, который инвертирует значение операнда (из `true` в `false` и наоборот).
- `^` (XOR): "отрицающее или". Возвращает `true`, если операнды различаются (один истинен, другой ложен).

<details style="margin-left: 20px;">
<summary><strong><em> Бытовая аналогия: (нажмите на треугольник, чтобы развернуть текст)</em></strong></summary>

### Аналогия: Планирование Похода в Кино

Представьте, что вы планируете поход в кино и принимаете решение на основе нескольких условий:

**Операция НЕ (`!`):** Предположим, что вы не хотите идти в кино, если идет дождь. Если `isRaining` означает, что на улице
дождь, то `!isRaining` будет означать, что вы пойдете в кино только если на улице не идет дождь.

`isRaining = true; // на улице дождь`  
`!isRaining = false; // вы не пойдете в кино`  

**Операция XOR (^):** Вы хотите идти в кино либо с другом, либо с сестрой, но не с обоими вместе. Если `withFriend` означает,
что вы идете с другом, а `withSister` - что с сестрой, то `withFriend ^ withSister` будет означать, что вы пойдете в кино
только с одним из них.

`withFriend = true; withSister = false; // вы идете в кино с другом`  
`withFriend = false; withSister = true; // вы идете в кино с сестрой`  
`withFriend = true; withSister = true; // вы не идете в кино`  

**Операция ИЛИ (||)**: Вы решите идти в кино, если у вас есть свободное время или если идет ваш любимый фильм. Если
`haveFreeTime` означает, что у вас есть свободное время, а `favoriteMovieIsPlaying` - что идет ваш любимый фильм, то
`haveFreeTime || favoriteMovieIsPlaying` означает, что любое из этих условий достаточно, чтобы вы пошли в кино.

`haveFreeTime = false; favoriteMovieIsPlaying = true; // вы идете в кино`  

**Операция И (&&):** Вы решите идти в кино, только если у вас есть свободное время и погода хорошая. Если `haveFreeTime`
означает наличие свободного времени, а `goodWeather` - хорошую погоду, то `haveFreeTime && goodWeather` означает, что оба
условия должны быть выполнены, чтобы вы пошли в кино.

`haveFreeTime = true; goodWeather = true; // вы идете в кино` 
</details>

### Примеры Использования Логических Операторов

- **И (&&):**
```java
  boolean isAdult = true;
  boolean hasTicket = true;
  boolean canEnter = isAdult && hasTicket; // true
```

**ИЛИ (||):**
```java
boolean isWeekend = true;
boolean isHoliday = false;
boolean canRelax = isWeekend || isHoliday; // true
```

**НЕ (!):**
```java
boolean isRaining = false;
boolean canGoOutside = !isRaining; // true
```

**XOR (^):**
```java
boolean hasPassport = true;
boolean hasVisa = false;
boolean canTravel = hasPassport ^ hasVisa; // true
```

## Приоритет Логических Операций в Java

Понимание приоритета логических операций важно для правильного интерпретирования и создания сложных логических выражений. В Java, как и в большинстве языков программирования, определен порядок, в котором выполняются логические операции.

### Порядок Выполнения Операций

1. **Сначала выполняются унарные операторы**, такие как логическое отрицание (`!`).
2. **Затем идут операторы сравнения**: `==`, `!=`, `>`, `<`, `>=`, `<=`.
3. **Выполняется логическое исключающее ИЛИ (XOR) (`^`)**.
4. **После этого - логические операторы "И" (`&&`) и "ИЛИ" (`||`)**.
    - Оператор "И" (`&&`) имеет более высокий приоритет, чем "ИЛИ" (`||`).  
   
> `boolean b1 = false && true ^ true; // expected false` - сначала выполнится `XOR`, вернет `false`,   
>   после чего выполнится `&&` и вернет `false`. В случае, если бы приоритет у `&&` был выше, то мы получили бы `true` в итоговом выражении
> `boolean b2 = false || true ^ true; // expected false` - сначала выполнится `XOR`, вернет `false`,   
>   после чего выполнится `||` и вернет `false`. В случае, если бы приоритет у `||` был выше, то мы получили бы `true` в итоговом выражении

### Важность Скобок

- Использование скобок может изменить порядок выполнения операций.
- Скобки используются для явного указания порядка выполнения операций в сложных выражениях.

### Примеры

- **Пример без скобок:**
```java
  boolean result = true || false && false; // true, так как && выполняется перед ||
```


**Пример с использованием скобок:**
```java
boolean resultWithBrackets = (true || false) && false; // false, скобки изменяют порядок выполнения
```

**Сложное выражение:**
```java
boolean complexExpression = (false || true) && !(true && false); // true
```