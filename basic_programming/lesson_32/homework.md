# Задача 1.

Метод RGB неполный. Завершите его так, чтобы передача десятичных значений RGB приводила к возврату шестнадцатеричного
представления. Допустимые десятичные значения для RGB: 0–255. Любые значения, выходящие за пределы этого диапазона,
должны быть округлены до ближайшего допустимого значения. 

Примечание. 
Ваш ответ всегда должен состоять из 6 символов,
сокращение из 3 здесь не подойдет. 

Примеры (ввод -> вывод):

```markdown
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
```

```java
    public static String rgb(int r, int g, int b) {
        
    }
```